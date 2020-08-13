//original code by Karen Ann Donnachie 
//adapted by Samantha Ng

function preload() {
  SYR = loadFont('data/SyrCOMNisibinOutline.otf');
}
  var spin=0;
  var letterSize=24;

function setup() {
  createCanvas(600,600);
  background(240);
  fill(0);
  angleMode(DEGREES);//sets measurement unit to degrees instead of standard radians
  textAlign(CENTER);
  frameRate(20); 
}


function draw() {
  fill(122,203,10); //sets text ink color
  translate(300,300);
  rotate(spin);
  textSize(letterSize);
  textFont(SYR);
  text ('WELL WELL WELL HOW THE TURNTABLES', 0,0);
  spin+=map(mouseX,0,600,-3,3);
  letterSize=map(mouseY,0,600,8,72);
  
  stroke(0);
  fill(240,30); //shade of grey with alpha value

  noStroke();
  fill(240); //writing over layers
  pop();
  background(240,30);
}
