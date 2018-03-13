// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date




function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  push();
  translate(width/2,height/2);
  angleMode(DEGREES);
  rotate(frameCount * 1000);
  rectMode(CENTER);
  fill(200);
  rect(0,0,300,50);
  pop();
  rect(10,10,300,300);
}
