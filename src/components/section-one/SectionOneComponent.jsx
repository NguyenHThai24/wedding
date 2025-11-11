import "./section-one-component.css";

import img1 from "../../../public/images/1.png";
import longden from "../../../public/images/long-den.png";
// import img2 from "../../../public/images/2.png";

const SectionOneComponent = () => {
  return (
    <section>
      <div className="section1_div1">
        <p className="section1_title_p animate-from-left">
          Welcome to our wedding
        </p>
        <h2 className="section1_title_h2 animate-from-right">
          Thanh Tùng - Trúc Giàu
        </h2>
        <img src={img1} alt="" className="section1_img" />
      </div>

      <div className="section1_div2">
        <div className="div_left">
          <img
            src={longden}
            alt=""
            className="div_img_longden_left animate-from-left"
          />
        </div>

        <div className="div_time_content">
          <div className="invitation-header">
            <h5 className="invitation-label">TRÂN TRỌNG KÍNH MỜI</h5>
            <h4 className="invitation-guest">QUÝ KHÁCH</h4>
          </div>

          <div className="invitation-body">
            <p className="invitation-text">ĐẾN DỰ BUỔI TIỆC CHUNG VUI</p>
            <p className="invitation-text">CÙNG GIA ĐÌNH CHÚNG TÔI VÀO LÚC</p>
          </div>

          <div className="time-highlight">
            <div className="time-decoration time-decoration-left"></div>
            <h2 className="main-time">16 GIỜ 00 | THỨ 7 | 25.10.2025</h2>
            <div className="time-decoration time-decoration-right"></div>
          </div>

          <p className="lunar-date">(Nhằm ngày 09 tháng 09 năm Ất Tỵ)</p>

          <div className="decoration-flower"></div>
        </div>

        <div>
          <img
            src={longden}
            alt=""
            className="div_img_longden_right animate-from-right"
          />
        </div>
      </div>

      {/* <div className="section1_div3">
        <img
          src={img2}
          alt=""
          className="section1_div3_img animate-from-bottom"
        />
      </div> */}
    </section>
  );
};

export default SectionOneComponent;
