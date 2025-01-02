export const GAME_STATUS = {
  READY: "ready",
  PLAYING: "playing",
  FINISHED: "finished",
};

export const GAME_INITAL_STATE = {
  gameStatus: GAME_STATUS.READY,
  position: { x: 0, y: 0 },
  score: 0,
  count: 5,
};
