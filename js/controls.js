class Controls {
  constructor(game) {
    this.game = game;
    this.playerOne = this.game.playerOne;
    this.playerTwo = this.game.playerTwo;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowRight":
          if (this.playerOne.x + this.playerOne.width < 1200) {
            this.playerOne.speedX = 10;
          }
          break;
        case "ArrowLeft":
          if (this.playerOne.x > 1) {
            this.playerOne.speedX = -10;
          }
          break;
        case "ArrowUp":
          // console.log("arrowup")
          if (
            this.playerOne.y > 1 &&
            this.playerOne.speedY == 0 &&
            !this.playerOne.isJumping
          ) {
            this.playerOne.isJumping = true;
            console.log(`speedy = ${this.playerOne.speedY}`);
            this.playerOne.speedY = -20;
          } else {
            this.playerOne.speedY += -1;
          }
          break;
        case "KeyD":
          if (this.playerTwo.x + this.playerTwo.width < 1200) {
            this.playerTwo.speedX = 10;
          }
          break;
        case "KeyA":
          if (this.playerTwo.x > 1) {
            this.playerTwo.speedX = -10;
          }
          break;
        case "KeyW":
          // console.log("arrowup")
          if (
            this.playerTwo.y > 1 &&
            this.playerTwo.speedY == 0 &&
            !this.playerTwo.isJumping
          ) {
            this.playerTwo.isJumping = true;
            console.log(`speedy = ${this.playerTwo.speedY}`);
            this.playerTwo.speedY = -20;
          } else {
            this.playerTwo.speedY += -1;
          }
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.code === "ArrowUp") {
        this.playerOne.speedY = 0;
      } else {
        this.playerOne.speedX = 0;
      }

      if (e.code === "KeyW") {
        this.playerTwo.speedY = 0;
      } else {
        this.playerTwo.speedX = 0;
      }
    });
  }

  
}
