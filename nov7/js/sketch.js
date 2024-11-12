let confettis = [];
let numConfetti = 10;

let backgroundHUE;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  
  // for(let i = 0; i < numConfetti; i++){
  //   confettis.push(new Confetti(width/2, height/2))
  // }
  backgroundHUE=random(255)
  colorMode(HSB)  //check other color mode
}

function draw() {
  background(backgroundHUE,30,190);

  //for(let i = 0; i < numConfetti; i++){
    confettis.push(new Confetti(mouseX, mouseY))
  //}

  for(let i = 0; i < confettis.length; i++){
    confettis[i].update();
    confettis[i].display();
  }

  if(confettis.length>200){
    confettis.splice(0,1)//index,number of elements to be deleted
  }
  //use while loop to control the deleting of confetti
}

class Confetti{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);//random sixe for each particle
    
    this.speedX = random(-2, 2);
    this.speedY = random(-1, -3);   // neg y speed meks it go up

    this.c=random(255)

    this.canvas=true
  }
  update(){
    this.x+=this.speedX;
    this.y+=this.speedY;
    this.speedY+=0.19//makes the particle go down
    this.speedX*=0.9 //brings the natural curve motion

    if(this.y>height){ //checks if confetti is on canvas
      this.canvas=false
    }
  }
  display(){    
    push();
    translate(this.x, this.y);

      fill(this.c,255,205);
      noStroke();
      circle(0, 0, this.size);
   
    pop();
  }

}

// function mousePressed(){
//   for(let i = 0; i < numConfetti; i++){
//     confettis.push(new Confetti(mouseX, mouseY))
//   }

// }