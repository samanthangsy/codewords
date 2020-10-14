var mode = 0;

var i=0;

var song;
var analyzer;

var t=0;

//SCENE 0
var para0 = "EMBRACE THE GLITCH";
var para1 = "Our taverns and our metropolitan streets, our offices and furnished rooms, our railroad stations and our factories appeared to have us locked up hopelessly. Then came the film and burst this prison-world asunder by the dynamite of the tenth of the second, so that now, in the midst of its far-flung ruins and debris, we calmly and adventurously go traveling.";
var para2 = "CLICK to start adventure";

//SCENE 1
var para3 = "Malfunction and failure are not signs of improper production. On the contrary, they indicate the active production of the “accidental potential” in any product. The invention of the ship implies its wreckages, the steam engine and the locomotive discover the derailment.";
var para4 = "SCROLL";
var para5 = "CLICK to surf";

//SCENE 2
var para6 = "You cannot prohibit the catastrophe, you must surf it!";

function preload() {
  font1 = loadFont('data/MaisonNeueMono-Regular.otf');
  font2 = loadFont('data/MaisonNeueExtended-Demi.otf');
  song = loadSound('data/gpsjammeroutput.mp3');
}
function setup() {
  createCanvas (windowWidth,windowHeight*2);
  song.setVolume(0.1);
  song.loop ();
}

function draw() {
  switch (mode) {
    case 0:
      scene0();
      break;
    case 1:
      scene1();
      break;
    case 2:
      scene2();
      break;
    default:  
  }
}

function scene0() {

  background(0);
  textAlign (CENTER,CENTER);
  
  //HEADER
  
  fill(random(255),random(255),random(255));
  textFont(font2); 
  textSize(80);
  text (para0,width/11,height/50,1200,700);
  
  //CUE1
  textSize (25);
  text (para2,width/6.5,height/1.7,1000,700);
  
  //BODY COPY 1 
  textFont(font1); 
  textSize (38);
  fill(255); 
  text (para1,width/6.5,height/4,1000,900); 
 
} 
 
function scene1() {
  
  background(0); 
  fill(random(255),random(255),random(255));
  textSize (25);
  textFont(font2);
  text(para4,width/4,height/1.8);
  text(para5,width/1.5,height/1.2);
  
  
  push();
  translate(500,500);
  rotate(mouseX, mouseY, radians(frameCount*100)); //rate and when the text rotates
  // each time draw() is called, i is incremented by one  
  //referenced from https://editor.p5js.org/doubleshow/sketches/BJdU6tFSM
  i = i + 1

  textFont(font1); 

  if (i % 10 === 0){
  
  fill(0,255,0);
  textSize(20);
  textAlign(LEFT);
  text(para3,windowWidth/4,windowHeight/4, windowWidth/2, windowHeight/4); //apply and set positon of text
  
   } else {
  // all the other times
  fill(255,0,0);
  textSize(20);
  textAlign(LEFT);
  text(para3,windowWidth/4,windowHeight/4,windowWidth/2,windowHeight/4); //apply and set positon of text
  pop();
  
  frameRate(500);
   }
   
  fill(random(255),random(255),random(255));
  textSize (25);
  textFont(font2);
  text(para4,width/4,height/1.8);
  text(para5,width/1.5,height/1.2);
}

function scene2() {
  
  noStroke();
  textSize(10);
  fill(255,204,0);
  background(0, 40); // translucent background (creates trails)
  
  //tiles the text along grids on the x and y axis
    for (let x = 0; x <= width; x = x + 50) {
    for (let y = 0; y <= height; y = y + 100) {
      
  //starting point of each chunk of text depends on mouse position
    const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
    const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
  
  //varies based on the particle's location
    const angle = xAngle * (x/width) + yAngle * (y/height);
    
    const myX = x + 100 * cos(100 * PI * t + angle);
    const myY = y + 100 * sin(100 * PI * t + angle);

    text(para6,myX, myY, 100); // draws each chunk of text to tile 
    }
  }
  t = t + 0.01; // update time

}

//IN CASE OF RESIZE, WINDOW RESIZE CLEARS THE PAGE AND RECREATES SKETCH
//referenced taj's code

function windowResized() {
  resizeCanvas(windowWidth,windowHeight*2);
  
  var multiplier = map(width,200,1800,0.25,1);
  var typesize = (map(width,300,1650,50,195));
  textSize (typesize*multiplier);
  spacesize = 50*multiplier; //width of space between letters
  linesize = 280*multiplier;
}

//WHEN MOUSE IS PRESSED
function mousePressed() {
  mode++;
  song.play();
}

//WHEN SCROLLING
function mouseWheel() {
  textSize(random);
  background(random(255),random(255),random(255));
  song.volume(random(0,100));
}
