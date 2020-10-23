function setup() {
createCanvas (500,500);
}


function draw() {
noStroke();
fill(mouseY/2,mouseY/2,mouseX/2);
rect (0,0,500,500);

stroke (247,228,170);
strokeWeight (10);
fill (247,228,170);
triangle (0,500,500,250,500,500);
fill (247,228,170);
triangle (0,250,500,500,500,0);

}
