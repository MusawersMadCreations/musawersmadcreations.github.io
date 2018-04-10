// OG Maze
// Musawer Jalal
// April 10, 2018


let mazeSize;
let isWall;

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  mazeSize = width / 8;
  isWall = false;
}

function draw() {
  background(255);
  drawBoard();
}


function drawBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (isWall) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(mazeSize * j, mazeSize * i, mazeSize, mazeSize);
      isWall = !isWall;
    }
    isWall = !isWall; //fix for the next row
  }
}
