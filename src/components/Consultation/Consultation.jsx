import "./Consultation.css";
import { useState } from "react";
import { submitForm } from "../../utils/api";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

function ConsultationForm() {
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
      await submitForm("/consultation", formData);
      alert("Consultation Request Submitted Successfully!");
      setFormData(EMPTY_FORM);
    } catch (error) {
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="consultation-form">

      <h2 id="consultation-title">
       Talk to an Expert
      </h2>

      <p>
        Tell us about your project and our experts will contact you.
      </p>

      <form onSubmit={handleSubmit}>

        {/* Full Name */}
        <div className="consultation-field">
          <label for="name">
            Full Name <span>*</span>
          </label>

          <input
            id="name"
            type="text"
            placeholder="John Doe"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>


        {/* Email */}
        <div className="consultation-field">
          <label for="email">
            Email Address <span>*</span>
          </label>

          <input
            id="email"
            type="email"
            placeholder="john@company.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>


        {/* Phone */}
        <div className="consultation-field">
          <label for="phone">
            Phone Number <span>*</span>
          </label>

          <input
            id="phone"
            type="tel"
            placeholder="+91 9876543210"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>


        {/* Company */}
        <div className="consultation-field">
          <label for="company">
            Company
          </label>

          <input
            id="company"
            type="text"
            placeholder="ABC Technologies"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>


        {/* Service */}
        <div className="consultation-field consultation-full">
          <label for="service">
            Service Required <span>*</span>
          </label>

          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="Quality Automation">
              Quality Automation
            </option>
            <option value="Salesforce">
              Salesforce
            </option>
            <option value="Integration Technology">
              Integration Technology
            </option>
            <option value="ServiceNow">
              ServiceNow
            </option>
            <option value="Cloud">
              Cloud
            </option>
            <option value="Product Engineering">
              Product Engineering
            </option>
          </select>
        </div>


        {/* Date + Time */}
        <div className="consultation-date-time">

          <div className="consultation-field">
            <label for="date">
              Preferred Date
            </label>

            <input
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>


          <div className="consultation-field">
            <label for="time">
              Preferred Time
            </label>

            <input
              id="time"
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>

        </div>


        {/* Project Details */}
        <div className="consultation-field consultation-full">
          <label for="message">
            Project Details <span>*</span>
          </label>

          <textarea
            id="message"
            rows="5"
            placeholder="Tell us about your project..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>


        {/* Submit */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit"}
        </button>

      </form>
    </div>
  );
}

export default ConsultationForm;