import "./Hero.css";

import alttext from "../../../assets/alttext.png";
import pdf from "../../../assets/pdf.png";
import ebook from "../../../assets/ebook.jpeg";
import epub from "../../../assets/epub.png";

function Hero() {
  return (
    <section className="accessibility-hero">

      <div className="accessibility-hero-content">

        <h1 className="accessibility-hero-title">
          Accessibility Services
        </h1>

        <h2 className="accessibility-hero-subtitle">
          Making Digital Content Accessible for Everyone
        </h2>

        {/* Service Cards */}

        <div className="hero-service-cards">

         <a href="#alt-text" className="hero-service-card">
 <span> Alt Text Services</span>
</a>

          <a href="#document-remediation" className="hero-service-card">
           
            <span>Document Remediation</span>
          </a>

          <a href="#digital-publishing" className="hero-service-card">
          
            <span>Digital Publishing Services</span>
          </a>

          <a href="#multimedia-accessibility" className="hero-service-card">
            
            <span>Multimedia Accessibility</span>
          </a>

        </div>

        <p className="accessibility-hero-description">
          Mirscon empowers organizations to create accessible PDFs,
          Microsoft Office documents, EPUBs, websites, and digital
          experiences that comply with global accessibility standards.
          Our accessibility experts help ensure every user can access,
          navigate, and interact with your digital content confidently.
        </p>

      </div>

    </section>
  );
}

export default Hero;