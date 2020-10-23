const letters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{};:<>,.?/';
var rand, listLength; //establishing global variable 

function setup() {
createCanvas (windowWidth, windowHeight);
background(255);
textSize(24);
noStroke();
textFont("Times");
//frameRate(5);
listLength=letters.length;
//var listLength = letters.length; // this is what caused only A's to show up
}


function draw() {
var rand = int(random(0,listLength-1)); //starts count at 0 
fill(0); //black text colour 
textSize(random(5,50)); 
text(letters[rand], random(width), random(height)); 
//background (255,1); //create the fade effect by applying background layer with opacity 
fill (255);
ellipse (mouseX, mouseY, 150,150); //circle to wipe away letters

}
