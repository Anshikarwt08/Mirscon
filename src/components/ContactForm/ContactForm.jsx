import "./ContactForm.css";
import { useState } from "react";
import { submitForm } from "../../utils/api";

const EMPTY_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await submitForm("/contact", formData);
      alert("Thank you! We'll get back to you shortly.");
      setFormData(EMPTY_FORM);
    } catch (error) {
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">

      <div className="form-heading">
        <h2>Let's Build the Right Solution for Your Business</h2>

        <p>
          Share your project requirements, and our specialists will contact you
          with the best approach tailored to your business needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">

        <div className="form-grid">

          <div className="form-group">
            <label for ="fullname">Full Name *</label>

            <input
              id= "fullname"
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label for="companyname">Company</label>

            <input
              id="companyname"
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label for="email">Work Email *</label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="xyz@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label for="phoneno">Phone Number</label>

            <input
              id="phoneno"
              type="tel"
              name="phone"
              placeholder="+91 8778394612"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="form-group">
  <label for="ServiceRequired"> Service Required *</label>

  <select
    id="ServiceRequired"
    name="service"
    value={formData.service}
    onChange={handleChange}
    required
    aria-required="true"
  >
    <option value="">Select a Service</option>
    <option value="Accessibility Testing">Accessibility Testing</option>
    <option value="Quality Assurance">Quality Assurance</option>
    <option value="Salesforce Development">Salesforce Development</option>
    <option value="Staffing Solutions">Staffing Solutions</option>
    <option value="Product Engineering">Product Engineering</option>
    <option value="Other">Other</option>
  </select>
</div>

        <div className="form-group">

          <label>Project Details *</label>

          <textarea
            rows="6"
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          />

        </div>

        <button
          type="submit"
          className="contact-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

      </form>

    </div>
  );
}

export default ContactForm;