
let p = Array(50);
let dMin = 100;


function setup() {
  createCanvas(500, 500); 

  for (let i = 0; i < p.length; i++) {
    p[i] = new Particle(random(0, width), random(0, height));    
  }

}

function draw() {

  background("#000 "); 
  noStroke();
  fill("#FFF");

  for (let i = 0; i < p.length; i++) {
    p[i].draw();
  }

  stroke("#FFF");
  for (let i = 0; i < p.length; i++) {
    for (let j = i + 1; j < p.length; j++) {
      if (dist(p[i].x, p[i].y, p[j].x, p[j].y) < dMin) {
        line(p[i].x, p[i].y, p[j].x, p[j].y)
      }
    }
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