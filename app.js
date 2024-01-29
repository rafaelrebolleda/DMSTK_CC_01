
function setup() {
  createCanvas(500, 500);
  background("#000");
}

function draw() {
  fill(0);
  stroke(255);
  strokeWeight(2);

  if (mouseIsPressed == true) {
    circle(mouseX, mouseY, 50);
  }
  
}

function keyPressed () {
  console.log("Key pressed");
  save("export.png");
  background(0);

}