window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };
    function startGame() {
        document.getElementById("intro").remove();
        document.getElementById("canvas").style.background = "url('/images/uv_map_imagebackground.png')";
        const game = new Game();
        game.start();
    }
};