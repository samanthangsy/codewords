var mode = 0;
var i=0;
var song;
var analyzer;
var t=0;

var para1 = "CLICK TO GLITCH";
var para2 = "Malfunction and failure are not signs of improper production. On the contrary, they indicate the active production of the “accidental potential” in any product. The invention of the ship implies its wreckages, the steam engine and the locomotive discover the derailment.";
//var para3 = "I don’t use the accident. I deny the accident. There is no accident, just as there is no beginning and no end. -Jackson Pollock ";
var para3 = "SCROLL";
var para4 = "CLICK TO SEE MORE";
var para5 = "You cannot prohibit the catastrophe, you must surf it!";
//var para5 = "OUR TAVERNS AND OUR METROPOLITAN STREETS, OUR OFFICES AND FURNISHED ROOMS, OUR RAILROAD STATIONS AND OUR FACTORIES APPEARED TO HAVE US LOCKED UP HOPELESSLY. THEN CAME THE FILM AND BURST THIS PRISON-WORLD ASUNDER BY THE DYNAMITE OF THE TENTH OF THE SECOND, SO THAT NOW, IN THE MIDST OF ITS FAR-FLUNG RUINS AND DEBRIS, WE CALMLY AND ADVENTUROUSLY GO TRAVELLING. -WALTER BENJAMIN"; 

function preload() {
  font = loadFont('data/MaisonNeueMono-Regular.otf');
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
  fill(255); //starting colour of text
  textSize(100);
  textAlign(CENTER);
  text(para1,windowWidth/2,windowHeight/2);
 }
 
function scene1() {
  background(0); 
  text(para3,windowWidth/2,windowHeight/2);
  text(para4,windowWidth/1.3,windowHeight/0.55);
  push();
  translate(500,500);
  rotate(mouseX, mouseY, radians(frameCount*100)); //rate and when the text rotates
    
  // each time draw() is called, i is incremented by one  
  //referenced from https://editor.p5js.org/doubleshow/sketches/BJdU6tFSM
  i = i + 1
  
  if (i % 10 === 0){
       
  fill(0,255,0);
  textSize(20);
  textAlign(LEFT);
  text(para2,windowWidth/4,windowHeight/4, windowWidth/2, windowHeight/4); //apply and set positon of text
  
   } else {
  // all the other times
  fill(255,0,0);
  textSize(20);
  textAlign(LEFT);
  text(para2,windowWidth/4,windowHeight/4,windowWidth/2,windowHeight/4); //apply and set positon of text
  pop();

  frameRate(500);

   }
}

function scene2() {
  noStroke();
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

    text(para5,myX, myY, 100); // draws each chunk of text to tile 
    }
  }
  t = t + 0.01; // update time

}

//IN CASE OF RESIZE, WINDOW RESIZE CLEARS THE PAGE AND RECREATES SKETCH
//referenced taj's code

function windowResized() {
  resizeCanvas(windowWidth,windowHeight*9);
  
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
  song.play();
  song.loop();
  song.volume(random(0,100));
}
