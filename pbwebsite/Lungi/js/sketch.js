 let cellSize=40;//size of each grid
 function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  noLoop()
}

function draw() {
  background(250,235,215);

  for (let y = 0; y < height; y += cellSize) {
    for (let x = 0-15; x < width+20; x += cellSize) {
      // Checking if mouse is over this diamond
      let isMouseOver = mouseX > x && mouseX < x + cellSize 
      && mouseY > y && mouseY < y + cellSize;
      // Draw the lungi pattern
      drawlungipattern(x, y, isMouseOver);
    }
  }
}

function drawlungipattern(x,y,isBold) {
  if (isBold){
    basecolor=color(0,139,139)
    strokewieghtvalue=3
  }else{
    r=map(x,0,width,0,255)
    b=map(y,0,height,0,255)
    basecolor=color(r,0,b)
    strokewieghtvalue=1
  }

  push();
  //this makes sure only one cell is colored at once.
  translate(x + cellSize / 2, y + cellSize / 2); // Move to the center of the cell. 
  stroke(basecolor);
  strokeWeight(strokewieghtvalue);
  fill(250,235,215); // center color of dia
  
  // Outer most diamond
  drawDiamond(cellSize - random(1,4));

  // Outer diamond
  drawDiamond(cellSize - 10);

  // Inner diamonds (random sizes)
  for (let i = 0; i < 2; i++) {
    let size = random(10, cellSize - 20);
    drawDiamond(size);
  }
  pop();

}

function drawDiamond(size) {
  beginShape();
  vertex(0, -size / 2); // Top
  vertex(size / 2, 0); // Right
  vertex(0, size / 2); // Bottom
  vertex(-size / 2, 0); // Left
  endShape(CLOSE);
}

function mouseMoved() {
  redraw(); // Redraw the grid when the mouse moves away
}