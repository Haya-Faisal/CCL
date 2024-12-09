let rotibasket=[];
let dabkinum=1;
let dabki;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  // make instance of dabki
  dabki= new Dabki(250,380)
}

function draw() {
  background(204,155,153)
  for (let i=0;i<rotibasket.length;i++){
    rotibasket[i].update()
    rotibasket[i].display()
  }

  for (let i=0;i<rotibasket.length;i++){
    if (rotibasket[i].posy>390){
      rotibasket.splice(i,1)
    }
  }
  
  dabki.update()
  dabki.display()
  
}

class Roti{
  constructor(posx,posy){
    this.posx=posx  //position of roti
    this.posy=posy
    this.size=random(20,50)  // size of roti
  } 

  update(){
    this.posy+=1
  }

  display(){
    push()
    translate(this.posx,this.posy)
    fill(210,180,140)
    ellipse(0,0,this.size,this.size-10)
    fill(139, 69, 19)
    circle(0+4,0,5)
    circle(0-2,0-4,5)
    pop()
  }
}

function mousePressed(){
  let newroti= new Roti(mouseX,mouseY)
  rotibasket.push(newroti)
}

class Dabki{
  constructor(placex,placey){
    this.placex=placex
    this.placey=placey
  }
  update(){
    //let maxindex=0
    let maxvalue=0
      for(let j=0;j<rotibasket.length-1;j++){
        if(rotibasket[j].posy>370){
         // maxindex=rotibasket[j]
          maxvalue=rotibasket[j].posx
          this.placex=lerp(this.placex,maxvalue,0.5)
        } 
      }
  }

  display(){
    push()
    translate(this.placex,this.placey)
    fill(210, 180, 140);
    quad(0-5-30, 0, 0+65-30, 0, 0+60-30, 0+20, 0-30, 0+20);
    fill(240, 180, 140)
    quad(0-5-30,0,0-3-30,0+10,0+62-30,0+10,0+65-30,0)
    pop()
  }
}
