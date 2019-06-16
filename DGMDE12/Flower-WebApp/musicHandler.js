var music;
var musicReady = false;
var amplitude;
var level;

//change the styling of the launch message when music is dragged / dropped 
function highlight(){
  launchMessage.style("color","#555555");
}

function unhighlight(){
  launchMessage.style("color","#000000");
}


//play the music once the user selects the default button or drags their own file in 
function checkIfMusicReady(file){  
  
  music = loadSound(file,success,fileError,loading);

  if(music.isLoaded()){
      music.play();
      musicReady = true;
  }else{
      launchMessage.html("loading...");  
  }
    
}

function success(){
    
  if(music.isLoaded()){
     music.play(); 
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