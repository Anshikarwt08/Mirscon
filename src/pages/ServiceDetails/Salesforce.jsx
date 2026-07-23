import "./ServiceDetails.css";

import salesforce from "../../assets/salesforce.jpg";
import process from "../../assets/salesforceprocess.jpg";
import services from "../../assets/salesforceservice.jpg";

function Salesforce() {
  return (
    <section className="service-details">

      {/* ==================== Salesforce ==================== */}

      <div className="service-row">

        <div className="service-image">
          <img src={salesforce} alt="Salesforce" />
        </div>

        <div className="service-content">

          <h2>Salesforce</h2>

          <p>
            With the thriving data era of the 21st century, companies and
            organizations need a platform that helps them manage customer
            relationships effectively and make informed business decisions.
            Salesforce is one of the world's leading cloud based Customer
            Relationship Management (CRM) platforms.
          </p>

          <p>
            Businesses use Salesforce to streamline sales, marketing, and
            customer support operations while improving productivity and
            strengthening customer relationships. Its cloud based
            architecture allows secure access to business data anytime,
            anywhere.
          </p>

        </div>

      </div>

      {/* ==================== Salesforce Process ==================== */}

      <div className="service-row reverse">

        <div className="service-image">
          <img src={process} alt="Salesforce Process" />
        </div>

        <div className="service-content">

          <h2>Salesforce Process</h2>

          <p>
            Salesforce services help organizations use cloud technology
            to connect with customers, partners, and prospects more
            efficiently. At MIRSCON, Salesforce CRM is used to manage
            customer activities, improve marketing strategies, and
            simplify business processes.
          </p>

          <p>
            Interactive dashboards, workflow automation, and real time
            reporting help businesses make better decisions while
            improving customer service, sales performance, and overall
            operational efficiency.
          </p>

        </div>

      </div>

      {/* ==================== Different Services ==================== */}

      <div className="service-row">

        <div className="service-image">
          <img src={services} alt="Salesforce Services" />
        </div>

        <div className="service-content">

          <h2>Different Services Offered by Salesforce</h2>

          <ol className="advantages-list">

            <li>
              <strong>Software as a Service (SaaS)</strong>

              <p>
                Salesforce SaaS enables businesses to access CRM software
                directly through the cloud without installing or
                maintaining infrastructure. It simplifies customer
                relationship management, sales, marketing, and support
                operations.
              </p>
            </li>

            <li>
              <strong>Platform as a Service (PaaS)</strong>

              <p>
                Salesforce PaaS provides developers with a platform to
                build, customize, and deploy business applications that
                integrate seamlessly with Salesforce products.
              </p>
            </li>

            <li>
              <strong>Infrastructure as a Service (IaaS)</strong>

              <p>
                Salesforce IaaS provides the cloud infrastructure,
                storage, networking, and computing resources required to
                support secure and scalable enterprise applications.
              </p>
            </li>

          </ol>

        </div>

      </div>

    </section>
  );
}

export default Salesforce;