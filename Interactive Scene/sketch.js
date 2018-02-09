// mouse and keyboard interaction
// Dan Schellenberg
// Feb 8, 2018


function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault())
}

function draw() {

}

function mousePressed() {

  if (mouseButton === LEFT) {
    clear();
    fill(255,0,0);
    ellipse(mouseX,mouseY,50,50);
    fill(255,255,255);
    ellipse(mouseX,mouseY,30,30);
    fill(0,0,0,);
    ellipse(mouseX,mouseY,10,10);

  }
  else if (mouseButton === RIGHT) {
    ellipse(mouseX, mouseY, random(50, 200), random(50, 200));
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    background(255);
  }
  else if (key === 'b' || key === 'B') {
    background(0);
  }
}
