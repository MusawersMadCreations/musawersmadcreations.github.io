// DVD Bounce - The Office Shoutout
// Dan Schellenberg
// Feb 15, 2018

// global variables


function setup() {
  createCanvas(400, 400);
}

function draw() {
  for (let a = 50; a < 400; a + 50){
    for (let b = 50; b < 400 ; a + 50){
      rect(a,b,50,50);
    }
  }
}
