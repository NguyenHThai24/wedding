import "./section-four.css";
import { forwardRef } from "react";

import { FaMapMarkerAlt } from "react-icons/fa";

const SectionFourComponent = forwardRef((props, ref) => {
  return (
    <section id="section4" className="section_four do_bong_duoi" ref={ref}>
      <h3 className="title animate-slide-left">Địa Điểm Tổ Chức</h3>
      <div className="section_four_div1 animate-slide-right">
        <h4 className="title">
          {/* <IoHomeOutline size={25} /> */}
          Tại Tư Gia
        </h4>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <FaMapMarkerAlt /> Tổ 11, ấp Bình Tây 2, Bình Thạnh Đông, An Giang
        </p>
        <div style={{ width: "100%", height: 200, marginTop: 10 }} className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1763179203038!6m8!1m7!1svgJPFPjrhf3ZJeoefcBhig!2m2!1d10.58303501578722!2d105.2524978950643!3f78.51780742548884!4f-29.001742389320242!5f0.7820865974627469"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="section_four_div2">
        <div className="section_four_div2_div1 animate-slide-top">
          <p>19</p>
          <p>Ngày</p>
        </div>
        <div className="section_four_div2_div2 animate-slide-bottom">
          <p>2</p>
          <p>Tháng</p>
        </div>
        <div className="section_four_div2_div3 animate-slide-top">
          <p>9</p>
          <p>Giờ</p>
        </div>
        <div className="section_four_div2_div4 animate-slide-bottom">
          <p>30</p>
          <p>Phút</p>
        </div>
      </div>
      <div className="section_four_div3">
        <p
          className="title animate-slide-left"
          // style={{
          //   position: "relative",
          //   zIndex: "1",
          // }}
        >
          Trong ngày hạnh phúc nhất cuộc đời, <br /> chúng tôi hân hạnh được đón
          chào sự hiện diện quý báu của quý khách.
        </p>
      </div>
    </section>
  );
});

export default SectionFourComponent;
