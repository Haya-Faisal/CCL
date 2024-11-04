/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new Elmo(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only
  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Elmo {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.legheight=100
    this.isleg150=false
    this.headsize=70
    this.handx=0
    this.feetangle=0
    this.feetspeed=4
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.feetangle+=this.feetspeed
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    let xRad=radians(this.handx)
    let sinout=sin(xRad)*50;

    let circlex=200+sinout;
    let circley=100+sinout
    
    if (this.isleg150==false){
      stroke(105,4,4)
      fill(255, 0, 0)
      // Arms
      // ellipse(137, 225, 30, 80); // Left arm
      // ellipse(254, 225, 30, 80); // Right arm

      // Legs
      quad(160,300,190,300,190,380,160,380)
      quad(200,300,230,300,230,380,200,380)
      this.legheight++;

      this.drawfeet(166,370)
      this.drawfeet(225,370)

      // Body
      fill(255, 0, 0);
      ellipse(200, 250, 115, 150);
  
     // Head
     fill(255, 0, 0);
      ellipse(200, 150, this.headsize, this.headsize);
      this.headsize++;

    // Eyes
    fill(255);
    ellipse(185, 100, 30, 40);
    ellipse(215, 100, 30, 40);
  
    // Pupils
    fill(0);
    ellipse(190, 100, 10, 10);
    ellipse(210, 100, 10, 10);

    // Nose
    fill(255, 135, 0);
    ellipse(200, 135, 30, 37);

    // Mouth
    fill(0);
    arc(200, 160, 60, 40, 0, PI, CHORD);
    if (this.legheight>150){
      this.isleg150=true
     }
  }
  if (this.isleg150==true){
    stroke(105,4,4)
  
    fill(255, 0, 0)
    // Arms
    // ellipse(137, 225, 30, 80); // Left arm
    // ellipse(254, 225, 30, 80); // Right arm

    // Legs
    quad(160,300,190,300,190,380,160,380)
    quad(200,300,230,300,230,380,200,380)
    this.legheight--;

    this.drawfeet(166,370)
    this.drawfeet(225,370)

    // Body
    fill(255, 0, 0);
    ellipse(200, 250, 115, 150);
  
    // Head
    fill(255, 0, 0);
    ellipse(200, 150, this.headsize, this.headsize);
    this.headsize--;

    // Eyes
    fill(255);
    ellipse(185, 100, 30, 40);
    ellipse(215, 100, 30, 40);
  
    // Pupils
    fill(0);
    ellipse(190, 100, 10, 10);
    ellipse(210, 100, 10, 10);

    // Nose
    fill(255, 135, 0);
    ellipse(200, 135, 30, 37);

    // Mouth
    fill(0);
    arc(200, 160, 60, 40, 0, PI, CHORD);
    if (this.legheight<100){
      this.isleg150=false
    }
  }
  // Hands
    stroke(105,4,4)
    fill(255, 0, 0)
    ellipse(circlex-40, circley, 40, 40); // Left hand
    ellipse(circlex+40, circley, 40, 40); // Right hand
  this.handx++;

  drawfeet(x,y){
    push()
    translate(x,y)
    rotate(radians(this.feetangle));
    stroke(105,4,4);
    fill(255, 0, 0);
    ellipse(0,0,60,30);
    pop()
  }    
    
  
    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/