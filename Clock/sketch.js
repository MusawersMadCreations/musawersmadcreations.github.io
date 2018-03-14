// Clock
// Musawer Jalal
// March 14, 2018

let clockSize;


function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width > height) {
    clockSize = height;
  }
  else {
    clockSize = width;
  }
  angleMode(DEGREES);
}

function draw() {
  background(255);

  push();
  translate(width / 2, height / 2);
  strokeWeight(8);
  ellipse(0, 0, clockSize, clockSize);

  //hour tic mark
  strokeWeight(10);
  strokeCap(SQUARE);
  for (let i = 0; i < 12; i++) {
    line(0, clockSize / 2 * 0.92, 0, clockSize / 2 * 0.75);
    rotate(360/12);
  }
  strokeWeight(4);
  strokeCap(SQUARE);
  for (let i = 0; i < 60; i++) {
    line(0, clockSize / 2 * 0.9, 0, clockSize / 2 * 0.8);
    rotate(360/60);
  }

  pop();
}
