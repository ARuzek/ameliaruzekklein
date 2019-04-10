// DGMD E12
// Final Project
// Amelia Ruzek
// This is a flower garden that blooms depending on sound. I learned so much from this project and the assignments prior. I can't believe I know how to make all of this work. This has been one of the most enjoyable classes! Wow! Thank you for teaching us!


var launchMessage;
var dropzone;
var garden = [];
var defaultMusic;
var backdrop;

var uiColor = "rgb(0, 0, 0)";
var accentColor = "rgb(255, 255, 255)";
var uiShape = "circle";
var uiNumber = 45;
var uiSlider;
var size;



function preload() {
    
  //--------CITATION---------//
  //https://unsplash.com/@koyanloshe
  //Unsplash License
  //All photos published on Unsplash are licensed under Creative Commons Zero which means you can copy, modify, distribute and use the photos for free, including commercial purposes, without asking permission from or providing attribution to the photographer or Unsplash.
  //--------CITATION---------//
    
  //create background    
  backdrop = loadImage("images/alok-shenoy-100091.jpg");
    
    
  //--------CITATION---------//     
  //Nature sounds courtesy of Listening Earth. www.listeningearth.com - See more at: http://www.listeningearth.com/LE/b-license#sthash.L4gL66SS.dpuf    
  //--------CITATION---------//    
    
    
  //create music   
  defaultMusic = "sounds/Kooyooraautumnafternoon.mp3";    
  
}


function setup() { 
  
      
  //make sure the user will be able to see the project
  var jsErrorMessage = select('#errorMessage');    
  jsErrorMessage.style("display:none");    
  
  //create the canvas 
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
    
  //add the music dropzone
  launchMessage = createP();
  launchMessage.parent("interface");
  launchMessage.html("or drag and drop your own music");
  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  
  //accept a music file
  dropzone.drop(checkIfMusicReady);    
     
  //add the background image to the canvas    
  image(backdrop, 0, 0); 

  //add a slider to the interface
  uiSlider = createSlider(12, 60, 48, 12);
  uiSlider.parent("#slider");  
  
  //create an instance of amplitude    
  amplitude = new p5.Amplitude();   
  
  
}


//watch the flowers grow once planted
function draw() {
    
    if(musicReady){
        
       //get the levels of music - code snippet from p5js.org/reference/ 
       level = amplitude.getLevel(); 
       size = map(level, 0, 1, 2, 50);
        
       //first, wait until a flower exists    
       if(garden.length>=1){
           
             launchMessage.remove(); 
           
             //then plant and grow the flowers
             for (var plantNum = 0; plantNum<garden.length; plantNum++) {
               garden[plantNum].plant();
               garden[plantNum].grow();
             }
           
        }else{
            
             launchMessage.html("click to plant flowers");
        }

    }
  
}

//make a new flower when the mouse is pressed to the right of the user interface or when screen is touched  
function mouseClicked() {
    
  if(mouseX > 350){   
      uiSelection();    
      garden.push(new Flower(mouseX, mouseY, uiShape, uiColor, accentColor, uiNumber, 500, .5 )); 
  }
    
}
    

 //make sure that the window resizes
 function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
   image(backdrop, 0, 0);
 }

 function uiSelection(){
     
        //get and set the color
     
         if(document.getElementById("color-red").checked){
            uiColor = "rgba(255, 0, 60, .5)";
            accentColor =  "rgb(107,0,25)";
         }else if (document.getElementById("color-pink").checked){
            uiColor = "rgba(255, 201, 222, .5)";
            accentColor = "rgb(85,19,80)";
         }else if (document.getElementById("color-yellow").checked){
            uiColor = "rgba(255, 252, 227, .5)"; 
            accentColor = "rgb(211,160,30)"; 
         }else if (document.getElementById("color-blue").checked){
            uiColor = "rgba(141, 193, 204, .5)";
            accentColor = "rgb(24,67,92)"; 
         }else if (document.getElementById("color-purple").checked){
            uiColor = "rgba(255,255,255, .5)";  
            accentColor = "rgb(100,50,158)"; 
         }
     
         //get and set the shape
     
         if(document.getElementById("shape-circle").checked){
            uiShape = "circle";
         }else if (document.getElementById("shape-oval").checked){
            uiShape = "oval";
         }else if (document.getElementById("shape-square").checked){
            uiShape = "square"; 
         }else if (document.getElementById("shape-triangle").checked){
            uiShape = "triangle";
         }else if (document.getElementById("shape-lotus").checked){
            uiShape = "lotus";  
         }else if (document.getElementById("shape-leaf").checked){
            uiShape = "leaf";  
         }
         
         //get and set the number of petals
     
         uiNumber = uiSlider.value();
 }

