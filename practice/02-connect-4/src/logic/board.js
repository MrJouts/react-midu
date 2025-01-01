import { WIN_CONDITIONS } from "../models/constants";

export const checkWinner = (board, player) => {
  const hasWinner = WIN_CONDITIONS.some((condition) => {
    return condition.every(([x, y]) => {
      return board[x] && board[x][y] === player;
    });
  });

  return hasWinner;
};
