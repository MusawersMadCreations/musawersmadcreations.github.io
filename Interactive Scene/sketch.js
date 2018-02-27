// mouse and keyboard interaction
// Musawer
// Feb 9, 2018
// This is a program that imitates the popular pop culture meme nyan cat
// some of the keys you should know is left click is to enable stars, "m" is for mute and "n" is for unmute
// enjoy the meme



let catx,caty;
let nyanCat,star,star2;
let redChange,greenChange,blueChange;
let catSpeed;
let song;


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
  catSpeed = 30;
}

function draw() {

  rainbowBackground();
  writeText();
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

function playThemeSong(){
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
  image(nyanCat,catx,caty);
  if (key == 'w' || key == 'W') {
   caty = caty - catSpeed;
 }
 else if (key == 's' || key == 'S') {
   caty = caty + catSpeed;
 }
 if (key == 'a' || key == 'A') {
   catx = catx - catSpeed;
 }
 else if (key == 'd' || key == 'D') {
   catx = catx + catSpeed;
 }
}

function keyPressed() {
  if (key === "m" || key === "M") {
    song.setVolume(0);
  }
  else if (key === "n" || key === "N") {
    song.setVolume(0.1);

  }
}

function writeText(){
  words = 75;
  textSize(words);
  text("NYAN CAT SIMULATOR",width/2 - 425,height/2 - 300);
}
