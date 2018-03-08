// state project
// Musawer
// March 6, 2018

let state;
let textX, textY, boxX, boxY;
let storyFont;
let box = {
  x: 300,
  y: 75,
  width: 1000,
  height: 125,

};

function preload() {
  storyFont = loadFont("fonts/Storyboo.TTF");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  state = "StartScreen";
  textStyle(storyFont);
}

function draw() {
  makeTextBox();
  if (mouseIsPressed) {
    print(mouseX, "X");
    print(mouseY, "Y");

  }

  if (state === "StartScreen") {
    TitleScreen();
  }
}

function makeTextBox() {
  rect(box.x, box.y, box.width, box.height);
}

function TitleScreen() {
  textSize(50);
  text("Welcome to the game of choices",box.x + 130, box.y + 50);

  text("Welcome to the game of choices", textX, textY);
  textSize(20);
  text("Here your will be put on the spot with several decision that will have severe consequences as you continue with the game.", textX - 300, textY + 50);
  text("Some decision will lead to a life of money and glory, others to your demise. So choose carfully", textX - 200, textY + 80);
  text("Click the start button to continue", textX + 70, textY + 110);

}
