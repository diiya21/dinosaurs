import { useEffect, useState } from "react";

export default function Celebration() {
  const [hearts, setHearts] = useState([]);

  // Generate random hearts continuously
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const newHeart = {
        id,
        left: Math.random() * 90 + "%",
        size: Math.random() * 24 + 16, // 16px to 40px
        color: ["#ff4d6d", "#ffb6c1", "#ff69b4"][Math.floor(Math.random() * 3)]
      };
      setHearts((prev) => [...prev, newHeart]);

      // Remove hearts older than 5s
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 5000);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="celebration-page">
      <h1 className="celebration-text">
        YAY! 💕 You said yes! 💖
      </h1>
      <p className="celebration-subtext">
        I’m so happy you’re my Valentine 😘
      </p>

      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="celebration-heart"
          style={{
            left: heart.left,
            fontSize: `${heart.size}px`,
            color: heart.color
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
}
