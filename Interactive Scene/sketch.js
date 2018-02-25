// mouse and keyboard interaction
// Musawer
// Feb 9, 2018
let catx,caty;
let nyanCat,star,star2;
let redChange,greenChange,blueChange;
let isMovingUp, isMovingDown, isMovingLeft, isMovingRight;



function preload(){
  nyanCat = loadImage("images/cat.png");
  star = loadImage("images/star.png");
  star2 = loadImage("images/star2.png");
  song = loadSound("music/song.mp3");
}

function setup() {
  playThemeSong();
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault())
  catx = width/2 - 150;
  caty = height/2;
  redChange = 0;
  greenChange = 0;
  blueChange = 0;
  isMovingUp = false;
  isMovingDown = false;
  isMovingLeft = false;
  isMovingRight = false;

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

function playThemeSong (){
  song.setVolume(0.1);
  song.play();
}

function makeStars(){
  if (mouseButton === LEFT) {
    image(star,random(width),random(height));
  }
  else if (mouseButton === RIGHT) {
    image(star2,random(width),random(height));
  }
}

function nyanCatMove (){
  image(nyanCat,catx,caty,250,100);

}
