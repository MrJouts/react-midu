const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomPosition = () => {
  return {
    x: getRandomNumber(0, window.innerWidth - 50),
    y: getRandomNumber(0, window.innerHeight - 50),
  };
};
