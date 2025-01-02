import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    console.log("Hello");
    const w = document.body.offsetWidth;
    const h = document.body.offsetHeight;
    console.log({ w, h });

    setPosition({
      x: getRandomNumber(0, w - 50),
      y: getRandomNumber(0, h - 50),
    });

    window.addEventListener("resize", () => {
      console.log("Resized");
      console.log(window.innerWidth, window.innerHeight);
    });
  }, []);

  const handleClick = () => {
    setPosition({
      x: getRandomNumber(0, window.innerWidth - 50),
      y: getRandomNumber(0, window.innerHeight - 50),
    });
  }

  return (
    <>
      <div
      onClick={() => handleClick()}
        className="square"
        style={{
          right: `${position.x}px`,
          bottom: `${position.y}px`,
        }}
      ></div>
    </>
  );
}

export default App;
