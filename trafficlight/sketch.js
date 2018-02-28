//Traffic Light Starter Code
//Dan Schellenberg
//Feb 23, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.
let state;
let redLightDuration, yellowLightDuration, greenLightDuration;
let lastTimeLightChanged;

function setup() {
  createCanvas(600, 600);
  state = 1;
  redLightDuration = 3000;
  yellowLightDuration = 1000;
  greenLightDuration = 3000;
  lastTimeLightChanged = millis();
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkIflightSwitched();
  displayCorrectLight();
}

function checkIflightSwitched(){
  if (state === 1){
    if (millis() > lastTimeLightChanged + greenLightDuration){
      state = 2;
      lastTimeLightChanged = millis();
    }
  }
  if (state === 2){
    if (millis() > lastTimeLightChanged + yellowLightDuration){
      state = 3;
      lastTimeLightChanged = millis();
    }
  }
  if (state === 3){
    if (millis() > lastTimeLightChanged + redLightDuration){
      state = 1;
      lastTimeLightChanged = millis();
    }
  }
}

function displayCorrectLight(){
  if (state === 3){
    drawGreenLight();
  }
  else if (state === 1){
    drawRedLight();
  }
  else if (state === 2){
    drawYellowLight();
  }
}

function drawGreenLight(){
  fill(0,255,0);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
  text("GO",width/2,height/2);
}

function drawYellowLight(){
  fill(255,255,0);
  ellipse(width/2, height/2, 50, 50); //middle
}

function drawRedLight(){
  fill(255,0,0);
  ellipse(width/2, height/2 - 65, 50, 50); //top
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);
}
