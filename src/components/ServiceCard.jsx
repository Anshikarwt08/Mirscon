import "./ServiceCard.css";
import Button from "./Button";

function ServiceCard({ title, subTitle, btnText, icon }) {
  return (
    <div className="service-card">

      <div className="service-icon">
        {icon}
      </div>

      <h2>{title}</h2>

      <p>{subTitle}</p>

      <Button
        text={btnText}
        className="service-btn"
      />

    </div>
  );
}

export default ServiceCard;