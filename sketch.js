var bird;
var pipes;
var score;

function setup() {
  createCanvas(500, 500);
  bird = new Bird(75, height / 2, height / 20);
  pipes = [];
  score = 0;
  var restartGame = createButton("Restart");
  restartGame.mousePressed(restart);
}

function draw() {
  background(50);
  bird.update();
  bird.show();

  //update and draw pipes
  for (var i = 0; i < pipes.length; i++) {
    pipes[i].update();
    pipes[i].show();
  }

  //remove pipes that are out of screen.
  for (var i = pipes.length - 1; i >= 0; i--) {
    if (pipes[i].x + pipes[i].width < 0) {
      pipes.splice(i, 1);
      score++;
    }
  }

  //add new pipes
  if (pipes.length < 5) {
    var add = true;
    for (var i = 0; i < pipes.length; i++) {
      if (pipes[i].x > width - width / 2) {
        add = false;
      }
    }
    if (add) {
      pipes.push(new Pipe());
    }
  }

  //display score
  fill(255);
  textSize(18);
  textAlign(LEFT);
  text("Score: " + score, 5, 20);

  //check for collision with pipes
  for (var i = 0; i < pipes.length; i++) {
    if (bird.collision(pipes[i])) {
      noLoop();
      fill(200, 0, 0);
      textSize(62);
      textAlign(CENTER);
      text("GAME OVER", width / 2, height / 2);
      textSize(28);
      text("Score: " + score, width / 2, height / 2 + 42);
    }
  }
}

function restart() {
  bird = new Bird(75, height / 2, height / 20);
  pipes = [];
  score = 0;
  loop();
}

function keyPressed() {
  if(keyCode == 32) {
    bird.jump();
  }
}
