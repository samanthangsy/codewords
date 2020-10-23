//Samantha Ng
//REMIxed by jackie, it’s a stretchy flipping S!
function setup() {
createCanvas (500,500);
}

function draw() {
noStroke();
fill (247,228,170);

rect (0,0,500,500);
fill(mouseY/2,mouseY/2,mouseX/2);
triangle (250,500,mouseX,250,mouseX,500);
triangle (250,250,mouseX,500,mouseX,0);
}
