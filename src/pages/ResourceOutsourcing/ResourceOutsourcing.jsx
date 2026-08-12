import "./ResourceOutsourcing.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../../components/Footer/Footer";

import azure from "../../assets/technology/Azure.png";
import azureSynapse from "../../assets/technology/azureSynapse.png";
import databricks from "../../assets/technology/databricks.png";
import dell from "../../assets/technology/Dell.png";
import informatica from "../../assets/technology/Informatica.png";
import powerBi from "../../assets/technology/PowerBi.png";
import snapLogic from "../../assets/technology/snapLogic.png";
import snowflake from "../../assets/technology/snowflake.png";
import tableau from "../../assets/technology/tableau.png";
import salesforce from "../../assets/salesforce.png";
const technologies = [
  {
    image: azure,
    name: "Microsoft Azure",
    category: "Cloud Platform",
  },
  {
    image: azureSynapse,
    name: "Azure Synapse",
    category: "Analytics",
  },
  {
    image: databricks,
    name: "Databricks",
    category: "Data Engineering",
  },
  {
    image: dell,
    name: "Dell Boomi",
    category: "Integration",
  },
  {
    image: informatica,
    name: "Informatica",
    category: "ETL Platform",
  },
  {
    image: powerBi,
    name: "Power BI",
    category: "Business Intelligence",
  },
  {
    image: snapLogic,
    name: "SnapLogic",
    category: "Integration",
  },
  {
    image: snowflake,
    name: "Snowflake",
    category: "Cloud Data Warehouse",
  },
  {
    image: tableau,
    name: "Tableau",
    category: "Visualization",
  },
  {
    image: salesforce,
    name: "Salesforce",
    category: "CRM Platform",
  },
];
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
    TECHNOLOGY
========================= */}

<section className="technology">

  <div className="technology-header">

    <h2>
      OUR TECHNOLOGY
    </h2>

    <p>
      We leverage industry-leading cloud, analytics, CRM and integration
      platforms to build secure, scalable and high-performing digital
      solutions.
    </p>

    <div className="line"></div>

  </div>


  <div className="logo-grid">

    {technologies.map((tech, index) => (
      <div
        className="logo-card"
        key={index}
      >

        <img
          src={tech.image}
          alt={tech.name}
        />

        <h3>
          {tech.name}
        </h3>

        <p>
          {tech.category}
        </p>

      </div>
    ))}

  </div>

</section>
    </main>
    <Footer/>
    </>
    
  );
}

export default ResourceOutsourcing;