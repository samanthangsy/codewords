let font;
function preload() {
  font = loadFont('data/MaisonNeue-Medium.otf');
}

let points;
let bounds;
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  fill(57,255,20);

  points = font.textToPoints('You cannot prohibit the catastrophe,you must surf it! -Paul Virilio', 0, 0, 1, {
    sampleFactor: 30, //affects the smoothness of the swaying from side to side 
    simplifyThreshold: 0
  });
  bounds = font.textBounds('You cannot prohibit the catastrophe, you must surf it! -Paul Virilio', 0, 0, 1);
}

function draw() {
  background(0);
  beginShape();
  translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    vertex(
      p.x * width / bounds.w +
        sin(1 * p.y / bounds.h + millis() / 100) * width / 100,
      p.y * height / bounds.h
    );
  }
  endShape(CLOSE);

}
