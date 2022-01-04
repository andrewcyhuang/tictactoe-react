import { Enums } from "../common/enums";
import { checkWinner, getInitGameState, getNextPlayer } from "../common/utils";

export const gameStateReducer = (state, action) => {
    switch (action.type) {
        case Enums.ACTION_PLAYER_MOVE: {
            const updatedState = {...state};
            const { x, y, player } = action.payload;
            updatedState.gameBoard[x][y] = player;
            updatedState.winner = checkWinner(updatedState.gameBoard) ? player : null;
            updatedState.playerTurn = getNextPlayer(player);
            updatedState.numMovesMade = state.numMovesMade + 1;
            return updatedState;
        }
        case Enums.ACTION_RESET_GAME: {
            return getInitGameState();
        }
        default:
            return state;
    }
}