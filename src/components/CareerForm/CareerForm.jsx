import { useState } from "react";
import "./CareerForm.css";

function CareerForm() {
  const [resumeName, setResumeName] = useState("No file selected");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setResumeName(e.target.files[0].name);
    } else {
      setResumeName("No file selected");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit Logic

    alert("Application Submitted Successfully!");
  };

  return (
    <form className="career-form" onSubmit={handleSubmit}>
      <h2>Join Our Team </h2>

      <div className="form-group">
        <label htmlFor="name">
          Full Name <span>*</span>
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">
          Phone Number <span>*</span>
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="experience">
          Experience
        </label>
        <input
          type="text"
          id="experience"
          placeholder="Enter your experience"
        />
      </div>

      <div className="form-group">
        <label htmlFor="resume">
          Resume <span>*</span>
        </label>

        <div className="file-upload">
          <label htmlFor="resume" className="upload-btn">
            Upload Your Resume
          </label>

          <span className="file-name">
            {resumeName}
          </span>

          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            hidden
            required
            onChange={handleFileChange}
          />
        </div>

        <small className="upload-note">
          Accepted formats: PDF, DOC, DOCX
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          rows="5"
          placeholder="Tell us about yourself..."
        />
      </div>

      <button
        type="submit"
        className="submit-btn"
      >
        Submit Application
      </button>
    </form>
  );
}

export default CareerForm;