import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Question() {
  const navigate = useNavigate();

  const [hoverCount, setHoverCount] = useState(0);
  const [label, setLabel] = useState("No 😐");
  const [position, setPosition] = useState({ top: "60%", left: "50%" });
  const [finalMode, setFinalMode] = useState(false);

  const phrases = [
    "i will kill you",
    "what did i just say",
    "oh for fucks sake, just say yes"
  ];

  const moveButton = () => {
    const randomTop = Math.random() * 50 + 30;
    const randomLeft = Math.random() * 60 + 20;

    setPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  const handleHover = () => {
    // After final mode, just keep dodging
    if (finalMode) {
      moveButton();
      return;
    }

    const nextCount = hoverCount + 1;
    setHoverCount(nextCount);

    const phrase = phrases[nextCount - 1];
    setLabel(phrase);
    moveButton();

    // First two hovers reset back to "No 😐"
    if (nextCount < 3) {
      setTimeout(() => {
        setLabel("No 😐");
      }, 1200);
    } else {
      // Third hover = FINAL MODE
      setFinalMode(true);
    }
  };

  return (
    <div className="question-page">
      {/* Floating hearts */}
      <div className="hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="heart">💖</div>
        ))}
      </div>

      <h1 className="question-text">
        Will you be my Valentine? 💘
      </h1>

      <div className="button-area">
        <button
          className="yes-btn"
          onClick={() => navigate("/celebration")}
        >
          Yes 💕
        </button>

        <button
          className={`no-btn ${finalMode ? "no-btn-final" : ""}`}
          style={{ top: position.top, left: position.left }}
          onMouseEnter={handleHover}
          onClick={moveButton}
        >
          {label}
        </button>
      </div>
    </div>
  );
}
