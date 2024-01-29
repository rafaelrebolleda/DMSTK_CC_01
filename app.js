
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  fill("#000")
  noStroke();

  if (mouseX < width/3) {
    rectMode(CENTER);
    square(width/2, height/2, 400);
  } else if (mouseX < 2*width/3) {
    circle(width/2, height/2, 400);
  } else {
    triangle(250, 50, 450, 450, 50, 450);
  }
}

function keyPressed () {
  console.log("Key pressed");
}