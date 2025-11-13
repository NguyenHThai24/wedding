import "./section-three.css";
import { forwardRef } from "react";
// ảnh khối 2
import img1 from "../../../public/images/section-two/1.jpg";
import img2 from "../../../public/images/section-two/2.jpg";
import img3 from "../../../public/images/section-two/3.jpg";
import imgCalendar from "../../../public/images/section-two/calendar.png";

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
        <div className="section_two_div4_div3">
          <h5 className="animate-slide-left">THAM DỰ TIỆC MỪNG LỄ THÀNH HÔN</h5>
          <p className="animate-slide-right">Vào lúc</p>
          <div className="section_two_div4_div3_div1">
            <p className="time-col animate-slide-right">9:00</p>
            <div className="vertical-divider"></div>
            <p className="date-col animate-zoom-in">
              Thứ năm <br />
              <span
                style={{
                  fontFamily: '"Titillium Web", sans-serif',
                  fontSize: "3rem",
                }}
              >
                19
              </span>{" "}
              <br />
              Tháng 3
            </p>
            <div className="vertical-divider"></div>
            <p className="year-col animate-slide-left">2026</p>
          </div>
          <p
            style={{
              fontStyle: "italic",
              fontSize: "1.05rem",
            }}
            className="animate-slide-bottom"
          >
            (Nhằm Ngày 03.01.2026 Âm lịch)
          </p>
        </div>
        <div>
          <img src={imgCalendar} alt="Lịch" className="img_calendar" />
        </div>
      </div>
    </section>
  );
});

export default SectionThreeComponent;
