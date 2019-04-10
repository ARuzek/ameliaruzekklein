// DGMD E12
// Assignment 2C
// Amelia Ruzek
// This abstract clock changes moon phases with the hour and number of fireflies with the minute. In addition, the size of the flies change gradually each second as a new minute approaches

// set global variables
var farm;
var flies = [];
var uniqueFly = [];
var noiseValue= 0;
var pulse = 240;
var dim = true;
var moonphase = [];

function preload() {
  
  //--------CITATION---------//
  //https://unsplash.com/@kylerichner
  //Unsplash License
  //All photos published on Unsplash are licensed under Creative Commons Zero which means you can copy, modify, distribute and use the photos for free, including commercial purposes, without asking permission from or providing attribution to the photographer or Unsplash.
  //--------CITATION---------//
  
  //load the background farm image
  farm = loadImage("images/background-farm.png");
  //load the moon phases. This is a photo cut/paste work around because trying to shape the moon with arc or ellipse didn't create the visual effect I was looking for. 
    moon0 = loadImage("images/0.png");
    moon1 = loadImage("images/1.png");
    moon2 = loadImage("images/2.png");
    moon3 = loadImage("images/3.png");
    moon4 = loadImage("images/4.png");
    moon5 = loadImage("images/5.png");
    moon6 = loadImage("images/6.png");
    moon7 = loadImage("images/7.png");
    moon8 = loadImage("images/8.png");
    moon9 = loadImage("images/9.png");
   moon10 = loadImage("images/10.png");
   moon11 = loadImage("images/11.png");
   moon12 = loadImage("images/12.png");
   moon13 = loadImage("images/13.png");
   moon14 = loadImage("images/14.png");
   moon15 = loadImage("images/15.png");
   moon16 = loadImage("images/16.png");
   moon17 = loadImage("images/17.png");
   moon18 = loadImage("images/18.png");
   moon19 = loadImage("images/19.png");
   moon20 = loadImage("images/20.png");
   moon21 = loadImage("images/21.png");
   moon22 = loadImage("images/22.png");
   moon23 = loadImage("images/23.png");
}

function setup() {
  
  createCanvas(1024, 682);
  
  //seed differences between fireflies
  for(var fly = 0; fly <60; fly++){
     uniqueFly.push(random(0, 3));
    }
    
  //seed the moon phases
  moonphase = [moon0, moon1, moon2, moon3, moon4, moon5, moon6, moon7, moon8, moon9, moon10, moon11, moon12, moon13, moon14, moon15, moon16, moon17, moon18, moon19, moon20, moon21, moon22, moon23];
}



function draw() {
  
  //make the background
  image(farm, 0, 0);
  
  //build the moon; the phase of the moon is dependant on the hour
  moon();
  
    
  //build all my fireflies; the number of fireflies depends on the minute, size is dependant on the second
  for (var num = 0; num<minute(); num++){  
  flies[num] = new FireFly(map(second(), 0, 59, 3, 5), map ( noise(noiseValue - uniqueFly[num]), 0, 1, 0, width), map ( noise(noiseValue - uniqueFly[num+1] + .1), 0, 1, (height/4)*3, height));
  flies[num].display();
  }  
  
  //buzzzzzzzz
  pulseLighting();
  noiseValue += 0.001;
  

}



//make fireflies
function FireFly(size, x, y){
  
 this.placeX = x;
 this.placeY = y;
  
  this.display = function() {
    for(var i = 0; i<size; i++){
      push();
        translate(this.placeX, this.placeY);
        noFill();
        strokeWeight(1);
        //make firefly a yellow faux gradiant using multiple ellipses (once each time through the loop) 
        //kept the alpha value because without the black, they looked like they were jumping rather than flying. 
        stroke(map(i, 0, size, 0, pulse),map(i, 0, size, 0, pulse), 0);
        ellipse(0, 0, size-i, size-i);
      pop();
    }
    
    
  }

}

//make a glow
function pulseLighting(){
    
    //make that faux gradient light up every second
  
    if(pulse==0){
      dim=false;
    }
    
    if(pulse==240){
      dim=true;
    }
    
    if(dim){
    pulse-=8;
  
    }else{
    pulse+=8;
    }
  }

//construct the moon  
function moon(){

    for(var moonglow = 0; moonglow<100; moonglow++){
      push();
        translate(200, 200);
        noFill();
        strokeWeight(1);
        //make moon a faux gradiant using multiple ellipses (once each time through the loop) 
        //change the alpha value to glow 
        stroke(255, 255, 255, map(moonglow, 0, 99, 0, 255));
        ellipse(0, 0, 100-moonglow, 100-moonglow);
      pop();
    }
    
    //change to a new phase each hour
    image(moonphase[hour()], 0, 0);
    
    
 }

