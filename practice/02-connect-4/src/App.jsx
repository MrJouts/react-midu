import { useState } from "react";

import { BOARD, TURN } from "./models/constants";
import { Winner } from "./components/Winner";
import { Column } from "./components/Column";

import "./App.css";
import { checkWinner } from "./logic/board";

function App() {
  const [board, setBoard] = useState(BOARD);
  const [turn, setTurn] = useState(TURN.RED);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    console.log("winner", winner, turn);
    if (winner) return;

    const newBoard = board.map((column) => [...column]);
    const row = newBoard[index].filter((cell) => cell === null).length - 1;

    if (row < 0) return;
    newBoard[index][row] = turn;
    setBoard(newBoard);

    // Set next turn
    const newTurn = turn === TURN.RED ? TURN.YELLOW : TURN.RED;
    setTurn(newTurn);

    // Check for winner
    if (checkWinner(newBoard, turn)) {
      setWinner(turn);
      return;
    }
  };

  return (
    <>
      <div className="player-turn">
        <div className={turn} />
      </div>

      <div className="board">
        {board.map((column, columnIndex) => (
          <Column
            key={columnIndex}
            column={column}
            columnIndex={columnIndex}
            updateBoard={updateBoard}
          />
        ))}
      </div>

      <Winner winner={winner} />
    </>
  );
}

export default App;
