import "./App.css";
import { useEffect, useRef } from "react";
import SectionFiveComponent from "./components/section-five/SectionFiveComponent";
import SectionFourComponent from "./components/section-four/SectionFourComponent";
import SectionOneComponent from "./components/section-one/SectionOneComponent";
import SectionThreeComponent from "./components/section-three/SectionThreeComponent";
import SectionTwoComponent from "./components/section-two/SectionTwoComponent";

function App() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.5, // Khi 30% section hiển thị trong viewport
        rootMargin: "-10px 0px -10px 0px", // Điều chỉnh vùng quan sát
      }
    );

    // Quan sát tất cả các section
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Hàm để gán ref cho từng section
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <main>
      <SectionOneComponent ref={addToRefs} />
      <SectionTwoComponent ref={addToRefs} />
      <SectionThreeComponent ref={addToRefs} />
      <SectionFourComponent ref={addToRefs} />
      <SectionFiveComponent ref={addToRefs} />
    </main>
  );
}

export default App;
