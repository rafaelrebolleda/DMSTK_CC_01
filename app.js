let nb = 20;
let dim = 0;
let margin = 20;

let f = 0.5; // [0..1]
let freq = -1;

let x, y;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  dim = (width - 2*margin)/nb;
}

function draw() {
  background("#000");
  // stroke("#FFF");
  // noFill();
  rectMode(CENTER);

  for (let j = 0; j < nb; j++) {
    for (let i = 0; i < nb; i++) {

      x = margin + dim/2 + i*dim;
      y = margin + dim/2+j*dim;

      f = sin(frameCount * freq + 3*dist(mouseX, mouseY, x, y));

      circle(x, y, f*dim);  
      // rect(dim/2 + i*dim, dim/2+j*dim, 0.8*dim, 0.4*dim);  
    }
  }
}

function keyPressed () {
  console.log("Key pressed");
  //save("export.png");
  background(0);

}