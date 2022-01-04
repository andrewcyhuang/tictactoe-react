import { useState } from 'react'; 
import { createPlayerMoveAction } from '../common/actionFactory';
import { useGameStateContext } from '../hooks/GameStateProvider';
import '../styles/BoardTile.css';
import CircleIcon from '../assets/circle.png';
import CrossIcon from '../assets/cross.png';

export const BoardTile = ({rowIdx, colIdx, val}) => {
    const [gameState, dispatchGameState] = useGameStateContext();
    const [isMouseHover, setIsMouseHover] = useState(false);

    return (
        <td onMouseEnter={() => setIsMouseHover(true)} 
            onMouseLeave={() => setIsMouseHover(false)}
            onClick={() => val === 0 ? dispatchGameState(createPlayerMoveAction(rowIdx, colIdx, gameState.playerTurn)) : undefined}>
            <div className='tileData'>
                {
                    val === 0 ? 
                        isMouseHover ? <img src={gameState.playerTurn === 1 ? CircleIcon : CrossIcon} alt=''/> : null : 
                        <img src={val === 1 ? CircleIcon : CrossIcon} alt=''/>
                }
            </div>    
        </td>
    )
}