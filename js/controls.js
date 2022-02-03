class Controls {
  constructor(game) {
    this.game = game;
    this.playerOne = this.game.playerOne;
    this.playerTwo = this.game.playerTwo;
    this.keys = {
      arrowRight: {
        state: false,
        func: () => {
          if (this.playerOne.x + this.playerOne.width < 1200) {
            this.playerOne.lookLeft = false;
            this.playerOne.speedX = 10;
          }
        },
      },
      arrowLeft: {
        state: false,
        func: () => {
          if (this.playerOne.x > 1) {
            this.playerOne.lookLeft = true;
            this.playerOne.speedX = -10;
          }
        },
      },
      arrowUp: {
        state: false,
        func: () => {
          if (
            this.playerOne.y > 1 &&
            this.playerOne.speedY == 0 &&
            !this.playerOne.isJumping
          ) {
            this.playerOne.isJumping = true;
            console.log(`speedy = ${this.playerOne.speedY}`);
            this.playerOne.speedY = -19;
          } else {
            this.playerOne.speedY += -1;
          }
        },
      },
      keyW: {
        state: false,
        func: () => {
          if (
            this.playerTwo.y > 1 &&
            this.playerTwo.speedY == 0 &&
            !this.playerTwo.isJumping
          ) {
            this.playerTwo.isJumping = true;
            console.log(`speedy = ${this.playerTwo.speedY}`);
            this.playerTwo.speedY = -19;
          } else {
            this.playerTwo.speedY += -1;
          }
        },
      },
      keyA: {
        state: false,
        func: () => {          
          if (this.playerTwo.x > 1) {
            this.playerTwo.lookLeft = true;
            this.playerTwo.speedX = -10;
          }
        },
      },
      keyD: {
        state: false,
        func: () => {          
          if (this.playerTwo.x + this.playerTwo.width < 1200) {
            this.playerTwo.lookLeft = false;
            this.playerTwo.speedX = 10;
          }
        },
      },
    };
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowRight":
          this.keys.arrowRight.state = true;
          break;
        case "ArrowLeft":
          this.keys.arrowLeft.state = true;
          break;
        case "ArrowUp":
          this.keys.arrowUp.state = true;
          // console.log("arrowup")
          break;
        case "KeyD":
          this.keys.keyD.state = true;
          break;
        case "KeyA":
          this.keys.keyA.state = true;
          break;
        case "KeyW":
          this.keys.keyW.state = true;
          // console.log("arrowup")
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.code === "ArrowUp") {
        this.keys.arrowUp.state = false;
        this.playerOne.speedY = 0;
      } else {
        this.playerOne.speedX = 0;
      }

      if (e.code === "KeyW") {
        this.keys.keyW.state = false;
        this.playerTwo.speedY = 0;
      } else {
        this.playerTwo.speedX = 0;
      }

      if (e.code === "ArrowRight") {
        this.keys.arrowRight.state = false;
      }

      if (e.code === "ArrowLeft") {
        this.keys.arrowLeft.state = false;
      }

      if (e.code === "KeyA") {
        this.keys.keyA.state = false;
      }

      if (e.code === "KeyD") {
        this.keys.keyD.state = false;
      }
    });
  }
}
