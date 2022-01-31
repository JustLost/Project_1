window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };
    function startGame() {
        document.getElementById("start-button").remove();
        const game = new Game();
        game.start();
    }
};