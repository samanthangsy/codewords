//wavemaker function by Samantha Ng 
//remix from https://p5js.org/examples/interaction-wavemaker.html
//For CODEWORDS 2020 Assignment 3
//this is quote 4 out of 5

var t = 0; // time variable
var myText = 'You cannot prohibit the catastrophe, you must surf it! -Paul Virilio ';

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  //fill(40, 200, 40);
  fill(255,204,0);
}

function draw() {
  background(0, 40); // translucent background (creates trails)
  //tiles the text along grids on the x and y axis
    for (let x = 0; x <= width; x = x + 50) {
    for (let y = 0; y <= height; y = y + 100) {
      
  //starting point of each chunk of text depends on mouse position
    const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
    const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
  
  //varies based on the particle's location
    const angle = xAngle * (x / width) + yAngle * (y / height);
    
    const myX = x + 100 * cos(100 * PI * t + angle);
    const myY = y + 100 * sin(100 * PI * t + angle);

      text(myText,myX, myY, 50); // draws each chunk of text to tile 
    }
  }
  t = t + 0.01; // update time
}
