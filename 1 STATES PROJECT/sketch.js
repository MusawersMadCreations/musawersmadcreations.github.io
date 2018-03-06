// state project
// Musawer
// March 6, 2018

let state;
let textX, textY;


function positionCanvas() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "StartScreen";
  textX = CENTER/6;
  textY = height/6;
}

function draw() {
  decision();

}
function decision() {
  if (state === "StartScreen") {
    text("Welcome to the game of choices. Here your will be put on the spot with several decision that will influence the path you take with your caracture.",textX,textY);
  }
}
