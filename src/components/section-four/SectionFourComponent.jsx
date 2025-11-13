import "./section-four.css";

const SectionFourComponent = () => {
  return (
    <section className="section_four">
      <h3>Địa Điểm Tổ Chức</h3>
      <div style={{ width: "100%", height: 250, marginTop: 10 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1763002404970!6m8!1m7!1sVie31l0QAElpHg-GR6q56Q!2m2!1d10.58312757389271!2d105.2524862870286!3f132.7581437437883!4f-3.18393348625699!5f0.4000000000000002"
          width="100%"
          height="100%"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default SectionFourComponent;
