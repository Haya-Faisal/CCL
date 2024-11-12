// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 83; // Decide the initial number of particles.
let numormetroid = 25
let particles = [];
let metroids = []

//for lerping metroids
let posx1;
let posx2;
let posy1;
let posy2;

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
  //colorMode(HSB);

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }

  // // generate metroid
  for (let i = 0; i < numormetroid; i++) {
    metroids[i]= new Metroid(random(width), random(height));
  }
}

function draw() {
  background(0);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.twinkle();
    p.display();
  }

  for (let i = 0; i < metroids.length; i++) {
    let m = metroids[i];
    m.update();
    m.display();
  }

  // delete metroid whose "onCanvas" value is false
  for (let i = metroids.length - 1; i >= 0; i--) {
    // check its onCanvas value
    if (metroids[i].onCanvas == false) {
      // if not on canvas, delete!
      metroids.splice(i, 1);
    }
    console.log(metroids)
  }
  //LA suggested to put push. figured logic using same technique as python
  //tried doing with for gave error, maybe can use while.
  if (metroids.length<20){
      metroids.push( new Metroid(random(width), random(0,20)));
  }
}
class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = random(2, 5);

    this.hue = random(255)
    this.bright = random(100, 255)

  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
  }
  display() {
    // particle's appearance
    //makes the particles
    push();
    translate(this.x, this.y);
    fill(255, this.bright);
    noStroke();
    circle(0, 0, this.dia);

    pop();
  }
  // to brig twinkle of star
  twinkle() {
    this.bright = random(100, 255); // Change brightness for twinkle effect
  }
}


class Metroid {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.beginx = startX;
    this.beginy = startY;
    this.metdia = random(4, 7);

    //colors of particle
    this.rangred=random(255)
    this.rangblue=random(255)
    this.ranggreen=random(255)

    this.speedX = random(-3, 2);
    this.speedY = random(3, 4);

    this.oncavas = true
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.beginx += this.speedX;
    this.beginy += this.speedY;

    if (this.beginy > height) {
      this.onCanvas = false;
    }
    for (let i=0;i<metroids.length;i++){
      posx1=metroids[i].beginx+20
      posy1=metroids[i].beginy+20
      for(let j=0;i<metroids.lenght-1;i++){
        posx2=metroids[j].beginx+20
        posy2=metroids[j].beginy+20
        if(posx1==posx2 && posy1==posy2){
          metroids[i]=lerp(-12,12,0.5)
          metroids[j]=lerp(-12,12,0.5)
        }
      }
    }

  }
  display() {
    // particle's appearance
    //makes the particles
    push();
    translate(this.beginx, this.beginy);
    fill(this.rangred,this.ranggreen, this.rangblue);
    noStroke();
    circle(0, 0, this.metdia);

    pop();
  }
  
}
