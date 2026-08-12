import "./Home1.css";

import {
  FaUniversalAccess,
  FaFileAlt,
  FaBalanceScale,
  FaShieldAlt,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Home1() {
  return (
    <section className="hero" aria-labelledby="hero-heading">

      <div className="hero-content">

        {/* Hero Heading */}
        <h1 id="hero-heading" className="hero-title">

          <span className="line">
            <span className="highlight">
              Accessibility by Design
            </span>
          </span>

          <span className="line compliant-line">
            <span className="highlight">
              Compliant by Standards
            </span>
          </span>

        </h1>


        {/* Accessibility Standards */}
        <div className="standards-container">

          {/* WCAG */}
          <div className="standard-item">
            <div className="standard-icon">
              <FaUniversalAccess />
            </div>

            <span>WCAG</span>
          </div>


          <div className="standard-divider"></div>


          {/* Section 508 */}
          <div className="standard-item">
            <div className="standard-icon">
              <FaFileAlt />
            </div>

            <span>SECTION 508</span>
          </div>


          <div className="standard-divider"></div>


          {/* ADA */}
          <div className="standard-item">
            <div className="standard-icon">
              <FaBalanceScale />
            </div>

            <span>ADA</span>
          </div>


          <div className="standard-divider"></div>


          {/* EN 301 549 */}
          <div className="standard-item">
            <div className="standard-icon eu-icon">

              <div className="eu-stars">
                {Array.from({ length: 12 }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

            </div>

            <span>EN 301 549</span>
          </div>


          <div className="standard-divider"></div>


          {/* IS 17802 */}
          <div className="standard-item">
            <div className="standard-icon">
              <FaShieldAlt />
            </div>

            <span>IS 17802</span>
          </div>

        </div>

      </div>


      {/* Decorative Circles */}
      <div
        className="circle circle1"
        aria-hidden="true"
      ></div>

      <div
        className="circle circle2"
        aria-hidden="true"
      ></div>

    </section>
  );
}

export default Home1;