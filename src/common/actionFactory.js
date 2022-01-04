import { Enums } from "./enums";

export const createPlayerMoveAction = (rowIdx, colIdx, player) => {
    return {
        type: Enums.ACTION_PLAYER_MOVE,
        payload: {
            x: rowIdx,
            y: colIdx,
            player: player
        }
    }
}

export const createResetGameAction = () => {
    return {
        type: Enums.ACTION_RESET_GAME
    }
}