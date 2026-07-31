import "./WhyChoose.css";

import {
  FaUniversalAccess,
  FaShieldAlt,
  FaLaptopCode,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why-section">

      <div className="why-header">
        <span>WHY CHOOSE MIRSCON</span>

        <h2>Built Around Innovation, Quality & Accessibility</h2>

        <p>
          We partner with businesses to deliver secure, scalable, and
          accessible digital solutions that create long-term value.
        </p>
      </div>

      <div className="bento-grid">

        <div className="bento-card large">
          <FaUniversalAccess className="bento-icon"/>

          <h3>Accessibility First</h3>

          <p>
            We build experiences that comply with WCAG standards, making
            websites and applications usable for everyone.
          </p>

          <span>Inclusive Digital Experiences</span>
        </div>

        <div className="bento-card">
          <FaShieldAlt className="bento-icon"/>

          <h3>Quality Assurance</h3>

          <p>
            Manual and automated testing that improves reliability and
            performance.
          </p>
        </div>

        <div className="bento-card">
          <FaLaptopCode className="bento-icon"/>

          <h3>Modern Engineering</h3>

          <p>
            Cloud, Salesforce, web applications and enterprise solutions.
          </p>
        </div>

        <div className="bento-card wide">

          <div className="wide-content">

            <div>

              <h3>Experienced Team</h3>

              <p>
                Our experts work closely with your business to deliver
                high-quality technology solutions.
              </p>

            </div>

            <button>
              Learn More
              <FaArrowRight />
            </button>

          </div>

          <FaUsers className="corner-icon"/>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;