import { useGameStateContext } from "../hooks/GameStateProvider";
import { BoardTile } from "./BoardTile";
import '../styles/GameBoard.css';

export const GameBoard = () => {
    const [gameState] = useGameStateContext();
    return (
        <div className='gameboardContainer'>
            <table>
                <tbody>
                    {gameState.gameBoard.map((row, rowIdx) => {
                        return (
                            <tr key={'row: ' + rowIdx}>
                                {
                                    row.map((col, colIdx) => (
                                        <BoardTile rowIdx={rowIdx} colIdx={colIdx} val={col} key={rowIdx + colIdx} />
                                    ))
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}