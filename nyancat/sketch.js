// NYAN CAT V 2.0 Interactive project
// Musawer
// Feb 9, 2018
// This is a program that imitates the popular pop culture meme nyan cat
// KEYS
// left click === white stars enable
// Right click === Black stars enable
// Move with "W" "A" "S" "D""
// Pause Music with "M" and Resume with "N"
// Press any other key to stop NyanCat

let catx, caty;
let nyanCat, star, star2;
let redChange, greenChange, blueChange;
let catSpeed;
let state;
let song;

function preload() {
  nyanCat = loadImage("images/cat.png");
  star = loadImage("images/star.png");
  star2 = loadImage("images/star2.png");
  song = loadSound("music/song.mp3");

}

function setup() {
  playThemeSong();
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault())
  catx = width / 2 - 150;
  caty = height / 2;
  redChange = 0;
  greenChange = 0;
  blueChange = 0;
  catSpeed = 10;

}

function draw() {

  rainbowBackground();
  writeText();
  makeStars();
  nyanCatMove();
}

function rainbowBackground() {
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

function playThemeSong() {
  song.setVolume(0.1);
  song.play();
}

function makeStars() {
  if (mouseButton === LEFT) {
    image(star, random(width), random(height));
  }
  else if (mouseButton === RIGHT) {
    image(star2, random(width), random(height));
  }
}

function nyanCatMove() {
  image(nyanCat, catx, caty, 250, 100);

  if (key === "w" || key === "W") {
    caty = caty - catSpeed;
    if (caty < -10) {
      caty = height - 110;
    }
  }
  else if (key === "s" || key === "S") {
    caty = caty + catSpeed;
    if (caty >= height - 110) {
      caty = -10;
    }
  }
  if (key === "a" || key === "A") {
    catx = catx - catSpeed;
    if (catx < 0) {
      catx = width - 260;
    }
  }
  else if (key === "d" || key === "D") {
    catx = catx + catSpeed;
    if (catx >= width - 260) {
      catx = 0;
    }
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

function writeText() {
  words = 75;
  textSize(words);
  text("NYAN CAT SIMULATOR", width / 2 - 425, height / 2 - 300);
}
