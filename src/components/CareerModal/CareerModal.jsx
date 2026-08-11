import { useEffect, useRef } from "react";
import "./CareerModal.css";
import CareerForm from "../CareerForm/CareerForm";

function CareerModal({ job, onClose }) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement;

    const modal = modalRef.current;

    const getFocusableElements = () => {
      return modal.querySelectorAll(
        'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
      );
    };

    // Focus first CareerForm field
    const focusableElements = getFocusableElements();

    if (focusableElements.length > 1) {
      focusableElements[1].focus();
    }

    const handleKeyDown = (e) => {
      // ESC → close modal
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // TAB → keep focus inside modal
      if (e.key === "Tab") {
        const elements = getFocusableElements();

        if (elements.length === 0) return;

        const firstElement = elements[0];
        const lastElement = elements[elements.length - 1];

        // Shift + Tab from first element
        if (
          e.shiftKey &&
          document.activeElement === firstElement
        ) {
          e.preventDefault();
          lastElement.focus();
        }

        // Tab from last element
        if (
          !e.shiftKey &&
          document.activeElement === lastElement
        ) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      // Return focus to the element that opened the modal
      previousFocusRef.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="career-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="career-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close career application dialog"
        >
          ✕
        </button>

        <CareerForm job={job} />
      </div>
    </div>
  );
}

export default CareerModal;