class Controls {
  constructor(game) {
    this.game = game;
    this.player = this.game.player;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowRight":
          if (this.player.x + this.player.width < 1200) {
            this.player.speedX = 10;
          }
          break;
        case "ArrowLeft":
          if (this.player.x > 1) {
            this.player.speedX = -10;
          }
          break;
        case "ArrowUp":
          if(this.player.y > 1) {
            this.player.speedY = -20;
          }
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      this.player.speedX = 0;
      this.player.speedY = 0;
    })
  }


}
