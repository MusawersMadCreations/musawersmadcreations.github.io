// state project
// Musawer
// March 6, 2018

let state, newState;
let goodLuckImg, clockImg;
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

let buttontext = {
  x: 1325,
  y: 650,
};

function preload() {
  goodLuckImg = loadImage("images/goodluck.png");
  clockImg = loadImage("images/clock.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  state = "startScreen";
  newState = "";
}

function draw() {
  if (state === "startScreen") {
    makeTextBox();
    TitleScreen();
  }

  if (state === "act1") {
    background(255);
    makeTextBox();
    act1();

  }
  if (state === "act1A") {
    background(255);
    act1A();
    makeTextBox();
  }
}

function makeTextBox() {
  rect(box.x, box.y, box.width, box.height, 25);
}

function buttonIsPressed() {
  if (mouseX >= button.left && mouseX <= button.right && mouseY >= button.top && mouseY <= button.bottom && mouseIsPressed) {
    state = newState;
  }

  rect(button.x, button.y, 250, 70, 15);
  textSize(button.textsize);
  text(button.words, buttontext.x, buttontext.y);
}

function TitleScreen() {
  box.height = 110;
  newState = "act1";
  buttonIsPressed();
  image(goodLuckImg, box.x + 135, box.y + 175);
  textSize(50);
  text("Welcome to the game of choices", box.x + 130, box.y - 20);
  textSize(18);
  text("Here you will be put on the spot with several decision that will have severe consequences as you continue with the game.", box.x + 15, box.y + 25);
  text("Some decision will lead to a life of money and glory, others to your demise. So choose carfully or risk it all.", box.x + 70, box.y + 50);
  text("Click the start button to continue.", box.x + 350, box.y + 75);
}

function act1() {
  button.y = 600, button.words = "Play Hookey", button.textsize = 30, buttontext.x = 1297;
  newState = "Act1A";
  buttonIsPressed()

  // if (state = "act1"){
  //   button.y = 400, button.words = "Go To School", button.textsize = 25, buttontext.y = 400 ;
  //   buttonIsPressed()
  // }

  textSize(50);
  text("Day 1", box.x + 15, box.y - 20);
  textSize(18);
  text("YAAAAAWN, you wake up and glance at your alarm clock. OH SHIT your late for school what do you .", box.x + 15, box.y + 25);
  text("After rolling around in your bed for a while you realize you have to get up", box.x + 70, box.y + 50);
  text("What Will You Do", box.x + 350, box.y + 75);
  image(clockImg, box.x, box.y + 112);

}

function act1A() {
  textSize(50);
  text("Day 7300", box.x + 15, box.y - 20);
  textSize(18);
  text("You skip that school day play some video games a ", box.x + 70, box.y + 50);
  text("What Will You Do", box.x + 350, box.y + 75);
  image(clockImg, box.x, box.y + 112);

}
