import "./About.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../../components/Footer/Footer";
import Team from "../Team/Team";

import illustration from "../../assets/Accessibility.png";

function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <>
      <Header />

      <main className="about-page">
        {/* ================= HERO ================= */}

        <section className="about-hero">
          <div className="about-container about-hero-grid">

            <div className="about-left">
              <h1>
                Engineering Accessibility for Digital Content
              </h1>

              <p>
                Mirscon Technologies is a digital accessibility and content services company with an experience of over a decade in helping organizations become more 
                accessible, useable and inclusive. We work across the content lifecycle-from accessibility assessment and remediation to 
                structured publishing, testing and validation. Our expertise spans accessible PDFs, EPUB 3, alt text, complex STEM visuals, MathML,
                document remediation, captioning and accessibility QA.
              </p>
            </div>

            <div className="about-right">
              <img
                src={illustration}
                alt="Digital Accessibility Illustration"
              />
            </div>

          </div>
        </section>

        {/* ================= WHO WE ARE ================= */}

        <section
          id="who-we-are"
          className="about-section"
        >
          <div className="about-container">

            <h2>Creating Inclusive Experiences</h2>

            <p className="section-description">
              Mirscon Technologies is an IT and technology services organization combining software, automation, artifial intelligence and human expertise
              to solve complex content and accessibility challenges.
            </p>

            <div className="about-grid">

              <div className="about-card">
                <h3>Our Mission</h3>

                <p className="section1-desc">
                  Deliver innovative accessibility and technology solutions
                  that empower organizations to build inclusive, compliant,
                  and user-friendly digital experiences.
                </p>
              </div>

              <div className="about-card">
                <h3>Our Vision</h3>

                <p className="section1-desc">
                  Become a trusted global leader in digital accessibility,
                  helping businesses create technology that everyone can access,
                  regardless of ability.
                </p>
              </div>

              <div className="about-card">
                <h3>Our Purpose</h3>

                <p className="section1-desc">
                  Bridge the gap between inaccessible digital content and the
                  people who rely on accessible technology every day.
                </p>
              </div>

              <div className="about-card">
                <h3>Our Commitment</h3>

                <p className="section1-desc">
                  We combine innovation, quality, accessibility, and customer
                  success to deliver solutions that create meaningful digital
                  impact.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= TEAM ================= */}

        <Team />

      </main>

      <Footer />
    </>
  );
}

export default About;