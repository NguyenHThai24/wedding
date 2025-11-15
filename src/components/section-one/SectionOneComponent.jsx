import "./section-one-component.css";
import img1 from "../../../public/images/section-one/img1.png";

import { forwardRef } from "react";

const SectionOneComponent = forwardRef((props, ref) => {
  return (
    <section id="section1" className="section_one do_bong_duoi" ref={ref}>
      <div className="section_one_div1">
        <h3 className="title1 animate-slide-top">Thư Mời Tiệc Cưới</h3>
        <p className="animate-slide-left">19.02.2026</p>
      </div>
      {/* <div
        className="title"
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
        }}
      ></div> */}
      <div className="section_one_div2 title">
        <h1
          style={{
            fontSize: "2.2rem",
          }}
          className="do_bong_tren_duoi"
        >
          Thanh Tùng & Trúc Giàu
        </h1>
        <img
          src={img1}
          alt=""
          className=" animate-zoom-in section_one_div2_img"
        />
      </div>
    </section>
  );
});

export default SectionOneComponent;
