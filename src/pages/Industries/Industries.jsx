import "./Industries.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../../components/Footer/Footer";
function Industries() {
  const navigate = useNavigate();

  const industries = [
    {
      number: "01",
      title: "Publishing & Media",
      description:
        "We help publishers create accessible digital publications, eBooks, EPUBs, documents, and multimedia content that reaches every reader.",
      services: [
        "Digital Publishing",
        "Accessibility Services",
        "EPUB Conversion",
        "Alt Text Services",
      ],
    },

    {
      number: "02",
      title: "Education & EdTech",
      description:
        "Our solutions help educational institutions and EdTech organizations deliver inclusive and accessible learning experiences across digital platforms.",
      services: [
        "Accessible Documents",
        "Alt Text",
        "Digital Content",
        "Accessibility Testing",
      ],
    },

    {
      number: "03",
      title: "Healthcare",
      description:
        "We support healthcare organizations with accessible digital content and technology solutions designed for clarity, usability, and compliance.",
      services: [
        "Document Accessibility",
        "Digital Content",
        "Accessibility Testing",
        "Technology Solutions",
      ],
    },

    {
      number: "04",
      title: "Technology",
      description:
        "We help technology companies improve their digital experiences through accessibility, software solutions, engineering, and technology services.",
      services: [
        "Quality Automation",
        "Accessibility Testing",
        "Product Engineering",
        "Cloud Solutions",
      ],
    },

    {
      number: "05",
      title: "Banking & Financial Services",
      description:
        "We help financial organizations deliver reliable, accessible, and efficient digital experiences while supporting their technology and operational needs.",
      services: [
        "Accessibility Testing",
        "Automation",
        "Cloud",
        "Technology Solutions",
      ],
    },

    {
      number: "06",
      title: "Government & Public Sector",
      description:
        "We support public sector organizations in creating accessible digital services and improving technology-driven experiences for citizens.",
      services: [
        "Accessibility Services",
        "Document Remediation",
        "Digital Publishing",
        "Technology Solutions",
      ],
    },
  ];

  return (
     <>
    <Header/>
    <main className="industries-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="industries-hero">

        <div className="industries-hero-content">

          <h1>
            Technology Solutions
            <br />
            Built for Your Industry
          </h1>

          <p>
            We combine technology, accessibility, engineering, and
            business expertise to deliver solutions designed around
            the unique needs of every industry.
          </p>

        </div>

      </section>


      {/* =========================
          INTRO
      ========================= */}

      <section className="industries-intro">

        <h2>
          Solutions That Understand
          <br />
          Your Business
        </h2>

        <p>
          Every industry has different challenges, requirements,
          and customers. Our teams work closely with organizations
          to understand their goals and provide flexible solutions
          that improve efficiency, accessibility, quality, and
          digital experiences.
        </p>

      </section>


      {/* =========================
          INDUSTRIES
      ========================= */}

      <section className="industries-section">

        <div className="industries-grid">

          {industries.map((industry) => (

            <article
              className="industry-card"
              key={industry.number}
            >

              <div className="industry-card-top">

  <span className="industry-number">
    {industry.number}
  </span>

</div>

              <h3>
                {industry.title}
              </h3>


              <p>
                {industry.description}
              </p>


              <div className="industry-services">

                {industry.services.map((service, index) => (

                  <span key={index}>
                    {service}
                  </span>

                ))}

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          WHY Mirscon
      ========================= */}

      <section className="industries-why">

        <div className="industries-why-content">

          <span className="section-label">
            WHY Mirscon
          </span>

          <h2>
            One Technology Partner.
            <br />
            Multiple Industry Needs.
          </h2>

          <p>
            From accessibility and digital publishing to
            engineering, automation, cloud, and resource
            outsourcing, Mirscon provides technology solutions
            that help organizations operate more efficiently
            and deliver better digital experiences.
          </p>

        </div>


        <div className="industry-benefits">

          <div className="industry-benefit">
            <span>01</span>
            <h3>Industry Expertise</h3>
            <p>
              Solutions designed around your industry's
              unique requirements.
            </p>
          </div>


          <div className="industry-benefit">
            <span>02</span>
            <h3>Flexible Solutions</h3>
            <p>
              Services that can scale with your business
              and evolving needs.
            </p>
          </div>


          <div className="industry-benefit">
            <span>03</span>
            <h3>Quality & Reliability</h3>
            <p>
              Experienced teams focused on delivering
              consistent and dependable results.
            </p>
          </div>


          <div className="industry-benefit">
            <span>04</span>
            <h3>Technology Driven</h3>
            <p>
              Modern technology solutions that help
              businesses move forward.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="industries-cta">

        <div>

          <span>
            LET'S WORK TOGETHER
          </span>

          <h2>
            Have an Industry-Specific
            Challenge?
          </h2>

          <p>
            Tell us about your requirements and let's
            find the right solution for your business.
          </p>

        </div>


        <button
          onClick={() => navigate("/contact")}
        >
          Talk to Our Team
          <span>→</span>
        </button>

      </section>

    </main>
    <Footer/>
    </>
  );
}

export default Industries;