import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import "./Dropdown.css";

function Dropdown({ title, items, onItemClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const closeDropdown = () => setIsOpen(false);

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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        closeDropdown();
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <FiChevronDown
          className={`dropdown-icon ${isOpen ? "rotate" : ""}`}
        />
      </button>

      <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {items.map((item) => {
          if (item.hash) {
            return (
              <button
                key={item.label}
                className="dropdown-item"
                onClick={() => {
                  closeDropdown();
                  onItemClick?.();

                  navigate(item.to);

                  setTimeout(() => {
                    const el = document.querySelector(item.hash);
                    if (el) {
                      el.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }, 300);
                }}
              >
                {item.label}
              </button>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.to}
              className="dropdown-item"
              onClick={() => {
                closeDropdown();
                onItemClick?.();
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;