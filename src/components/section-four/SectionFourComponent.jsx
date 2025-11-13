import "./section-four.css";
import { forwardRef } from "react";

const SectionFourComponent = forwardRef((props, ref) => {
  return (
    <section id="section4" className="section_four" ref={ref}>
      <h3 className="title animate-slide-left">Địa Điểm Tổ Chức</h3>
      <div
        style={{ width: "100%", height: 250, marginTop: 10 }}
        className="animate-zoom-in"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1763002404970!6m8!1m7!1sVie31l0QAElpHg-GR6q56Q!2m2!1d10.58312757389271!2d105.2524862870286!3f132.7581437437883!4f-3.18393348625699!5f0.4000000000000002"
          width="100%"
          height="100%"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
});

export default SectionFourComponent;
