import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras para ver si X o O ganó
  for (let i = 0; i < WINNER_COMBOS.length; i++) {
    const [a, b, c] = WINNER_COMBOS[i];
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate si no hay más espacios vacíos en el tablero
  return newBoard.every((square) => square !== null);
};
