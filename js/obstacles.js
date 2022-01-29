class Obstacles {
    constructor(game, x, y, width, height) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.canvas;
        
    }
    draw(tile) {
        this.image.src = tile;
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