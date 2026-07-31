import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="accessibility-hero-section">
      <div className="accessibility-hero-overlay"></div>

      <div className="accessibility-hero-content">
        <h1 className="accessibility-hero-title">
          Accessibility Services
        </h1>

        <h2 className="accessibility-hero-subtitle">
          Making Digital Content Accessible for Everyone
        </h2>

        <p className="accessibility-hero-description">
          Mirscon empowers organizations to create accessible PDFs,
          Microsoft Office documents, EPUBs, websites, and digital
          experiences that comply with global accessibility standards.
          Our accessibility experts help ensure every user can access,
          navigate, and interact with your digital content confidently.
        </p>

        <div className="accessibility-hero-buttons">
          <Link
            to="/contact"
            className="accessibility-hero-btn accessibility-hero-btn-primary"
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;