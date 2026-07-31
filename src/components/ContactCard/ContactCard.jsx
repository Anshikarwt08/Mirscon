import "./ContactCard.css";

import {
  FaPhoneAlt,
  FaEnvelope,
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
          <FaRegClock />
        </div>

        <h3>Quick Response</h3>

        <p>We usually reply within one business day.</p>

        <span>Within 24 Hours</span>

      </div>

    </section>
  );
}

export default ContactCard;