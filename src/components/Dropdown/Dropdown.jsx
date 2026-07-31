import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import "./Dropdown.css";

function Dropdown({ title, items, onItemClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        closeDropdown();
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Open on keyboard focus
  const handleFocus = () => {
    setIsOpen(true);
  };

  // Close only when focus leaves the entire dropdown
  const handleBlur = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget)
    ) {
      closeDropdown();
    }
  };

  return (
    <div
      className="dropdown"
      ref={dropdownRef}
      onBlur={handleBlur}
    >
      <button
        ref={buttonRef}
        type="button"
        className="dropdown-toggle"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={`${title}-menu`}
        onClick={toggleDropdown}
        onFocus={handleFocus}
      >
        {title}
        <FiChevronDown
          className={`dropdown-icon ${isOpen ? "rotate" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`${title}-menu`}
        className={`dropdown-menu ${isOpen ? "show" : ""}`}
        role="menu"
        aria-hidden={!isOpen}
      >
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="dropdown-item"
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => {
              closeDropdown();
              onItemClick?.();
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;