// state project
// Musawer
// March 6, 2018

// let boxAnimation;
let state;
let inventory;
let buttonIsPressed, button2IsPressed;
let goodLuckImg, clockImg, homelessImg, ringImg, classroomImg, auctionImg, bullyImg, expelledImg, fastFoodImg,
  fireImg, hospitalImg, jailImg, kidsImg, lunchImg, moneyWinImg, poisonImg, subsWinImg, videogameImg, bradImg, bikeImg;
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
  goodLuckImg = loadImage("images/goodluck.png"), clockImg = loadImage("images/clock.png"), homelessImg = loadImage("images/homeless.jpg"),
  bikeImg = loadImage("images/bike.jpg"), ringImg = loadImage("images/ring.jpg"), classroomImg = loadImage("images/classroom.jpg"),
  auctionImg = loadImage("images/auction.jpg"), bullyImg = loadImage("images/bully.jpg"), expelledImg = loadImage("images/expelled.jpg"),
  fastFoodImg = loadImage("images/fast food.jpg"), fireImg = loadImage("images/fire.jpg"), hospitalImg = loadImage("images/hospital.jpeg"),
  jailImg = loadImage("images/jail.jpg"), kidsImg = loadImage("images/kids.jpeg"), lunchImg = loadImage("images/lunch.jpg"),
  moneyWinImg = loadImage("images/money win.jpg"), poisonImg = loadImage("images/poison.jpg"), subsWinImg = loadImage("images/subs.jpg"),
  videogameImg = loadImage("images/video games.jpg"), bradImg = loadImage("images/brad.jpg");
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

function youWin(){
  textSize(150);
  text("YOU", box.x + 950, box.y + 225);
  text("WIN", box.x + 975, box.y + 400);
}

function youLose(){
  textSize(125);
  text("YOU", box.x + 950, box.y + 225);
  text("LOSE", box.x + 930, box.y + 400);
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
    youLose();
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
    youLose();
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
    youLose();
  } else if (state === "act4C") {
    background(255);
    makeTextBox();
    act4C();
    youLose();
  } else if (state === "act4D") {
    background(255);
    makeTextBox();
    act4D();
    youLose();
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
    youLose();
  } else if (state === "act5A") {
    background(255);
    makeTextBox();
    act5A();
    makeButton();
    makeButton2();
  } else if (state === "act5B") {
    background(255);
    makeTextBox();
    act5B();
    youLose();
  } else if (state === "act5C") {
    background(255);
    makeTextBox();
    act5C();
    youWin();
  } else if (state === "act5D") {
    background(255);
    makeTextBox();
    act5D();
    youLose();
  } else if (state === "act6A") {
    background(255);
    makeTextBox();
    act6A();
    youWin();
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
  text("Here, you will be put on the spot with several decision that will have severe consequences as you continue with the game.", box.x + 15, box.y + 25);
  text("Some decisions will lead to a life of money and glory, others to your demise. So choose carfully or risk it all.", box.x + 70, box.y + 50);
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
  text("Day 1, 10:00am", box.x + 15, box.y - 20);
  textSize(18);
  text("YAAAAAWN, you wake up and glance at your alarm clock. OH SHIT you're late for school what are you", box.x + 18, box.y + 25);
  text("doing. After rolling around in your bed for a while you realize you have to get up.", box.x + 113, box.y + 50);
  text("What Do You Do?", box.x + 350, box.y + 75);
  image(clockImg, box.x, box.y + 112);

}

function act1A() {
  textSize(50);
  text("Day 7300, 6:00pm", box.x + 15, box.y - 20);
  textSize(18);
  text("You started skipping school from that day on and ended up failing high school. As a result your lovely", box.x + 20, box.y + 25);
  text("parents kicked you out and you have been living on the streets from then on.", box.x + 120, box.y + 50);
  text("Better luck next time.", box.x + 335, box.y + 75);
  image(homelessImg, box.x, box.y + 112);
}

function act1B() {
  button.words = "Walk", button.textsize = 45, buttontext.x = 1330, box.width = 925;
  button2.words = "Bike", button2.textsize = 45, buttontext2.x = 1330;
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
  text("You frantically jump out of your bed, run downstairs and quickly have a bowl of cereal then on your way out. You", box.x + 15, box.y + 25);
  text("wonder whether you should quickly get to school on your bike or since you're already late,", box.x + 100, box.y + 50);
  text("you could take your time and walk to school.", box.x + 295, box.y + 75);
  image(bikeImg, box.x, box.y + 112);

}

