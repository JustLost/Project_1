window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };
    function startGame() {
        document.getElementById("game-board").style.display = "flex"
        document.getElementById("intro").remove();
        document.getElementById("canvas").style.background = "url('./docs/assets/images/backgroundGame.png')";
        const game = new Game();
        game.start();
    }
};