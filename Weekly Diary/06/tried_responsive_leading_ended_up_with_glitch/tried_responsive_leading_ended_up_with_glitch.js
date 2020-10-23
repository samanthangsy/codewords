//working with midform text
var myText = "I had a dream she took my hand, Led me to a wonderland. She turned to me, could you believe, Love was all that we had.";

function setup() {
createCanvas(windowWidth, windowHeight); 
background(255); 
textSize(24);
textFont("Avenir");
textAlign(CENTER);
fill(0);
}


function draw() {
background(255);
textLeading(sin(frameCount+0.01)*100);
//text(myText,550,height/2.5,300,350); //height div by 2 brings the text to the centre of the height
//text(myText,windowWidth/4,0, windowWidth/2, windowHeight/4*3)); //this brings the text to the top of the page aligned to the centre
text(myText, int(windowWidth/8),windowHeight/8, int(windowWidth/4*3), windowHeight); 
}
