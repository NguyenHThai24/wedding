import "./section-one-component.css";
import img1 from "../../../public/images/section-one/img1.png";

const SectionOneComponent = () => {
  return (
    <section className="section_one">
      <div className="section_one_div1">
        <h3>Save The Date</h3>
        <p>16.11.2025</p>
      </div>
      <div className="section_one_div2">
        <h3>Thanh Tùng - Trúc Giàu</h3>
        <img src={img1} alt="" className="section_one_div2_img" />
      </div>
    </section>
  );
};

export default SectionOneComponent;
