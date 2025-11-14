import "./section-five.css";
import { forwardRef } from "react";

import img1 from "../../../public/images/section-five/1.jpg";
import img2 from "../../../public/images/section-five/2.jpg";
import img3 from "../../../public/images/section-five/3.jpg";
import img4 from "../../../public/images/section-five/4.jpg";
import img5 from "../../../public/images/section-five/5.jpg";
import img6 from "../../../public/images/section-five/6.jpg";
import img7 from "../../../public/images/section-five/7.jpg";
import img8 from "../../../public/images/section-five/8.jpg";
import img9 from "../../../public/images/section-five/9.jpg";

const SectionFiveComponent = forwardRef((props, ref) => {
  return (
    <section id="section5" ref={ref} className="section_five">
      <h3 className="title animate-slide-left">Album Ảnh Cưới</h3>
      <div className="section_five_div1">
        <div className="section_five_div1_column1">
          <div className="section_five_div1_column1_row1">
            <p>Lorem ipsum dolor, sit </p>
            <h3
              className="title"
              style={{
                fontSize: "2rem",
                textAlign: "end",
                fontWeight: "bold",
              }}
            >
              IT WAS <br /> ALWAYS <br /> YOU
            </h3>
          </div>
          <div className="section_five_div1_column1_row2">
            <img
              src={img5}
              alt=""
              className="section_five_div1_column1_row2_img"
            />
          </div>
        </div>
        {/* end cot 1 */}
        <div className="section_five_div1_column2">
          <div>
            {" "}
            <img
              src={img3}
              alt=""
              className="section_five_div1_column2_row1_img"
            />
          </div>
          <div>
            {" "}
            <img
              src={img4}
              alt=""
              className="section_five_div1_column2_row2_img"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionFiveComponent;
