import { forwardRef } from "react";
import "./section-three2.css";
import imgCalendar from "../../../public/images/section-two/calendar.png";

const SectionThree2Component = forwardRef((props, ref) => {
  return (
    <section id="section33" className="section_three2" ref={ref}>
      <div className="section_two_div4_div3">
        <h3 className="title animate-slide-right">Tiệc Mừng Lễ Thành Hôn</h3>
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
    </section>
  );
});

export default SectionThree2Component;
