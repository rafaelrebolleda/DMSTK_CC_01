
function setup() {
  createCanvas(500, 500);
  background("#000");
}

function draw() {
  noStroke();
  fill("#FFF");

  for (let i = 0; i < 5; i++) {
    circle(50 + i*100, 250, 100);  
  }

}

function keyPressed () {
  console.log("Key pressed");
  //save("export.png");
  background(0);

}