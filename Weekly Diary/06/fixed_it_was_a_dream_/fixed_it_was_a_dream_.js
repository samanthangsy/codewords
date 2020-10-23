//working with midform text
var myText = "I had a dream she took my hand. Led me to a wonderland. She turned to me, could you believe. Love was all that we had. Oh she loved me. But love was all in the timing of our tides. We'll never understand. It was only a dream. We'll swing from song of love. To the bad moon above. And while the seasons change. Our love will never stray. And it got me through the pain. It was only a dream. It was only a dream"
function setup() {
  createCanvas(windowWidth, windowHeight);
  background (255);
  textSize (24);
  noStroke();
  textFont("Avenir");
  textAlign(CENTER);
  fill(0);
}


function draw() {
  background(255);
  //textLeading(sin(frameCount*0.01)*50);
  textLeading(mouseY/5);
  text(myText, int(windowWidth/8), windowHeight/8, int(windowWidth/4*3), windowHeight);
  
}
