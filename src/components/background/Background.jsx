import React, { useEffect, useState } from "react";

const Background = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const id = Date.now() + Math.random();
      const newHeart = {
        id,
        top: Math.random() * 90,
        left: Math.random() * 90,
        size: 24 + Math.random() * 20,
      };

      setHearts((prev) => [...prev, newHeart]);

      // Xóa sau 2s (thời gian fade out)
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 2000);
    };

    // Tạo tim mỗi 3-4s
    const spawnHeart = () => {
      createHeart();
      setTimeout(spawnHeart, 3000 + Math.random() * 1000);
    };

    spawnHeart();
  }, []);

  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden bg-gradient-to-b from-pink-50 via-pink-100 to-rose-100 pointer-events-none">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-appear"
          style={{
            top: `${heart.top}%`,
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </span>
      ))}

      <style jsx>{`
        @keyframes appear {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          20% {
            opacity: 1;
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }

        .animate-appear {
          animation: appear 2s ease-in-out forwards;
          filter: drop-shadow(0 2px 6px rgba(255, 105, 180, 0.4));
        }
      `}</style>
    </div>
  );
};

export default Background;
