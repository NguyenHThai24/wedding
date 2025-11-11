import "./section-two-component.css";
import img3 from "../../../public/images/3.png";

const SectionTwoComponent = () => {
  return (
    <section>
      <div className="section2_div1">
        <div className="section2_div1_info_man animate-fade-in-up">
          <h3>Nhà Trai</h3>
          <p>Ông:</p>
          <p>Bà: Nguyễn Thị A</p>
        </div>
        <div
          className="vertical-line animate-scale-in"
          style={{
            borderLeft: "0.15rem solid #000",
          }}
        ></div>
        <div className="section2_div1_info_woman animate-fade-in-up">
          <h3>Nhà Gái</h3>
          <p>Ông:</p>
          <p>Bà: Nguyễn Thị B</p>
        </div>
      </div>
      <p
        className="announcement-text animate-fade-in"
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
          fontSize: "1.2rem",
        }}
      >
        Trân trọng thông báo{" "}
        <span style={{ fontWeight: "900" }}>LỄ THÀNH HÔN</span> của
      </p>
      <div className="section2_div2">
        <p className="groom-name animate-slide-in-left">Nguyễn Thanh Tùng</p>
        <p className="and-symbol animate-fade-in">&</p>
        <p className="bride-name animate-slide-in-right">
          Nguyễn Thị Trúc Giàu
        </p>
      </div>
      <div className="section2_div3 animate-scale-in">
        <img src={img3} alt="" className="section2_div3_img" />
      </div>
    </section>
  );
};

export default SectionTwoComponent;
