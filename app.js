let lineWidth = 10;

let yMouth = 400; // mouth height
let yEyes  = 150; // eyes height
let dEyes  = 50; // eyes width

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#FFF");

  // Points 
  // point(250, 250);
  
  // Lines
  // strokeWeight(10);
  // line(100, 100, 100, 400);
  // line(200, 150, 200, 350);
  // line(300, 200, 300, 300);
  // line(100, 100, 400, 250);
  // line(100, 400, 400, 250);

  // Circles
  // circle(250, 250, 400);
  // circle(250, 250, 300);
  // circle(250, 250, 200);

  // Rectangles
  // rect(150, 150, 200, 200);
  // rect(200, 200, 200, 200);
  // rect(150,  50, 200, 100);

  // Triangle
  // triangle(250, 100, 400, 350, 100, 350);

  // Polygon
  // beginShape();
  // vertex(100, 50);
  // vertex(400, 100);
  // vertex(450, 300);
  // vertex(250, 450);
  // vertex(50, 350);
  // // vertex(100, 50);
  // // endShape();
  // endShape(CLOSE);

  // Arcs
  // arc(250, 250, 300,  300, -45, 45);
  // arc(250, 250, 200,  200, 0, 90);
  // arc(250, 250, 100,  100, 45, 135);
  // arc(250, 250, 50,  50, 90, 180);

  //   noStroke();
  //   fill("#E63946");
  //   rect(50, 50, 200, 400);
    
  //   fill("#1D3557");
  //   rect(250, 50, 200, 200);
    
  //   fill("#A8DADC");
  //   rect(250, 250, 200, 200);
  
  //   fill("#457D9D");
  //   rect(350, 350, 100, 100);
  //   rect(250, 250, 100, 100);

  // Bruno Munari Face

  // Vertical Lines
  stroke("#000");
  strokeWeight(lineWidth);
  line(50, 50, 50, 450);
  line(150, 50, 150, 450);
  line(250, 50, 250, 450);
  line(350, 50, 350, 450);
  line(450, 50, 450, 450);

  // Horizontal Lines
  line(50, 50, 450, 50);
  line(50, 150, 450, 150);
  line(50, 250, 450, 250);
  line(50, 350, 450, 350);
  line(50, 450, 450, 450);

  // Eyebrows

  line(50, 150, 150, 50);
  line(150, 50, 250, 150);
  line(250, 150, 350, 50);
  line(350, 50, 450, 150);

  // Nose
  line(150, 250, 250, 350);
  line(250, 350, 350, 250);

  // Mouth
  line(150, yMouth, 350, yMouth);

  // Eyes
  fill("#000");
  noStroke();
  circle(150, yEyes, dEyes);
  circle(350, yEyes, dEyes);


}

function keyPressed () {
  console.log("Key pressed");
  save("bruno_munari_face.png");
}