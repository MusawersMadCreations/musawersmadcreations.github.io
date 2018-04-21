// OG Maze
// Musawer Jalal
// April 10, 2018

// Global Var.
let state;
let direction, playerx, playery;
let playerLocation = [];
let level1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, "L", 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let increaseWall = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
let cellSize;
let rows = 25;
let cols = 25;
let lavaspeed;
let score;
let speed;
let wallImg, ladderImg, lavaImg;
let gameMp3, crashMp3, winMp3, loseMp3, moveMp3;
let xcoord, ycoord;
let playerCanMove;

function preload() {
  wallImg = loadImage("images/wall.jpg");
  ladderImg = loadImage("images/ladder.png");
  lavaImg = loadImage("images/lava.jpg");
  gameMp3 = loadSound("sound/theme.mp3");
  moveMp3 = loadSound("sound/move.wav");
  winMp3 = loadSound("sound/win.wav");
  loseMp3 = loadSound("sound/lose.mp3");
  crashMp3 = loadSound("sound/crash.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "game";
  direction = "right";
  cellSize = 30.75;
  playerx = cellSize;
  playery = cellSize;
  playerCanMove = playerx += cellSize;
  speed = 3;
  lavaspeed = 22;
  score = 0;
  frameRate(10);
  moveMp3.setVolume(0.5);
  gameMp3.play();
}

function draw() {
  xcoord = floor(playerx / cellSize);
  ycoord = floor(playery / cellSize);
  background(255);
  makeOutlines();
  displayScore();
  drawBoardAndExpandLava();
  moveRunner();
  makeRunner();
  death();
  ladderWin();
  winScreen();
  gameOverScreen();
}


function keyPressed() {
  if (state === "game") {
    if (key === "w" || key === "W") {
      moveMp3.play();
      direction = "up";
    }
    if (key === "s" || key === "S") {
      moveMp3.play();
      direction = "down";
    }
    if (key === "a" || key === "A") {
      moveMp3.play();
      direction = "left";
    }
    if (key === "d" || key === "D") {
      moveMp3.play();
      direction = "right";
    }
  }
}

function makeRunner() {
  if (state === "game") {
    fill(0, 255, 0);
    rect(playerx, playery, cellSize, cellSize);
  }
}

function moveRunner() {
  if (state === "game") {
    if (frameCount % speed === 0) {
      if (direction === "right") {
        if (playerx >= 738 || level1[ycoord][xcoord + 1] === 0) {
          score -= 1;
          playerx -= cellSize;
        }
        playerx += cellSize;
        score += 1;
      }
      if (direction === "down") {
        if (playery >= 738 || level1[ycoord + 1][xcoord] === 0) {
          playery -= cellSize;
          score -= 1;
        }
        playery += cellSize;
        score += 1;
      }
      if (direction === "left") {
        if (playerx <= 0 || level1[ycoord][xcoord - 1] === 0) {
          playerx += cellSize;
          score -= 1;
        }
        playerx -= cellSize;
        score += 1;
      }
      if (direction === "up") {
        if (playery <= 0 || level1[ycoord - 1][xcoord] === 0) {
          playery += cellSize;
          score -= 1;
        }
        playery -= cellSize;
        score += 1;
      }
    }
  }
}


function drawBoardAndExpandLava() {
  if (state === "game") {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // Converting level Characters to images
        if (level1[j][i] === 0) {
          image(wallImg, i * cellSize, j * cellSize, cellSize, cellSize);
        } else if (level1[j][i] === 6) {
          image(lavaImg, i * cellSize, j * cellSize, cellSize, cellSize);
        } else if (level1[j][i] === "L") {
          image(ladderImg, i * cellSize, j * cellSize, cellSize, cellSize);
          // Expanding lava
        } else if (frameCount >= lavaspeed) {
          level1[j][0] = 6;
          level1[j][24] = 6;
          level1[0] = increaseWall;
          level1[24] = increaseWall;
          if (frameCount >= lavaspeed * 2) {
            level1[j][1] = 6;
            level1[j][23] = 6;
            level1[1] = increaseWall;
            level1[23] = increaseWall;
          }
          if (frameCount >= lavaspeed * 3) {
            level1[j][2] = 6;
            level1[j][22] = 6;
            level1[2] = increaseWall;
            level1[22] = increaseWall;
          }
          if (frameCount >= lavaspeed * 4) {
            level1[j][3] = 6;
            level1[j][21] = 6;
            level1[3] = increaseWall;
            level1[21] = increaseWall;
          }
          if (frameCount >= lavaspeed * 5) {
            level1[j][4] = 6;
            level1[j][20] = 6;
            level1[4] = increaseWall;
            level1[20] = increaseWall;
          }
          if (frameCount >= lavaspeed * 6) {
            level1[j][5] = 6;
            level1[j][19] = 6;
            level1[5] = increaseWall;
            level1[19] = increaseWall;
          }
          if (frameCount >= lavaspeed * 7) {
            level1[j][6] = 6;
            level1[j][18] = 6;
            level1[6] = increaseWall;
            level1[18] = increaseWall;
          }
          if (frameCount >= lavaspeed * 8) {
            level1[j][7] = 6;
            level1[j][17] = 6;
            level1[7] = increaseWall;
            level1[17] = increaseWall;
          }
          if (frameCount >= lavaspeed * 9) {
            level1[j][8] = 6;
            level1[j][16] = 6;
            level1[8] = increaseWall;
            level1[16] = increaseWall;
          }
          if (frameCount >= lavaspeed * 10) {
            level1[j][9] = 6;
            level1[j][15] = 6;
            level1[9] = increaseWall;
            level1[15] = increaseWall;
          }
          if (frameCount >= lavaspeed * 11) {
            level1[j][10] = 6;
            level1[j][14] = 6;
            level1[10] = increaseWall;
            level1[14] = increaseWall;
          }
          if (frameCount >= lavaspeed * 12) {
            level1[j][11] = 6;
            level1[j][13] = 6;
            level1[11] = increaseWall;
            level1[13] = increaseWall;
          }
        } else {
          noStroke();
          fill(255);
          rect(i * cellSize, j * cellSize, cellSize, cellSize);

        }
      }
    }
  }
}

