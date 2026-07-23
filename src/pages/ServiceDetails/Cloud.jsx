import "./ServiceDetails.css";

import cloud from "../../assets/cloud.jpg";
import cloudProcess from "../../assets/cloudprocess.jpg";
import cloudBenefits from "../../assets/cloudbenefits.jpg";

function Cloud() {
  return (
    <section className="service-details">

      {/* ==================== Cloud Services ==================== */}

      <div className="service-row">

        <div className="service-image">
          <img src={cloud} alt="Cloud Services" />
        </div>

        <div className="service-content">
          <h2>Cloud Services</h2>

          <p>
            Cloud services enable businesses to access computing resources,
            applications, and storage over the internet instead of relying
            on physical infrastructure. Organizations can securely manage
            data, improve collaboration, and scale resources based on their
            business requirements.
          </p>

          <p>
            Cloud technology helps companies reduce operational costs,
            improve flexibility, and support remote work while ensuring
            high availability and business continuity.
          </p>
        </div>

      </div>

      {/* ==================== Cloud Process ==================== */}

      <div className="service-row reverse">

        <div className="service-image">
          <img src={cloudProcess} alt="Cloud Process" />
        </div>

        <div className="service-content">

          <h2>Cloud Process</h2>

          <p>
            Cloud implementation begins by understanding business needs,
            selecting the right cloud platform, migrating applications and
            data, and configuring secure cloud infrastructure.
          </p>

          <p>
            Continuous monitoring, maintenance, backup, and optimization
            ensure reliable performance, data security, and seamless
            scalability as business demands grow.
          </p>

        </div>

      </div>

      {/* ==================== Benefits ==================== */}

      <div className="service-row">

        <div className="service-image">
          <img src={cloudBenefits} alt="Benefits of Cloud Services" />
        </div>

        <div className="service-content">

          <h2>Benefits of Cloud Services</h2>

          <ol className="advantages-list">

            <li>
              <strong>Scalability</strong>
              <p>
                Cloud resources can easily be increased or reduced based on
                business needs, allowing organizations to grow without major
                infrastructure investments.
              </p>
            </li>

            <li>
              <strong>Cost Efficiency</strong>
              <p>
                Businesses pay only for the resources they use, reducing
                hardware, maintenance, and operational costs.
              </p>
            </li>

            <li>
              <strong>Security and Reliability</strong>
              <p>
                Cloud platforms provide secure data storage, regular
                backups, disaster recovery, and high system availability to
                protect business information.
              </p>
            </li>

          </ol>

        </div>

      </div>

    </section>
  );
}

export default Cloud;