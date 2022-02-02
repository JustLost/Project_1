class Player {
  constructor(game, x, y, width, height, name) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.canvas;

    this.name = name;

    this.speedX = 0;
    this.speedY = 0;
    //this.gravity = 0.05;
    this.gravitySpeed = 2;
    this.isJumping = false;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  newPos(obstacles) {
    //this.gravitySpeed += this.gravity;

    this.x += this.speedX;
    // if(this.isJumping){
    console.log(`speedy = ${this.speedY}, gravitySpeed= ${this.gravitySpeed}`);
    this.speedY += this.gravitySpeed;
    this.y += this.speedY;
    // }
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].checkCollision(this);
    }
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }

  draw(obstacles) {
    this.newPos(obstacles);
    this.img.src = "./images/dude.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
