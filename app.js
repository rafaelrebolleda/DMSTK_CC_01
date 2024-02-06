let nb = 10;
let dim = 0;
let margin = 20;

function setup() {
  createCanvas(500, 500);
  background("#000");

  dim = (width - 2*margin)/nb;
}

function draw() {
  // noStroke();
  // fill("#FFF");
  stroke("#FFF");
  noFill();
  rectMode(CENTER);

  for (let j = 0; j < nb; j++) {
    for (let i = 0; i < nb; i++) {
      circle(margin + dim/2 + i*dim, margin + dim/2+j*dim, dim);  
      // rect(dim/2 + i*dim, dim/2+j*dim, 0.8*dim, 0.4*dim);  
    }
  }
}

function keyPressed () {
  console.log("Key pressed");
  //save("export.png");
  background(0);

}