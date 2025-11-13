import "./section-five.css";
import { forwardRef } from "react";
const SectionFiveComponent = forwardRef((props, ref) => {
  return (
    <section id="section5" ref={ref} className="section_five">
      <h3 className="title animate-slide-left">Album Ảnh Cưới</h3>
    </section>
  );
});

export default SectionFiveComponent;
