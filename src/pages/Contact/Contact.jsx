import "./Contact.css";

import ContactCards from "../../components/ContactCard/ContactCard";
import ContactForm from "../../components/ContactForm/ContactForm";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import CTA from "../../components/CTA/CTA";
import Header from "../Header/Header";


function Contact() {
  return (
    <>
      <Header/>
      <main className="contact-page">

        {/* Hero Section */}
        <section className="contact-hero">

          <h1>
            Let's Build Something Great Together
          </h1>

          <p>
            Partner with us to create accessible, innovative, and scalable digital solutions that empower your business and deliver exceptional user experiences.
          </p>

        </section>

        {/* Contact Cards */}
        <ContactCards />

        {/* Contact Form */}
        <section className="contact-section">

          <div className="contact-heading">

            <h2>
              Tell Us About Your Project
            </h2>

          </div>

          <div className="contact-form-wrapper">

            <ContactForm />

          </div>

        </section>

        {/* Why Choose */}
        <WhyChoose />
        <CTA/>

       

      </main>
    </>
  );
}

export default Contact;