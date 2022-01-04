import { Constants } from "./constants";

export const getInitGameState = () => {
    const gameState = {};

    gameState.gameBoard = getInitGameBoard();
    gameState.playerTurn = 1;
    gameState.numMovesMade = 0;
    gameState.winner = null;

    return gameState;
}

export const getNextPlayer = (player) => {
    return player === 1 ? 2 : 1;
}

export const checkWinner = (gameBoard) => {
    for (let wincond of Constants.winningCombinations) {
        if (
            gameBoard[wincond[0][0]][wincond[0][1]] > 0 &&
            gameBoard[wincond[0][0]][wincond[0][1]] ===
            gameBoard[wincond[1][0]][wincond[1][1]] &&
            gameBoard[wincond[1][0]][wincond[1][1]] ===
            gameBoard[wincond[2][0]][wincond[2][1]] 
        ) {
            return true;
        }
    }
    return false;
}

const getInitGameBoard = () => {
    const gameBoard = new Array(3);

    for (let i = 0; i < gameBoard.length; i++) {
        gameBoard[i] = new Array(3).fill(0);
    }

    return gameBoard;
}