function act2A() {
  button.words = "Take The Ring", button.textsize = 30, buttontext.x = 1280, box.width = 925;
  button2.words = "Leave It", button2.textsize = 30, buttontext2.x = 1320;
  if (buttonIsPressed) {
    state = "act3A";
    buttonIsPressed = false;
  }

  if (button2IsPressed) {
    state = "act3B";
    button2IsPressed = false;
  }

  textSize(50);
  text("Day 1, 10:45am", box.x + 15, box.y - 20);
  textSize(16);
  text("You grab your Air Max and casually walk to school knowing you will be late anyway. On the way there you hear a loud horn", box.x + 20, box.y + 25);
  text("and look behind you and see a rusty truck racing towards the side walk about to hit you. So you jump out of the way and land", box.x + 20, box.y + 50);
  text("on a large pile of dirt. Right after you jump the car sweeerrvess back onto the street and you hear laughter from inside.", box.x + 50, box.y + 75);
  text("You wipe all the dirt from your clothes and noticed a shiny metal ring on the ground. Do you take it", box.x + 100, box.y + 100);
  image(ringImg, box.x, box.y + 112);

}
function act2B() {
  button.words = "Be A Savage", button.textsize = 30, buttontext.x = 1290, box.width = 925;
  button2.words = "Make Up Exscuse ", button2.textsize = 30, buttontext2.x = 1255;
  if (buttonIsPressed) {
    state = "act3C";
    buttonIsPressed = false;
  }

  if (button2IsPressed) {
    state = "act3D";
    button2IsPressed = false;
  }

  textSize(50);
  text("Day 1, 10:35am", box.x + 15, box.y - 20);
  textSize(18);
  text("When you get to school you realize how sweaty you've gotten from biking so fast but you never really had a", box.x + 35, box.y + 25);
  text("choice because you were so late. As you enter the classroom everyone stares at you and the teacher turns ", box.x + 35, box.y + 50);
  text("around with a maniacal grin and asks why you are late.", box.x + 235, box.y + 75);
  image(classroomImg, box.x, box.y + 112);

}

function act3A() {
  button.words = "Brad", button.textsize = 45, buttontext.x = 1330, box.width = 925;
  button2.words = "Charlie", button2.textsize = 45, buttontext2.x = 1305;
  if (buttonIsPressed) {
    state = "act4A";
    buttonIsPressed = false;
  }

  if (button2IsPressed) {
    state = "act4B";
    button2IsPressed = false;
  }

  textSize(50);
  text("Day 1, 11:07am", box.x + 15, box.y - 20);
  textSize(18);
  text("When you get to school you realize lunch has already started so make your way to your locker. When you get ", box.x + 25, box.y + 25);
  text("there you see two of your close friends at there own lockers. One of them being the obnoxious ", box.x + 80, box.y + 50);
  text("Charlie and the other being the spoiled Bran. Who do you hang out with.", box.x + 175, box.y + 75);
  image(kidsImg, box.x, box.y + 112);

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
  text("Day 1, 11:05am", box.x + 15, box.y - 20);
  textSize(18);
  text("When you get to school you you see that same rusty truck that almost ran you over along with the culprits.", box.x + 40, box.y + 25);
  text("They look like there dealing something so it might be best to just walk away and ingnore them but a ", box.x + 67, box.y + 50);
  text("part of you wants to confront them, what do you do?", box.x + 260, box.y + 75);
  image(bullyImg, box.x, box.y + 112);

}

function act3C() {
  textSize(50);
  text("Day 1, 10:40am", box.x + 15, box.y - 20);
  textSize(18);
  text("You say to your teacher that someone told me to go to hell, I couldn't find it at first but now I'm here.", box.x + 60, box.y + 25);
  text("Your teacher gives you the evil eye and tell you to take a trip to the principles office.", box.x + 120, box.y + 50);
  text("When you get there you explain everything but he expels you anyway.", box.x + 165, box.y + 75);
  image(expelledImg, box.x, box.y + 112);

}

