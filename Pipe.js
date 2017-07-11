function Pipe() {
  this.speed = 1;
  this.x = width;
  this.width = floor(random(width / 7, width / 4));
  do {
    this.top = floor(random(0, 400));
    this.bottom = floor(random(100, 500));
  }
  while (height - this.bottom - this.top < 100 || height - this.bottom - this.top > 300);

  this.update = function() {
    this.x -= this.speed;
  }

  this.show = function() {
    fill(0, 200, 0);
    rect(this.x, 0, this.width, this.top);
    rect(this.x, height - this.bottom, this.width, this.bottom);
  }
}
