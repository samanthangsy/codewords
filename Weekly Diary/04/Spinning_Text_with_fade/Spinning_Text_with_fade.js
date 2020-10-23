function preload() {
//Ensure the .ttf or .otf font stored in the assets directory 
//is loaded before setup() and draw() are called 
SYR = loadFont('data/SyrCOMNisibinOutline.otf');

}
var spin=0;

function setup() {
createCanvas(600,600);
background(240);
fill(0);
angleMode(DEGREES); //specifying DEGREE ANGLES as the unit it is going to be angled instead of RADIANS
textFont(SYR);
textAlign(CENTER);
frameRate(5);//slowing down the framerate to 5 
}


function draw() {
  fill(0);//text ink colour
  translate(300,300); //moves point of ref to this point
  rotate(spin); //ref spin variable 
  textSize(50);
  text('asdfghjklzxcvbnmqwertyuiop', 0,0); //changing this number will create offsets 
  //spin+=5; //spacing between each offset 
  //spin+=spin+10;//acceleration 
  //spin=spin+int(mouseX/50);//using mouse interaction to control spinning on/off
  spin=spin+int(mouseX/50-300);
  print(spin);
  //spin=spin-1;//making the spins antiCW
  
  
  noStroke();
  fill(240,30);//(colour, opacity) shade of grey & alpha value
  rect(100,100,500,500); //offset 100pts from edges
  
  rotate(0);//ensuring rectangle doesn't rotate
  noStroke();
  fill(240,50);//writing over layers. without alpha value it would look like a pacman almost
  translate(0,0);
  rect(0,0,600,600); 
  
  
}
