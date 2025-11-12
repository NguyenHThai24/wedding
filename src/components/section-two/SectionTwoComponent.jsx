import "./section-two-component.css";

import imgNam from "../../../public/images/section-two/nam.jpg";
import imgNu from "../../../public/images/section-two/nu.jpg";

import imgTym from "../../../public/images/section-two/tym.png";

const SectionTwoComponent = () => {
  return (
    <section className="section_two">
      <div className="section_two_div1">
        <p>
          Yêu nhau là chuyện cả đời, <br /> Yêu người vừa ý, cưới người mình
          thương.
        </p>
      </div>
      <div className="section_two_div2">
        <div className="section_two_div2_div1">
          <div className="section_two_div2_div1_nam">
            <h4 className="info_family_man">Nhà trai</h4>
            <p className="info_family_man">Ông </p>
            <p className="info_family_man">Bà Huỳnh Thị B</p>
            <p className="address">Hiệp Xương, An Giang</p>
          </div>

          <div className="section_two_div2_div1_nu">
            <h4 className="info_family_woman">Nhà gái</h4>
            <p className="info_family_woman">Ông </p>
            <p className="info_family_woman">Bà Đặng Thị Thê Hà</p>
            <p className="address">Bình Thạnh Đông, An Giang</p>
          </div>
        </div>
        <div className="section_two_div2_2">
          <div>
            <p
              style={{
                fontWeight: "400",
                marginBottom: "0.5rem",
              }}
            >
              Chú Rể
            </p>
            <p className="section_two_div2_2_name">Nguyễn Thanh Tùng</p>
          </div>
          <div>
            <img src={imgTym} alt="" style={{ width: "5rem" }} />
          </div>
          <div>
            <p
              style={{
                fontWeight: "400",
                marginBottom: "0.5rem",
              }}
            >
              Cô Dâu
            </p>
            <p className="section_two_div2_2_name">Nguyễn Thị Trúc Giàu</p>
          </div>
        </div>
        <div className="section_two_div3">
          <div className="section_two_div3_div1_nam_div1">
            <img
              src={imgNam}
              alt=""
              className="section_two_div3_div1_nam_img"
            />
          </div>
          <div className="section_two_div3_div1_nu_div1">
            <img src={imgNu} alt="" className="section_two_div3_div1_nu_img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwoComponent;
