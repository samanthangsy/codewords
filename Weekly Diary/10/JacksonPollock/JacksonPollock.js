//run animation function by Samantha Ng 
//remix from https://editor.p5js.org/creativecoding/sketches/686rYsJKr
//For CODEWORDS 2020 Assignment 3
//this is quote 2 out of 5

//let message="I DON'T USE THE ACCDIENT. I DENY THE ACCIDENT. THERE IS NO ACCIDENT, JUST AS THERE IS NO BEGINNING AND NO END -JACKSON POLLOCK";
let message="I don’t use the accident. I deny the accident. There is no accident, just as there is no beginning and no end. -Jackson Pollock ";
var positions = [];
var targets = [];

//let runFont;
let restFont;

let runTowards = true;
let runSpeed = 10;
let restSpeed = 0;
let currentSpeed = restSpeed;
let ts = 10;

let pauseTime = 1000;
let reachedTargetAt = 50;
let hasReachedTarget = true;

function preload(){
  runFont = loadFont("data/OpenSans-Bold.ttf");
  restFont = loadFont("data/OpenSans-Bold.ttf");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  // Set up the positions and targets arrays
  while(positions.push([0, 0]) < message.length);
  while(targets.push([0, 0]) < message.length);
  
  textSize(ts);
  textFont(restFont);
  
  background(0);

  pickNewTarget();
}

function draw(){  
  background(0);
  fill(255);
  
  
    //Prompt 1
    //fill('WHITE');
    //textSize(20)
    //text('CLICK AROUND', windowWidth/10,windowHeight/9) ;
    
    //Prompt 2
    //fill('WHITE');
    //textSize(20)
    //text('TYPE 1-5 FOR MORE', windowWidth/1.14,windowHeight/1.1) ;
    
    
  if (hasReachedTarget){
    textFont(restFont);
    
    if (runTowards){
      fill(255, 0, 0);
    }
    
    let elapsedTime = millis() - reachedTargetAt;

    if (elapsedTime > pauseTime){
      pickNewTarget();
    }
  }
  else {
    textFont(runFont);
  }

  drawChars();
  
  updatePositions();
  updateCurrentSpeed();
}

function mousePressed(){
  pickNewTarget();
}

function drawChars(){
  for (let i = 0; i < message.length; i++){
    text(message.charAt(i), positions[i][0], positions[i][1]);
  }
}

function updatePositions(){
  let allHaveReached = true;
  let thisHasReached = false;
  
  // Update the positions a little bit
  for (let i = 0; i < message.length; i++){
    let distX = abs(positions[i][0] - targets[i][0]);
    let distY = abs(positions[i][1] - targets[i][1]);

    let changeX = random(currentSpeed);
    let changeY = random(currentSpeed);

    thisHasReached = changeX > distX && changeY > distY;
    
    if (positions[i][0] > targets[i][0]){
      changeX = -changeX;
    }
    
    if (positions[i][1] > targets[i][1]){
      changeY = -changeY;
    }
    
    positions[i][0] += changeX;
    positions[i][1] += changeY;
    
    allHaveReached = allHaveReached && thisHasReached;
  }
  
  if (!hasReachedTarget && allHaveReached){
      hasReachedTarget = true;
      reachedTargetAt = millis();  
    }
}

function updateCurrentSpeed(){
  if (hasReachedTarget){
    if (currentSpeed >= restSpeed){
      currentSpeed -= (currentSpeed - restSpeed) * 0.5;
    }
    else {
      currentSpeed += 1;
    }
  }
  else {
    if (currentSpeed <= runSpeed){
      currentSpeed += (runSpeed - currentSpeed) * 0.25;
    }
    else {
      currentSpeed -= 1;
    }
  }
}

function pickNewTarget(){
  if (!runTowards && random(1) > 0.75){
    runTowards = true;
    
    let tX = random(ts, width - 3 * ts);
    let tY = random(ts, height - ts);
    
    for (let i = 0; i < message.length; i++){
      targets[i][0] = tX + i * ts;
      targets[i][1] = tY;
    }
  }
  else {
    runTowards = false;
    
    for (let i = 0; i < message.length; i++){
      targets[i][0] = random(ts, width - ts);
      targets[i][1] = random(ts, height - ts);
    }
  }
  
  hasReachedTarget = false;

}
