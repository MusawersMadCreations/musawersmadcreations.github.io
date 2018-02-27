//Traffic Light Starter Code
//Dan Schellenberg
//Feb 23, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.
let time;

function setup() {
  createCanvas(600, 600);
  time = 0;
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  if (time) {
    fill(255,0,0);
    ellipse(width/2, height/2 - 65, 50, 50);
    millisecond = 1
  }
  fill(255,0,0);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  fill(255,255,0);
  ellipse(width/2, height/2, 50, 50); //middle
  fill(0,255,0);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
