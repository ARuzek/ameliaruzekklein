var organicStemGrowth = 0;

//create a flower using the user's selection
function Flower(x, y, shape, color, accentColor, petalCount, stopGrowth, angle) {
   
   //at mouseX and mouseY start a flower when the user clicks
   this.x = x;
   this.y = y;
   this.stemDiameter = 5;
   this.finalSize = size * 10;    
    
   //upon plant, create a stem out of an ellipse repeated over and over again.  
   this.plant = function() {
  
     stroke("#49793f");
     fill("#87A658")  
     ellipse(this.x, this.y, this.stemDiameter, this.stemDiameter);
     
     
  
   }

   //after planting, grow the stem until ready to bloom. This stem grows using perlin noise. 
   this.grow = function() {
     
       
         if (stopGrowth == 0) {
             this.bloom();
         }else{
                 /*-----------CITATION-----------*/
                 //Thanks for helping me with this part, Ed :) https://codepen.io/edhebert/pen/ybgMYm?editors=0010
                 push();
                     this.y--;
                     organicStemGrowth += .05;    
                     this.x = (noise(organicStemGrowth) - angle) + this.x; 
                 pop();  
             
             
                 //Each time a stem segment is drawn, the stopGrowth will move closer to zero. 
                 stopGrowth--;
             
                  //add branches. Branches are added by pushing new mini-flowers based on original flower to the garden array. Randomizing the angle, ensures that the branch could be drawn in either direction. 
                 if(stopGrowth == 300 || stopGrowth == 200){
                     garden.push(new Flower(this.x, this.y, shape, color, accentColor, petalCount, 100, random(0, 1) ));
                 }
                 
               
         }
    }
 
   
  
   //the bloom depends on user selection
   this.bloom = function() {
      
      push();
       
          stroke(accentColor);         
          translate(this.x, this.y); 

          if(shape == "circle") {

                for(var i = 0; i<petalCount; i++) {
                  rotate((i/24)*PI);
                  fill(color);
                  ellipse(0, -size, size/8, size/8);    
                  for(var j = .5; j>0; j=j-.1){ 
                    rotate((i/12)*PI);  
                    ellipse(0, -size*(j), j*size, j*size);          
                  }
                }
              
          }else if(shape == "oval"){
              
                for(var i = 0; i<petalCount; i++) {
                  rotate((i/(petalCount/2))*PI);
                  fill(color);
                  ellipse(0, -size, size/4, size);
                  ellipse(0, 0, size/8, size);    
                }
              
          }else if(shape == "square"){
              
                for(var i = 0; i<petalCount; i++) {
                  rotate((i/(petalCount/2))*PI);
                  fill(color);
                  rect(0, -size, size/2, size);
                  rect(0, 0, size, size);    
                }
              
          }else if(shape == "triangle"){
              
                for(var i = 0; i<petalCount; i++) {
                  rotate((i/(petalCount/2))*PI);
                  fill(color);
                  triangle(size, size, -size, 0, -size, -size);    
                  ellipse(0, 0, size/2, size/2);    
                }
              
          }else if(shape == "leaf"){
              
              
                for(var i = 0; i<petalCount; i++) {
                  rotate((i/(petalCount/2))*PI);
                  fill(color);

                  beginShape();
                    vertex(size/4,0);
                    vertex(-size/4,0);
                    vertex(-size/4,size/6);
                    vertex(-size/4,size);
                    vertex(-size/12,size/4);
                    vertex(-size/6,size*2);
                    vertex(0,size+size/8);
                    vertex(size/8,size);
                    vertex(size/4,size/6);
                  endShape(CLOSE);
                  
                    fill(accentColor);
                  beginShape();
                    vertex(-1,0);
                    vertex(-1,size);
                    vertex(0,size+1);
                    vertex(1,size/2);
                    vertex(1,0);
                  endShape(CLOSE);
    
                }
              
          }else if(shape == "lotus"){
              
                for(var i = 0; i<petalCount; i++) {
                  rotate((i/(petalCount/2))*PI);
                  fill(color);
                    
                  beginShape();
                    vertex(0,0);
                    vertex(-size/1.5,size/1.5);
                    vertex(-size/1.5,size*1.5);
                    vertex(0,size*2);
                    vertex(size/1.5,size*1.5);
                    vertex(size/1.5,size/1.5);
                  endShape(CLOSE);
                  
                  fill(accentColor);
                  beginShape();
                    vertex(0,0);
                    vertex(-1,size/1.5);
                    vertex(-1, size*1.5);
                    vertex(0,size*2);
                    vertex(1,size*1.5);
                    vertex(1,size/1.5);
                  endShape(CLOSE);    
                }
              
          }
       
     pop();
      
   }
   
 }
