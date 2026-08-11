import "./ContactBanner.css";
import { useState } from "react";
import { LiaLocationArrowSolid } from "react-icons/lia";

import ConsultationForm from "../../components/Consultation/Consultation";
import Modal from "../../components/Modal/Modal";

function ContactBanner() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <section className="contact-banner">
        <div className="banner-content">

          <div className="banner-text">

            <h2>
              Talk to an Expert
            </h2>

            <p>
              Have a complex accessibility requirement, a large content backlog, or questions about compliance?
              Let's discuss your requirements and explore the right approach for your content, workflows and accessibility goals.
            </p>

          </div>

          <button
            className="contact-btn"
            onClick={() => setIsConsultationOpen(true)}
          >
            Let's Connect <LiaLocationArrowSolid className="right-arrow" />
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