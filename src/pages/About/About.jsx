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
                Bridging the Gap Between
                Inaccessible Content
                and Inclusive Digital Experiences
              </h1>

              <p>
                We bridge the gap between inaccessible digital content and
                inclusive user experiences. Our experts help organizations
                transform PDFs, presentations, websites, applications, and
                enterprise platforms into accessible solutions that comply with
                WCAG, PDF/UA, Section 508, and other global accessibility
                standards.
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

            <h2>Creating Inclusive Digital Experiences</h2>

            <p className="section-description">
              Mirscon Technologies is a technology consulting and digital
              accessibility company committed to creating a world where digital
              experiences are accessible to everyone. We partner with
              organizations across industries to remove accessibility barriers,
              modernize digital platforms, and deliver innovative technology
              solutions that meet international accessibility standards.
            </p>

            <div className="about-grid">

              <div className="about-card">
                <h3>Our Mission</h3>

                <p>
                  Deliver innovative accessibility and technology solutions
                  that empower organizations to build inclusive, compliant,
                  and user-friendly digital experiences.
                </p>
              </div>

              <div className="about-card">
                <h3>Our Vision</h3>

                <p>
                  Become a trusted global leader in digital accessibility,
                  helping businesses create technology that everyone can access,
                  regardless of ability.
                </p>
              </div>

              <div className="about-card">
                <h3>Our Purpose</h3>

                <p>
                  Bridge the gap between inaccessible digital content and the
                  people who rely on accessible technology every day.
                </p>
              </div>

              <div className="about-card">
                <h3>Our Commitment</h3>

                <p>
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