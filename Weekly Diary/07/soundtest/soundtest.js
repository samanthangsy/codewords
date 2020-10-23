var song; //initiating our variable
var analyzer;
function preload(){
  song = loadSound ('data/Damscray_DancingTiger.mp3'); //associate our sound to the variable 'song'
}

  song
function setup() {
//song = loadSound ('data/Damscray_DancingTiger.mp3'); //associate our sound to the variable 'song'
createCanvas (windowWidth, windowHeight); //create full window canvas
background (0); 
analyzer = new p5.Amplitude(); //decalre analyser to measure volume
analyzer.setInput(song); 
fill (120); 
textSize(72); 
textAlign (CENTER,CENTER); 
}



function draw() {
  background(0,10); 
  fill (120);
  var volume = analyzer.getLevel(); //measure volume 
  //textSize(volume); 
  //text ('DANCE', width/2, height/2); //fractional change so the size of dance is little
  ellipse (width/2, height/2,volume,volume);
  fill (255);
  text(int(volume*100), width/2, height/2);
  
}

function mousePressed() {
 if (song.isPlaying()) {
   background (255);
   song.stop(); //if the song is playing, stop it
   song.noLoop();
 }
 else { 
   background(0);
   song.play();
   song.loop(); 
 }
}
