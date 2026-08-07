import "./ContactCard.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";

function ContactCard() {
  return (
    <section className="contact-cards">

      <div className="contact-card">

        <div className="card-icon">
          <FaPhoneAlt />
        </div>

        <h3>Call Us</h3>

        <p>Speak directly with our team.</p>

        <span>+91 98765 43210</span>

      </div>

      <div className="contact-card">

        <div className="card-icon">
          <FaEnvelope />
        </div>

        <h3>Email Us</h3>

        <p>Send us your project requirements.</p>

        <span>info@mirscon.com</span>

      </div>
      <div className="contact-card">
        <div className="card-icon">
          <FaMapMarkerAlt />
        </div>

        <h3>Visit Us</h3>

        <p>Meet our team and discuss your business requirements.</p>

        <span>Plot No. 21, Iksana Workspace, 3rd Floor,
          IT Park, Dehradun</span>
      </div>


    </section>
  );
}

export default ContactCard;