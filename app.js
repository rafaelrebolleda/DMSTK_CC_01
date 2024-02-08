let nb = 30;
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
      stroke("#000");
      strokeWeight(4);

      if ( rnd == 0 ) {
        line(x, y, x+dim, y+dim);
      } else if ( rnd == 1) {
        line(x, y+dim, x+dim, y);
      } else if ( rnd == 2) {
        line(x+dim/2, y, x+dim/2, y+dim);
      } else if ( rnd == 3) {
        line(x, y+dim/2, x+dim, y+dim/2);
      }
    

    }
  }
}
 
function keyPressed () {
  console.log("Key pressed");
  //save("export.png");
  redraw();

}