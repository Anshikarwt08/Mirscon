import "./CareerModal.css";
import CareerForm from "../CareerForm/CareerForm";

function CareerModal({ job, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="career-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <CareerForm job={job} />
      </div>
    </div>
  );
}

export default CareerModal;