class Obstacles {
  constructor(game, x, y, width, height, tile) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.canvas;
    this.tile = tile;
    
  }
  draw() {
    this.image.src = this.tile;
    // this.game.ctx.drawImage(
    //   this.image,
    //   this.x,
    //   this.y,
    //   this.width,
    //   this.height,
    // );
    let tilePattern = this.game.ctx.createPattern(this.image, "repeat");
    this.game.ctx.fillStyle = tilePattern;
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  checkCollision(player) {
    if (
      player.x + player.width < this.x ||
      player.x > this.x + this.width ||
      player.y + player.height < this.y ||
      player.y > this.y + this.height
    ) {
      return;
    }
    let playerTop_ObjBottom = Math.abs(player.y - (this.y + this.height));
    let playerRight_ObjLeft = Math.abs(player.x + player.width - this.x);
    let playerLeft_ObjRight = Math.abs(player.x - (this.x + this.width));
    let playerBottom_ObjTop = Math.abs(player.y + player.height - this.y);

    if (
      player.y <= this.y + this.height &&
      player.y + player.height > this.y + this.height &&
      playerTop_ObjBottom < playerRight_ObjLeft &&
      playerTop_ObjBottom < playerLeft_ObjRight
    ) {
      player.y = this.y + this.height;
      player.speedY = 0;
      //player.speedY = 0;
    }
    if (
      player.y + player.height >= this.y &&
      player.y < this.y &&
      playerBottom_ObjTop < playerRight_ObjLeft &&
      playerBottom_ObjTop < playerLeft_ObjRight
    ) {
      player.y = this.y - player.height;
      player.isJumping = false;
      //player.dy = 0;
      player.speedY = 0;
      // player.gravitySpeed = 0;
      //player.jump = false;
    }
    if (
      player.x + player.width >= this.x &&
      player.x < this.x &&
      playerRight_ObjLeft < playerTop_ObjBottom &&
      playerRight_ObjLeft < playerBottom_ObjTop
    ) {
      player.x = this.x - player.width;
      //player.speedX = 0;
    }
    if (
      player.x <= this.x + this.width &&
      player.x + player.width > this.x + this.width &&
      playerLeft_ObjRight < playerTop_ObjBottom &&
      playerLeft_ObjRight < playerBottom_ObjTop
    ) {
      player.x = this.x + this.width;
      //player.speedX = 0;
    }
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
}
