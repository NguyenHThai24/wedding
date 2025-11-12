import "./section-three.css";

// ảnh khối 2
import img1 from "../../../public/images/section-two/1.jpg";
import img2 from "../../../public/images/section-two/2.jpg";
import img3 from "../../../public/images/section-two/3.jpg";
import imgCalendar from "../../../public/images/section-two/calendar.png";

const SectionThreeComponent = () => {
  return (
    <section>
      {" "}
      <div className="section_two_div4">
        <div className="section_two_div4_div1">
          <h3>Trân Trọng Kính Mời</h3>
        </div>
        <div className="section_two_div4_div2">
          <img src={img1} alt="" className="section_two_div4_div2_img1" />
          <img src={img2} alt="" className="section_two_div4_div2_img2" />
          <img src={img3} alt="" className="section_two_div4_div2_img3" />
        </div>
        <div className="section_two_div4_div3">
          <h5>THAM DỰ TIỆC MỪNG LỄ THÀNH HÔN</h5>
          <p>Vào lúc</p>
          <div className="section_two_div4_div3_div1">
            <p className="time-col">9:00</p>
            <div className="vertical-divider"></div>
            <p className="date-col">
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
            <p className="year-col">2026</p>
          </div>
          <p
            style={{
              fontStyle: "italic",
              fontSize: "1.05rem",
            }}
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
};

export default SectionThreeComponent;
