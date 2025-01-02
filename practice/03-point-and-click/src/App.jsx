import { useState } from "react";
import { getRandomPosition } from "./logic/getRandomPosition";
import { useCountDown } from "./hooks/useCountDown";
import { GAME_INITAL_STATE, GAME_STATUS } from "./model/constants";
import { Counter } from "./components/Counter";
import { GameOver } from "./components/GameOver";
import { Circle } from "./components/Circle";

import "./App.css";

function App() {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.READY);
  const [position, setPosition] = useState(GAME_INITAL_STATE.position);
  const [score, setScore] = useState(GAME_INITAL_STATE.score);
  const { count, setCount, startCountDown } = useCountDown(
    GAME_INITAL_STATE.count,
    () => setGameStatus(GAME_STATUS.FINISHED)
  );

  const clickCircle = () => {
    setScore(score + 1);
    setPosition(getRandomPosition());
  };

  const restart = () => {
    setScore(0);
    setCount(5);
    startCountDown();
    setGameStatus(GAME_STATUS.PLAYING);
    setPosition(getRandomPosition());
  };

  return (
    <>
      {gameStatus === GAME_STATUS.READY && (
        <button onClick={() => restart()}>Start game</button>
      )}

      {gameStatus === GAME_STATUS.PLAYING && (
        <>
          <Circle position={position} onClick={clickCircle} />
          <Counter count={count} />
        </>
      )}

      {gameStatus === GAME_STATUS.FINISHED && (
        <GameOver score={score} restart={restart} />
      )}
    </>
  );
}

export default App;
