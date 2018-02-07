//GLOBAL VAL
  let x;
  let y;


function setup() {
  createCanvas(windowWidth, windowHeight );
  x = width/2
  y = height/2
}

function draw() {
  background(255);

  if (keyIsPressed) {
    moveStickman();
  }

  drawStickman(mouseX,mouseY);
  drawStickman(x,y);
}
function moveStickman() {
  print(key);
  if (key == 'w' || key == 'W') {
    y = y - 30
  }
  if (key == 's' || key == 'S') {
    y = y + 30
  }
  if (key == 'a' || key == 'A') {
    x = x - 30
  }
  if (key == 'd' || key == 'D') {
    x = x + 30
  }
}


function drawStickman(x,y) {
  // body
  line(x,y,x,y+200)

  //head
  fill(255,0,247,)
  ellipse(x,y,100,100);

  // hat
  fill("blue");
  rect(x-50,y-80,100,30);
  rect(x-25,y-130,50,50);

  //arms
  line(x-50, y+100, x+50, y+100);

  //legs
  line(x, y+200, x-50, y+250);
  line(x, y+200, x+50, y+250);

}
