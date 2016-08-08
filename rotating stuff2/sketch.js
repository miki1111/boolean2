function setup() {
  
  createCanvas(600, 600);
  //background(10, 30, 20);
  tryThis();
}

function tryThis() {

  // flower
 
  translate(300, 300);
  noStroke();
  rcolor = 0;
  for (var i = 0; i < 10; i++) {
    
    rcolor = rcolor + 10 * i;
    fill(rcolor, 255, 190);
    ellipse(400, 400, 20, 80);
    rotate(PI / 5);
  } 
   strokeWeight(3);
  stroke(0);
  point(400,400);
  //right upper wing
  /*
  push();
  rotate(radians(45));
  fill(200,210,270,20);
  ellipse(40,40,160,320);
  pop();
  
  //right lower wing
  push();
  rotate(radians(110));
  fill(200,210,280,20);
  ellipse(70,40,160,240);
  pop();
  */
  
}