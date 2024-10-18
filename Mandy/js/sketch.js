//this is for the background
let xArray = [];
let yArray = [];
let xcolor=[];
let xcolor2=[];
let xsize=[];
let xpos=[];
let initalSizeOfArray = 120;

//these are for mandy
let pathangle = 20;
let mandy_angle = 0;
let mandy_loop_speed_happy = 0.0003;
let mandy_loop_speed_sad = 0.0008;
let radius = 22;
let number = 22;

//this is for the invisible circle
let pathCircleX = 0;
let pathCircleY = 0;
let originx = 200;
let originy = 200;

let puddletransparent=300
let lastPuddletrans=10

let isMandyHappy=true;
let isMandyHappyAgain=false

let thermBars=60;
let barheight=0

let msSinceDry;
let msSincemandyreturn;

let showleaf=true
let leafdragged=false

let leafx=30
let leafy=30

let showwater=true
let waterdragged=false

let waterx=30
let watery=60

let foodNotFed;

let fedfood=false
let givenwater =false

function setup() {
  let cnv = createCanvas(800, 500);
  cnv.parent("p5-canvas-container")

  for (let i = 0; i < initalSizeOfArray; i++) {
    xArray[i] = random(0, width);
    yArray[i] = random(0, height);
    xcolor[i] = random(0, 10);
    xcolor2[i] = random(0, 10);
    xsize[i] = random(5, 30);
    xpos[i]=random(10,30)
  }
}

function draw() {
  if(isMandyHappy==true){
    happyBackground()
  }
  
  if(isMandyHappy==true){
    happyMandy()
  }
  
  if(givenwater==true){
    returnHappymandy()
  }
}

function happyBackground(){
  background(252, 243, 227);
  for (let i = 0; i < xArray.length; i++) {
    let x = xArray[i];
    let y = yArray[i];
    let shapecolor = xcolor[i];
    let shapecolor2 = xcolor2[i];
    let shapesize = xsize[i];
    let xposfirstcir=xpos[i]
    if (shapecolor < 7) {
      noStroke();
      fill(143, 158, 139);
    } else {
      noFill();
      strokeWeight(2)
      stroke(134, 108, 90);
    }
    circle(x, y, shapesize);
    
     if (shapecolor2 > 6) {
       noStroke();
       fill(134, 108, 90);
     } else {
       noFill();
       strokeWeight(2)
       stroke(143, 158, 139);
     }
     circle(x, y, shapesize);
  }
}

function sadBackground(){
  happyback = false;
  msSinceDry = millis();
  background(252, 243, 227);
    for (let i = 0; i < xArray.length; i++) {
    let x = xArray[i];
    let y = yArray[i];
    let shapecolor = xcolor[i];
    let shapecolor2 = xcolor2[i];
    let shapesize = xsize[i];
    let xposfirstcir=xpos[i]
    if (shapecolor < 7) {
      noStroke();
      fill(0);
     }else {
      noFill();
      //strokeWeight(2)
      stroke(0);
    }
    circle(x, y, shapesize);
    
     if (shapecolor2 > 6) {
       noFill();
       //strokeWeight(2)
       stroke(0);
     } else {
       noStroke();
       fill(0);
     }
     circle(x, y, shapesize);
  }
  sadMandy()
}

function happyMandy(){
  //this is the puddle
  noStroke();
  fill(0, 71, 81,puddletransparent);
  circle(400, 250, 400);
  puddletransparent-=1

  //decide mandy's color
  xcolor=random(0,400)
  ycolor=random(0,400)
  let r = map(xcolor, 0, width, 255, 0);
  let g = 0;
  let b = map(ycolor, 0, height, 0, 255);
  
 //this is the invisible circle
  fill(255)
  stroke(0)
  //circle(pathCircleX, pathCircleY, 5)
  pathCircleX =pathCircleX+ random(-5, 5);
  pathCircleY = pathCircleY+random(-5, 5);
  pathCircleX=constrain(pathCircleX,width/2-100,width/2+100)
  pathCircleY=constrain(pathCircleY,height/2-50,height/2+50)
  
  //this is mandy's details
  let circleX = pathCircleX + sin(mandy_angle) * 20;
  let circleY = pathCircleY + sin(mandy_angle) * 20;
  //its colors and shape
  stroke(r,g,b)
  strokeWeight(1)
  noFill()
  circle(circleX, circleY, radius)
  //to make it move
  number=number+1
  radius=number%10
  let noiseValue=noise(frameCount*0.001)
  mandy_loop_speed = map(noiseValue,0,1,0,0.001)
  mandy_angle = mandy_angle + mandy_loop_speed;
  
 thermometer();
}

function thermometer() {
  //frameRate(2)
  let xpos = 750;
  
  if (thermBars > 10) {
    stroke(143, 59, 27);
    strokeWeight(0.25);
    fill(143, 59, 27);
    rect(xpos, thermBars, 30,9);
    thermBars -= 0.24;
    barheight+=9
  } else{
    sadBackground()
  }
}

