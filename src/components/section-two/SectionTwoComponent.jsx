import "./section-two-component.css";
import { forwardRef } from "react";

import imgNam from "../../../public/images/section-two/nam.jpg";
import imgNu from "../../../public/images/section-two/nu.jpg";

import imgTym from "../../../public/images/section-two/tym.png";

const SectionTwoComponent = forwardRef((props, ref) => {
  return (
    <section id="section2" className="section_two" ref={ref}>
      <div className="section_two_div1">
        <p className="title animate-slide-left">
          Yêu nhau là chuyện cả đời, <br /> Yêu người vừa ý, cưới người mình
          thương.
        </p>
      </div>
      <div className="section_two_div2">
        <div className="section_two_div2_div1">
          <div className="section_two_div2_div1_nam animate-slide-left">
            <h4 className="info_family_man">Nhà trai</h4>
            <p className="info_family_man">Ông </p>
            <p className="info_family_man">Bà Huỳnh Thị B</p>
            <p className="address">Hiệp Xương, An Giang</p>
          </div>
          <div
            className="animate-zoom-in"
            style={{
              background:
                "linear-gradient(black, black) no-repeat center center / 1.5px 100%",
              height: "100%",
            }}
          ></div>
          <div className="section_two_div2_div1_nu animate-slide-right">
            <h4 className="info_family_woman">Nhà gái</h4>
            <p className="info_family_woman">Ông </p>
            <p className="info_family_woman">Bà Đặng Thị Thê Hà</p>
            <p className="address">Bình Thạnh Đông, An Giang</p>
          </div>
        </div>
        <div className="section_two_div2_2">
          <div>
            <p className="section_two_div2_2_name title animate-slide-right">
              Nguyễn Thanh Tùng
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={imgTym}
              alt=""
              className="animate-zoom-in"
              style={{ width: "2.5rem" }}
            />
          </div>
          <div>
            {/* <p
              style={{
                fontWeight: "400",
                marginBottom: "0.5rem",
              }}
            >
              Cô Dâu
            </p> */}
            <p className="section_two_div2_2_name title animate-slide-left ">
              Nguyễn Thị Trúc Giàu
            </p>
          </div>
        </div>
        <div className="section_two_div3">
          <div className="section_two_div3_div1_nam_div1">
            <img
              src={imgNam}
              alt=""
              className="section_two_div3_div1_nam_img animate-zoom-in"
            />
          </div>
          <div className="section_two_div3_div1_nu_div1">
            <img
              src={imgNu}
              alt=""
              className="section_two_div3_div1_nu_img animate-zoom-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionTwoComponent;
