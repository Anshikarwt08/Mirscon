import { useParams, useNavigate } from "react-router-dom";
import "./ServiceDetails.css";
import serviceData from "./serviceData";

function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = serviceData[id];

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <section className="service-details-page">
      {/* Hero */}
      <div className="service-hero">
        <div className="service-hero-content">
          <span className="service-tag">
            Our Services
          </span>

          <h1>{service.title}</h1>

          <p>{service.description}</p>

          <button
            className="contact-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>

        <div className="service-hero-image">
          <img
            src={service.image}
            alt={service.title}
          />
        </div>
      </div>

      {/* Features */}

      <section className="features-section">

        <h2>What We Offer</h2>

        <div className="features-grid">

          {service.features.map((feature, index) => (

            <div
              className="feature-card"
              key={index}
            >

              <div className="feature-number">
                {index + 1}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <h2>
          Looking for Accessibility Solutions?
        </h2>

        <p>
          Let's help you build accessible,
          standards-compliant digital
          content for every user.
        </p>

        <button
          className="contact-btn"
          onClick={() => navigate("/contact")}
        >
          Get in Touch
        </button>

      </section>

    </section>
  );
}

export default ServiceDetails;