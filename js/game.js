class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.playerOne = null;
        this.playerTwo = null;
        this.obstacles = [];
        this.frames = 0;
        this.x = 0;
        this.y = 0;
        this.canvasWidth = 1200;
        this.canvasHeight = 800;
        this.intervalId = null;
    }
    start() {
        this.playerOne = new Player(this, 250, 120, 50, 100);
        this.playerTwo = new Player(this, 250, 120, 50, 100);
        const controls = new Controls(this);
        controls.keyboardEvents();

                
        this.obstacles.push(new Obstacles(this, 0, 0, 50, this.canvasHeight, "/images/uv_map_image.png"));
        this.obstacles.push(new Obstacles(this, 0, this.canvasHeight - 50, this.canvasWidth, 50, "/images/uv_map_image.png"));
        this.obstacles.push(new Obstacles(this, 0, 0, this.canvasWidth, 50, "/images/uv_map_image.png"))
        this.obstacles.push(new Obstacles(this, this.canvasWidth -50, 0, 50, this.canvasHeight, "/images/uv_map_image.png"));
        
        this.obstacles.push(new Obstacles(this, 250, 200, 650, 50, "/images/uv_map_image.png"))
        this.obstacles.push(new Obstacles(this, 250, 350, 650, 50, "/images/uv_map_image.png"))
        this.obstacles.push(new Obstacles(this, 250, 400, 600, 50, "/images/uv_map_image.png"))
        this.obstacles.push(new Obstacles(this, 300, 450, 500, 50, "/images/uv_map_image.png"))

        this.obstacles.push(new Obstacles(this, 50, 350, 50, 50, "/images/uv_map_image.png"))
        this.obstacles.push(new Obstacles(this, 50, 700, 100, 50, "/images/uv_map_image.png"))
        this.obstacles.push(new Obstacles(this, 1000, 650, 150, 100, "/images/uv_map_image.png"))
        this.obstacles.push(new Obstacles(this, 1100, 350, 150, 50, "/images/uv_map_image.png"))
        this.obstacles.push(new Obstacles(this, 900, 500, 100, 50, "/images/uv_map_image.png"))
        this.obstacles.push(new Obstacles(this, 900, 200, 50, 50, "/images/uv_map_image.png"))

        this.intervalId = setInterval(() => {
            this.update();
        }, 1000 / 60);
    }
    update() {
        this.clear();
        this.drawBackground();
        

        this.playerOne.draw(this.obstacles);
        this.playerTwo.draw(this.obstacles);
        
        this.drawHiddenPassage();

        for (let i = 0; i < this.obstacles.length; i += 1){
           this.obstacles[i].draw()
        }

        this.frames++;
    }
    drawHiddenPassage(){
        let hiddenImage = new Image();
        hiddenImage.src = "/images/uv_map_image.png";
        let tilePattern = this.ctx.createPattern(hiddenImage, "repeat");
        this.ctx.fillStyle = tilePattern;
        this.ctx.fillRect(250, 250, 650, 150);
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