import "./AccessibilityEngine.css";
import Engine from "../../assets/Engine.jpg";

import {
  FaPeopleGroup,
  FaGears,
  FaMicrochip,
  FaCircleCheck,
} from "react-icons/fa6";

function AccessibilityEngine() {
  return (
    <section className="accessibility-engine-section">
      <div className="accessibility-engine-container">
        
        <h2 className="accessibility-engine-heading">
          Where People, Process &amp; Technology Create Impact
        </h2>


        {/* Engine Image */}
        <img
          src={Engine}
          alt="Mirscon accessibility engine showing the process from document input through AI analysis, human expertise, remediation, validation, and accessible output"
          className="accessibility-engine-image"
        />

        {/* Difference Section - BELOW IMAGE */}
        <div className="mirscon-difference">

          <div className="difference-items">

            {/* People */}
            <div className="difference-item">
              <FaPeopleGroup className="difference-icon people-icon" />
              <h4>People</h4>
              <p>
                Skilled professionals
                <br />
                and domain experts
              </p>
            </div>

            <div className="difference-symbol">+</div>

            {/* Process */}
            <div className="difference-item">
              <FaGears className="difference-icon process-icon" />
              <h4>Process</h4>
              <p>
                Proven processes
                <br />
                and best practices
              </p>
            </div>

            <div className="difference-symbol">+</div>

            {/* Technology */}
            <div className="difference-item">
              <FaMicrochip className="difference-icon technology-icon" />
              <h4>Technology</h4>
              <p>
                Right tools and
                <br />
                intelligent automation
              </p>
            </div>

            <div className="difference-symbol">=</div>

            {/* Impact */}
            <div className="difference-item">
              <FaCircleCheck className="difference-icon impact-icon" />
              <h4>Impact</h4>
              <p>
                Accessible content,
                <br />
                empowered users
              </p>
            </div>

          </div>

          <div className="difference-message">
            <strong>
              Technology accelerates. Expertise understands. Quality validates.
            </strong>
            <span>
              That's the Mirscon difference.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AccessibilityEngine;