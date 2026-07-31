import "./ContactForm.css";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! We'll get back to you shortly.");

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="contact-form-container">

      <div className="form-heading">
        <h2>Let's Build the Right Solution for Your Business</h2>

        <p>
        Share your project requirements, and our specialists will contact you with the best approach tailored to your business needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">

        <div className="form-grid">

          <div className="form-group">
            <label>Full Name *</label>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Company</label>

            <input
              type="text"
              name="company"
              placeholder="ABC Technologies"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Work Email *</label>

            <input
              type="email"
              name="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="form-group">

          <label>Service Required *</label>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option>Accessibility Testing</option>
            <option>Quality Assurance</option>
            <option>Salesforce Development</option>
            <option>Staffing Solutions</option>
            <option>Product Engineering</option>
            <option>Other</option>
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

        <button type="submit" className="submit-btn">
          Send Message
        </button>

      </form>

    </div>
  );
}

export default ContactForm;