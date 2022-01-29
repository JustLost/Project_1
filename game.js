class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.player = null;
        this.obstacle = ;
        this.frames = 0;
        this.x = 0;
        this.y = 0;
        this.canvasWidth = 1200;
        this.canvasHeight = 800;
        this.intervalId = null;
    }
    start() {
        this.player = new Player();
        const controls = new Controls(this);
        controls.keyboardEvents();

        this.intervalId = setInterval(() => {
            this.update();
        }, 1000 / 60);
    }
    update() {
        this.drawBackground();
        this.player.draw();
        this.obstacle();
        this.frames++;
    }
    drawBackground() {
        this.drawBackground.src = '';
        this.ctx.drawImage(this.drawBackground, this.x, this.y, this.canvasWidth, this.canvasHeight);
    }
    stop() {
        clearInterval(this.intervalId);
    }
    
}