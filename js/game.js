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
        this.controls = null;
    }
    start() {
        this.playerOne = new Player(this, 300, 120, 50, 100, "Player One");
        this.playerTwo = new Player(this, 300, 120, 50, 100, "Player Two");
        this.controls = new Controls(this);
        this.controls.keyboardEvents();

                
        this.obstacles.push(new Obstacles(this, 0, 0, 50, this.canvasHeight, "/images/leftside.png"));
        this.obstacles.push(new Obstacles(this, 50, this.canvasHeight - 50, this.canvasWidth, 50, "/images/green.png"));
        this.obstacles.push(new Obstacles(this, 0, 0, this.canvasWidth, 50, "/images/top.png"))
        this.obstacles.push(new Obstacles(this, this.canvasWidth -50, 0, 50, this.canvasHeight, "/images/rightside.png"));
        
        //this.obstacles.push(new Obstacles(this, 250, 200, 650, 50, "/images/uv_map_image50.png"))
        this.obstacles.push(new Obstacles(this, 250, 350, 650, 50, "/images/uv_map_image50.png"))
        this.obstacles.push(new Obstacles(this, 250, 400, 600, 50, "/images/uv_map_image50.png"))
        this.obstacles.push(new Obstacles(this, 300, 450, 500, 50, "/images/uv_map_image50.png"))

        this.obstacles.push(new Obstacles(this, 50, 350, 50, 50, "/images/greenwall.png"))
        this.obstacles.push(new Obstacles(this, 50, 700, 100, 50, "/images/down-left.png"))
        this.obstacles.push(new Obstacles(this, 1000, 650, 150, 100, "/images/down-right.png"))
        this.obstacles.push(new Obstacles(this, 1100, 350, 50, 50, "/images/greenendleft.png"))
        this.obstacles.push(new Obstacles(this, 900, 500, 100, 50, "/images/middlw-down.png"))
        this.obstacles.push(new Obstacles(this, 150, 500, 100, 50, "/images/middlw-down.png"))
        this.obstacles.push(new Obstacles(this, 900, 200, 50, 50, "/images/uv_map_image50.png"))

        this.obstacles.push(new Obstacles(this, 350, 50, 25, 150, "/images/uv_map_image50.png"))

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
        this.checkWinner(this.playerOne);
        this.checkWinner(this.playerTwo);
        this.checkMoves()

        for (let i = 0; i < this.obstacles.length; i += 1){
           this.obstacles[i].draw()
        }

        this.frames++;
    }

    checkMoves() {
        Object.keys(this.controls.keys).forEach(key => {
            console.log('key',this.controls.keys[key].state)
            this.controls.keys[key].state && this.controls.keys[key].func()
          })
    }
    drawHiddenPassage() {
        let hiddenImage = new Image();
        hiddenImage.src = "/images/uv_map_image50.png";
        let tilePattern = this.ctx.createPattern(hiddenImage, "repeat");
        this.ctx.fillStyle = tilePattern;
        this.ctx.fillRect(250, 250, 650, 150);
    }
    checkWinner(player) {
        let x = 375;
        let y = 50;
        let width = 5;
        let height = 150;
        let checkPoint= new Image();
        checkPoint.src = "/images/uv_map_image50.png";
        let tilePattern = this.ctx.createPattern(checkPoint, "repeat");
        this.ctx.fillStyle = tilePattern;
        this.ctx.fillRect(x, y, width, height);

        let playerTop_ObjBottom = Math.abs(player.y - (y + height));        
        let playerLeft_ObjRight = Math.abs(player.x - (x + width));
        let playerBottom_ObjTop = Math.abs(player.y + player.height - y);
        if (
          player.x + player.width < x ||
          player.x > x + width ||
          player.y + player.height < this.y ||
          player.y > y + height
        ) {
          return;

        } else if (
          player.x <= x + width &&
          player.x + player.width > x + width &&
          playerLeft_ObjRight < playerTop_ObjBottom &&
          playerLeft_ObjRight < playerBottom_ObjTop
        ) {
          console.log(player.name);
          
          document.getElementById("winner").innerHTML = `${player.name} won!`;
          this.stop();
          document.getElementById("canvas").remove();
        }
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