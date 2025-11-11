import React, { useState, useEffect, useRef } from "react";
import "./section-one-img.css";

const SectionOneImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const images = [
    "/images/section-one-img/img1.jpg",
    "/images/section-one-img/img2.jpg",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Cập nhật state isVisible dựa trên việc section có đang trong viewport hay không
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="section-one-img" ref={sectionRef}>
      <div className="album-container">
        <div className="text-content">
          <h2 className={`album-title ${isVisible ? "slide-in-left" : ""}`}>
            Khoảnh Khắc Hạnh Phúc
          </h2>
          <p
            className={`album-description ${isVisible ? "slide-in-right" : ""}`}
          >
            "Tình yêu khẽ đến mà chẳng biết từ đâu, Nhưng mỗi ngày một đậm sâu,
            mà chẳng có điểm dừng."
          </p>
        </div>

        <div className="photo-stack">
          <div
            className={`photo-frame ${isVisible ? "slide-in-up" : ""}`}
            onClick={handleClick}
          >
            <img
              src={images[currentIndex]}
              alt={`Khoảnh khắc ${currentIndex + 1}`}
              className="photo-image"
              onError={(e) => {
                console.log("Image failed to load:", images[currentIndex]);
                e.target.style.backgroundColor = "#f0f0f0";
                e.target.style.display = "flex";
                e.target.style.alignItems = "center";
                e.target.style.justifyContent = "center";
                e.target.style.color = "#666";
                e.target.innerHTML = `<span>❌ Không tải được ảnh</span>`;
              }}
            />
          </div>
          <div className={`photo-overlay ${isVisible ? "fade-in" : ""}`}>
            <span>✨ Nhấn để xem tiếp</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOneImg;
