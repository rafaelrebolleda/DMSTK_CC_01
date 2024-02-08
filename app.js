let nb = 30;
let rot = 1;
let dim = 350;

let f = 1;
let fmin = 0.2;

let sliderNb, sliderRot, sliderFmin;

function setup() {
  createCanvas(500, 500); 
  rectMode(CENTER);
  angleMode(DEGREES);

  sliderNb   = createSlider(2, 50, nb, 1);
  sliderRot  = createSlider(2, 90, rot);
  sliderFmin = createSlider(0.0, 1.0, fmin, 0.1);
}

function draw() {
  nb  = sliderNb.value();
  rot = sliderRot.value();
  fmin = sliderFmin.value();

  background("#000 ");

  // Change origin
  translate(width/2, height/2);
  
  stroke("#FFF");
  noFill();

  for (let i = 0; i < nb; i++) {

    f = map(i, 0, nb - 1, 1, fmin);

    square(0, 0, f * dim );
    rotate(rot); 
  }
}
 
function keyPressed () {
  console.log("Key pressed");
  //save("export.png");

}