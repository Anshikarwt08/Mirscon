import { useEffect, useRef } from "react";
import "./Modal.css";

function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Remember the element that opened the modal
    previousFocusRef.current = document.activeElement;

    const modal = modalRef.current;

    const getFocusableElements = () => {
      return modal.querySelectorAll(
        'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
      );
    };

    // Focus Full Name when modal opens
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

      // Return focus to the button that opened the modal
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="close-btn"
          aria-label="Close dialog"
          onClick={onClose}
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;