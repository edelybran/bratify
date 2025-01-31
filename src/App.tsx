import { useState, useRef, useEffect } from "react";
import './App.css';

function App() {
  const [text, setText] = useState<string>(""); 
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const generateMeme = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 600;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "#8ACE00";
    ctx.fillRect(0, 0, width, height);

    // text style
    ctx.font = "36px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(text, width / 2, height / 2);

    ctx.filter = 'blur(2px)'; // Adjust the blur amount for more or less
    ctx.fillText(text, width / 2, height / 2);
  };

  useEffect(() => {
    generateMeme();
  }, [text]);

  return (
    <>
      <div className="container">
      <h1 className="header">Bratify</h1>
      <input
        type="text"
        placeholder="enter brat text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input-style"
/>
      <div className="meme-container">
      <canvas ref={canvasRef} />
      </div>
      <button className="button-style">
        Save
      </button>
    </div>
    </>
  )
}

export default App
