
function setup() {
  createCanvas(500, 500);
  background("#000");
}

function draw() {
  noFill(0);
  stroke(255, 20); // with alpha
  strokeWeight(2);

  if (mouseIsPressed == true) {
    circle(mouseX, mouseY, random(100,200));
  }
  
}

function keyPressed () {
  console.log("Key pressed");
  save("export.png");
  background(0);

}