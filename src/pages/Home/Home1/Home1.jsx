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
          <span className="highlight">Building Digital Experiences</span>
        </span>

        <span className="line">
          <span className="highlight">Without</span> Barriers
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
            VPAT
          </li>

          <li className="feature-pill">
            <span className="check" aria-hidden="true">
              ✓
            </span>
            ADA Compliance
          </li>

          <li className="feature-pill">
            <span className="check" aria-hidden="true">
              ✓
            </span>
            Manual Testing
          </li>
        </ul>
      </div>

      <div className="circle circle1" aria-hidden="true"></div>
      <div className="circle circle2" aria-hidden="true"></div>
    </section>
  );
}

export default Home1;