let nb = 8;
let dim = 0;
let margin = 20;
let x, y;


function setup() {
  createCanvas(500, 500);
  dim = (width - 2*margin)/nb;

  noLoop();
}

function draw() {
  background("#FFF");

  for (let j = 0; j < nb; j++) {
    for (let i = 0; i < nb; i++) {

      x = margin + i*dim;
      y = margin + j*dim;
 
      noFill();
      stroke("#DDD");

      // GRID
      // rect(x, y, dim, dim);

      // Create different patterns randomly
      let rnd = int(random(0, 4));
      noStroke();
      fill("#000");
      

      if ( rnd == 0 ) {
        triangle(x, y, x+dim, y+dim, x, y+dim)
      } else if ( rnd == 1) {
        triangle(x, y, x+dim, y+dim, x+dim, y)
      } else if ( rnd == 2) {
        triangle(x+dim, y, x+dim, y+dim, x, y+dim)
      } else if ( rnd == 3) {
        triangle(x, y, x+dim, y, x, y+dim)
      }
    

    }
  }
}
 
function keyPressed () {
  console.log("Key pressed");
  //save("export.png");
  redraw();

}