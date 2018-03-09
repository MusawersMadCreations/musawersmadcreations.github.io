// state project
// Musawer
// March 6, 2018

let state;
let goodLuckImg;
let box = {
  x: 300,
  y: 75,
  width: 1000,
  height: 125,

};

function preload() {
  goodLuckImg = loadImage("images/goodluck.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  state = "StartScreen";
}

function draw() {
  if (mouseIsPressed) {
    print(mouseX, "X");
    print(mouseY, "Y");

  }

  if (state === "StartScreen") {
    makeTextBox();
    TitleScreen();
  }

  if (state === "act1") {
    background(255);
    makeTextBox();
    act1();
  }
}

function makeTextBox() {
  rect(box.x, box.y, box.width, box.height, 25);
}

function TitleScreen() {
  button();
  box.height = 110;
  textSize(50);
  text("Welcome to the game of choices", box.x + 130, box.y - 20);
  textSize(18);
  text("Here you will be put on the spot with several decision that will have severe consequences as you continue with the game.", box.x + 15, box.y + 25);
  text("Some decision will lead to a life of money and glory, others to your demise. So choose carfully or risk it all.", box.x + 70, box.y + 50);
  text("Click the start button to continue.", box.x + 350, box.y + 75);
  image(goodLuckImg, box.x + 325, box.y + 175)

}

function act1() {
  button();
  box.height = 110;
  textSize(50);
  text("Day 1", box.x + 15, box.y - 20);
  textSize(18);
  text("YAAAAAWN, you wake up and glance at your alarm clock. OH SHIT your late for school what do you .", box.x + 15, box.y + 25);
  text("After rolling around for a while you realize you have to get up", box.x + 70, box.y + 50);
  text("Click the start button to continue.", box.x + 350, box.y + 75);
}

function button() {
  let button = {
    x: 300,
    y: 660,
    left: 300,
    right: 600,
    top: 670,
    bottom: 770,
  }

  if (mouseX >= button.left && mouseX <= button.right && mouseY >= button.top && mouseY <= button.bottom && mouseIsPressed) {
    state = "act1"
  }

  rect(button.x, button.y, 250, 70, 15);
  textSize(40)
  text("Start", button.x + 80, button.y + 47)
}
