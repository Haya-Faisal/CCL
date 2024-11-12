let bugSound;
let bug1;
let plant1;
function preload(){
  bugSound=loadSound('sounds/bloib.mp3')

}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
   bug1= new Bug();
   plant1=new Plant();
}

function draw() {
  //
  background(220);
  bug1.update()
  bug1.display()

  plant1.update()
  plant1.display()
}

class Bug{
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.sound = bugSound;
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
    this.moving = false;
  }
  update(){
    if(this.moving == true){
      this.x += this.speedX;
      this.y += this.speedY;
    }
    //bounce
    if(this.x < 0 || this.x > width){
      this.speedX = -this.speedX;
      this.shout();
    }
    if(this.y < 0 || this.y > height){
      this.speedY = -this.speedY;
      this.shout();
    }
  }
  shout(){
    this.sound.play();
  }
  display(){
    push();
    translate(this.x, this.y);
    fill(0);
    circle(0, 0, 2);
    pop();
    
  }
}

class Plant{
  constructor(startx,starty){
    this.startx=startx
    this.starty=starty
    this.plantheight=0
    this.watered=false
  }

  update(){
    if(this.watered==true){
      if(this.plantheight<60){
        this.plantheight++;
      }
    } 
  }
  display(){
    push();
    translate(this.startx,this.starty)
    //plant
    stroke('green')
    strokeWeight(20)
    line(0,-40,40,40)
    //pot
    noStroke()
    fill("brown")
    rect(-20,-40,40,40)
  }
}

function mousePressed(){
  bug1.moving=true
}