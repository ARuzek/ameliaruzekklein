function setup() {
  //create the canvas at 800 by 600 pixels
  createCanvas(310, 2600);
  //make the background color gray
  background(255);
}

function draw() {
//hair
fill(0);
rect(30, 30, 250, 140);

//bows
fill(216, 74, 56);
triangle(40, 60, 60, 60, 60, 80);
triangle(60, 40, 60, 60, 80, 60);
triangle(230, 60, 250, 40, 250, 60);
triangle(250, 60, 250, 80, 270, 60);


//face
fill(231,209,207);
noStroke();
ellipse(155,130,150, 150);

//nose
stroke(0);
line(150, 130, 160, 130);

//glasses
strokeWeight(5);
fill(255);
ellipse(110, 100, 80, 80);
ellipse(200, 100, 80, 80);
line(150, 100, 160, 100);

//lips
noStroke();
fill(216, 74, 56);
ellipse(155, 170, 30, 30);
fill(231,209,207);
ellipse(155, 160, 30, 30);
}