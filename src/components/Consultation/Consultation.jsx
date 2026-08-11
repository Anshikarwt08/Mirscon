import "./Consultation.css";
import { useState } from "react";

function ConsultationForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    date: "",
    time: "",
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

    alert("Consultation Request Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div className="consultation-form">

      <h2 id="consultation-title">Schedule a Consultation</h2>

      <p>
        Tell us about your project and our experts will contact you.
      </p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Company Name"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option>Quality Automation</option>
          <option>Salesforce</option>
          <option>Integration Technology</option>
          <option>ServiceNow</option>
          <option>Cloud</option>
          <option>Product Engineering</option>
        </select>

        <div className="date-time">

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />

        </div>

        <textarea
          rows="4"
          placeholder="Project Details"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Schedule Consultation
        </button>

      </form>

    </div>
  );
}

export default ConsultationForm;