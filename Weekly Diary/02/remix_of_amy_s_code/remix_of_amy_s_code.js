//A for Amy 
//reMixed by Sam

function setup() {
createCanvas (500,500);

background (0,255,0); //changed the pairing colour to green
strokeWeight (300); //somehow this changes the amount of green/blue as the background
stroke (0,0,255);
fill (3, 0, 189);
line (0,250,500,250);
}


function draw() {

strokeWeight(1);
stroke(255,0,0);
noFill(0);
rect (mouseX/5,mouseY/4,pmouseX/2,pmouseY/2); //tweaked the numbers here
strokeWeight(1);
stroke(0,0,255);
noFill(0);
rect (mouseX/4,mouseY/4,0,pmouseY/2); //tweaked the numbers here
strokeWeight(3); //changed this to be thicker
fill (255,0,0);
triangle(500,400,250,100,400,400);
fill (255,0,0);
triangle(100,400,250,100,300,400);
}
