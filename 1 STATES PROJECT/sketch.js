// state project
// Musawer
// March 6, 2018

let state;
let inventory;
let goodLuckImg, clockImg, homelessImg;
let buttonIsPressed, button2IsPressed;
let box = {
  x: 300,
  y: 75,
  width: 1000,
  height: 125,

};
let button = {
  x: 1250,
  y: 600,
  left: 1250,
  right: 1500,
  top: 600,
  bottom: 670,
  words: "Start",
  textsize: 45,
};

let button2  = {
  x: 1250,
  y: 450,
  left: 1250,
  right: 1500,
  top: 450,
  bottom: 520,
  words: "",
  textsize: 45,
};

let buttontext = {
  x: 1325,
  y: 650,
};

let buttontext2 = {
  x: 1325,
  y: 500,
};

function preload() {
  goodLuckImg = loadImage("images/goodluck.png"),clockImg = loadImage("images/clock.png"),homelessImg = loadImage("images/homeless.jpg"); ;
  bikeImg = loadImage("images/bike.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  state = "startScreen";
  inventory = [];

}

function draw() {
  if (state === "startScreen") {
    makeTextBox();
    makeButton();
    TitleScreen();
  }

  else if (state === "act1") {
    background(255);
    makeTextBox();
    act1();
    makeButton();
    makeButton2();
  }

  else if (state === "act1A") {
    background(255);
    makeTextBox();
    act1A();
    makeButton();
  }

  else if (state === "act1B") {
    background(255);
    makeTextBox();
    act1B();
    makeButton();
    makeButton2();
  }

}

function mousePressed() {
  buttonIsPressed = mouseX >= button.left && mouseX <= button.right && mouseY >= button.top && mouseY <= button.bottom;
  button2IsPressed = mouseX >= button2.left && mouseX <= button2.right && mouseY >= button2.top && mouseY <= button2.bottom;
}


function makeTextBox() {
  rect(box.x, box.y, box.width, box.height, 25);
}

function makeButton() {
  rect(button.x, button.y, 250, 70, 15);
  textSize(button.textsize);
  text(button.words, buttontext.x, buttontext.y);
}

function makeButton2() {
  rect(button2.x, button2.y, 250, 70, 15);
  textSize(button2.textsize);
  text(button2.words, buttontext2.x, buttontext2.y);
}

function TitleScreen() {
  box.height = 110;
  if (buttonIsPressed) {
    state = "act1";
    buttonIsPressed = false;
  }
  image(goodLuckImg, box.x + 135, box.y + 175);
  textSize(50);
  text("Welcome to the game of choices", box.x + 130, box.y - 20);
  textSize(18);
  text("Here you will be put on the spot with several decision that will have severe consequences as you continue with the game.", box.x + 15, box.y + 25);
  text("Some decision will lead to a life of money and glory, others to your demise. So choose carfully or risk it all.", box.x + 70, box.y + 50);
  text("Click the start button to continue.", box.x + 350, box.y + 75);
}

function act1() {
  button.words = "Play Hookey", button.textsize = 35, buttontext.x = 1280, box.width = 850;
  button2.words = "Go To school", button2.textsize = 35, buttontext2.x = 1275;
  if (buttonIsPressed) {
    state = "act1A";
    buttonIsPressed = false;
  }

  if (button2IsPressed) {
    state = "act1B";
    button2IsPressed = false;
  }

  textSize(50);
  text("Day 1", box.x + 15, box.y - 20);
  textSize(18);
  text("YAAAAAWN, you wake up and glance at your alarm clock. OH SHIT your late for school what do you .", box.x + 15, box.y + 25);
  text("After rolling around in your bed for a while you realize you have to get up", box.x + 70, box.y + 50);
  text("What Will You Do", box.x + 350, box.y + 75);
  image(clockImg, box.x, box.y + 112);

}

function act1A() {
  button.y = 600, button.words = "Game Over", button.textsize = 30, buttontext.x = 1297;
  state = "gameOver";
  textSize(50);
  text("Day 7300", box.x + 15, box.y - 20);
  textSize(18);
  text("You started skipping school from that day on and ended up failing high school. As a result your lovely parents kicked", box.x + 35, box.y + 25);
  text("you out and you have been living on the streets from then on.", box.x + 250, box.y + 50);
  text("Better luck next time.", box.x + 400, box.y + 75);
  image(homelessImg, box.x, box.y + 112);
}

function act1B() {
  button.words = "walk", button.textsize = 30, buttontext.x = 1297, box.width = 925;
  button2.words = "bike", button2.textsize = 30, buttontext2.x = 1297;
  if (buttonIsPressed) {
    state = "act1BA";
    buttonIsPressed = false;
  }

  if (button2IsPressed) {
    state = "act1BB";
    button2IsPressed = false;
  }

  textSize(50);
  text("Day 1, 10:15am", box.x + 15, box.y - 20);
  textSize(18);
  text("You frantically jump out of your bed, run downstairs and quickly have a bowl of cereal then on your way out you.", box.x + 15, box.y + 25);
  text("wonder whether you should quickly get to school on your bike or since you're already late, walk to school", box.x + 70, box.y + 50);
  text("you could take your time and walk to school", box.x + 350, box.y + 75);
  image(bikeImg, box.x, box.y + 112);

}
