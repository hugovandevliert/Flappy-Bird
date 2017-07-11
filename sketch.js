var bird;

function setup() {
  createCanvas(500,500);
  bird = new Bird(75, height / 2);
}

function draw() {
  background(50);
  bird.update();
  bird.show();
}

function keyPressed() {
  if(keyCode == 32) {
    bird.jump();
  }
}

function Bird(x, y) {
  this.x = x;
  this.y = y;
  this.gravity = 0.75;
  this.speed = 0;

  this.update = function() {
    this.speed += this.gravity;
    this.speed *= 0.9;
    this.y += this.speed;

    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y > height) {
      this.y = height;
    }
  }

  this.jump = function() {
    this.speed -= 12.5;
    this.y += this.speed;
  }

  this.show = function() {
    ellipse(this.x, this.y, 25);
  }
}
