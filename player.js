class Player {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.canvas;

    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
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

  newPos() {    
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();    
  }

  hitBottom() {

  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }

  draw() {
    this.img.src = "./Charmander.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}