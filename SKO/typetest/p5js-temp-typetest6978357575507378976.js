function preload() {
//Ensure the .ttf or .otf font stored in the assets directory 
//is loaded before setup() and draw() are called 
MaisonNeue = loadFont('data/MaisonNeue-Medium.otf');
}


function setup() {
createCanvas(600,600);
background(220);
fill(0);
textSize(32);
textFont(MaisonNeue);
textAlign(CENTER);
}


function draw() {
  textSize(32);
  text('hello world', 300,300);
  
  textSize(8);
  text('hello world', 300,100);
  
  textSize(50);
  text('hello world', 300,500);
  

}