function act3D() {
  button.words = "Go Out", button.textsize = 30, buttontext.x = 1327, box.width = 925;
  button2.words = "Stay At School ", button2.textsize = 30, buttontext2.x = 1280;
  if (buttonIsPressed) {
    state = "act4E";
    buttonIsPressed = false;
  }

  if (button2IsPressed) {
    state = "act4F";
    button2IsPressed = false;
  }

  textSize(50);
  text("Day 1, 11:10am", box.x + 15, box.y - 20);
  textSize(18);
  text("The teacher sighs, gives you a late slip and continues his boooringg lecture. After class, lunch starts and ", box.x + 55, box.y + 25);
  text("you dont see any of your friends. You can either go walk to the near by fast food places or", box.x + 110, box.y + 50);
  text("stay at school and mess around.", box.x + 325, box.y + 75);
  image(lunchImg, box.x, box.y + 112);

}

function act4A() {
  button.words = "Go To Auction", button.textsize = 30, buttontext.x = 1283, box.width = 925;
  button2.words = "Go Home", button2.textsize = 30, buttontext2.x = 1315;
  if (buttonIsPressed) {
    state = "act5A";
    buttonIsPressed = false;
  }

  if (button2IsPressed) {
    state = "act5B";
    button2IsPressed = false;
  }

  textSize(50);
  text("Day 1, 11:30am", box.x + 15, box.y - 20);
  textSize(18);
  text("You go out with Brad and he treats you to some ice cream. While out with him you tell him about your crazy", box.x + 35, box.y + 25);
  text("morning, about how you almost got run over and how you found this cool ring on the ground. You show him the", box.x + 25, box.y + 50);
  text("ring and brad looked suprised, he tells you to bring it to his dads auction later tonight and.", box.x + 125, box.y + 75);
  text("how it might be worth something. What to you do after school?", box.x + 225, box.y + 100);
  image(bradImg, box.x, box.y + 112);

}

function act4B() {
  textSize(50);
  text("Day 1, 5:10pm", box.x + 15, box.y - 20);
  textSize(18);
  text("Charlie somehow convices you to come rob this gas station with him. While there he pulls out a bb gun with the", box.x + 22, box.y + 25);
  text("tip painted black and points it at the owner while you fill a bag with cash and some skittles. Five minutes", box.x + 53, box.y + 50);
  text("later cops show and arrest you guys right when you are about to leave. And take you to a holding cell", box.x + 60, box.y + 75);
  text("and take you to a holding cell where you await the trail", box.x + 240, box.y + 100);
  image(jailImg, box.x, box.y + 112);

}

function act4C() {
  textSize(50);
  text("Day 1, 1:30pm", box.x + 15, box.y - 20);
  textSize(18);
  text("You go up to the 2 knuckle heads and yell WTF, learn to drive. They come closer and start laughing at you then ", box.x + 25, box.y + 25);
  text("suddenly he pushes you down and the other kid kicks you repeatly for a couple minutes until you black out.", box.x + 43, box.y + 50);
  text("When you wake up your in the hospital and you feel terrible.", box.x + 230, box.y + 75);
  image(hospitalImg, box.x, box.y + 112);

}

function act4D() {
  textSize(50);
  text("Day 1, 1:30am", box.x + 15, box.y - 20);
  textSize(18);
  text("You choose to hold in your anger and walk by without saying anything. They still notice you and start coming ", box.x + 35, box.y + 25);
  text("closer. Then they start calling you a crybaby and one of them pushes you down, you stick out your foot and   ", box.x + 40, box.y + 50);
  text("trip him but another guy kicks you repeatedly until you black out. When you wake up you're ", box.x + 115, box.y + 75);
  text("in the hospital and everthing hurts.", box.x + 340, box.y + 100);
  image(hospitalImg, box.x, box.y + 112);

}

function act4E() {
  button.words = "Subway", button.textsize = 30, buttontext.x = 1322, box.width = 925;
  button2.words = "Mc Donalds", button2.textsize = 30, buttontext2.x = 1299;
  if (buttonIsPressed) {
    state = "act5C";
    buttonIsPressed = false;
  }

  if (button2IsPressed) {
    state = "act5D";
    button2IsPressed = false;
  }

  textSize(50);
  text("Day 1, 11:45am", box.x + 15, box.y - 20);
  textSize(18);
  text("You start walking towards the plaza of food stores and you see a Subway right beside a McDonalds.", box.x + 60, box.y + 25);
  text("Since you dont have too much money these are your only options, do you stay kinda healthy and ", box.x + 75, box.y + 50);
  text("eat at Subway or treat your self to McDonalds.", box.x + 273, box.y + 75);
  image(fastFoodImg, box.x, box.y + 112);

}

