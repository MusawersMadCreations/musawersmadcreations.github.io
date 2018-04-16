// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

let myballs;
let anotherball;
let thirdball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myballs = new Ball(300,400);
  anotherball = new Ball(100,200);
  thirdball = new Ball(600,500);
}

function mouseIsPressed(){
  thirdball.goto(mouseX,mouseY);
}
function draw() {
  background(255);
  myballs.jiggle();
  myballs.display();
  anotherball.display();
  thirdball.display();
}

class Ball {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.radius = 50;
  }

  display(){
    ellipse(this.x,this.y,this.radius,this.radius);
  }
  jiggle(){
    this.x += random(3,-3);
    this.y += random(3,-3);
  }
  goto(x,y){
    this.x = x;
    this.y = y;
  }
}
