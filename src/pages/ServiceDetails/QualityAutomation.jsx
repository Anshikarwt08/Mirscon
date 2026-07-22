import "./ServiceDetails.css";

import qa from "../../assets/qatesting.jpg";
import process from "../../assets/qaprocess.jpg";
import advantages from "../../assets/qaadvantage.jpg";

function QualityAutomation() {
  return (
    <section className="service-details">

      {/* ==================== Quality Automation ==================== */}

      <div className="service-row">

        <div className="service-image">
          <img src={qa} alt="Quality Automation" />
        </div>

        <div className="service-content">

          <h2>Quality Automation</h2>

          <div className="line"></div>

          <p>
            Quality automation, also known as QA Automation or Test
            Automation, improves the quality of software products.
            Despite following the best coding practices, software can
            still contain bugs that affect the final output.
          </p>

          <p>
            Manual testing alone is not enough to identify every issue
            and is often time consuming and prone to human error. QA
            automation uses automated test scripts that can run
            repeatedly without human intervention.
          </p>

          <p>
            This improves testing accuracy, reduces costs, speeds up
            software delivery, and helps organizations provide reliable
            and high quality applications.
          </p>

        </div>

      </div>

      {/* ==================== QA Process ==================== */}

      <div className="service-row reverse">

        <div className="service-content">

          <h2>QA Process</h2>

          <div className="line"></div>

          <p>
            QA automation supports organizations that follow Agile and
            DevOps methodologies by automating repetitive testing
            activities.
          </p>

          <p>
            Automation tools execute predefined test scripts, generate
            reports, and identify software defects quickly, allowing
            testers to focus on more complex scenarios.
          </p>

          <p>
            Continuous testing improves Continuous Integration (CI),
            Continuous Delivery (CD), software quality, and release
            speed while reducing manual effort.
          </p>

        </div>

        <div className="service-image">
          <img src={process} alt="QA Process" />
        </div>

      </div>

      {/* ==================== Advantages ==================== */}

      <div className="service-row">

        <div className="service-image">
          <img src={advantages} alt="Advantages" />
        </div>

        <div className="service-content">

          <h2>Advantages of Quality Automation</h2>

          <div className="line"></div>

          <ol className="advantages-list">

            <li>

              <strong>Reduces Testing Costs and Time</strong>

              <p>
                Automated testing performs repetitive test cases much
                faster than manual testing. It shortens release cycles,
                reduces operational costs, and delivers software to
                customers more quickly.
              </p>

            </li>

            <li>

              <strong>Improves Product Quality</strong>

              <p>
                Automated testing executes thousands of test cases across
                multiple devices and platforms, increasing test coverage,
                reducing human errors, and improving software quality.
              </p>

            </li>

          </ol>

        </div>

      </div>

    </section>
  );
}

export default QualityAutomation;