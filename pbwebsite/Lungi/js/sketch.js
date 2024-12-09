let lungiPattern;
let frozencells = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  noLoop();
  noCursor();
  lungiPattern = new LungiPattern(40, 0);
}

function draw() {
  lungiPattern.update();
  lungiPattern.draw();
}

function mouseMoved() {
  lungiPattern.mouseMoved();
}

class LungiPattern {
  constructor(cellSize, angle) {
    this.cellSize = cellSize;
    this.angle = angle;

    this.isclicked=false
  }

  update() {
    let numb=random(10)
    if(this.isclicked){
      this.angle -= 0.11;
    }else{
      this.angle += 0.01;
    }
  }

  draw() {
    background(250, 235, 215);

    for (let y = 0; y < height; y += this.cellSize) {
      for (let x = -15; x < width + 20; x += this.cellSize) {
        //used to turn the diamond blue
        let isMouseOver = mouseX > x && mouseX < x + this.cellSize && mouseY > y && mouseY < y + this.cellSize;              
        this.drawPattern(x, y, isMouseOver,this.angle);
        
        if (mouseIsPressed && isMouseOver){
          console.log('hi')
          this.isclicked=true
        }
      }
    }
  }

  drawPattern(x, y, isBold,  angle) {
    let baseColor;
    let strokeWeightValue;

    if (isBold) {
      baseColor = color(0, 139, 139);
      strokeWeightValue = 3;
    } else {
      let r = map(x, 0, width, 0, 255);
      let b = map(y, 0, height, 0, 255);
      baseColor = color(r, 0, b);
      strokeWeightValue = 1;
    }

    push();
    translate(x + this.cellSize / 2, y + this.cellSize / 2);
    stroke(baseColor);
    strokeWeight(strokeWeightValue);
    fill(250, 235, 215);

    // Outer most diamond
   this.drawDiamond(this.cellSize - random(1,4),angle);

   // Outer diamond
   this.drawDiamond(this.cellSize - 10,angle);

   // Inner diamonds (random sizes)
   for (let i = 0; i < 2; i++) {
     let size = random(10, this.cellSize - 20);
     this.drawDiamond(size,this.angle);
   }

    pop();
  }

  drawDiamond(size, angle) {
    push();
    rotate(angle);
    beginShape();
    vertex(0, -size / 2);
    vertex(size / 2, 0);
    vertex(0, size / 2);
    vertex(-size / 2, 0);
    endShape(CLOSE);
    pop();
  }

  mouseMoved() {
    if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
      redraw();
    }
  }
}