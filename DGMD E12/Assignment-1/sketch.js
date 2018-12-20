// DGMD E12
// Assignment 1
// Amelia Ruzek
// Sorry it's a little lengthy, I just kept playing with it. p5 is fun!

//declare global variables
var angle = 0;
var baseMeasurement = 0;
var personsX;
var personsY;

function setup() {
  //create canvas that stretches the size of the window, because I was curious about how I could make something responsive 
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  
  //initialize person here AFTER width and height are declared.
  personsX = .54*width;
  personsY = .24*height;

}

function draw() {
  //draw background brown
  background(156,144,119);
  
  //draw the sun
  push();
  baseMeasurement = width/12;
  translate(width / 5, height / 5);
  strokeWeight(3);
  stroke('rgba(0,0,0,1)');
  noFill();
  ellipse(0, 0, baseMeasurement, baseMeasurement);
  
  // draw the sun rays. I had to pull out the graph paper to figure out this one. :) 
  rotate(radians(angle));
  line( baseMeasurement/2, 0, baseMeasurement, baseMeasurement/4);
  line(  0, -baseMeasurement/2, baseMeasurement/4, -baseMeasurement);
  line( -baseMeasurement/2, 0, -baseMeasurement, -baseMeasurement/4);
  line(  0, baseMeasurement/2, -baseMeasurement/4, baseMeasurement);
  rotate(radians(PI*15)); // this rotate call offsets the other 4 sun rays 
  line( baseMeasurement/2, 0, baseMeasurement, baseMeasurement/4);
  line(  0, -baseMeasurement/2, baseMeasurement/4, -baseMeasurement);
  line( -baseMeasurement/2, 0, -baseMeasurement, -baseMeasurement/4);
  line(  0, baseMeasurement/2, -baseMeasurement/4, baseMeasurement);
  pop();
  
  //draw the crosshatch pencil lines in the background
  for (var i = 0; i < 500; i++) {
    strokeWeight(1);
    stroke('rgba(0,0,0,.15)');
    line(random(0, windowWidth), 0, random(0, windowWidth), windowHeight);
  }
  
  //call a function to draw ladders - mostly just did some trial and error until it looked right
  drawLadder((width/2)-(width/6), height/1.5, 6, radians(PI-30), 0.5);
  drawLadder(width/2, height/3, 12, radians(PI+15), 0.6);
  drawLadder(width/2.5, height/1.25, 4, radians(PI+30), 0.5);
  
  //draw the floors
  stroke('rgba(0,0,0,1)');
  strokeWeight(3);  
  
  line(.25*width, (.65*height), (0.5*width), (.65*height));
  line(.25*width, (.65*height), (0.2*width), (.75*height));
  line((0.2*width), (.75*height), .18*width, .75*height);
  line(.18*width, .75*height, .15*width, .9*height);
  line(.15*width, .9*height, .1*width, .7*height);
  line(.1*width, .7*height, .05*width, .85*height );
  line(.05*width, .85*height, 0, .83*height );
  line((0.3*width), (.80*height),(0.45*width), (.80*height));
  line((0.35*width), (.92*height),width, (.92*height));
  
  //draw the person
  noFill();
  strokeWeight(2);
  ellipse(personsX,personsY, 20, 20);
  strokeWeight(3);
  line(personsX-15, personsY, personsX+12, personsY);
  strokeWeight(1);
  line(personsX, personsY, personsX, personsY+30);
  beginShape();
    vertex(personsX-5, personsY+10);
    vertex(personsX+5, personsY+11);
    vertex(personsX, personsY+32);
    vertex(personsX-12, personsY+45);
    vertex(personsX+15, personsY+47);
    strokeWeight(2);
    vertex(personsX-7, personsY+8);
    vertex(personsX+4, personsY+17);
    vertex(personsX, personsY+22);
    vertex(personsX-10, personsY+45);
    vertex(personsX+5, personsY+40);
  endShape(CLOSE);
  strokeWeight(1);
  line(personsX-5, personsY+35, personsX-20, personsY+65);
  line(personsX-3, personsY+35, personsX-17, personsY+65);
  line(personsX+5, personsY+35, personsX+20, personsY+65);
  line(personsX+3, personsY+35, personsX+27, personsY+65);
  
  //******************* ANIMATE THE PERSON **********************//
  if (keyIsDown(LEFT_ARROW)){
    personsX--;
  } else if (keyIsDown(RIGHT_ARROW)){
    personsX++;
  }

  if (keyIsDown(UP_ARROW)){
    personsY--;
  } else if (keyIsDown(DOWN_ARROW)){
    personsY++;
  }
  
  //rotate the sun because it looks cool
  angle--;
  
  //make some more interesting shapes in the background
  for(var shape = 0; shape < 50; shape++){
    drawScratchyLines(width*(random(.05, .94)), height*(random(.4, .94)), width/(random(7, 60)), random(1, 3));
    drawCube(width*(random(.05, .94)), height*(random(.4, .94)), width/(random(7, 60)), random(1, 3));
  }

}

 

function drawLadder(xPosition, yPosition, rungs, rotation, size){
  push();
  strokeWeight(4);
  stroke('rgba(0,0,0,1)');
  
  // place the rotation around the center of the original position of the ladder - much easier than trying to draw a diagonal ladder
  translate(xPosition, yPosition);
  rotate(rotation);
  
  // now that the origin has changed, update the values of the x and y position. 
  xPosition = 0; 
  yPosition = 0;
  scale(size);
  
  for(var j = 0; j<=rungs; j++){
      line(xPosition, yPosition, xPosition, yPosition+(height/24));
      line(xPosition+(width/24), yPosition, xPosition+(width/24), yPosition+(height/24));
      if(j<rungs){
      line(xPosition, yPosition+(height/24), xPosition+(width/24), yPosition+(height/24))
      }
      yPosition = yPosition + (height/24);
  }
  pop();
}


function drawCube(x, y, size, weight){
  var offset = size/5;
  strokeWeight(weight);
  stroke('rgba(0,0,0,.30)');
  rect(x, y, size, size);
  rect(x+offset, y+offset, size, size);
  line(x, y, x+offset, y+offset);
  line(x+size, y, x+size+offset, y+offset);
}

function drawScratchyLines(x, y, size, weight){
  strokeWeight(weight);
  stroke('rgba(0,0,0,.30)');
  line(x, y, x+size, y);
  line(x+size/2, y+size, x+size/2, y);
  line(x+size/3, y+size+size, x+size/3, y);
  line(x, y, x, y-size);
  line(x-size/2, y, x-size/2, y-size);
  line(x-size/3, y-size/3, x-size/3, y-size-size/3);
  line(x-size, y, x-size*2, y);
  line(x-size, y-10, x-size*2, y-10);
}



