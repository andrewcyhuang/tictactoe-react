import { useReducer, useContext, useMemo, createContext } from 'react';
import { gameStateReducer } from '../reducers/gameStateReducer';
import { getInitGameState } from '../common/utils';

const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {
    const [gameState, dispatchGameState] = useReducer(gameStateReducer, getInitGameState());
    const value = useMemo(() => [gameState, dispatchGameState], [gameState, dispatchGameState]);

    return (
        <GameStateContext.Provider value={value} >
            {children}
        </GameStateContext.Provider>
    );
}

export const useGameStateContext = () => {
    const context = useContext(GameStateContext);
    if (!context) {
        console.log('Must be used within a GameStateContext Provider');
    }
    return context;
}
