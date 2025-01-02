export const GameOver = ({score, restart}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <p>Score: {score}</p>
      <button onClick={() => restart()}>Start again</button>
    </div>
  );
}