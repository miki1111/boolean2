// boolean part 2 3.4
// mouseIsPressed is a boolean (not the funtion mousePressed() event
var on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {

  if (on) {
    background(0, 255, 0);
  } else {
    background(0);
  }
  stroke(255);
  strokeWeight(4);
  noFill();
  
  // rollover! change to pink
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    fill(255,0,200);
  }
  rectMode(CENTER);
  rect(300, 200, 100, 100);
}

// push the button light turns on / off
function mousePressed() {
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    // could write on = !on; (makes false true)
    if (on) {
      on = false;
    } else {
      on = true;
    }
  }
  
  
}