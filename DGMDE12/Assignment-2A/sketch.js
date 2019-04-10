// DGMD E12
// Assignment 2A
// Amelia Ruzek

function setup() {
  createCanvas(1000, 1000);
  background(255, 227, 230);
}

var x1 = 100;
var y1 = 100;
var x2 = 100;
var y2 = 200;
var count = 0;

function mouseClicked(){
  //keep a counter of my clicks
  count++;
  
  //if the clicks aren't divisible by 5, draw normal
  if(count%5 != 0){
    stroke(255,255,255);
    strokeWeight(5);
    line(x1, y1, x2, y2);
    x1 += 10;
    x2 += 10;
    } 
    
    //otherwise, draw diagonally
    else {
      stroke(227, 225, 255);
      strokeWeight(5);
      line(x1, y1, x2-50, y2);
      
      //at the end of each section space it out a little bit
      x1 += 30;
      x2 += 30;
      
      //then check if x position is closer than 100
      if(x1 > 900){
        
        //reset values of the x and y
        x1 = 100;
        y1 += 200;
        x2 = 100;
        y2 += 200;
      }
    
    }

  }
  
  function keyPressed(){
      background(255, 227, 230);
      x1 = 100;
      y1 = 100;
      x2 = 100;
      y2 = 200;
      count = 0;
  }