function act4F() {
  textSize(50);
  text("Day 1, 12:30pm", box.x + 15, box.y - 20);
  textSize(18);
  text("You choose save some money and not eat lunch, insted you go to the washroom and enter a stall to take a dump.", box.x + 15, box.y + 25);
  text("While in there you have your headphones in and your jamming not aware that the fire alarm was pulled.", box.x + 50, box.y + 50);
  text("Eventualy you start to smell smoke and get out of the stall only to see a blaze of fire all around.", box.x + 90, box.y + 75);
  text("you but it was to late. You were burnt to a crisp.", box.x + 275, box.y + 100);
  image(fireImg, box.x, box.y + 112);
}

function act5A() {
  button.words = "Sell it", button.textsize = 30, buttontext.x = 1333, box.width = 925;
  button2.words = "... Dont be stupid", button2.textsize = 30, buttontext2.x = 1267;
  if (buttonIsPressed) {
    state = "act6A";
    buttonIsPressed = false;
  }

  if (button2IsPressed) {
    state = "act5A";
    button2IsPressed = false;
  }

  textSize(50);
  text("Day 1, 7:30pm", box.x + 15, box.y - 20);
  textSize(18);
  text("Brad picks you up at your place and takes you to his dads auction. When you get there you guys go show brads", box.x + 17, box.y + 25);
  text("dad the ring. He studies it for a good 5 minutes then shockingly tell you that this was a ring from 2000 years ago", box.x + 21, box.y + 50);
  text("from the time of Jusius Ceaser. He then says that it is worth a fortune and you should highly consider.", box.x + 69, box.y + 75);
  text("selling. What will you do?", box.x + 357, box.y + 100);
  image(auctionImg, box.x, box.y + 112);
}

function act5B() {
  textSize(50);
  text("Day 2, 4:30am", box.x + 15, box.y - 20);
  textSize(18);
  text("You missed out on a golden opportunity and went home to play video games all night. While playing on your ", box.x + 15, box.y + 25);
  text("xbox360 you were sniping some kids in Call Of Duty, when suppenly the game crashes and you see a red", box.x + 70, box.y + 50);
  text("ring around the xbox360 logo. You were then force to play on your Wii U what a tragedy.", box.x + 350, box.y + 75);
  image(videogameImg, box.x, box.y + 112);
}

function act5C() {
  textSize(50);
  text("FOOD WIN", box.x + 15, box.y - 20);
  textSize(18);
  text("You pick Subway to stay kinda healthy and you go in to order your favorite, the pizza sub. When you", box.x + 15, box.y + 25);
  text("reach the checkout as you tap your debit, suddenly confetti flys everywhere and the worker says", box.x + 70, box.y + 50);
  text("you are the 1 millionth custumer at this subway and you win free subs for life.", box.x + 350, box.y + 75);
  image(subsWinImg, box.x, box.y + 112);
}

function act5D() {
  textSize(50);
  text("Day 1, 12:00am", box.x + 15, box.y - 20);
  textSize(18);
  text("You go into Mc Donalds and order icecream but there machine was OUT OF ORDER so you settle for a Big ", box.x + 15, box.y + 25);
  text("Mac Meal. It takes a few minutes but you eventualy get your food. As your eating the Big Mac you", box.x + 70, box.y + 50);
  text("start to feel wierd and then puke all over the resturunt. They take you to the hospital where", box.x + 350, box.y + 75);
  text("the doctor says you were heavly food poisoned.", box.x + 350, box.y + 100);
  image(poisonImg, box.x, box.y + 112);
}

function act6A() {
  textSize(50);
  text("MONEY ENDING", box.x + 15, box.y - 20);
  textSize(18);
  text("Brads dad starts the bid for the Roman ring and immediately a man in a black tux bids 1 million dollars. ", box.x + 15, box.y + 25);
  text("Everyones mouths drop but then right after a man in a white tux bids 2.5 million. The two continue", box.x + 70, box.y + 50);
  text("until suddenly a women bids 100 million dolars. Going 1,2,3 SOLD. The women says shes from the.", box.x + 350, box.y + 75);
  text("New York museum as was looking for rare artifacts. You then get a huge check.", box.x + 350, box.y + 100);
  image(moneyWinImg, box.x, box.y + 112);
}
