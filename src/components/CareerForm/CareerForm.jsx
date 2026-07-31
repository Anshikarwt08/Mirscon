import "./CareerForm.css";

const CareerForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your submit logic here
    alert("Application submitted successfully!");
  };

  return (
    <>
      <h2 id="career-title">Join Our Team</h2>

      <p className="career-description">
        Fill out the form below and our recruitment team will get in touch with
        you.
      </p>

      <form className="career-form" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>

          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>

          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Position */}
        <div className="form-group">
          <label htmlFor="position">Position</label>

          <div className="select-wrapper">
            <select
              id="position"
              name="position"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a Position
              </option>

              <option value="Accessibility Tester">
                Accessibility Tester
              </option>

              <option value="Accessibility Developer">
                Accessibility Developer
              </option>

              <option value="Frontend Developer">
                Frontend Developer
              </option>

              <option value="Project Manager">
                Project Manager
              </option>

              <option value="UI/UX Designer">
                UI/UX Designer
              </option>

              <option value="HR Executive">
                HR Executive
              </option>

              <option value="Intern">
                Intern
              </option>

              <option value="Other">
                Other
              </option>
            </select>

            <span className="select-arrow">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Resume */}
        <div className="form-group file-upload">
          <label htmlFor="resume">Upload Resume</label>

          <input
            id="resume"
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
          />

          <small>Accepted formats: PDF, DOC, DOCX</small>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="submit-btn"
        >
          Submit Application
        </button>
      </form>
    </>
  );
};

export default CareerForm;