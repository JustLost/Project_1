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
        this.game.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    floor(player) {
        let myTop = this.y;
        let playerBottom = player.y + player.height;
        if (playerBottom < myTop + this.height && 
            playerBottom > myTop &&
            (player.x < this.x + this.width && 
            player.x + player.width > this.x)) {
            player.y = myTop - (player.height + 2)            
        }
    }
    ceiling(player) {
        let under = this.y + this.height;
        if (player.y < under &&
            player.y > this.y &&            
            (player.x < this.x + this.width && 
            player.x + player.width > this.x)) {
                player.y = under + 2
            }
    }
    rightWall(player) {
        let right = this.x
        if (player.x + player.width > right &&
        player.x + player.width < right + this.width &&
        (player.y < this.y + this.height &&
        player.y + player.height > this.y)) {
            console.log(this.x, this.y);
            player.x = right - (player.width + 2)
        }
    }
    touchingFloor(player) {
        

    }
}