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
      strokeWeight(2);
      stroke(122,0,51); //need to make it more redder
      line(mx, my, pmx, pmy); // Draw the main stroke
      push();
      scale(1, -1); // Mirror vertically
      line(mx, my, pmx, pmy); // Draw the mirrored stroke
      pop();
    }
  }
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    background(0,0,148); // Clear canvas when 'C' is pressed
  }
}