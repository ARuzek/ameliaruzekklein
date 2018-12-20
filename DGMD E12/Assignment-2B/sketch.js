// DGMD E12
// Assignment 2B
// Amelia Ruzek

function setup() {
  createCanvas(1024, 768);
  
  //no reason for the framerate to be more than 1
  frameRate(1);
}

//initialize the hour hands 
var Hx1 = 0;
var Hy1 = 0;
var Hx2 = 0;
var Hy2 = -50;

//initialize the minute hands (also used for the second hand) 
var Mx1 = 0;
var My1 = 0;
var Mx2 = 0;
var My2 = -100;


function draw() {
  background(255, 227, 230);
  makeClock();
  makeClockMarks();
  trackHours(hour());
  trackMinutes(minute());
  trackSeconds(second());
  makeDigitalClock();
}

//make clock and clock marks just draw the background circle and marks every 5 min
function makeClock(){
  stroke(255);
  strokeWeight(10);
  fill(227, 256, 255);
  push();
    //change origin to center of the canvas
    translate(width/2, height/2);
    //draw the circle
    ellipse(0,0,250,250);
    
    //draw the little white center
    fill(255);
    ellipse(0,0,5,5);
  pop();

}

function makeClockMarks(){
  stroke(0);
  strokeWeight(2);
  push();
    //change origin to center of the canvas
    translate(width/2, height/2);
   
   //for 12 times, rotate the canvas and make a line
    for(var i = 1; i<=12; i++){
        rotate(PI/6);
        line(0, -110, 0, -120);
    }

  pop();

}

function trackHours(theHour){  
  stroke(0);
  strokeWeight(4);
  push();
    //change origin to center of the canvas
    translate(width/2, height/2);
    //rotate by the amount that I saw on a radian chart
    rotate((theHour*PI)/6);
    //and draw the line
    line(Hx1, Hy1, Hx2, Hy2);
    fill(0);
    //triangle(Hx2-2, Hy2-2, Hx2+2, Hy2-2, Hx2, Hy2-4);
  pop();
}

function trackMinutes(theMinute){
  stroke(0);
  strokeWeight(3);
  push();
    //change the origin to the center of the canvas
    translate(width/2, height/2);
    //rotate by the amount that I saw on a radian chart
    rotate((theMinute*PI)/30);
    //and draw the line
    line(Mx1, My1, Mx2, My2);
  pop();
}

function trackSeconds(theSecond){
  
  //change the stroke and color a little
  stroke(255, 0, 0);
  strokeWeight(1);
  push();
    //change the origin to the center of the canvas
    translate(width/2, height/2);
    //rotate by the amount that I saw on a radian chart
    rotate((theSecond*PI)/30);
    //and draw the line based on same as minute hand
    line(Mx1, My1, Mx2, My2);
  pop();
}

function makeDigitalClock(){
  
  //get the time and format the digits before the decimal to be 2
  var time = nf(getTwelveHourClock(hour()), 2) + ":" + nf(minute(), 2) + ":" +nf(second(), 2);
  fill(255);
  noStroke();
  textSize(70);
  textFont("Georgia");
  
  //make it look centered-ish
  text(time, width/2-130, height-180);
}

function getTwelveHourClock(theHour){
  
  //basically if the time is 13-24 subtract 12
  if (theHour <=12){
    return theHour;
  } else{
    return theHour-12;
  }
}