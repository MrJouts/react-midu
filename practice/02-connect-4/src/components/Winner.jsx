import { TURN } from "../models/constants";
import messages from "../messages.json";

export const Winner = ({ winner, resetGame }) => {
  if (!winner) return null;
  const winnerMessage = winner === TURN.RED ? messages.red : messages.yellow;

  return (
    <div>
      <h2>{winnerMessage} gana!</h2>
      <button onClick={() => resetGame()}>Volver a jugar</button>
    </div>
  );
};
