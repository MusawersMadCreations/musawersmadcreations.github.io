// Dot
// Dan Schellenberg
// Mar 5, 2018

let boxSize;
let isFilled;

function setup() {
  createCanvas(windowWidth, windowWidth);
  noCursor();
}


function draw() {
  background(0);
  drawDots();
}

function drawDots() {
  let pointSpacing = 50;
  for (let x = pointSpacing; x < width; x += pointSpacing) {
    for (let y = pointSpacing; y < height; y += pointSpacing) {
      fill(0)
      ellipse(x,y,4,4);
      stroke(255, 50);
      line(x,y,mouseX,mouseY);
    }
  }
}








// function drawOutline() {
//   fill(0);
//   rect(0, 0, width, borderSize);
//   rect(0, 0, borderSize, height);
//   rect(width - borderSize, 0, width, height);
//   rect(0, height - borderSize, width, height);
// }
