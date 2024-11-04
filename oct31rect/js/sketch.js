let taxiinstance;
let wheelangle=0;
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  
  taxiinstance= new Taxi(50,300,0.3)
}

function draw() {
  background(220);
  taxiinstance.display()
}

class Taxi{
  constructor(startX,startY,s){
    this.x=startX;
    this.y=startY;
    this.scalefactor=s;

  }

  display(){
    push();
    translate(this.x,this.y)
    this.scalefactor(this.scalefactor)
    noStroke();
    fill(240, 220, 60);

    // base:
    rect(-50, -50, 100, 30);
    // top"
    rect(-25, -70, 50, 20);
    // wheel 1:
    this.drawWheel(-30, -15);
    // wheel 2:
    this.drawWheel( 30, -15);


    // just to see origin 
    // of translation matrix:
    fill("red");
    circle(0, 0, 5); 

    pop()
  }

  drawWheel(x, y){
    push();
    translate(x, y);
    rotate(wheelangle)
    wheelangle+=0.25
      noStroke();
      fill(0);
      // circle(0,0,30);
      ellipse(0,0,28, 32);
    
    pop();
  }
}