import "./CareerCard.css";

function CareerCard({ job, onApply }) {
  return (
    <div className="career-card">

      <h3>{job.title}</h3>

      <p className="experience">
        Experience : {job.experience}
      </p>

      <h4>Key Responsibilities</h4>

      <ul className="responsibility-list">
        {job.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

          <button type="button" onClick={onApply} className="apply-btn">
            Apply Now
          </button>

    </div>
  );
}

export default CareerCard;