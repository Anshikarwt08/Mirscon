import "./ServiceDetails.css";

import engineering from "../../assets/productengineering.jpg";
import lifecycle from "../../assets/productlifecycle.jpg";
import innovation from "../../assets/productinnovation.jpg";

function ProductEngineering() {
  return (
    <main className="service-details">

      {/* ==================== Product Engineering Services ==================== */}

      <div className="service-row">

        <div className="service-image">
          <img src={engineering} alt="Product Engineering Services" />
        </div>

        <div className="service-content">

          <h2>Product Engineering Services</h2>

          <p>
            Product Engineering focuses on designing, developing, testing,
            and maintaining innovative software products that meet evolving
            business and customer requirements. It combines engineering
            expertise with modern technologies to deliver reliable,
            scalable, and high-quality digital solutions.
          </p>

          <p>
            Our Product Engineering services help organizations transform
            ideas into successful products through agile development,
            continuous innovation, and efficient delivery. We build
            solutions that improve user experience, accelerate time to
            market, and support long-term business growth.
          </p>

        </div>

      </div>

      {/* ==================== Product Development Lifecycle ==================== */}

      <div className="service-row reverse">

        <div className="service-image">
          <img src={lifecycle} alt="Product Development Lifecycle" />
        </div>

        <div className="service-content">

          <h2>Product Development Lifecycle</h2>

          <p>
            Our engineering process begins with understanding business
            objectives, market requirements, and user expectations. We
            design scalable architectures, develop robust applications,
            perform rigorous testing, and ensure seamless deployment.
          </p>

          <p>
            Throughout the product lifecycle, we continuously monitor
            performance, gather user feedback, and implement improvements
            that enhance functionality, security, and overall product
            quality.
          </p>

        </div>

      </div>

      {/* ==================== Benefits ==================== */}

      <div className="service-row">

        <div className="service-image">
          <img src={innovation} alt="Benefits of Product Engineering" />
        </div>

        <div className="service-content">

          <h2>Benefits of Product Engineering</h2>

          <ol className="advantages-list">

            <li>
              <strong>Accelerated Time to Market</strong>

              <p>
                Agile development practices and streamlined engineering
                processes help businesses launch products faster while
                maintaining high quality standards.
              </p>
            </li>

            <li>
              <strong>Scalable and Reliable Solutions</strong>

              <p>
                Modern architectures and cloud-ready applications ensure
                products remain secure, scalable, and capable of supporting
                future business growth.
              </p>
            </li>

            <li>
              <strong>Continuous Innovation</strong>

              <p>
                Regular updates, performance optimization, and adoption of
                emerging technologies enable businesses to remain
                competitive and deliver exceptional customer experiences.
              </p>
            </li>

          </ol>

        </div>

      </div>

    </main>
  );
}

export default ProductEngineering;