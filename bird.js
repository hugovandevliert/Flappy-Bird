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
