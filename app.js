let nb = 10;


function setup() {
  createCanvas(500, 500); 
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background("#000 ");

  // Change origin
  translate(width/2, height/2);
  

  stroke("#FFF");
  noFill();

  for (let i = 0; i < nb; i++) {
    square(0, 0, 350 );
    rotate(10); 
  }

  
}
 
function keyPressed () {
  console.log("Key pressed");
  //save("export.png");

}