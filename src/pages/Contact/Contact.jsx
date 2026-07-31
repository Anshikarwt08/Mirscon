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
            Whether you need accessibility testing, QA services,
            Salesforce development, staffing solutions, or custom
            software, our experts are here to help you turn your
            ideas into impactful digital solutions.
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

            <p>
              Have a project in mind or need expert guidance? Fill out
              the form below and our team will get back to you within
              one business day.
            </p>

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