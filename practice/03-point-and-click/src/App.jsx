import { useEffect, useState } from "react";

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
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      setGameStatus(GAME_STATUS.FINISHED);
    }
  }, [count]);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const startCountDown = () => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
  };

  const clickCircle = () => {
    setScore(score + 1);
    setPosition({
      x: getRandomNumber(0, window.innerWidth - 50),
      y: getRandomNumber(0, window.innerHeight - 50),
    });
  };

  const restart = () => {
    setScore(0);
    setCount(7);
    startCountDown();
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
        <p>Countdown: {count}</p>
      </div>

      {gameStatus === GAME_STATUS.READY && (
        <button onClick={() => restart()}>start game</button>
      )}

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

      {gameStatus === GAME_STATUS.FINISHED && (
        <div>
          <h1>Game Over</h1>
          <p>Score: {score}</p>
          <button onClick={() => restart()}>start again</button>
        </div>
      )}
    </>
  );
}

export default App;
