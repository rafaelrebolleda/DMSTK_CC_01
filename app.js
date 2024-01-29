function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#F1FAEE");

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

  noStroke();
  fill("#E63946");
  rect(50, 50, 200, 400);
  
  fill("#1D3557");
  rect(250, 50, 200, 200);
  
  fill("#A8DADC");
  rect(250, 250, 200, 200);
  
  fill("#457D9D");
  rect(250, 250, 100, 100);
  rect(350, 350, 100, 100);
}