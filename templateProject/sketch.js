// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

let lightswitch = true;
let gear;


function preload() {
  gear = loadImage("images/gear.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawlight();{

  }


  stroke(0);
  line(0, 0, 200, 200);

  fill(0, 255, 0, 100);
  noStroke();

  rect(mouseX, mouseY, 100, 300);
  ellipse(400, 150, 300, 200);
}

function drawlight() {
  if (lightSwitch === true){
      fill(255);
  }
  else {
    fill(0)
  }
  rectMode(CENTER);
  rect(width/2,height/2,200,200)
}

function keyTyped(){
  if(key === ""){
    lightSwitch === 
  }
}
