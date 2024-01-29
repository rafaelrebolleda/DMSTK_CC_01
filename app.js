
function setup() {
  createCanvas(500, 500);
  background("#000");
}

function draw() {
  fill(0);
  stroke(255, 100); // with alpha
  strokeWeight(2);

  if (mouseIsPressed == true) {
    myPattern(mouseX, mouseY, 20, mouseY/10);
  }
  
}

function keyPressed () {
  console.log("Key pressed");
  //save("export.png");
  background(0);

}

function myPattern(x, y, d, amp) {
  beginShape();
    vertex(x-d/2 + random(-amp, amp), y-d/2 + random(-amp, amp)); // 0
    vertex(x+d/2 + random(-amp, amp), y-d/2 + random(-amp, amp)); // 1
    vertex(x+d/2 + random(-amp, amp), y+d/2 + random(-amp, amp)); // 2
    vertex(x-d/2 + random(-amp, amp), y+d/2 + random(-amp, amp)); // 3
  endShape(CLOSE);

}