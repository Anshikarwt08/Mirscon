import { useParams, useNavigate } from "react-router-dom";
import "./ServiceDetails.css";
import serviceData from "./serviceData";
import Header from "../Header/Header";
import Footer from "../../components/Footer/Footer";
function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = serviceData[id];

  /* =========================================================
     SERVICE NOT FOUND
  ========================================================= */

  if (!service) {
    return (
      <>
        <Header />

        <main className="service-details-page">
          <section className="service-not-found">
            <h1>Service Not Found</h1>

            <p>
              The service you are looking for could not be found.
            </p>

            <button
              type="button"
              className="service-details-contact-btn"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header />

      <main className="service-details-page">

        


        {/* =====================================================
            WHAT WE OFFER
        ===================================================== */}

        {service.features && service.features.length > 0 && (
          <section className="service-details-features-section">

            <div className="service-details-section-heading">

              

              <h2>
                Comprehensive {service.title}
              </h2>

              <p>Explore the different services and solutions we provide to support accessible and high-quality digital content.</p>

            </div>


            <div className="service-details-features-grid">

              {service.features.map((feature, index) => (

                <article
                  className="service-details-feature-card"
                  key={`${service.title}-feature-${index}`}
                >

                  


                  {/* Feature Title */}

                  <h3>
                    {feature.title}
                  </h3>


                  {/* Feature Content */}

                  <div className="service-details-feature-paragraphs">

                    {Array.isArray(feature.paragraphs) &&
                      feature.paragraphs.map(
                        (paragraph, paragraphIndex) => (

                          <p
                            key={`${feature.title}-paragraph-${paragraphIndex}`}
                          >
                            {paragraph}
                          </p>

                        )
                      )
                    }


                    {/* Old data fallback */}

                    {!Array.isArray(feature.paragraphs) &&
                      feature.description && (

                        <p>
                          {feature.description}
                        </p>

                      )
                    }

                  </div>

                </article>

              ))}

            </div>

          </section>
        )}


        {/* =====================================================
            BENEFITS
        ===================================================== */}

        {service.benefits && service.benefits.length > 0 && (
          <section className="service-details-benefits-section">

            <div className="service-details-benefits-content">

              <h2>
                Why Accessible Content Matters
              </h2>

              <p>
                Our approach helps organizations create
                more usable, inclusive, and consistent
                digital experiences for their audiences.
              </p>

            </div>


            <div className="service-details-benefits-list">

              {service.benefits.map((benefit, index) => (

                <div
                  className="service-details-benefit-item"
                  key={`${service.title}-benefit-${index}`}
                >

                  <span
                    className="service-details-check"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <span>
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </section>
        )}


        {/* =====================================================
            INDUSTRIES
        ===================================================== */}

        {service.industries && service.industries.length > 0 && (
          <section className="service-details-industries-section">

            <div className="service-details-section-heading">

            

              <h2>
                Supporting Different Industries
              </h2>

              <p>
                Our services support organizations working
                across education, publishing, enterprise,
                technology, and other content-driven industries.
              </p>

            </div>


            <div className="service-details-industries-grid">

              {service.industries.map((industry, index) => (

                <div
                  className="service-details-industry-card"
                  key={`${service.title}-industry-${index}`}
                >
                  {industry}
                </div>

              ))}

            </div>

          </section>
        )}


        {/* =====================================================
            OUR PROCESS
        ===================================================== */}

        {service.process && service.process.length > 0 && (
          <section className="service-details-process-section">

            <div className="service-details-section-heading">

              

              <h2>
                How We Work
              </h2>

              <p>
                A structured workflow helps us maintain
                consistency, accuracy, and quality throughout
                every project.
              </p>

            </div>


            <div className="service-details-process-grid">

              {service.process.map((step, index) => (

                <article
                  className="service-details-process-card"
                  key={`${service.title}-process-${index}`}
                >

                  <div className="service-details-process-number">
                    {step.step ||
                      String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </article>

              ))}

            </div>

          </section>
        )}


        {/* =====================================================
            FAQ
        ===================================================== */}

        {service.faqs && service.faqs.length > 0 && (
          <section className="service-details-faq-section">

            <div className="service-details-section-heading">

              <h2>
                FAQs
              </h2>

              <p>
                Find answers to common questions about our{" "}
                {service.title.toLowerCase()} services.
              </p>

            </div>


            <div className="service-details-faq-list">

              {service.faqs.map((faq, index) => (

                <details
                  className="service-details-faq-item"
                  key={`${service.title}-faq-${index}`}
                >

                  <summary>

                    <span>
                      {faq.question}
                    </span>

                    <span
                      className="service-details-faq-icon"
                      aria-hidden="true"
                    >
                      +
                    </span>

                  </summary>

                  <p>
                    {faq.answer}
                  </p>

                </details>

              ))}

            </div>

          </section>
        )}
  {/* Floating Back Button */}

      <button
        type="button"
        className="service-details-floating-back"
        onClick={() => navigate("/accessibility")}
        aria-label="Back to Accessibility"
      >
        

        <span className="floating-back-text">
          Back to Accessibility
        </span>
      </button>

        

      </main>
      <Footer/>
    </>
  );
}

export default ServiceDetails;