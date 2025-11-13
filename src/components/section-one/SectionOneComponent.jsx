import "./section-one-component.css";
import img1 from "../../../public/images/section-one/img1.png";

const SectionOneComponent = () => {
  return (
    <section className="section_one">
      <div className="section_one_div1">
        <h3 className="title animate-slide-top">Thư Mời Tiệc Cưới</h3>
        <p className="animate-slide-left">19.02.2026</p>
      </div>
      <div className="section_one_div2">
        <h3 className="title animate-slide-right ">Thanh Tùng - Trúc Giàu</h3>
        <img
          src={img1}
          alt=""
          className=" animate-zoom-in section_one_div2_img"
        />
      </div>
    </section>
  );
};

export default SectionOneComponent;
