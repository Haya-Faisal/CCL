//this is for the background
let xArray = [];
let yArray = [];
let xcolor = [];
let xcolor2 = [];
let xsize = [];
let xpos = [];
let initalSizeOfArray = 120;

//these are for mandy
let pathangle = 20;
let sadMandyPathRadius = 0;
let mandy_angle = 0;
let mandy_loop_speed_happy = 0.0003;
let mandy_loop_speed_sad = 0.0008;
let radius = 22;
let number = 22;

//this is for the invisible circle
let pathCircleX = 0;
let pathCircleY = 0;
let pathCircle2X = 0;
let pathCircle2Y = 0;
let originx = 200;
let originy = 200;

//this changes the happy background color
let darkBackground;

let sadcircletrans;
let happycircletrans;
let sadcircletransrand = 0;

//these are the puddle transparency
let puddletransparent = 300;
let lastPuddletrans = 10;

let isMandyHappy = true;
let isMandyHappyAgain = false;

//this is for the thermometer
let barheight;
let initheight = 100;
let thermBars = initheight;

//this counts the time. used for happy/sad ending
let msSinceDry;
let timeSinceDry;
let msSincemandyreturn;
let timeSinceMandyfed = 0;
//this calculates the time since it was fed
let timenow;

//these are for the food and water
let showleaf = true;
let foodfedMandy = false;

let leafx = 52;
let leafy = 40;

let leafcount = 0;

let showwater = true;
let waterdragged = false;
let showwatertext = true;

let waterx = 30;
let watery = 60;

let foodNotFed;

let fedfood = false;
let givenwater = false;

function setup() {
  let cnv = createCanvas(800, 500);
  cnv.parent("p5-canvas-container") 
  for (let i = 0; i < initalSizeOfArray; i++) {
    xArray[i] = random(0, width);
    yArray[i] = random(0, height);
    xcolor[i] = random(0, 10);
    xcolor2[i] = random(0, 10);
    xsize[i] = random(5, 30);
    xpos[i] = random(10, 30);
  }
}

function draw() {
  //calling happy mandy and then sad mandy
  if (isMandyHappy == true) {
    happyBackground();
    happyMandy();
  } else {
    sadBackground();
    sadMandy();
  }
  //for the thermometer
  thermometer();
  //this takes back to happy mandy after it if fed/given water
  if (isMandyHappyAgain == true) {
    returnHappyBackground();
    returnHappymandy();
  }
}

function happyBackground() {
  //turning the background warmer-red
  darkBackground = map(thermBars, initheight, 0, 235, 250);
  background(darkBackground, 240, 227);
  //deciding the pattern of the background
  for (let i = 0; i < xArray.length; i++) {
    let x = xArray[i];
    let y = yArray[i];
    //reduces transparency of circles
    happycircletrans = map(thermBars, initheight, 0, 255, 40);
    let shapecolor = xcolor[i];
    let shapecolor2 = xcolor2[i];
    let shapesize = xsize[i];
    let xposfirstcir = xpos[i];
    if (shapecolor < 7) {
      noStroke();
      fill(143, 158, 139, happycircletrans);
    } else {
      noFill();
      strokeWeight(2);
      stroke(134, 108, 90, happycircletrans);
    }
    circle(x, y, shapesize);

    if (shapecolor2 > 6) {
      noStroke();
      fill(134, 108, 90, happycircletrans);
    } else {
      noFill();
      strokeWeight(2);
      stroke(143, 158, 139, happycircletrans);
    }
    circle(x, y, shapesize);
  }
}

function sadBackground() {
  happyback = false;

  background(250, 240, 227);
  for (let i = 0; i < xArray.length; i++) {
    let x = xArray[i];
    let y = yArray[i];
    //increases transoarency of circles
    sadcircletrans = map(sadcircletransrand, 0, 200, 0, 255);
    //console.log(msSinceDry)
    let shapecolor = xcolor[i];
    let shapecolor2 = xcolor2[i];
    let shapesize = xsize[i];
    let xposfirstcir = xpos[i];
    if (shapecolor < 7) {
      noStroke();
      fill(0, 0, 0, sadcircletrans);
    } else {
      noFill();
      stroke(0, 0, 0, sadcircletrans);
    }
    circle(x, y, shapesize);

    if (shapecolor2 > 6) {
      noFill();
      stroke(0, 0, 0, sadcircletrans);
    } else {
      noStroke();
      fill(0, 0, 0, sadcircletrans);
    }
    circle(x, y, shapesize);
  }
  sadcircletransrand += 1;
}

