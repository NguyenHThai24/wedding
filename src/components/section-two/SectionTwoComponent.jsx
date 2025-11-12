import "./section-two-component.css";

import imgNam from "../../../public/images/section-two/nam.jpg";
import imgNu from "../../../public/images/section-two/nu.jpg";

// ảnh khối 2
import img1 from "../../../public/images/section-two/1.jpg";
import img2 from "../../../public/images/section-two/2.jpg";
import img3 from "../../../public/images/section-two/3.jpg";

const SectionTwoComponent = () => {
  return (
    <section className="section_two">
      <div className="section_two_div1">
        <h3>Wedding</h3>
      </div>
      <div className="section_two_div2">
        <div className="section_two_div2_div1">
          <div className="section_two_div2_div1_nam">
            <h4>Nhà trai</h4>
            <p>Ông: </p>
            <p>Bà: </p>
            <div className="section_two_div2_div1_nam_div1">
              <img
                src={imgNam}
                alt=""
                className="section_two_div2_div1_nam_img"
              />
              <h3>
                Nguyễn <br /> Thanh Tùng
              </h3>
            </div>
          </div>

          <div className="section_two_div2_div1_nu">
            <h4>Nhà gái</h4>
            <p>Ông: </p>
            <p>Bà: Đặng Thị Thê Hà</p>
            <div className="section_two_div2_div1_nu_div1">
              <img
                src={imgNu}
                alt=""
                className="section_two_div2_div1_nu_img"
              />
              <h3>
                Nguyễn Thị <br /> Trúc Giàu
              </h3>
            </div>{" "}
          </div>
        </div>

        <div className="section_two_div2_div2">
          <div className="section_two_div2_div2_day">
            <p>1</p>
            <p>Ngày</p>
          </div>
          <div className="section_two_div2_div2_hour">
            <p>1</p>
            <p>Tháng</p>
          </div>
          <div className="section_two_div2_div2_minute">
            <p>1</p>
            <p>Giờ</p>
          </div>
          <div className="section_two_div2_div2_second">
            <p>1</p>
            <p>Phút</p>
          </div>
        </div>
      </div>
      {/* end khối 1  */}
      <div className="section_two_div3">
        <div className="section_two_div3_div1">
          <h3>Trân Trọng Kính Mời</h3>
        </div>
        <div className="section_two_div3_div2">
          <img src={img1} alt="" className="section_two_div3_div2_img1" />
          <img src={img2} alt="" className="section_two_div3_div2_img2" />
          <img src={img3} alt="" className="section_two_div3_div2_img3" />
        </div>
        <div className="section_two_div3_div3">
          <h5>THAM DỰ TIỆC MỪNG LỄ THÀNH HÔN</h5>
          <p>Vào lúc</p>
          <div className="section_two_div3_div3_div1">
            <p className="time-col">9:00</p>
            <div className="vertical-divider"></div>
            <p className="date-col">
              Chủ Nhật <br />
              16 <br />
              Tháng 11
            </p>
            <div className="vertical-divider"></div>
            <p className="year-col">2026</p>
          </div>
        </div>
        <div>
          <img src="" alt="Lịch" />
        </div>
      </div>
    </section>
  );
};

export default SectionTwoComponent;
