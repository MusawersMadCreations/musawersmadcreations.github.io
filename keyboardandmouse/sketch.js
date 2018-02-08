// Wierd Wepsite
// Musawer
// Feb 8, 2018

// global variables


function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
}

function mousePressed() {
  noStroke()
  fill(random(255),random(255),random(255),random(255))

  if (mouseButton === LEFT) {
    rect(mouseX, mouseY, random(100), random(100));
  }
  else if (mouseButton === RIGHT) {
    ellipse(mouseX, mouseY, random(100), random(100));
  }
}

function keyPressed() {
  if (key === "w") || (key === "W") {
    background(255);
  }
  else if (key === "b") || (key === "B") {
    background(0);
  }
}
