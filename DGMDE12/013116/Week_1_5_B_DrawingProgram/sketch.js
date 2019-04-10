function setup() {
  //create the canvas at 800 by 600 pixels
  createCanvas(800, 600);
  //make the background color;
  background(70, 137, 102);
}

function draw() {
  
//initial fill color
fill(200, 255, 230, 30);
noStroke();
//instead of hardcoding we can use variables
ellipse(mouseX, mouseY, 30, 30);


 

}