function happyMandy() {
  //this is the puddle
  puddletransparent = map(thermBars, initheight, 0, 255, 0);
  noStroke();
  fill(0, 71, 81, puddletransparent);
  circle(400, 250, 400);
  //decide mandy's color
  xcolor = random(0, 400);
  ycolor = random(0, 400);
  let r = map(xcolor, 0, width, 255, 0);
  let g = 0;
  let b = map(ycolor, 0, height, 0, 255);

  //this is the invisible circle
  fill(255);
  stroke(0);
  //circle(pathCircleX, pathCircleY, 5)
  pathCircleX = pathCircleX + random(-5, 5); 
  pathCircleY = pathCircleY + random(-5, 5); 
  //i tried lerping it :(
  // pathCircle2X=lerp(pathCircleX,pathCircle2X,0.005)
  // pathCircle2Y=lerp(pathCircleY,pathCircle2Y,0.005)
  pathCircleX = constrain(pathCircleX, width / 2 - 100, width / 2 + 100);
  pathCircleY = constrain(pathCircleY, height / 2 - 50, height / 2 + 50);
  //circle(pathCircleX, pathCircleY, 5)

  
  sadMandyPathRadius = dist(pathCircleX, pathCircleY, 400, 250);
  pathangle = angleBetweenTwoPoints(400, 250, pathCircleX, pathCircleY);

  //this is mandy's details
  let circleX = pathCircleX + cos(mandy_angle) * 20;
  let circleY = pathCircleY + sin(mandy_angle) * 20;
  //its colors and shape
  stroke(r, g, b);
  strokeWeight(1);
  noFill();
  circle(circleX, circleY, radius);
  //to make it move
  number = number + 1;
  radius = number % 10;
  let noiseValue = noise(frameCount * 0.001);
  mandy_loop_speed = map(noiseValue, 0, 1, 0, 0.1);
  mandy_angle = mandy_angle + mandy_loop_speed;
}

function thermometer() {
  let xpos = 750;
  //increasing the temperature
  if (thermBars > 0) {
    stroke(143, 59, 27);
    strokeWeight(0.25);
    fill(143, 59, 27);
    barheight = initheight - thermBars;
    rect(xpos, thermBars + 10, 30, barheight);
    thermBars -= 0.22;
    //barheight+=9
  }
  //when it reaches certain level, the puddle evaporates
  if (thermBars <= 0 && isMandyHappy == true) {
    isMandyHappy = false;
    msSinceDry = millis();
    timeSinceMandyfed = msSinceDry;
  }
}

function sadMandy() {
  //sad Mandy's puddle
  noStroke();
  fill(252, 243, 230, 117);
  circle(400, 250, 440);

  //Mandy's colors
  xcolor = random(0, 400);
  ycolor = random(0, 400);
  let r = map(xcolor, 0, width, 255, 0);
  let g = 0;
  let b = map(ycolor, 0, height, 0, 255);

  pathCircleX = width / 2 + cos(pathangle) * sadMandyPathRadius;
  pathCircleY = height / 2 + sin(pathangle) * sadMandyPathRadius;
  pathangle += 0.004;
  //invisible circle
  fill(255);
  noStroke();
  //circle(pathCircleX, pathCircleY, 5)

  //mandy's path
  let circleX = pathCircleX + cos(mandy_angle) * 20;
  let circleY = pathCircleY + sin(mandy_angle) * 20;
  //mandy
  stroke(r, g, b);
  noFill();
  circle(circleX, circleY, radius);
  number = number + 1;
  radius = number % 10;
  let noiseValue = noise(frameCount * 0.0001);
  mandy_loop_speed = map(noiseValue, 0, 1, 0, 0.05);
  mandy_angle = mandy_angle + mandy_loop_speed;
  //-------------------------------------------
  //this counts the time since mandy was fed

  if (mouseIsPressed == true) {
    timeSinceMandyfed = millis();
  }
  timenow = millis() - timeSinceMandyfed;

  //console.log(timenow, timeSinceDry)
  //shows mandy's food
  if (showleaf == true) {
    noStroke();
    fill(143, 158, 139);
    text("feed me", 10, 40);
    text("🥬", leafx, leafy);
  }
  //will run when leaf is pressed
  if (
    mouseIsPressed == true &&
    mouseX >= 40 &&
    mouseX <= 60 &&
    mouseY >= 20 &&
    mouseY <= 40
  ) {
    leafcount += 1;
    foodfedMandy = true;
  }
  //will feed mandy
  if (foodfedMandy == true) {
    text("🥬", circleX, circleY);
    foodfedMandy = false;
  }
  //shows the count of how many times mandy has eaten
  noStroke();
  fill(143, 158, 139);
  text("food fed:" + leafcount, 30, 20);

  //--------------------------------------------
  if (showwater == true) {
    text("💧", waterx, watery);

    if (showwatertext == true) {
      noStroke();
      fill(143, 158, 139);
      text("drag     to me", 8.5, 60);
    }
  }
  if (
    mouseIsPressed == true &&
    mouseX >= 20 &&
    mouseX <= 40 &&
    mouseY >= 50 &&
    mouseY <= 70
  ) {
    waterdragged = true;
    showwatertext = false;
  }
  if (waterdragged == true) {
    waterx = mouseX;
    watery = mouseY;
    if (mouseX >= 350 && mouseX <= 450 && mouseY >= 200 && mouseY <= 300) {
      showwater = false;
      givenwater = true;
    }
  }
  //---------------------------------------
  timeSinceDry = millis() - msSinceDry;

  if (givenwater == true) {
    isMandyHappyagain = true;
    returnHappyBackground();
    returnHappymandy();
  } else {
    if (
      (timeSinceDry > 12000 && timenow > 3000) ||
      (timeSinceDry > 24000 && givenwater == false && foodfedMandy == false)
    ) {
      sadEnd();
    }
  }
}

