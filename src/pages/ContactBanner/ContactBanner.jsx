import "./ContactBanner.css";
import { useState } from "react";


import ConsultationForm from "../../components/Consultation/Consultation";
import Modal from "../../components/Modal/Modal";

function ContactBanner() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <section className="contact-banner">
        <div className="banner-content">

          <div className="banner-text">

            <span className="banner-tag">
              Let's Build Together
            </span>

            <h2>
              Ready to Transform Your Business?
            </h2>

            <p>
              Connect with our experienced team to discuss your project,
              explore innovative solutions, and discover how Mirscon can
              help you achieve your business goals.
            </p>

          </div>

          <button
            className="contact-btn"
            onClick={() => setIsConsultationOpen(true)}
          >
            Schedule a Consultation →
          </button>

        </div>
      </section>

      <Modal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      >
        <ConsultationForm />
      </Modal>
    </>
  );
}

export default ContactBanner;