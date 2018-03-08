// state project
// Musawer
// March 6, 2018

let state;
let textX, textY;
let storyFont;

function preload(){
  storyFont = loadFont("fonts/Storyboo.TTF");
}
function positionCanvas() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255)
  state = "StartScreen";
  textX = width/2 - 225;
  textY = height/2 - 250;
  textStyle(storyFont);
}

function draw() {
  if (state === "StartScreen") {
    decision();
  }
}

function decision() {
  rect(width/2 - 500, height/2 - 225,1000,150);
  textSize(30);
  text("Welcome to the game of choices", textX, textY);
  textSize(20);
  text("Here your will be put on the spot with several decision that will have severe consequences as you continue with the game.",textX - 300,textY + 50);
  text("Some decision will lead to a life of money and glory, others to your demise. So choose carfully", textX - 200, textY + 80);
  text("Click the start button to continue", textX + 70, textY + 110);

}
