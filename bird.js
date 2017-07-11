function Bird(x, y, s) {
  this.x = x;
  this.y = y;
  this.s = s;
  this.r = s / 2;
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

  this.collision = function(pipe) {
    if (this.x + this.r >= pipe.x && this.x + this.r <= pipe.x + pipe.width) {
      if (this.y - this.r <= pipe.top || this.y - this.r >= height - pipe.bottom) {
        return true;
      }
    }
    return false;
  }

  this.jump = function() {
    this.speed -= 12.5;
    this.y += this.speed;
  }

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.s);
  }
}
