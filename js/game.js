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
        this.intervalId1 = null;
        this.intervalId2 = null;
        this.controls = null;
        this.counter = 3;
    }
    start() {
        this.playerOne = new Player(this, 300, 110, 60, 100, "Player One", "./docs/assets/images/char.png", "./docs/assets/images/char.png");
        this.playerTwo = new Player(this, 300, 120, 60, 100, "Player Two", "./docs/assets/images/char2.png", "./docs/assets/images/char2.png");
        this.controls = new Controls(this);
        this.controls.keyboardEvents();

                
        this.obstacles.push(new Obstacles(this, 0, 0, 50, this.canvasHeight, "./docs/assets/images/leftside.png")); 
        this.obstacles.push(new Obstacles(this, this.canvasWidth - 300, this.canvasHeight - 50, 250, 50, "./docs/assets/images/bottomright.png"));      
        this.obstacles.push(new Obstacles(this, 50, 0, 1100, 50, "./docs/assets/images/top.png"))
        this.obstacles.push(new Obstacles(this, this.canvasWidth -50, 0, 50, this.canvasHeight, "./docs/assets/images/rightside.png"));
        this.obstacles.push(new Obstacles(this, 0, this.canvasHeight - 50, 700, 50, "./docs/assets/images/bottomleft.png"));
        
        
        this.obstacles.push(new Obstacles(this, 250, 200, 700, 50, "./docs/assets/images/centertop.png"))
        this.obstacles.push(new Obstacles(this, 250, 350, 650, 50, "./docs/assets/images/centerbig.png"))
        this.obstacles.push(new Obstacles(this, 250, 400, 600, 50, "./docs/assets/images/centermidles.png"))
        this.obstacles.push(new Obstacles(this, 300, 450, 500, 50, "./docs/assets/images/centersmall.png"))

        this.obstacles.push(new Obstacles(this, 50, 350, 50, 50, "./docs/assets/images/greenwall.png"))
        this.obstacles.push(new Obstacles(this, 50, 700, 100, 50, "./docs/assets/images/down-left.png"))
        this.obstacles.push(new Obstacles(this, 1000, 650, 150, 100, "./docs/assets/images/down-right.png"))
        this.obstacles.push(new Obstacles(this, 1100, 350, 50, 50, "./docs/assets/images/greenendleft.png"))
        this.obstacles.push(new Obstacles(this, 900, 500, 100, 50, "./docs/assets/images/middlw-down.png"))
        this.obstacles.push(new Obstacles(this, 150, 500, 100, 50, "./docs/assets/images/middlw-down.png"))
        
        //startingwall
        this.obstacles.push(new Obstacles(this, 350, 50, 25, 150, "./docs/assets/images/startwall.png"))
        this.obstacles.push(new Obstacles(this, 150, 500, 100, 50, "./docs/assets/images/middlw-down.png"))
        this.obstacles.push(new Obstacles(this, 250, 650, 50, 100, "./docs/assets/images/box50x100.png"))
        this.obstacles.push(new Obstacles(this, 750, 150, 80, 50, "./docs/assets/images/left-rock.png"))
        this.obstacles.push(new Obstacles(this, 450, 600, 150, 150, "./docs/assets/images/Right-rock.png"))

        for (let i = 0; i < this.obstacles.length; i += 1) {
          this.obstacles[i].draw();
        }
        this.playerOne.draw(this.obstacles);
        this.playerTwo.draw(this.obstacles);

        this.drawHiddenPassage();
        this.checkWinner(this.playerOne);
        this.checkWinner(this.playerTwo);

        this.intervalId2 = setInterval(() => {
          this.counter--;
        }, 1000);
        
        
        

        setTimeout(() => {
            clearInterval(this.intervalId2);
            this.countdown();
            
        }, 3900);
    }

    countdown() {
        this.intervalId1 = setInterval(() => {
            this.update();
            
        }, 1000 / 60);
    }

    update() {
        this.clear();
        this.drawBackground();   
        
        this.checkFall(this.playerOne);
        this.checkFall(this.playerTwo);

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
            this.controls.keys[key].state && this.controls.keys[key].func()
          })
    }
    drawHiddenPassage() {
        let hiddenImage = new Image();
        hiddenImage.src = "./docs/assets/images/greenmidle.png";
        let tilePattern = this.ctx.createPattern(hiddenImage, "repeat");
        this.ctx.fillStyle = tilePattern;
        this.ctx.fillRect(250, 250, 650, 100);
    }
    checkFall(player) {
        
        if (player.y + player.height > 800) {
            player.y = 650;
            player.x = 400;
            player.speedY = 0;
        }           

    }
    checkWinner(player) {
        let x = 375;
        let y = 50;
        let width = 25;
        let height = 150;
        let checkPoint= new Image();
         checkPoint.src = "./docs/assets/images/flag.png";
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
        clearInterval(this.intervalId1);
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

}