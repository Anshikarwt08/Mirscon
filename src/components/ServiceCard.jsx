import "./ServiceCard.css";
import Button from "./Button";
import { Link } from "react-router-dom";

function ServiceCard({ title, subTitle, icon, link }) {
  return (
    <div className="service-card">

      <div className="service-icon">
        {icon}
      </div>

      <h2>{title}</h2>

      <p>{subTitle}</p>

      <Link to={link}>
        <Button text="More Details" />
      </Link>

    </div>
  );
}

export default ServiceCard;