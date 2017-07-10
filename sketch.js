var g = 5;
var bird;

function setup() {
  createCanvas(500,500);
  bird = new Bird(50, 250);
}

function draw() {
  background(50);
  bird.show();
}

function keyPressed() {
  if(keyCode == 32) {
    bird.move(10);
  }
}

function Bird(x, y) {
  this.x = x;
  this.y = y;
  this.speed = 0;
  this.acc = 0;

  this.move = function(a) {
    this.acc += a;
    this.speed += this.acc;
    this.y -= this.speed;
  }

  this.show = function() {
    ellipse(this.x, this.y, 25);
  }
}
