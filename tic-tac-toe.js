/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
// missed ({sigint: true});
const prompt = require('prompt-sync')({sigint: true});

let board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
    board[position] = mark;
};

// TODO: print the game board as described at the top of this code skeleton
function printBoard() {
    drawBoard = {
        1: '1',2: '2',3: '3',
        4: '4',5: '5',6: '6',
        7: '7',8: '8',9: '9'
    };

    for(let i in drawBoard){

        if (board[i] != ' '){

            drawBoard[i] = board[i];
        }
    }

    console.log('\n' +
    ' ' + drawBoard[1] + ' | ' + drawBoard[2] + ' | ' + drawBoard[3] + '\n' +
    ' ---------\n' +
    ' ' + drawBoard[4] + ' | ' + drawBoard[5] + ' | ' + drawBoard[6] + '\n' +
    ' ---------\n' +
    ' ' + drawBoard[7] + ' | ' + drawBoard[8] + ' | ' + drawBoard[9] + '\n');
};

// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
function validateMove(position) {
    if (position > 0 && position < 10 && board[position] === ' ') {
        return true;
    } else {
        return false;
    }
};

// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
// let winCombinations = [
//     [1, 2, 3],
// ];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
let winCombinations = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 6, 9], 
    [1, 5, 9], 
    [3, 5, 7]
];

function checkWin(player) {

    for (let condition of winCombinations) {
        if (board[condition[0]] == player && board[condition[1]] == player && board[condition[2]] == player) {
            return true;
        }
    }
    return false;

};

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {
    if (Object.values(board).includes(' ')){
        return false;
    } else {
        return true;
    }
}

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************
function changePlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
};

// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc
function gameStarts() {
    while (gameRunning) {
        printBoard();
        const prompt = require("prompt-sync")({sigint: true});
        const playerMove = prompt("Player " + currentPlayer + "'s turn. Please select a number between 1 - 9: ");
        const moveValidation = validateMove(playerMove);
        
        if (moveValidation === true) {
            markBoard(playerMove, currentPlayer);
            
            if (checkWin(currentPlayer) === true) {
                printBoard();
                console.log("Congratulations! Player " + currentPlayer + " won!");
                startNewGamePrompt();
            };

            if (checkFull() === true) {
                printBoard();
                gameRunning = false;
                console.log("It's a draw");
                startNewGamePrompt();
            };
            
            changePlayer();

        } else {
            console.log("Please enter a valid move.")
        }
    }
};

// entry point of the whole program
console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

let currentPlayer = "X";
let gameRunning = true;

gameStarts();

// Bonus Point: Implement the feature for the user to restart the game after a tie or game over
function startNewGamePrompt() {
    const prompt = require("prompt-sync")({sigint: true});
    const userInput = prompt("Hey there buddy! Would you like to play another game of tic tac toe? Y/N ");
    if (userInput === "Y" || userInput === "y") {
        startNewGame();
        gameStarts();
    } else if (userInput === "N" || userInput === "n") {
        gameRunning = false;
        process.exit(1);
    } else {
        console.log("Wrong input. Please try again.")
        startNewGamePrompt()
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