import "./Modal.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="career-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;