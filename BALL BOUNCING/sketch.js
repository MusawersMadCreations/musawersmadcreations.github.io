

// global variables
let x,y, radius;
let xchange, ychange;

function preload() {
  // gear = loadImage("images/gear.png");
}

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  radius = 50;
  xchange = random(2,5);
  ychange = random(2,5);

}

function draw() {
  background(225);
  moveThing();
  displayThing();
}

function displayThing (){
  fill(0);
  ellipse(x,y,radius*2,radius * 2);
}
function moveThing(){
  x += xchange;
  y += ychange;
  if (y + radius >= height || y + radius >= 0) {
    ychange = ychange * -1;
  }
  if (x + radius >= width || x + radius >= 0) {
    xchange = xchange * -1;
}
