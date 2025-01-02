import { useState } from "react";
import "./App.css";

const GAME_STATUS = {
  READY: "ready",
  PLAYING: "playing",
  FINISHED: "finished",
};

function App() {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.READY);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const clickCircle = () => {
    setScore(score + 1);
    setPosition({
      x: getRandomNumber(0, window.innerWidth - 50),
      y: getRandomNumber(0, window.innerHeight - 50),
    });
  };

  const start = () => {
    setScore(0);
    setGameStatus(GAME_STATUS.PLAYING);
    setPosition({
      x: getRandomNumber(0, window.innerWidth - 50),
      y: getRandomNumber(0, window.innerHeight - 50),
    });
  };

  return (
    <>
      <div className="scoreCard">
        <p>score: {score}</p>
      </div>

      {gameStatus === GAME_STATUS.PLAYING && (
        <div
          onClick={() => clickCircle()}
          className="square"
          style={{
            right: `${position.x}px`,
            bottom: `${position.y}px`,
          }}
        />
      )}

      {gameStatus === GAME_STATUS.READY && (
        <button onClick={() => start()}>start game</button>
      )}
    </>
  );
}

export default App;
