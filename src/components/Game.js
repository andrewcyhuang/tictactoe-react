import { useState, useEffect } from "react";
import { useGameStateContext } from "../hooks/GameStateProvider";
import { GameBoard } from "./GameBoard";
import { Modal } from './Modal';
import '../styles/Game.css';
import CircleIcon from '../assets/circle.png';
import CrossIcon from '../assets/cross.png';

export const Game = () => {
    const [gameState] = useGameStateContext();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (gameState.winner !== null || gameState.numMovesMade >= 9) {
            setShowModal(true);
        }

        return () => setShowModal(false);
    }, [gameState]);

    return (
            <div className='GameContainer'>
                <header>Tic Tac Toe</header>
                <GameBoard />
                <h2>Player {gameState.playerTurn}'s Turn</h2>
                <img src={gameState.playerTurn === 1 ? CircleIcon : CrossIcon} alt=''/>
                <Modal showModal={showModal}/>
            </div>
    )
}