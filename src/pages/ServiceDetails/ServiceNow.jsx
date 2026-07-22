import "./ServiceDetails.css";

import servicenow from "../../assets/servicenow.jpg";
import workflow from "../../assets/serviceflow.jpg";
import benefits from "../../assets/servicebenefits.jpg";

function ServiceNow() {
  return (
    <main className="service-details">

      {/* ==================== ServiceNow Solutions ==================== */}

      <div className="service-row">

        <div className="service-image">
          <img src={servicenow} alt="ServiceNow Solutions" />
        </div>

        <div className="service-content">

          <h2>ServiceNow Solutions</h2>

          <p>
            ServiceNow is a leading cloud-based platform that helps
            organizations automate workflows, simplify business
            operations, and improve service delivery across departments.
            It connects people, processes, and technology through a
            single digital platform.
          </p>

          <p>
            Our ServiceNow solutions help businesses streamline IT
            services, employee workflows, customer support, and business
            operations by automating repetitive tasks and providing
            real-time visibility into organizational processes.
          </p>

        </div>

      </div>

      {/* ==================== Implementation Process ==================== */}

      <div className="service-row">

        <div className="service-image">
          <img src={workflow} alt="ServiceNow Implementation" />
        </div>

        <div className="service-content">

          <h2>ServiceNow Implementation Process</h2>

          <p>
            We begin by understanding your business requirements,
            analyzing existing workflows, and identifying opportunities
            for automation. Our experts configure and customize the
            ServiceNow platform to align with your business goals.
          </p>

          <p>
            After implementation, we integrate ServiceNow with existing
            enterprise systems, perform testing, train users, and provide
            continuous support to ensure maximum performance and business
            value.
          </p>

        </div>

      </div>

      {/* ==================== Benefits ==================== */}

      <div className="service-row">

        <div className="service-image">
          <img src={benefits} alt="Benefits of ServiceNow" />
        </div>

        <div className="service-content">

          <h2>Benefits of ServiceNow</h2>

          <ol className="advantages-list">

            <li>

              <strong>Workflow Automation</strong>

              <p>
                Automates repetitive business processes, reduces manual
                effort, and increases operational efficiency across the
                organization.
              </p>

            </li>

            <li>

              <strong>Improved Service Delivery</strong>

              <p>
                Enables faster incident resolution, better employee
                experiences, and enhanced customer satisfaction through
                streamlined workflows.
              </p>

            </li>

            <li>

              <strong>Scalability and Visibility</strong>

              <p>
                Provides real-time insights into business operations,
                supports organizational growth, and allows businesses to
                adapt quickly to changing requirements.
              </p>

            </li>

          </ol>

        </div>

      </div>

    </main>
  );
}

export default ServiceNow;