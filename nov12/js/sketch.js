let box = []
let numofbox= 50
let outframe=false;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  for (let i=0;i<numofbox;i++){
    box.push(new Box())
  } 
}

function draw() {
  //
  background(220);
  for (let i=0;i<box.length;i++){
    let b=box[i]
    b.update
    b.display
  }
}

class Box{
  constructor(startx,starty){
    this.x=width
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
    Translate(this.x,this.y)
    fill(0)
    rect(0,0,this.size,this.size)
    pop()
  }
}

