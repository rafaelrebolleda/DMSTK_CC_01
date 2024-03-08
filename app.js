
let font;
let points;
let txt = "DMSTK";
let xTxt, yTxt = 0;
let fontSize = 140;

function preload(){
  font = loadFont("Roboto-Regular.ttf");
}

function setup() {
  createCanvas(500, 500); 

  xTxt = width/2;
  yTxt = height/2;
}

function draw() {

  computePoints(map (mouseX, 0, width, 0.005, 0.1));
  background("#FFF "); 


  for (let i = 0; i < points.length; i++) {
    circle(points[i].x, points[i].y, 10);
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
  //save("export.png");

}