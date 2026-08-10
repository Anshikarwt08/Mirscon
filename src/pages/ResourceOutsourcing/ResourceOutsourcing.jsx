import "./ResourceOutsourcing.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../../components/Footer/Footer";

function ResourceOutsourcing() {
  const navigate = useNavigate();

  const services = [
    {
      number: "01",
      title: "Dedicated Resources",
      description:
        "Get dedicated professionals who work closely with your team and support your ongoing business needs.",
    },
    {
      number: "02",
      title: "Staff Augmentation",
      description:
        "Strengthen your existing team with skilled resources based on your project requirements.",
    },
    {
      number: "03",
      title: "Project-Based Resources",
      description:
        "Access specialized professionals for specific projects, timelines, and deliverables.",
    },
    {
      number: "04",
      title: "Managed Resources",
      description:
        "Flexible resource management solutions designed to improve productivity and operational efficiency.",
    },
  ];

  return (
    <>
    <Header/>
    <main className="resource-outsourcing-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="resource-hero">

        <div className="resource-hero-content">

          <h1>
            Resource Outsourcing Services
          </h1>

          <p>
            Flexible and reliable resource outsourcing solutions that help
            organizations scale their teams, streamline operations, and
            achieve their business goals.
          </p>

          <button
  className="resource-primary-btn"
  onClick={() => navigate("/get-started")}
>
  Get Started
</button>

        </div>


        {/* Right Side Visual */}

        <div className="resource-hero-visual">

          <div className="resource-circle resource-circle-main">
            <span>👥</span>
          </div>

          <div className="resource-circle resource-circle-top">
            <span>👤</span>
          </div>

          <div className="resource-circle resource-circle-left">
            <span>💻</span>
          </div>

          <div className="resource-circle resource-circle-right">
            <span>⚙</span>
          </div>

          <div className="resource-circle resource-circle-bottom">
            <span>▥</span>
          </div>

        </div>

      </section>


      {/* =========================
          INTRODUCTION
      ========================= */}

      <section className="resource-intro">

        <span className="section-label">
          Why Outsource
        </span>

        <h2>
          Supporting Your Business With the Right Resources
        </h2>

        <p>
          Our resource outsourcing services provide skilled professionals
          and flexible staffing solutions to support your business
          operations. We help organizations access the right expertise
          while maintaining efficiency, quality, and scalability.
        </p>

      </section>


      {/* =========================
          SERVICES
      ========================= */}

      <section className="resource-services">

        <span className="section-label">
          What We Provide
        </span>

        <h2>
          Our Resource Outsourcing Services
        </h2>

        <div className="resource-service-grid">

          {services.map((service) => (

            <article
              className="resource-service-card"
              key={service.number}
            >

              <div className="resource-card-number">
                {service.number}
              </div>

              <div className="resource-card-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="resource-cta">

        <div className="resource-cta-content">

          <span className="section-label">
            Let's Work Together
          </span>

          <h2>
            Need the Right Resources for Your Business?
          </h2>

          <p>
            Let's discuss how our resource outsourcing solutions
            can support your organization.
          </p>

        </div>

        <button
          className="resource-primary-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>

      </section>

    </main>
    <Footer/>
    </>
    
  );
}

export default ResourceOutsourcing;