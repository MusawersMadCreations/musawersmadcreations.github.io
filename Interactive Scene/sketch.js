// mouse and keyboard interaction
// Musawer
// Feb 9, 2018
let catx,caty;
let nyanCat,star;
let redChange,greenChange,blueChange;



function preload(){
  nyanCat = loadImage("images/cat.png");
  star = loadImage("images/star.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  catx = width/2 - 450;
  caty = height/2;
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
  else if (mouseButton === RIGHT) {
    break 
  }
}

function nyanCatMove (){
  image(nyanCat, catx , caty);
  if (catx <= width/2 - 750) && (caty <= height/2 +300){

  }

}
