// timer oop
// Dan Schellenberg
// Apr 17, 2018

let makebubble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  makebubble = new Bubble(random(width), height, 100, 100);
}
function draw() {}
  bubble.display();
  }


class Bubble {
  constructor(x,y,r,dy) {
    this.x = x;
    this.y = y;
  }

   display(){
    ellipse(random(width), height, 150, 150);

   }
   rise(){
   }
}
