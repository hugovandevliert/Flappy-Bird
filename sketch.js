var bird;
var pipes;

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
