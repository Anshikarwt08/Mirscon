import "./ContactBanner.css";

function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="banner-content">
        <div className="banner-text">
          <h2>Ready to Transform Your Business?</h2>

          <p>
            Connect with our experienced team to discuss your project,
            explore innovative solutions, and discover how Mirscon can
            help you achieve your business goals.
          </p>
        </div>

        <a
          href="YOUR_BOOKING_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}

export default ContactBanner;