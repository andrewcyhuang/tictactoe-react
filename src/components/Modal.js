import { createResetGameAction } from '../common/actionFactory';
import { useGameStateContext } from '../hooks/GameStateProvider';
import '../styles/Modal.css';

export const Modal = ({ showModal }) => {
    const [gameState, dispatchGameState] = useGameStateContext();

    return (
        <div className='overlay' style={{ display: showModal ? 'block' : 'none'}}>
            <div className='modalContainer'>
                <div className='modalContent'>
                    <h2>{ gameState.winner !== null ? `Player ${gameState.winner} wins!` : 'Game Tie!'}</h2>
                    <button onClick={() => { dispatchGameState(createResetGameAction())}}>Start a new game!</button>
                </div>
            </div>
        </div>
    )
}