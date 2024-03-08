
let font;
let points;
let txt = "DMSTK";
let xTxt, yTxt = 0;
let fontSize = 200;

let sizeMax = 50;
let speed = 2;

function preload(){
  font = loadFont("Roboto-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight); 

  angleMode(DEGREES);

  xTxt = width/2;
  yTxt = height/2;
}

function draw() {

  computePoints(map (mouseX, 0, width, 0.005, 0.1));

  background("#000 "); 

  noFill();
  stroke("#FFF");
  strokeWeight(2);

  beginShape();
  for (let i = 0; i < points.length; i++) {
    vertex(points[i].x, points[i].y);
  }
  endShape();

  fill("#000");
  
  let d= 0;
  let phase = 0;

  for (let i = 0; i < points.length; i++) {
    phase = dist(mouseX, mouseY, points[i].x, points[i].y);
    d = sizeMax * sin(speed*frameCount + phase);
    circle(points[i].x, points[i].y, d);
  }

}

function computePoints(factor) {
  points = font.textToPoints(txt, xTxt, yTxt, fontSize, {
    sampleFactor: factor
  });

  let bounds = font.textBounds(txt, xTxt, yTxt, fontSize);

  for (let i = 0; i < points.length; i++) {
    points[i].x -= bounds.w/2;
    points[i].y += bounds.h/2;
  }
  
}


function keyPressed () {
  console.log("Key pressed");
  save("export.png");

}