function sadMandy(){
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
  
  //invisible circle path
  let pathCircleX = 400 + sin(pathangle) * 150;
  let pathCircleY = 250 + cos(pathangle) * 150;
  pathangle += 0.002;
  //invisible circle
  fill(255);
  noStroke();
  //circle(pathCircleX, pathCircleY, 5)

  //mandy's path
  let circleX = pathCircleX + sin(mandy_angle) * 20;
  let circleY = pathCircleY + cos(mandy_angle) * 20;
  //mandy
  stroke(r, g, b);
  noFill();
  circle(circleX, circleY, radius);
  number = number + 1;
  radius = number % 10;
  let noiseValue = noise(frameCount * 0.0001);
  mandy_loop_speed = map(noiseValue, 0, 1, 0, 0.005);
  mandy_angle = mandy_angle + mandy_loop_speed; 
  
  // leafx=originleafx
  // leafy=originleafx
  if (showleaf==true){
    text("🥬",leafx,leafy)
  }
  
  if (mouseIsPressed == true &&mouseX >= 20 &&mouseX <= 40&&mouseY >= 20 && mouseY <= 40){
    leafdragged=true
  }
  if (leafdragged==true){
    leafx=mouseX
    leafy=mouseY
    if(mouseX >= 350 &&mouseX <= 450&&mouseY >= 200 && mouseY <= 300){
      showleaf=false
      fedfood=true
    }
  }
  // if(fedfood==true){
  //   showleaf=true
  //   leafx=leafx
  //   leafy=leafy
  // }
  
  
  if (showwater==true){
    text("💧",waterx,watery)
  }
  
  if (mouseIsPressed == true &&mouseX >= 20 &&mouseX <= 40&&mouseY >= 50 && mouseY <= 70){
    waterdragged=true
  }
  if (waterdragged==true){
    waterx=mouseX
    watery=mouseY
    if(mouseX >= 350 &&mouseX <= 450&&mouseY >= 200 && mouseY <= 300){
      showwater=false
      givenwater=true
    }
  }
  
  if (givenwater==true){
    returnHappyBackground()
  }
  
  let timeSinceDry = millis() - msSinceDry;
  
  if(timeSinceDry>12000 && fedfood==false ||  timeSinceDry>24000 && givenwater==false){
    sadEnd()
    console.log('dpne')
  }
}

function returnHappyBackground(){
  msSincemandyreturn=millis
  isMandyHappyagain=true
  background(252, 243, 227);
  for (let i = 0; i < xArray.length; i++) {
    let x = xArray[i];
    let y = yArray[i];
    let shapecolor = xcolor[i];
    let shapecolor2 = xcolor2[i];
    let shapesize = xsize[i];
    let xposfirstcir=xpos[i]
    if (shapecolor < 7) {
      noStroke();
      fill(143, 158, 139);
    } else {
      noFill();
      strokeWeight(2)
      stroke(134, 108, 90);
    }
    circle(x, y, shapesize);
    
     if (shapecolor2 > 6) {
       noStroke();
       fill(134, 108, 90);
     } else {
       noFill();
       strokeWeight(2)
       stroke(143, 158, 139);
     }
     circle(x, y, shapesize);
  }
}

function returnHappymandy(){
  
  //this is the puddle
  noStroke();
  fill(0, 71, 81,lastPuddletrans);
  circle(400, 250, 400);
  lastPuddletrans+=5

  //decide mandy's color
  xcolor=random(0,400)
  ycolor=random(0,400)
  let r = map(xcolor, 0, width, 255, 0);
  let g = 0;
  let b = map(ycolor, 0, height, 0, 255);
  
 //this is the invisible circle
  fill(255)
  stroke(0)
  //circle(pathCircleX, pathCircleY, 5)
  pathCircleX =pathCircleX+ random(-5, 5);
  pathCircleY = pathCircleY+random(-5, 5);
  pathCircleX=constrain(pathCircleX,width/2-100,width/2+100)
  pathCircleY=constrain(pathCircleY,height/2-50,height/2+50)
  
  //this is mandy's details
  let circleX = pathCircleX + sin(mandy_angle) * 20;
  let circleY = pathCircleY + sin(mandy_angle) * 20;
  //its colors and shape
  stroke(r,g,b)
  strokeWeight(1)
  noFill()
  circle(circleX, circleY, radius)
  //to make it move
  number=number+1
  radius=number%10
  let noiseValue=noise(frameCount*0.001)
  mandy_loop_speed = map(noiseValue,0,1,0,0.001)
  mandy_angle = mandy_angle + mandy_loop_speed; 
  
  let timeSinceMandyreturn = millis() - msSincemandyreturn;
  if (timeSinceMandyreturn > 6000) {
    happyEnd()
    console.log("done")
  }
}

function happyEnd(){
  background(252, 243, 227)
  fill(rgb(76,5,107))
  text("Thank you for helping mandy survive. You win",400,250)
}

function sadEnd(){
  background(143, 59, 27)
  fill(0)
  text("Mandy is dead",400,250)
}