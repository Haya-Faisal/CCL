let symmetricDrawing;
let livingRoom;
let currentMode = 'drawing'; // Add this to track current display mode

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(0, 0, 148);
  symmetricDrawing = new SymmetricDrawing(width, height);
  livingRoom = new Livingroom();
}

function draw() {
  if (currentMode === 'drawing') {
    symmetricDrawing.draw();
  }
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    symmetricDrawing.keyPressed();
    currentMode = 'drawing';
  }
  if (key === 's' || key === 'S') {
    currentMode = 'livingroom';
    livingRoom.draw();
    let patternWidth = 370 / 10; // Divide the ajrak width by 10
    let patternHeight = 120 / 3;  // Divide the ajrak height by 3
    
    for(let y = 0; y < 3; y++) {
      for(let x = 0; x < 10; x++) {
        let xPos = 50 + (x * patternWidth);
        let yPos = 266 + (y * patternHeight);
        //copying what was drawn onto the new blanket. the class symmetricdrawing returns the design
        image(symmetricDrawing.getCanvas(), xPos, yPos, patternWidth, patternHeight);
      }
    }

  }
}


class SymmetricDrawing {
  constructor(canvasWidth, canvasHeight, symmetry = 4) {
    this.symmetry = symmetry;
    this.angle = 360 / this.symmetry;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    //making the whole canvas into graphics
    //learned from here  https://www.bing.com/videos/riverview/relatedvideo?q=creategraphics+p5+js&ru=%2fsearch%3fq%3dcreategraphics%2bp5%2bjs%26FORM%3dQSRE1&mmscn=vwrc&mid=1DD2BBE106C8EB9F5A641DD2BBE106C8EB9F5A64&FORM=WRVORC
    this.canvas = createGraphics(canvasWidth, canvasHeight);
    this.canvas.background(0, 0, 148);
  }

  draw() {
    this.canvas.push();
    this.canvas.translate(this.canvasWidth/2, this.canvasHeight/2);
    if (mouseIsPressed) {
      let mx = mouseX - this.canvasWidth / 2;
      let my = mouseY - this.canvasHeight / 2;
      let pmx = pmouseX - this.canvasWidth / 2;
      let pmy = pmouseY - this.canvasHeight / 2;

      for (let i = 0; i < this.symmetry; i++) {
        this.canvas.rotate(radians(this.angle));
        this.drawStroke(mx, my, pmx, pmy);
        this.canvas.push();
        this.canvas.scale(1, -1);
        this.drawStroke(mx, my, pmx, pmy);
        this.canvas.pop();
      }
    }
    this.canvas.pop();

    image(this.canvas, 0, 0);
  }

  drawStroke(mx, my, pmx, pmy) {
    this.canvas.strokeWeight(5);
    this.canvas.stroke(102, 0, 51);
    this.canvas.line(mx, my, pmx, pmy);
    this.canvas.strokeWeight(0.5);
    this.canvas.stroke(255);
    this.linedash(mx, my, pmx, pmy, 4);
  }

  keyPressed() {
    this.canvas.background(0, 0, 148);
  }

  ////I got the below code from here
  // https://github.com/processing/p5.js/issues/3336
  linedash(x1, y1, x2, y2, delta) {
    let distance = dist(x1, y1, x2, y2);
    let dashNumber = floor(distance / delta);
    let xDelta = (x2 - x1) / dashNumber;
    let yDelta = (y2 - y1) / dashNumber;

    for (let i = 0; i < dashNumber; i += 2) {
      let xi1 = i * xDelta + x1;
      let yi1 = i * yDelta + y1;
      let xi2 = (i + 1) * xDelta + x1;
      let yi2 = (i + 1) * yDelta + y1;
      this.canvas.line(xi1, yi1, xi2, yi2);
    }
  }

  getCanvas() {
    return this.canvas;
  }
}

class Livingroom {
  constructor() {
    
  }

  draw() {
    background(0,148,148);
    
    //bookshelf
    for (let y = 30; y < 300; y += 60) {
      fill(211, 204, 198);
      rect(10, y, 455, 3);
      
      //books
      for (let x = 10; x < 470; x += 20) {
        let r = random() * 50 + 200;
        let g = random() * 50 + 200;
        let b = random() * 50 + 200;
        fill(r, g, b);
        rect(x, y - 50, 15, 50);
      }
    }
    //window seat
    fill(232, 228, 224);
    rect(40, 240, 390, 150);
    
    //ajrek
    //drawn in key pressed
    // fill(0, 0, 148);
    // rect(60, 266, 350, 40);
    
    //pillow
    fill(0,218,218);
    rect(70, 250, 40, 40);
    rect(120, 250, 40, 40);
    rect(320, 250, 40, 40);
    
    
  }
}