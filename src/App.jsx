import { useEffect, useRef } from "react";
import SectionOneComponent from "./components/section-one/SectionOneComponent";
import SectionOneImg from "./components/section-one-img/SectionOneImg";
import SectionTwoComponent from "./components/section-two/SectionTwoComponent";
import "./App.css";

function App() {
  const sectionOneRef = useRef(null);
  const sectionOneImgRef = useRef(null);
  const sectionTwoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionOneRef.current) {
      observer.observe(sectionOneRef.current);
    }
    if (sectionOneImgRef.current) {
      observer.observe(sectionOneImgRef.current);
    }
    if (sectionTwoRef.current) {
      observer.observe(sectionTwoRef.current);
    }

    return () => {
      if (sectionOneRef.current) {
        observer.unobserve(sectionOneRef.current);
      }
      if (sectionOneImgRef.current) {
        observer.unobserve(sectionOneImgRef.current);
      }
      if (sectionTwoRef.current) {
        observer.unobserve(sectionTwoRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={sectionOneRef} className="section-wrapper">
        <SectionOneComponent />
      </div>
      <div ref={sectionOneImgRef} className="section-wrapper">
        <SectionOneImg />
      </div>
      <div ref={sectionTwoRef} className="section-wrapper">
        <SectionTwoComponent />
      </div>
    </>
  );
}

export default App;
