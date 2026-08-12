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

              <p>
                Explore the different services and solutions we
                provide to support accessible and high-quality
                digital content.
              </p>

            </div>

            <div className="service-details-features-grid">

              {service.features.map((feature, index) => {

                const hasMultipleImages =
                  Array.isArray(feature.images) &&
                  feature.images.length > 0;

                const hasSingleImage =
                  feature.image &&
                  typeof feature.image !== "object";

                const hasImage =
                  hasMultipleImages || hasSingleImage;

                return (
                  <article
                    className={`service-details-feature-card ${
                      hasImage ? "feature-with-image" : ""
                    }`}
                    key={`${service.title}-feature-${index}`}
                  >

                    {/* =================================================
                        FEATURE TITLE
                    ================================================= */}

                    <h3>
                      {feature.title}
                    </h3>


                    {/* =================================================
                        FIRST IMAGE
                        Directly After Heading
                    ================================================= */}

                    {hasMultipleImages && feature.images[0] && (
                      <div className="service-details-feature-image feature-image-first">

                        <img
                          src={feature.images[0]}
                          alt={`${feature.title} 1`}
                        />

                      </div>
                    )}


                    {/* =================================================
                        CONTENT + SECOND IMAGE
                        60% CONTENT + 40% IMAGE
                    ================================================= */}

                    {hasMultipleImages && feature.images[1] ? (
                      <div className="service-details-feature-layout">

                        {/* ---------------------------------------------
                            LEFT CONTENT
                        --------------------------------------------- */}

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

                          {!Array.isArray(feature.paragraphs) &&
                            feature.description && (
                              <p>
                                {feature.description}
                              </p>
                            )
                          }

                        </div>


                        {/* ---------------------------------------------
                            SECOND IMAGE
                            CENTERED IN RIGHT COLUMN
                        --------------------------------------------- */}

                        <div className="service-details-feature-image feature-image-second">

                          <img
                            src={feature.images[1]}
                            alt={`${feature.title} 2`}
                          />

                        </div>

                      </div>
                    ) : (

                      /* =================================================
                         CONTENT WHEN THERE IS NO SECOND IMAGE
                      ================================================= */

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

                        {!Array.isArray(feature.paragraphs) &&
                          feature.description && (
                            <p>
                              {feature.description}
                            </p>
                          )
                        }

                      </div>
                    )}


                    {/* =================================================
                        SINGLE IMAGE FALLBACK
                    ================================================= */}

                    {!hasMultipleImages &&
                      hasSingleImage && (
                        <div className="service-details-feature-image feature-image-single">

                          <img
                            src={feature.image}
                            alt={feature.title}
                          />

                        </div>
                    )}

                  </article>
                );
              })}

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


        {/* =====================================================
            FLOATING BACK BUTTON
        ===================================================== */}

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

      <Footer />
    </>
  );
}

export default ServiceDetails;