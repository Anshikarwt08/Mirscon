import "./ServiceDetails.css";

import integration from "../../assets/integration.jpg";
import process from "../../assets/integrationflow.jpg";
import benefits from "../../assets/integrationbenefits.jpg";

function Integration() {
  return (
    <main className="service-details">

      {/* ==================== Integration Technology Services ==================== */}

      <div className="service-row">

        <div className="service-image">
          <img src={integration} alt="Integration Technology Services" />
        </div>

        <div className="service-content">

          <h2>Integration Technology Services</h2>

          <p>
            These days, businesses rely on multiple technologies,
            applications, and software solutions to manage their daily
            operations and remain competitive. Different departments often
            use specialized tools based on their responsibilities, such as
            finance, sales, customer support, human resources, and research.
          </p>

          <p>
            Integration Technology Services connect these different systems
            so they can communicate and exchange information seamlessly.
            By integrating applications, databases, APIs, and cloud
            platforms, organizations improve collaboration, reduce manual
            work, eliminate duplicate data, and streamline business
            operations.
          </p>

        </div>

      </div>

      {/* ==================== Integration Technology Process ==================== */}

      <div className="service-row reverse">

        <div className="service-content">

          <h2>Integration Technology Process</h2>

          <p>
            Technology integration begins by understanding business
            requirements and identifying the systems that need to work
            together. Secure integration methods are implemented to allow
            applications and devices to exchange information accurately and
            efficiently.
          </p>

          <p>
            Once integrated, employees can instantly access updated
            information without relying on multiple departments. This
            improves workflow, speeds up decision making, enhances customer
            service, and enables organizations to deliver a better customer
            experience.
          </p>

        </div>

        <div className="service-image">
          <img src={process} alt="Integration Technology Process" />
        </div>

      </div>

      {/* ==================== Benefits ==================== */}

      <div className="service-row">

        <div className="service-image">
          <img src={benefits} alt="Benefits of Technology Integration" />
        </div>

        <div className="service-content">

          <h2>Benefits of Technology Integration</h2>

          <ol className="advantages-list">

            <li>
              <strong>Improved Productivity and Efficiency</strong>

              <p>
                Integrated systems eliminate repetitive tasks and reduce
                manual data entry by automatically sharing information
                across business applications. This saves time, minimizes
                errors, and improves overall productivity.
              </p>

            </li>

            <li>
              <strong>Better Communication and Collaboration</strong>

              <p>
                Connected systems allow employees to work with the same
                real time information, making communication, teamwork, and
                collaboration more efficient across departments and
                locations.
              </p>

            </li>

            <li>
              <strong>Scalability and Business Growth</strong>

              <p>
                Technology integration supports long term business growth
                by improving workflows, increasing customer satisfaction,
                simplifying operations, and making it easier to adopt new
                technologies as the organization expands.
              </p>

            </li>

          </ol>

        </div>

      </div>

    </main>
  );
}

export default Integration;