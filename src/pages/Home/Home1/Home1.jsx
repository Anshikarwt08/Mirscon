import "./Home1.css";
import heroImg from "../../../assets/accessibility-hero.jpg";

function Home1() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1 className="hero-title">
        <span className="line">
          <span className="highlight">Empowering</span> Every
        </span>

        <span className="line">
          User Through <span className="highlight">Accessibility</span>
        </span>

        <span className="line">
          Built for <span className="highlight">Impact</span>
        </span>
      </h1>

        <p className="hero-description">
          Build accessible websites and applications with expert accessibility
          testing, WCAG 2.2 compliance, remediation, and VPAT services that
          create inclusive experiences for everyone.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Accessibility Audit
          </button>

          <button className="secondary-btn">
            Explore Services
          </button>
        </div>

        <div className="hero-features">
          <div>✓ WCAG 2.2</div>
          <div>✓ VPAT</div>
          <div>✓ ADA Compliance</div>
          <div>✓ Manual Testing</div>
        </div>

      </div>

      <div className="hero-right">

        <div className="image-wrapper">
          <img src={heroImg} alt="Accessibility" />
        </div>

      </div>

      <div className="circle circle1"></div>
      <div className="circle circle2"></div>

    </section>
  );
}

export default Home1;