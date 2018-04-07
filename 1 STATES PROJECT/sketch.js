// state project
// Musawer
// March 6, 2018

let state;
let inventory;
// let boxAnimation;
let goodLuckImg, clockImg, homelessImg, ringImg, classroomImg;
let buttonIsPressed, button2IsPressed;
let box = {
  x: 300,
  y: 75,
  width: 1000,
  height: 125,

};
let button = {
  x: 1250,
  y: 600,
  left: 1250,
  right: 1500,
  top: 600,
  bottom: 670,
  words: "Start",
  textsize: 45,
};

let button2 = {
  x: 1250,
  y: 450,
  left: 1250,
  right: 1500,
  top: 450,
  bottom: 520,
  words: "",
  textsize: 45,
};

let buttontext = {
  x: 1325,
  y: 650,
};

let buttontext2 = {
  x: 1325,
  y: 500,
};

function preload() {
  goodLuckImg = loadImage("images/goodluck.png"), clockImg = loadImage("images/clock.png"), homelessImg = loadImage("images/homeless.jpg");;
  bikeImg = loadImage("images/bike.jpg"), ringImg = loadImage("images/ring.jpg"), classroomImg = loadImage("images/classroom.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  state = "startScreen";
  // inventory = [];
  // boxAnimation = rect(button.x - 10, button.y - 10, 275, 90);
}

function draw() {
  playstory();
}

function mousePressed() {
  buttonIsPressed = mouseX >= button.left && mouseX <= button.right && mouseY >= button.top && mouseY <= button.bottom;
  button2IsPressed = mouseX >= button2.left && mouseX <= button2.right && mouseY >= button2.top && mouseY <= button2.bottom;
}


function makeTextBox() {
  rect(box.x, box.y, box.width, box.height, 25);
}

function makeButton() {
  rect(button.x, button.y, 250, 70, 15);
  textSize(button.textsize);
  text(button.words, buttontext.x, buttontext.y);
}

function makeButton2() {
  rect(button2.x, button2.y, 250, 70, 15);
  textSize(button2.textsize);
  text(button2.words, buttontext2.x, buttontext2.y);
}

function playstory() {
  if (state === "startScreen") {
    makeTextBox();
    makeButton();
    titleScreen();
  } else if (state === "act1") {
    background(255);
    makeTextBox();
    act1();
    makeButton();
    makeButton2();
  } else if (state === "act1A") {
    background(255);
    makeTextBox();
    act1A();
    makeButton();
  } else if (state === "act1B") {
    background(255);
    makeTextBox();
    act1B();
    makeButton();
    makeButton2();
  } else if (state === "act2A") {
    background(255);
    makeTextBox();
    act2A();
    makeButton();
    makeButton2();
  } else if (state === "act2B") {
    background(255);
    makeTextBox();
    act2B();
    makeButton();
    makeButton2();
  } else if (state === "act3A") {
    background(255);
    makeTextBox();
    act3A();
    makeButton();
    makeButton2();
  } else if (state === "act3B") {
    background(255);
    makeTextBox();
    act3B();
    makeButton();
    makeButton2();
  } else if (state === "act3C") {
    background(255);
    makeTextBox();
    act3C();
    makeButton();
    makeButton2();
  } else if (state === "act3D") {
    background(255);
    makeTextBox();
    act3D();
    makeButton();
    makeButton2();
  } else if (state === "act4A") {
    background(255);
    makeTextBox();
    act4A();
    makeButton();
    makeButton2();
  } else if (state === "act4B") {
    background(255);
    makeTextBox();
    act4B();
    makeButton();
    makeButton2();
  } else if (state === "act4C") {
    background(255);
    makeTextBox();
    act4C();
    makeButton();
    makeButton2();
  } else if (state === "act4D") {
    background(255);
    makeTextBox();
    act4D();
    makeButton();
    makeButton2();
  } else if (state === "act4E") {
    background(255);
    makeTextBox();
    act4E();
    makeButton();
    makeButton2();
  } else if (state === "act4F") {
    background(255);
    makeTextBox();
    act4F();
    makeButton();
    makeButton2();
  } else if (state === "act4G") {
    background(255);
    makeTextBox();
    act4G();
    makeButton();
  } else if (state === "act5A") {
    background(255);
    makeTextBox();
    act5A();
  } else if (state === "act5B") {
    background(255);
    makeTextBox();
    act5B();
    makeButton();
  } else if (state === "act5C") {
    background(255);
    makeTextBox();
    act5C();
    makeButton();
  } else if (state === "act5D") {
    background(255);
    makeTextBox();
    act5D();
  } else if (state === "act5E") {
    background(255);
    makeTextBox();
    act5E();
    makeButton();
  } else if (state === "act5F") {
    background(255);
    makeTextBox();
    act5F();
    makeButton();
  }
}

  function titleScreen() {
    box.height = 110;
    if (buttonIsPressed) {
      state = "act1";
      buttonIsPressed = false;
    }
    image(goodLuckImg, box.x + 135, box.y + 175);
    textSize(50);
    text("Welcome to the game of choices", box.x + 130, box.y - 20);
    textSize(18);
    text("Here you will be put on the spot with several decision that will have severe consequences as you continue with the game.", box.x + 15, box.y + 25);
    text("Some decision will lead to a life of money and glory, others to your demise. So choose carfully or risk it all.", box.x + 70, box.y + 50);
    text("Click the start button to continue.", box.x + 350, box.y + 75);
  }

  function act1() {
    button.words = "Play Hookey", button.textsize = 35, buttontext.x = 1280, box.width = 850;
    button2.words = "Go To school", button2.textsize = 35, buttontext2.x = 1275;
    if (buttonIsPressed) {
      state = "act1A";
      buttonIsPressed = false;
    }

    if (button2IsPressed) {
      state = "act1B";
      button2IsPressed = false;
    }

    textSize(50);
    text("Day 1", box.x + 15, box.y - 20);
    textSize(18);
    text("YAAAAAWN, you wake up and glance at your alarm clock. OH SHIT your late for school what do you.", box.x + 15, box.y + 25);
    text("After rolling around in your bed for a while you realize you have to get up", box.x + 70, box.y + 50);
    text("What Will You Do", box.x + 350, box.y + 75);
    image(clockImg, box.x, box.y + 112);

  }

  function act1A() {
    button.y = 600, button.words = "Game Over", button.textsize = 30, buttontext.x = 1297;
    state = "gameOver";
    textSize(50);
    text("Day 7300", box.x + 15, box.y - 20);
    textSize(18);
    text("You started skipping school from that day on and ended up failing high school. As a result your lovely parents kicked", box.x + 35, box.y + 25);
    text("you out and you have been living on the streets from then on.", box.x + 250, box.y + 50);
    text("Better luck next time.", box.x + 400, box.y + 75);
    image(homelessImg, box.x, box.y + 112);
  }

  function act1B() {
    button.words = "walk", button.textsize = 30, buttontext.x = 1297, box.width = 925;
    button2.words = "bike", button2.textsize = 30, buttontext2.x = 1297;
    if (buttonIsPressed) {
      state = "act2A";
      buttonIsPressed = false;
    }

    if (button2IsPressed) {
      state = "act2B";
      button2IsPressed = false;
    }

    textSize(50);
    text("Day 1, 10:15am", box.x + 15, box.y - 20);
    textSize(18);
    text("You frantically jump out of your bed, run downstairs and quickly have a bowl of cereal then on your way out you.", box.x + 15, box.y + 25);
    text("wonder whether you should quickly get to school on your bike or since you're already late, walk to school", box.x + 70, box.y + 50);
    text("you could take your time and walk to school", box.x + 350, box.y + 75);
    image(bikeImg, box.x, box.y + 112);

  }

  function act2A() {
    button.words = "Take Ring", button.textsize = 30, buttontext.x = 1297, box.width = 925;
    button2.words = "Leave It", button2.textsize = 30, buttontext2.x = 1297;
    if (buttonIsPressed) {
      state = "act3A";
      buttonIsPressed = false;
    }

    if (button2IsPressed) {
      state = "act3B";
      button2IsPressed = false;
    }

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(16);
    text("You grab your Air Macs and causualy walk to school knowing you will be late anyway. On the way there you hear a loud horn and", box.x, box.y + 25);
    text("look behind you and see a rusty truck racing towards the side walk about to hit you. So you jump out of the way and land", box.x, box.y + 50);
    text("on a large pile of dirt. Right after you jump the car swooooves back onto the street and you hear laughter from inside.", box.x, box.y + 75);
    text("You wipe all the dirt from your clothes and noticed a shiny metal ring on the ground. Do you take it", box.x, box.y + 100)
    image(ringImg, box.x, box.y + 112);

  }

  function act2B() {
    button.words = "Be A Savage", button.textsize = 30, buttontext.x = 1297, box.width = 925;
    button2.words = "Make Up Exscuse ", button2.textsize = 30, buttontext2.x = 1297;
    if (buttonIsPressed) {
      state = "act3C";
      buttonIsPressed = false;
    }

    if (button2IsPressed) {
      state = "act3D";
      button2IsPressed = false;
    }

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);

  }

  function act3A() {
    button.words = "Brad", button.textsize = 30, buttontext.x = 1297, box.width = 925;
    button2.words = "Charlie", button2.textsize = 30, buttontext2.x = 1297;
    if (buttonIsPressed) {
      state = "act4A";
      buttonIsPressed = false;
    }

    if (button2IsPressed) {
      state = "act4B";
      button2IsPressed = false;
    }

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);

  }

  function act3B() {
    button.words = "FIGHT Bully", button.textsize = 30, buttontext.x = 1297, box.width = 925;
    button2.words = "Ignore Him ", button2.textsize = 30, buttontext2.x = 1297;
    if (buttonIsPressed) {
      state = "act4C";
      buttonIsPressed = false;
    }

    if (button2IsPressed) {
      state = "act4D";
      button2IsPressed = false;
    }

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);

  }

  function act3C() {
    button.words = "Game Over", button.textsize = 30, buttontext.x = 1297, box.width = 925;
    if (buttonIsPressed) {
      state = "act4E";
      buttonIsPressed = false;
    }

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);

  }

  function act3D() {
    button.words = "Go Out", button.textsize = 30, buttontext.x = 1297, box.width = 925;
    button2.words = "Stay At School ", button2.textsize = 30, buttontext2.x = 1297;
    if (buttonIsPressed) {
      state = "act4F";
      buttonIsPressed = false;
    }

    if (button2IsPressed) {
      state = "act4G";
      button2IsPressed = false;
    }

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);

  }

  function act4A() {
    button.words = "Go Out", button.textsize = 30, buttontext.x = 1297, box.width = 925;
    button2.words = "Stay At School ", button2.textsize = 30, buttontext2.x = 1297;
    if (buttonIsPressed) {
      state = "act5A";
      buttonIsPressed = false;
    }

    if (button2IsPressed) {
      state = "act5B";
      button2IsPressed = false;
    }

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);

  }

  function act4B() {
    button.words = "Go Out", button.textsize = 30, buttontext.x = 1297, box.width = 925;
    if (buttonIsPressed) {
      state = "act5C";
      buttonIsPressed = false;
    }

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);

  }

  function act4C() {
    button.words = "Game Over", button.textsize = 30, buttontext.x = 1297, box.width = 925;

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);

  }

  function act4D() {
    button.words = "Go Out", button.textsize = 30, buttontext.x = 1297, box.width = 925;
    if (buttonIsPressed) {
      state = "act5D";
      buttonIsPressed = false;
    }

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);

  }

  function act4E() {
    button.words = "Go Out", button.textsize = 30, buttontext.x = 1297, box.width = 925;
    button2.words = "Stay At School ", button2.textsize = 30, buttontext2.x = 1297;
    if (buttonIsPressed) {
      state = "act5D";
      buttonIsPressed = false;
    }

    if (button2IsPressed) {
      state = "act5E";
      button2IsPressed = false;
    }

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);

  }

  function act4G() {
    button.words = "Go Out", button.textsize = 30, buttontext.x = 1297, box.width = 925;
    if (buttonIsPressed) {
      state = "act5F";
      buttonIsPressed = false;
    }

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);
  }

  function act5A() {

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);
  }

  function act5B() {
    button.words = "Game Over", button.textsize = 30, buttontext.x = 1297, box.width = 925;

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);
  }

  function act5C() {
    button.words = "Game Over", button.textsize = 30, buttontext.x = 1297, box.width = 925;

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);
  }

  function act5D() {

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);
  }

  function act5E() {
    button.words = "Game Over", button.textsize = 30, buttontext.x = 1297, box.width = 925;

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);
  }

  function act5F() {
    button.words = "GameOver", button.textsize = 30, buttontext.x = 1297, box.width = 925;

    textSize(50);
    text("Day 1, 10:30am", box.x + 15, box.y - 20);
    textSize(18);
    text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a choice", box.x + 15, box.y + 25);
    text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 70, box.y + 50);
    text(" around with a maniacal grin and asks why you are late.", box.x + 350, box.y + 75);
    image(classroomImg, box.x, box.y + 112);
  }
