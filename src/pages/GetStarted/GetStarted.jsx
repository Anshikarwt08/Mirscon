import "./GetStarted.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../../components/Footer/Footer";
import { submitForm } from "../../utils/api";

function GetStarted() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const form = e.target;
      const payload = {
        fullName: form.fullName.value,
        email: form.email.value,
        company: form.company.value,
        phone: form.phone.value,
        service: form.service.value,
        requirements: form.requirements.value,
      };

      await submitForm("/get-started", payload);
      alert("Thank you! We will get in touch with you soon.");
      form.reset();
    } catch (error) {
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Header/>

    <main className="get-started-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="get-started-hero">

        <div className="get-started-hero-content">


          <h1>
            Build the Right Team
            <br />
            for Your Business
          </h1>

          <p>
            Tell us about your project, resource requirements, and
            business goals. Our team will help you find the right
            professionals and flexible resource solutions.
          </p>

        </div>

      </section>


      {/* =========================
          MAIN SECTION
      ========================= */}
      <section className="get-started-main">

        {/* LEFT CONTENT */}
        <div className="get-started-info">

          <span className="resource-section-label">
            WHY Mirscon
          </span>

          <h2>
            Get the Resources
            <br />
            Your Business Needs
          </h2>

          <p>
            Finding the right professionals can be challenging.
            Our resource outsourcing solutions help you access
            skilled talent without the complexity of building
            and managing an entire team internally.
          </p>

          <div className="benefits-list">

            <div className="benefit-item">
              <div className="benefit-icon">✓</div>

              <div>
                <h3>Skilled Professionals</h3>
                <p>
                  Access qualified professionals with the skills
                  required for your business needs.
                </p>
              </div>
            </div>


            <div className="benefit-item">
              <div className="benefit-icon">✓</div>

              <div>
                <h3>Flexible Engagement</h3>
                <p>
                  Choose resource models that fit your project,
                  timeline, and business requirements.
                </p>
              </div>
            </div>


            <div className="benefit-item">
              <div className="benefit-icon">✓</div>

              <div>
                <h3>Scalable Teams</h3>
                <p>
                  Scale your team efficiently as your business
                  requirements grow.
                </p>
              </div>
            </div>


            <div className="benefit-item">
              <div className="benefit-icon">✓</div>

              <div>
                <h3>Reliable Support</h3>
                <p>
                  Get dependable resources who work alongside
                  your team and support your business goals.
                </p>
              </div>
            </div>

          </div>

        </div>


        {/* RIGHT FORM */}
        <div className="get-started-form-card">

          <div className="form-heading">

            <span>START A CONVERSATION</span>

            <h2>
              Tell Us About Your Requirements
            </h2>

            <p>
              Fill in the details below and our team will
              get back to you.
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="email">
                  Work Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>


            <div className="form-row">

              <div className="form-group">
                <label htmlFor="company">
                  Company Name
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Enter company name"
                />
              </div>


              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                />
              </div>

            </div>


            <div className="form-group">

              <label htmlFor="service">
                Service Required
              </label>

              <select id="service" name="service" required>

                <option value="">
                  Select a service
                </option>

                <option value="dedicated-resources">
                  Dedicated Resources
                </option>

                <option value="staff-augmentation">
                  Staff Augmentation
                </option>

                <option value="project-based">
                  Project-Based Resources
                </option>

                <option value="managed-resources">
                  Managed Resources
                </option>

                <option value="other">
                  Other
                </option>

              </select>

            </div>


            <div className="form-group">

              <label htmlFor="requirements">
                Tell Us About Your Requirements
              </label>

              <textarea
                id="requirements"
                name="requirements"
                rows="5"
                placeholder="Tell us about your project, required skills, team size, timeline, or any other requirements..."
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="submit-requirement-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit Requirement"}
              <span>→</span>
            </button>

          </form>

        </div>

      </section>


      {/* =========================
          WHAT HAPPENS NEXT
      ========================= */}
      <section className="what-next-section">

        <span className="section-label">
          SIMPLE PROCESS
        </span>

        <h2>
          What Happens Next?
        </h2>

        <p className="what-next-intro">
          We make the process simple, transparent, and focused
          on finding the right solution for your business.
        </p>


        <div className="steps-grid">

          <div className="step-card">

            <span className="step-number">
              01
            </span>

            <h3>
              Share Your Needs
            </h3>

            <p>
              Tell us about your project, skills, timeline,
              and resource requirements.
            </p>

          </div>


          <div className="step-card">

            <span className="step-number">
              02
            </span>

            <h3>
              Discuss Your Requirements
            </h3>

            <p>
              Our team understands your requirements and
              recommends the right resource model.
            </p>

          </div>


          <div className="step-card">

            <span className="step-number">
              03
            </span>

            <h3>
              Build Your Team
            </h3>

            <p>
              Get the right professionals to support your
              business and project goals.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          BOTTOM CTA
      ========================= */}
      <section className="get-started-bottom-cta">

        <div>

          <span>
            READY TO SCALE?
          </span>

          <h2>
            Let's Build Your Team Together.
          </h2>

          <p>
            Have questions before getting started?
            Our team is ready to help.
          </p>

        </div>

        <button
          onClick={() => navigate("/contact")}
          className="bottom-contact-btn"
        >
          Contact Us
          <span>→</span>
        </button>

      </section>
        
    </main>
    <Footer/>
        </>
  );
}

export default GetStarted;