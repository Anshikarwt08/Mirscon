import "./Modal.css";
import { useEffect } from "react";
import Button from "../Button/Button";

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          text="×"
          onClick={onClose}
          className="close-button"
          ariaLabel="Close dialog"
        />

        {children}
      </div>
    </div>
  );
}

export default Modal;