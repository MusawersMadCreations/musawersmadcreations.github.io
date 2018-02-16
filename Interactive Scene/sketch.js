// mouse and keyboard interaction
// Musawer
// Feb 9, 2018
let x,y;
let nyanCat;
let redChange,greenChange,blueChange;



function preload(){
  nyanCat = loadImage("images/cat.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  redChange = 0;
  greenChange = 0;
  blueChange = 0;
}

function draw() {

  rainbowBackground();

  image(nyanCat, width/2, height/2);

}

function displayTarget() {

  if (mouseButton === LEFT) {
    clear();
    fill(255,0,0);
    ellipse(mouseX,mouseY,50,50);
    fill(255,255,255);
    ellipse(mouseX,mouseY,30,30);
    fill(0,0,0);
    ellipse(mouseX,mouseY,10,10);
  }
}

function rainbowBackground(){
  redChange += 5;
  greenChange += 3;
  blueChange += 1;
  if (redChange === 255) {
    redChange = 0;
  }
  if (greenChange === 255) {
    greenChange = 0;
  }
  if (blueChange === 255) {
    blueChange = 0;
  }
  background(redChange, greenChange, blueChange);

}
function makeStars(){
  if mouseClicked(){
    
  }
}
