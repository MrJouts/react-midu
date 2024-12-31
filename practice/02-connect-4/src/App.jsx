import { useState } from "react";

import "./App.css";

const TURN = {
  RED: "red",
  YELLOW: "yellow",
};

const WIN_CONDITIONS = [
  // Horizontal win conditions
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ],
  [
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
  ],
  [
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
  ],
  [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ],
  [
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
  ],
  [
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
  ],
  [
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
  ],
  [
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
  ],
  [
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
  ],
  [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  [
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
  ],
  [
    [3, 2],
    [3, 3],
    [3, 4],
    [3, 5],
  ],
  [
    [3, 3],
    [3, 4],
    [3, 5],
    [3, 6],
  ],
  [
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
  ],
  [
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
  ],
  [
    [4, 2],
    [4, 3],
    [4, 4],
    [4, 5],
  ],
  [
    [4, 3],
    [4, 4],
    [4, 5],
    [4, 6],
  ],
  [
    [5, 0],
    [5, 1],
    [5, 2],
    [5, 3],
  ],
  [
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
  ],
  [
    [5, 2],
    [5, 3],
    [5, 4],
    [5, 5],
  ],
  [
    [5, 3],
    [5, 4],
    [5, 5],
    [5, 6],
  ],

  // Vertical win conditions
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ],
  [
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
  ],
  [
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
  ],
  [
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
  ],
  [
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
  ],
  [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
  ],
  [
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
  ],
  [
    [1, 3],
    [2, 3],
    [3, 3],
    [4, 3],
  ],
  [
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
  ],
  [
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
  ],
  [
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 4],
  ],
  [
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
  ],
  [
    [0, 5],
    [1, 5],
    [2, 5],
    [3, 5],
  ],
  [
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
  ],
  [
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 5],
  ],
  [
    [0, 6],
    [1, 6],
    [2, 6],
    [3, 6],
  ],
  [
    [1, 6],
    [2, 6],
    [3, 6],
    [4, 6],
  ],
  [
    [2, 6],
    [3, 6],
    [4, 6],
    [5, 6],
  ],

  // Diagonal (bottom-left to top-right) win conditions
  [
    [3, 0],
    [2, 1],
    [1, 2],
    [0, 3],
  ],
  [
    [4, 0],
    [3, 1],
    [2, 2],
    [1, 3],
  ],
  [
    [3, 1],
    [2, 2],
    [1, 3],
    [0, 4],
  ],
  [
    [5, 0],
    [4, 1],
    [3, 2],
    [2, 3],
  ],
  [
    [4, 1],
    [3, 2],
    [2, 3],
    [1, 4],
  ],
  [
    [3, 2],
    [2, 3],
    [1, 4],
    [0, 5],
  ],
  [
    [5, 1],
    [4, 2],
    [3, 3],
    [2, 4],
  ],
  [
    [4, 2],
    [3, 3],
    [2, 4],
    [1, 5],
  ],
  [
    [3, 3],
    [2, 4],
    [1, 5],
    [0, 6],
  ],
  [
    [5, 2],
    [4, 3],
    [3, 4],
    [2, 5],
  ],
  [
    [4, 3],
    [3, 4],
    [2, 5],
    [1, 6],
  ],
  [
    [5, 3],
    [4, 4],
    [3, 5],
    [2, 6],
  ],

  // Diagonal (top-left to bottom-right) win conditions
  [
    [0, 3],
    [1, 2],
    [2, 1],
    [3, 0],
  ],
  [
    [0, 4],
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  [
    [1, 3],
    [2, 2],
    [3, 1],
    [4, 0],
  ],
  [
    [0, 5],
    [1, 4],
    [2, 3],
    [3, 2],
  ],
  [
    [1, 4],
    [2, 3],
    [3, 2],
    [4, 1],
  ],
  [
    [2, 3],
    [3, 2],
    [4, 1],
    [5, 0],
  ],
  [
    [0, 6],
    [1, 5],
    [2, 4],
    [3, 3],
  ],
  [
    [1, 5],
    [2, 4],
    [3, 3],
    [4, 2],
  ],
  [
    [2, 4],
    [3, 3],
    [4, 2],
    [5, 1],
  ],
  [
    [1, 6],
    [2, 5],
    [3, 4],
    [4, 3],
  ],
  [
    [2, 5],
    [3, 4],
    [4, 3],
    [5, 2],
  ],
  [
    [2, 6],
    [3, 5],
    [4, 4],
    [5, 3],
  ],
];

const BOARD = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

function App() {
  const [board, setBoard] = useState(BOARD);
  const [turn, setTurn] = useState(TURN.RED);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (winner) return;
    const newBoard = board.map((column) => [...column]);
    const row = newBoard[index].filter((cell) => cell === null).length - 1;
    if (row < 0) return;
    newBoard[index][row] = turn;
    setBoard(newBoard);

    // Set next turn
    const newTurn = turn === TURN.RED ? TURN.YELLOW : TURN.RED;
    setTurn(newTurn);

    // check win condition
    const isGameOver = WIN_CONDITIONS.some((condition) => {
      return condition.every(([x, y]) => {
        console.log({ x, y, newBoard, turn });
        return newBoard[x] && newBoard[x][y] === turn;
      });
    });

    console.log(isGameOver);

    if (isGameOver) {
      setWinner(turn);
      return;
    }
  };

  return (
    <>
      <h1>Connect 4</h1>

      <div className="player-turn">
        <div className={turn}></div>
      </div>

      <div className="board">
        {board.map((column, columnIndex) => (
          <div
            className="column"
            key={columnIndex}
            onClick={() => updateBoard(columnIndex)}
          >
            {column.map((cell, cellIndex) => (
              <div className={`cell ${cell}`} key={cellIndex}></div>
            ))}
          </div>
        ))}
      </div>

      {winner && (
        <div className="winner">
          <h2>{winner} wins!</h2>
        </div>
      )}
    </>
  );
}

export default App;
