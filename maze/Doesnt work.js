// check
function drawBoardAndExpandLava() {
  if (state === "game") {
    //game loop
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
        } for (let x = 0; x <= 24; x++) {
            for (let y = 24; y >= 0; y--) {
              for (let t = lavaspeed; t <= lavaspeed * 12; t++) {
                if (frameCount >= lavaspeed * t) {
                  level1[j][x] = 6;
                  level1[j][y] = 6;
                  level1[x] = increaseWall;
                  level1[y] = increaseWall;
                }
              }
            }
          }
          else {
            noStroke();
            fill(255);
            rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
      }
    }
  }
}
