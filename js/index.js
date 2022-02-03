window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };
    function startGame() {
        document.getElementById("game-board").style.display = "flex"
        document.getElementById("intro").remove();
        document.getElementById("canvas").style.background = "url('./docs/assets/images/uv_map_imagebackground50.png')";
        const game = new Game();
        game.start();
    }
};