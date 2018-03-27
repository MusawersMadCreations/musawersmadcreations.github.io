// p5js template project - replace with project title
// Musawer Jalal
// march 22, 2018

let theBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  // moveTheBall();
  displayball();
}

function mouseClicked() {
  let aBall = {
    x: mouseX,
    y: mouseY,
    size: random(10,100),
    color: color(random(255),random(255),random(255),random(255))
    // dx: random(-5, 5),
    // dy: random(-5, 5),
  };
  theBalls.push(aBall);
}

function displayBall(){
  for (let i = 0; i < theBalls.length; i++) {
    fill(theBalls[i].color);
    noStroke();
    ellipse(theBalls[i].x,theBalls[i].y,theBalls[i].size,theBalls[i].size)
  }
}
