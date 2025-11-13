import "./section-three.css";
import { forwardRef } from "react";
// ảnh khối 2
import img1 from "../../../public/images/section-two/1.jpg";
import img2 from "../../../public/images/section-two/2.jpg";
import img3 from "../../../public/images/section-two/3.jpg";

const SectionThreeComponent = forwardRef((props, ref) => {
  return (
    <section id="section3" className="section_three" ref={ref}>
      {" "}
      <div className="section_two_div4">
        <div className="section_two_div4_div1">
          <h3 className="title animate-slide-right">Trân Trọng Kính Mời</h3>
        </div>
        <div className="section_two_div4_div2">
          <img
            src={img1}
            alt=""
            className="animate-slide-top section_two_div4_div2_img1"
          />
          <img
            src={img2}
            alt=""
            className="animate-zoom-in section_two_div4_div2_img2"
          />
          <img
            src={img3}
            alt=""
            className="animate-slide-bottom section_two_div4_div2_img3"
          />
        </div>
      </div>
      <div></div>
    </section>
  );
});

export default SectionThreeComponent;
