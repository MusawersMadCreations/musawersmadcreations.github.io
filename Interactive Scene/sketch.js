// mouse and keyboard interaction
// Musawer
// Feb 9, 2018

let duck;



function preload(){
duck = loadImage("images/duck.png");
}

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
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    background(255);
  }
}
