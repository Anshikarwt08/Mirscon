import "./ContactBanner.css";

function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="banner-content">

        <div className="banner-text">
          <h2>Talk to our expert</h2>

          <p>
            We're always looking for people who want to join us in our
            pursuit and be part of a team that delivers on that promise.
          </p>
        </div>

        <button className="contact-btn">
          Contact Us
        </button>

      </div>
    </section>
  );
}

export default ContactBanner;