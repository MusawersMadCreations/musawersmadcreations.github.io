// mouse and keyboard interaction
// Musawer
// Feb 9, 2018
// This is a program that imitates the popular pop culture meme nyan cat
// some of the keys you should know is left click is to enable stars, "m" is for mute and "n" is for unmute
// enjoy the meme




function setup() {
  createCanvas(windowWidth, windowHeight );
  background(255);
}

function draw() {
  if (mouseIsPressed && keyIsPressed && key === "t" || key === "T"){
    let x = random(width);
    let y = random(height);
    fill(random(0,255),random(0,255),random(0,255));
    triangle(x, y, x - 50, y + 150, x + 50, y + 150);
  }

}
