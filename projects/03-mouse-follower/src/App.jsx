import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("Componente montado", enabled);

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      console.log({ clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    // Cleanup
    // -> Cuando el componente se desmonta
    // -> Cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => {
      console.log("Componente desmontado", enabled);
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);
    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
};

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
