
function setup() {
  createCanvas(500, 500);
  background("#FFF");
  noFill();
  stroke(0);
  strokeWeight(4)
  rect(50, 50, 400, 400)
}

function draw() {
  if ( frameCount >= 100) {
    noLoop();
  } else {
    circle(random(100, 400), random(100, 400), 4);
  }
  
}

function keyPressed () {
  console.log("Key pressed");
  //save("export.png");
  background(0);

}