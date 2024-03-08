
let font;
let points;

function preload(){
  font = loadFont("Roboto-Regular.ttf");
}

function setup() {
  createCanvas(500, 500); 
  background("#FFF "); 

  points = font.textToPoints("A", 0, 250, 300, {
    sampleFactor: 0.2
  });
  

}

function draw() {

  for (let i = 0; i < points.length; i++) {
    circle(points[i].x, points[i].y, 10);
  }

}


function keyPressed () {
  console.log("Key pressed");
  //save("export.png");

}