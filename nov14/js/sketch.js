let box = []
let numofbox= 30
let outframe=false;


let fly;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  for (let i=0;i<numofbox;i++){
    box.push(new Box())
  } 
  newfly=new Fly()
}

function draw() {
  //
  background(220);
  for (let i=0;i<box.length;i++){
    let b=box[i]
    b.update()
    b.display()
  }

  newfly.update()
  newfly.display()
}

class Box{
  constructor(startx,starty){
    this.x=random(width,2*width)
    this.y=random(0,height)
    this.speedX=-1
    this.size=random(20,40)
  }
  update(){
   this.x+=this.speedX
   if(this.x<-this.size){
    this.x=width
    this.y=random(0,height)
   }
  }
  display(){
    push()
    translate(this.x,this.y)
    fill(0)
    rect(0,0,this.size,this.size)
    pop()
  }

  checkcollision(otherX,otherY){
    if(otherX>this.x && otherX<this.x+this.size){}
  }
}

class Fly{
  constructor(){
    //cont x
    this.x=width/3
    //y starts at middle
    this.y=height/2
    //speed y
    this.speedy=0
    this.r=3
  }

  update(){
    //gravity should affect speed
    if(thisy<height-this.r){
      this.speedy+=0.1
    }
    //this.speedy+=0.1
    //keypress should affect speeed
    if(keyIsPressed==true){
      this.speedy-=0.5
    }else{
      this.speedy+=0.1
    }
    //speed y should be applied to y location
    this.y+=this.speedy
    //make sure y doesnt fall out of frame
    if(this.y>height-this.r){
      this.y=height-this.r
    }
  }
  display(){
    //display circle
    push()
    translate(this.x,this.y)
    circle(0,0,this.r*2)
    pop()
  }
}
