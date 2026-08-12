import "./Hero.css";

import {
  FaRegFileAlt,
  FaFilePdf,
  FaBookOpen,
  FaPhotoVideo,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="accessibility-hero-section">

      <div className="accessibility-hero-content">


        <h1 className="accessibility-hero-title">
          Accessibility Services
        </h1>


        <p className="accessibility-hero-description">
          Mirscon empowers organizations to create accessible PDFs,
          Office documents, EPUBs, websites, and multimedia
          that comply with global accessibility standards. Our experts
          ensure every user can access, navigate, and interact with
          your digital content confidently.
        </p>

        <div className="hero-service-cards">

          <a href="#digital-publishing" className="hero-service-card">
            <FaBookOpen className="service-icon" />
            <span>Digital Publishing</span>
          </a>
          <a href="#document-remediation" className="hero-service-card">
            <FaFilePdf className="service-icon" />
            <span>Document Remediation</span>
          </a>

          <a href="#alt-text" className="hero-service-card">
            <FaRegFileAlt className="service-icon" />
            <span>Alt Text Services</span>
          </a>

          <a href="#multimedia-accessibility" className="hero-service-card">
            <FaPhotoVideo className="service-icon" />
            <span>Multimedia Accessibility</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;