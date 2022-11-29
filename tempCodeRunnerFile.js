function startNewGamePrompt() {
    const prompt = require("prompt-sync")({sigint: true});
    const userInput = prompt("Hey there buddy! Would you like to play another game of tic tac toe? Y/N ");
    if (userInput === "Y") {
        startNewGame();
        gameStarts();
    } else {
        gameRunning = false;
        process.exit(1);
    }
};

function startNewGame() {
    board = {
        1: ' ',
        2: ' ',
        3: ' ',
        4: ' ',
        5: ' ',
        6: ' ',
        7: ' ',
        8: ' ',
        9: ' '
    }
};