// mouse and keyboard interaction
// Musawer
// Feb 9, 2018
// This is a program that imitates the popular pop culture meme nyan cat
// some of the keys you should know is left click is to enable stars, "m" is for mute and "n" is for unmute
// enjoy the meme

let x,y;


function setup() {
  createCanvas(width,height);
  x = 0;
  y = 0;
}

function draw() {
  moveSquare();

}

function moveSquare(){
  fill("black");
  background(255);
  rect(x,y,300,300);
  if (y === 0){
    x = x + 40;
    background(255);
    rect(x,y,300,300);
  }
}
