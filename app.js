
let p = Array(100);


function setup() {
  createCanvas(500, 500); 

  for (let i = 0; i < p.length; i++) {
    p[i] = new Particle(250, 250);    
  }

}

function draw() {

  background("#000 "); 
  noStroke();
  fill("#FFF");

  for (let i = 0; i < p.length; i++) {
    p[i].draw();
  }

}

class Particle {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
  }

  draw() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.x = random(0, width);
      this.y = random(0, height);
      this.vx = random(-2, 2);
      this.vy = random(-2, 2);
      }

    circle(this.x, this.y, 5);
  }

}



function keyPressed () {
  console.log("Key pressed");
  //save("export.png");

}