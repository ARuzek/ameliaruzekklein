// DGMD E12
// Assignment 3
// Amelia Ruzek
// This is a music visualizer. Super awesome that I know how to make one of these now. I love this class! This looks best in a Chrome browser. 

var music;
var musicReady = false;
var launchMessage;
var dropzone; 

function setup() {
  
  //full-screen P5 sketch running as a background canvas behind your web page elements
  var canvas = createCanvas(windowWidth, windowHeight);
  
  //position() an element on the page using P5
  canvas.position(0, 0);
  
  //style() a DOM element with CSS from within P5
  canvas.style("z-index", "-1");
  
  background(230,230,230);
  
  //create an element BESIDES a canvas element using P5
  launchMessage = createP();
  
  //use html() to either retrieve the content of a DOM element for use in your P5 sketch or to modify the content of an element on the page
  launchMessage.html("drag and drop an mp3 to get started").style(" font-family: 'Raleway'; font-size: 30px; position: absolute; margin: auto; top: 50%; left: 50%; transform: translate(-50%, -50%);");
  
  //make use of at least one element-specific event handler and callback function
  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  
  //accept a file into the DOM and/or sketch via drag / dro
  dropzone.drop(checkIfMusicReady);
  
  //create an instance of p5 fft
  fft = new p5.FFT()
}

function draw() {
 
  //check to see if the user has dropped an mp3
  if(musicReady){
     background(234,255,0);
     
     //analyze the spectrum
     var spectrum = fft.analyze();

    //citation: the following code snippet is  directly from the p5.reference
      var waveform = fft.waveform();
      noFill();
      beginShape();
      stroke(0,0,0); 
      strokeWeight(1);
      for (var i = 0; i< waveform.length; i++){
          var x = map(i, 0, waveform.length, 0, width);
          var y = map( waveform[i], -1, 1, 0, height);
          vertex(x,y);
      }
      endShape();
  }
  
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(230,230,230);
}

function highlight(){
  launchMessage.style("color","#999999");
}

function unhighlight(){
  launchMessage.style("color","#000000");
}

function checkIfMusicReady(file){
  music = loadSound(file,success,fileError,loading);
  music.setVolume(0.1);
  if(music.isLoaded()){
  music.play();
  launchMessage.remove();
  musicReady = true;
  }else{
  launchMessage.html("loading...");  
  }
}

function success(){
  if(music.isLoaded()){
  music.play();
  launchMessage.remove();
  musicReady = true;
  }else{
  launchMessage.html("loading...");  
  }
}

function fileError(){
  launchMessage.html("error");  
}

function loading(){
  launchMessage.html("loading...");  
}