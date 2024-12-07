let symmetry = 4; // Number of symmetries
let angle;
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  angle = 360 / symmetry; // Angle for each segment
  background(0,0,148);
}


function draw() {
  translate(width / 2, height / 2); // Move the origin to the center
  if (mouseIsPressed) {
    let mx = mouseX - width / 2; // Adjust mouse position to canvas center
    let my = mouseY - height / 2; //takes the x&y coor of current location 
    let pmx = pmouseX - width / 2; //take it of previous location
    let pmy = pmouseY - height / 2;

    for (let i = 0; i < symmetry; i++) {
      rotate(radians(angle)); // Rotate to the next segment. it increase angle after each circle is drawn resulting in it being drawn in all 4 segs
      strokeWeight(5);
      stroke(102,0,51); //need to make it more redder
      line(mx, my, pmx, pmy); // Draw the main stroke
      strokeWeight(0.5);
      stroke(255);
      linedash(mx, my, pmx, pmy, 4);
      push();
      scale(1, -1); // Mirror vertically
      strokeWeight(5);
      stroke(102,0,51);
      line(mx, my, pmx, pmy); // Draw the mirrored stroke
      strokeWeight(0.5);
      stroke(255);
      linedash(mx, my, pmx, pmy, 4);
      pop();
    }
  }
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    background(0,0,148); // Clear canvas when 'C' is pressed
  }
}

//I got the below code from here
// https://github.com/processing/p5.js/issues/3336

function linedash(x1, y1, x2, y2, delta) {
  // delta determines the length of dashes and spaces
  let distance = dist(x1, y1, x2, y2); // Total distance
  let dashNumber = floor(distance / delta); // Number of dashes
  let xDelta = (x2 - x1) / dashNumber; // X increment per segment
  let yDelta = (y2 - y1) / dashNumber; // Y increment per segment

  for (let i = 0; i < dashNumber; i += 2) {
    // Coordinates for the start and end of each dash
    let xi1 = i * xDelta + x1;
    let yi1 = i * yDelta + y1;
    let xi2 = (i + 1) * xDelta + x1;
    let yi2 = (i + 1) * yDelta + y1;

    // Draw each dash
    line(xi1, yi1, xi2, yi2);
  }
}