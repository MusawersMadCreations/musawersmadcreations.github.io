// DVD Bounce - The Office Shoutout
// Dan Schellenberg
// Feb 15, 2018

// global variables
let state;
let x, y, radius;
let dx, dy;
let dvd, dvdColor;

function preload() {
  dvd = loadImage("images/logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);
  dvdColor = color(0);
  state = 1;
}

function draw() {
  background(255);
  startSreen();
  moveThing();
  displayThing();
}

function startSreen(){
  if (state === 1){
    background(255)
    rect(width/2,height/2,300,100)
    if (mouseClicked()){
      state === 2;
    }
  }
}

function moveThing() {
  x += dx;
  y += dy;

  //check if bounce required
  if (state === 2) {
    if (y + dvd.height / 2 >= height || y - dvd.height / 2 <= 0) {
      dy = dy * -1;
      dvdColor = color(random(255), random(255));
    }

    if (x + dvd.width / 2 >= width || x - dvd.width / 2 <= 0) {
      dx = dx * -1;
      dvdColor = color(random(255), random(255));
    }
  }
}
function displayThing() {
  if (state === 2){
    fill(0);
    // ellipse(x, y, radius * 2, radius * 2);
    imageMode(CENTER);
    tint(dvdColor);
    image(dvd, x, y);
  }
}
