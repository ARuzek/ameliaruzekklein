function setup() {
  //create the canvas at 800 by 600 pixels
  createCanvas(800, 600);
  //make the background color gray
  background(200);
}

function draw() {
  //draw a circle 50 pixels large at 300 over and 200 down
  ellipse(200, 300, 50, 50);


//some functions dont need any arguments
//clear();

//rectangles draw from the upper left. 
rect(75, 300, 50, 50);

//a line draws from x1, y1 to x2, y2
line(300, 400, 400, 300);

//a quad takes four points as input
quad(50, 50, 97, 82, 130, 130, 47, 120);

//Objects drawn later in the code will appear on top of or over the previous sketches.
ellipse(50, 50, 40, 140);

//an arc can be drawn in many ways, see the reference. 
arc(150, 50, 80, 80, 0, PI + QUARTER_PI, PIE);

//more shapes can be built with beginShape(), vertex(), and endShape()
//lots of options - see the reference!
beginShape();
vertex(600, 400);
vertex(685, 430);
vertex(730, 636);
endShape(CLOSE);
}