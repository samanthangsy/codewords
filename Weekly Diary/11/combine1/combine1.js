var sketches = ["wb", "pv1", "jp", "pv2", "fk"];

var valueX; 
var valueY; 
var sketch1 = function(wb) 
  wb.setup = function() {
  wb.createCanvas(windowWidth,windowHeight);
  wb.textSize(26);
  wb.textFont("Avenir");
  wb.textAlign(LEFT);
  wb.fill(255);
    
  //if this exists on all 5 sketches, do i put this on function setup()
    //Prompt 1
    fill(0);
    textSize(20)
    text('CLICK AROUND', windowWidth/10,windowHeight/9) ;
    
    //Prompt 2 
    fill(0);
    textSize(20)
    text('TYPE 1-5 FOR MORE', windowWidth/1.14,windowHeight/1.1) 
  };

  wb.draw = function() {
    
    //Fill color according to mouseMoved()
    wb.fill(valueX, 255-valueY, 255-valueX); 
    
    //Set text size according to mouseMoved()
    wb.textSize(random(valueX, valueY));
    //slow down jitter rate for readability 
    wb.frameRate(15);
    
    wb.text('OUR TAVERNS AND OUR METROPOLITAN STREETS, OUR OFFICES AND FURNISHED ROOMS, OUR RAILROAD STATIONS AND OUR FACTORIES APPEARED TO HAVE US LOCKED UP HOPELESSLY. THEN CAME THE FILM AND BURST THIS PRISON-WORLD ASUNDER BY THE DYNAMITE OF THE TENTH OF THE SECOND, SO THAT NOW, IN THE MIDST OF ITS FAR-FLUNG RUINS AND DEBRIS, WE CALMLY AND ADVENTUROUSLY GO TRAVELLING. -WALTER BENJAMIN', windowWidth/2, windowHeight/2); 

    //text('Our taverns and our metropolitan streets, our offices and furnished rooms, our railroad stations and our factories appeared to have us locked up hopelessly. Then came the film and burst this prison-world asunder by the dynamite of the tenth of the second, so that now, in the midst of its far-flung ruins and debris, we calmly and adventurously go travelling. -Walter Benjamin ', windowWidth/2, windowHeight/2); 
    wb.textAlign(CENTER);  
      
    //circle cursor
    wb.fill('WHITE'); 
    wb.ellipse(mouseX, mouseY, 20, 20); 

  };
  
  wb.mousePressed = function(){
    valueX = mouseX%255; 
    valueY = mouseY%255; 
  }
};

  wb.keyTyped = function(){
   if (key === '2' ){
    sketch2(); // or do i put it as 'sketch 1/2/3/4/5
  }
  
  else if (key === '3' ){
    sketch3();
  }

  else if (key === '4' ){
    sketch4();
  }
  
  else if (key === '5' ){
    sketch5();
  }
  
  else {
    sketch1(); //no change 
}
  
  }
