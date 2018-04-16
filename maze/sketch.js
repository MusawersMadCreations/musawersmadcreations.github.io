// OG Maze
// Musawer Jalal
// April 10, 2018

let state = "game"
let direction, playerx, playery;
let level1 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0],
  [0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0],
  [0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
  [0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0],
  [0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0],
  [0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0],
  [0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0],
  [0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0],
  [0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,1,1,0,1,0,1,"L",1,0,1,0,1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0],
  [0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0],
  [0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0],
  [0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0],
  [0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
  [0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0],
  [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

let increaseWall = [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,];
let isWall;
let cellSize;
let rows = 25;
let cols = 25;
let wallImg, ladderImg, lavaImg;

function preload(){
  wallImg = loadImage("images/wall.jpg");
  ladderImg = loadImage("images/ladder.png");
  lavaImg = loadImage("images/lava.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  direction = "right";
  cellSize = 25;
  playerx = cellSize;
  playery = cellSize;
  speed = 2
  frameRate(10);
}

function draw() {
  background(255);
  drawBoard();
  moveRunner();
  makeRunner();
}


function keyPressed() {
  if (state === "start") {
    state = "game";
  }
  else if (state === "game") {
    if (key === "w" || key === "W") {
      direction = "up";
    }
    if (key === "s" || key === "S") {
      direction = "down";
    }
    if (key === "a" || key === "A") {
      direction = "left";
    }
    if (key === "d" || key === "D") {
      direction = "right";
    }
  }
  else if (state === "dead") {
    if (key === "r" || key === "R") {
      setup();
    }
  }
}

function makeRunner(){
  if (state === "game"){
    fill(0,255,0);
    rect(playerx,playery,cellSize,cellSize);
  }
}

function moveRunner(){
  if (frameCount % speed === 0) {
    if (state === "game"){
      if (direction === "right") {
        playerx += cellSize;

        }
      }
      if (direction === "down") {
        playery += cellSize;
      }
      if (direction === "left") {
        playerx -= cellSize;
      }
      if (direction === "up") {
        playery -= cellSize;
    }
  }
}


function drawBoard() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (level1[j][i] === 0) {
        image(wallImg,i * cellSize, j * cellSize, cellSize, cellSize)

      }
      else if(level1[j][i] === 6){
        image(lavaImg,i * cellSize, j * cellSize, cellSize, cellSize)
      }
      else if(level1[j][i] === "L"){
        image(ladderImg,i * cellSize, j * cellSize, cellSize, cellSize)
      }
      else {
        noStroke()
        fill(255);
        rect(i * cellSize, j * cellSize, cellSize, cellSize);

      }
    }


    if (frameCount >= 30.2){
      level1[0] = increaseWall
      level1[24] = increaseWall
    }
    if (frameCount >= 50.2){
      level1[1] = increaseWall
      level1[23] = increaseWall
    }
    if (frameCount >= 70.2){
      level1[2] = increaseWall
      level1[22] = increaseWall
    }
    if (frameCount >= 90.2){
      level1[3] = increaseWall
      level1[21] = increaseWall
    }
    if (frameCount >= 110.2){
      level1[4] = increaseWall
      level1[20] = increaseWall
    }
    if (frameCount >= 130.2){
      level1[5] = increaseWall
      level1[19] = increaseWall
    }
    if (frameCount >= 150.2){
      level1[6] = increaseWall
      level1[18] = increaseWall
    }
    if (frameCount >= 170.2){
      level1[7] = increaseWall
      level1[17] = increaseWall
    }
    if (frameCount >= 190.2){
      level1[8] = increaseWall
      level1[16] = increaseWall
    }
    if (frameCount >= 210.2){
      level1[9] = increaseWall
      level1[15] = increaseWall
    }
    if (frameCount >= 230.2){
      level1[10] = increaseWall
      level1[14] = increaseWall
    }
  }
}
