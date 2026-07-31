import "./Home1.css";

function Home1() {
  return (
    <section
      className="hero"
      aria-labelledby="hero-heading"
    >
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="line">
            <span className="highlight">Building Digital</span>
          </span>

          <span className="line">
            <span className="highlight">Experiences Without</span>
          </span>

          <span className="line">
            <span className="highlight">Barriers</span>
          </span>
        </h1>

        <p className="hero-description">
          Expert accessibility testing, remediation, and consulting services
          designed to make your digital products usable for people of all
          abilities.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            aria-label="Explore Mirscon accessibility services"
          >
            Explore Services →
          </button>
        </div>

        <ul
          className="hero-features"
          aria-label="Accessibility services and standards"
        >
          <li className="feature-pill">
            <span className="check" aria-hidden="true">
              ✓
            </span>
            WCAG 2.2
          </li>

          <li className="feature-pill">
            <span className="check" aria-hidden="true">
              ✓
            </span>
            PDF Remediation
          </li>

          <li className="feature-pill">
            <span className="check" aria-hidden="true">
              ✓
            </span>
            EPub
          </li>

          <li className="feature-pill">
            <span className="check" aria-hidden="true">
              ✓
            </span>
            PPT/Word Remediation
          </li>
        </ul>
      </div>

      <div className="circle circle1" aria-hidden="true"></div>
      <div className="circle circle2" aria-hidden="true"></div>
    </section>
  );
}

export default Home1;