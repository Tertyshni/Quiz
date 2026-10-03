import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [radius, setRadius] = useState(0);
  const timer = useRef(null);

  const handleMouseMove = () => {
    setRadius((prev) => prev + 1);

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setRadius(0);
    }, 3000);
  };

  return (
    <div className="container">
      <h1>Зображення</h1>

      <img
        src="https://picsum.photos/500/300"
        alt="Фото"
        onMouseMove={handleMouseMove}
        style={{
          borderRadius: `${radius}px`
        }}
      />
    </div>
  );
}

export default App;