function returnHappyBackground() {
  if (lastPuddletrans == 13) {
    msSincemandyreturn = millis();
  }
//this brings back to the first happy background setting
  //isMandyHappyagain=true
  background(252, 243, 227);
  for (let i = 0; i < xArray.length; i++) {
    let x = xArray[i];
    let y = yArray[i];
    let shapecolor = xcolor[i];
    let shapecolor2 = xcolor2[i];
    let shapesize = xsize[i];
    let xposfirstcir = xpos[i];
    if (shapecolor < 7) {
      noStroke();
      fill(143, 158, 139);
    } else {
      noFill();
      strokeWeight(2);
      stroke(134, 108, 90);
    }
    circle(x, y, shapesize);

    if (shapecolor2 > 6) {
      noStroke();
      fill(134, 108, 90);
    } else {
      noFill();
      strokeWeight(2);
      stroke(143, 158, 139);
    }
    circle(x, y, shapesize);
  }
}

function returnHappymandy() {
  //this is the puddle
  noStroke();
  fill(0, 71, 81, lastPuddletrans);
  circle(400, 250, 400);
  lastPuddletrans += 3;
//it shows mandy's happy movements
  //decide mandy's color
  xcolor = random(0, 400);
  ycolor = random(0, 400);
  let r = map(xcolor, 0, width, 255, 0);
  let g = 0;
  let b = map(ycolor, 0, height, 0, 255);

  //this is the invisible circle
  fill(255);
  stroke(0);
  //circle(pathCircleX, pathCircleY, 5)
  pathCircleX = pathCircleX + random(-5, 5);
  pathCircleY = pathCircleY + random(-5, 5);
  pathCircleX = constrain(pathCircleX, width / 2 - 100, width / 2 + 100);
  pathCircleY = constrain(pathCircleY, height / 2 - 50, height / 2 + 50);

  //this is mandy's details
  let circleX = pathCircleX + sin(mandy_angle) * 20;
  let circleY = pathCircleY + sin(mandy_angle) * 20;
  //its colors and shape
  stroke(r, g, b);
  strokeWeight(1);
  noFill();
  circle(circleX, circleY, radius);
  //to make it move
  number = number + 1;
  radius = number % 10;
  let noiseValue = noise(frameCount * 0.001);
  mandy_loop_speed = map(noiseValue, 0, 1, 0, 0.001);
  mandy_angle = mandy_angle + mandy_loop_speed;

  let timeSinceMandyreturn = millis() - msSincemandyreturn;
  if (timeSinceMandyreturn > 6000) {
    happyEnd();
  }
}

function happyEnd() {
  //this comes when mandy comes back to its happy environmenst and stays there for a bit
  background(252, 243, 227);
  //strokeWeight(2)
  stroke(76, 5, 107);
  fill(76, 5, 107);
  text("Thank you for helping mandy survive. You win!!", 300, 250);
}

function sadEnd() {
  //this is when mandy is not fed or is not bought back to happy environment for 2 mins
  background(143, 59, 27);
  stroke(0);
  fill(0);
  text("Mandy is dead 😭", 380, 250);
  text("It was either not fed or lived without a puddle for 2 mins.",320,270)
}

// from https://stackoverflow.com/a/9614122
function angleBetweenTwoPoints(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = atan2(dy, dx); // range (-PI, PI]
  // theta *= 180 / PI; // rads to degs, range (-180, 180]
  if (theta < 0) theta = 2 * PI + theta; // range [0, 360)
  return theta;
}
