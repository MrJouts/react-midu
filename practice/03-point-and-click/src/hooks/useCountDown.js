import { useEffect, useState } from "react";

export const useCountDown = (initialCount, onFinish) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (count === 0) {
      onFinish();
      return;
    }

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return clearInterval(interval);
  }, [count, onFinish]);

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

  return { count, setCount, startCountDown };
};
