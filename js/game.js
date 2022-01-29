class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.player = null;
        this.obstacles = null;
        this.frames = 0;
        this.x = 0;
        this.y = 0;
        this.canvasWidth = 1200;
        this.canvasHeight = 800;
        this.intervalId = null;
    }
    start() {
        this.player = new Player(this, 0, 0, 100, 150);
        const controls = new Controls(this);
        controls.keyboardEvents();
        this.obstacles = new Obstacles(this, 0, this.canvasHeight - 100, 200, 100 );

        this.intervalId = setInterval(() => {
            this.update();
        }, 1000 / 60);
    }
    update() {
        this.clear();
        this.drawBackground();
                
        this.player.draw(this.obstacles);
                
        this.obstacles.draw("/images/uv_map_image.png");
        this.frames++;
    }
    drawBackground() {
        //this.drawBackground.src = '';
        //this.ctx.drawImage(this.drawBackground, this.x, this.y, this.canvasWidth, this.canvasHeight);
    }
    stop() {
        clearInterval(this.intervalId);
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

}