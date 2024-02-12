
let p = Array(500);
let dMin = 100;
let noiseScale = 0.005;
let noiseAngle = 360;
let noiseSpeed = 0.3;
let ageMax = 400;


function setup() {
  createCanvas(500, 500); 
  background("#000 "); 

  angleMode(DEGREES);

  for (let i = 0; i < p.length; i++) {
    p[i] = new Particle(random(0, width), random(0, height));    
  }

}

function draw() {

  stroke(255, map(frameCount, 1, ageMax, 255, 0));

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

    let n = noiseAngle*noise(noiseScale*this.x, noiseScale*this.y);
    this.vx = noiseSpeed*cos(n);
    this.vy = noiseSpeed*sin(n);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.x = random(0, width);
      this.y = random(0, height);
      this.vx = random(-2, 2);
      this.vy = random(-2, 2);
      }

    // circle(this.x, this.y, 5);
    point(this.x, this.y);
  }

}



function keyPressed () {
  console.log("Key pressed");
  //save("export.png");

}