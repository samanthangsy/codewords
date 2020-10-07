//rotate function by Samantha Ng 
//remix from https://editor.p5js.org/aferriss/sketches/HyBagyadG
//For CODEWORDS 2020 Assignment 3
//this is quote 3 out of 5

var myText1 = "Malfunction and failure are not signs of improper production. On the contrary, they indicate the active production of the “accidental potential” in any product. The invention of the ship implies its wreckages, the steam engine and the locomotive discover the derailment. -Paul Virilio";

function setup() {
  createCanvas(windowWidth, windowHeight); 
  textSize(26);
  textFont("Avenir");
  textAlign(LEFT);
  fill(255);
}


function draw() {
  background(0,255,0,3); //5 represents opacity that reveals trails
  push();
  translate(100,100);
  rotate( mouseX, mouseY, radians(frameCount*20) ); //rate and when the text rotates
  text(myText1,windowWidth/4,windowHeight/4, windowWidth/2, windowHeight/4); //apply and set positon of text
  pop();
}
