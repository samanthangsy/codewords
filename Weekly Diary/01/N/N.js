function setup() {
createCanvas (500,500);

}

function draw() {

noStroke();
fill(mouseY/2,mouseY/2,mouseX/2);
rect (0,0,500,500);

stroke (247,228,170); //the colour of the stroke
strokeWeight (200); //the line thickness
line (0,0,500,500); 
stroke (247,228,170); //the colour of the stroke
strokeWeight (50); //the line thickness
line (0,120,0,500); 
stroke (247,228,170); //the colour of the stroke
strokeWeight (50); //the line thickness
line (500,0,500,370); 

}
