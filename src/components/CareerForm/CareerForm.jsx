import { useState } from "react";
import "./CareerForm.css";
import { submitForm, fileToBase64 } from "../../utils/api";

function CareerForm() {
  const [resumeName, setResumeName] = useState("No file selected");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setResumeName(e.target.files[0].name);
    } else {
      setResumeName("No file selected");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const form = e.target;
      const resumeFile = form.resume.files[0];
      if (!resumeFile) {
        alert("Please attach your resume (PDF, DOC or DOCX).");
        return;
      }

      const payload = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        experience: form.experience.value,
        message: form.message.value,
        resume: {
          name: resumeFile.name,
          type: resumeFile.type,
          data: await fileToBase64(resumeFile),
        },
      };

      await submitForm("/careers", payload);
      alert("Application Submitted Successfully!");
      form.reset();
      setResumeName("No file selected");
    } catch (error) {
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
          name="name"
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
          name="email"
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
          name="phone"
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
          name="experience"
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
            name="resume"
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
          name="message"
          rows="5"
          placeholder="Tell us about yourself..."
        />
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

export default CareerForm;