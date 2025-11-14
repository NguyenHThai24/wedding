import { useEffect, useState } from "react";
import "./floating-hearts.css";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHearts = [];

      for (let i = 0; i < 5; i++) {
        newHearts.push({
          id: Date.now() + i,
          top: Math.random() * 80, // random 0 - 80vh
          left: Math.random() * 80, // random 0 - 80vw
          size: 20, // random kích thước 20-40px
          duration: 2 + Math.random() * 1, // tồn tại 2–3s
        });
      }

      setHearts((prev) => [...prev, ...newHearts]);

      // Xóa sau 3s
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => !newHearts.includes(h)));
      }, 3000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hearts.map((h) => (
        <div
          key={h.id}
          className="pop-heart"
          style={{
            top: `${h.top}vh`,
            left: `${h.left}vw`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </>
  );
};

export default FloatingHearts;
