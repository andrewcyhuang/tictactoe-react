import { Game } from './components/Game';
import { GameStateProvider } from './hooks/GameStateProvider';

export const App = () => {
  return (
    <GameStateProvider>
      <div className="App" style={{ margin: 0 }}>
        <Game />
      </div>
    </GameStateProvider>
  );
}
