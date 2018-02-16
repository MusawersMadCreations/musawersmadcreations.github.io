// mouse and keyboard interaction
// Musawer
// Feb 9, 2018
let x,y;
let nyanCat,star;
let redChange,greenChange,blueChange;



function preload(){
  nyanCat = loadImage("images/cat.png");
  star = loadImage("images/star.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  redChange = 0;
  greenChange = 0;
  blueChange = 0;
}

function draw() {

  rainbowBackground();
  makeStars();
  nyanCatMove();

}

function rainbowBackground(){
  redChange += 3;
  greenChange += 1;
  blueChange += 5;
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
  if (mouseButton === LEFT) {
    image(star,random(width),random(height));
  }
  // else if (mouseButton === RIGHT) {
  //   break
  // }

}

function nyanCatMove (){
  image(nyanCat, width/2 - 450 , height/2);

}
