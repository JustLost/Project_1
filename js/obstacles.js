class Obstacles {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = game.canvasHeight - 100;
        this.width = 200;
        this.height = 100;
        this.image = new Image();
        this.canvas;
        
    }
    draw() {
        this.image.src = "/images/uv_map_image.png";
        this.game.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    floor(player) {
        let myTop = this.y;
        let playerBottom = player.y + player.height;
        if (playerBottom > myTop) {
            player.y = myTop - (player.height - 2)
        }
    }
}