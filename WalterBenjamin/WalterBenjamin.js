//mousePressed function by Samantha Ng 
//remix from https://www.geeksforgeeks.org/p5-js-mouse-mousepressed-function/
//For CODEWORDS 2020 Assignment
//This is quote 1 out of 5 

var valueX; 
var valueY; 

function setup() {  
    createCanvas(windowWidth, windowHeight);
} 
   
function draw() { 
  
    background(0);  
    
    //Prompt 1
    fill('WHITE');
    textSize(20)
    text('CLICK AROUND', windowWidth/10,windowHeight/9) ;
    
    //Prompt 2 
    fill('WHITE');
    textSize(20)
    text('TYPE 1-5 FOR MORE', windowWidth/1.14,windowHeight/1.1) 

    //Fill color according to mouseMoved()
    fill(valueX, 255-valueY, 255-valueX); 
    
    //Set text size according to mouseMoved()
    textSize(random(valueX, valueY));
    // slow down jitter rate for readability 
    frameRate(10);
    
    text('OUR TAVERNS AND OUR METROPOLITAN STREETS, OUR OFFICES AND FURNISHED ROOMS, OUR RAILROAD STATIONS AND OUR FACTORIES APPEARED TO HAVE US LOCKED UP HOPELESSLY. THEN CAME THE FILM AND BURST THIS PRISON-WORLD ASUNDER BY THE DYNAMITE OF THE TENTH OF THE SECOND, SO THAT NOW, IN THE MIDST OF ITS FAR-FLUNG RUINS AND DEBRIS, WE CALMLY AND ADVENTUROUSLY GO TRAVELLING. -WALTER BENJAMIN', windowWidth/2, windowHeight/2); 

    //text('Our taverns and our metropolitan streets, our offices and furnished rooms, our railroad stations and our factories appeared to have us locked up hopelessly. Then came the film and burst this prison-world asunder by the dynamite of the tenth of the second, so that now, in the midst of its far-flung ruins and debris, we calmly and adventurously go travelling. -Walter Benjamin ', windowWidth/2, windowHeight/2); 
    textAlign(CENTER);  
      
    //circle cursor
    fill('WHITE'); 
    ellipse(mouseX, mouseY, 20, 20); 
} 
  
function mousePressed() { 
    valueX = mouseX%255; 
    valueY = mouseY%255; 
} 