function makeOutlines() {
  if (state === "game") {
    fill(24);
    rect(cellSize * 25, 0, width, height);
  }
}

function displayScore() {
  textAlign(LEFT);
  if (state === "game") {
    //changed to string so it can run in text format
    String(score);
    fill(255);
    textSize(150);
    text(score + " Moves", cellSize * 27, 200);
  }
}

function collision() {
  if (level1[xcoord][ycoord] === 6) {
    return true;
  } else {
    return false;
  }
}

function death() {
  if (level1[xcoord][ycoord] === 6) {
    state = "dead";
    return true;
  } else {
    return false;
  }
}

function ladderWin() {
  if (level1[xcoord][ycoord] === "L") {
    state = "win";
    return true;
  } else {
    return false;
  }
}

function gameOverScreen() {
  textAlign(CENTER);
  if (state === "dead") {
    textSize(200);
    fill(255, 0, 0);
    text("GAMEOVER", width / 2, height / 2 - 35);
    fill(0);
    textSize(75);
    text("Finished In " + score + " Moves", width / 2, height / 2 + 50);
    textSize(35);
    text("Press R to restart", width / 2, height / 2 + 100);

    if (key === "r" || key === "R") {
      window.location.reload(true);
    }
  }
}

function winScreen() {
  textAlign(CENTER);
  if (state === "win") {
    textSize(200);
    fill(0, 255, 0);
    text("YOUWIN", width/ 2, height / 2 - 35);
    fill(0);
    textSize(75);
    text("Finished In " + score + " Moves", width / 2, height / 2 + 50);
    textSize(35);
    text("Press R to restart", width / 2, height / 2 + 100);

    if (key === "r" || key === "R") {
      window.location.reload(true);
    }
  }
}
// function startScreen(){
//   text("Crushing Maze",width / 2, height/2 + 400);
// }
//}
