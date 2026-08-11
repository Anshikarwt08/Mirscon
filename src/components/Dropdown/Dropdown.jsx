import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import "./Dropdown.css";

function Dropdown({ title, items, onItemClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

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

  // Close with Escape
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

  return (
    <div className="mirscon-dropdown" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        ref={buttonRef}
        type="button"
        className="dropdown-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>

        <FiChevronDown
          className={`dropdown-icon ${isOpen ? "rotate" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`dropdown-menu ${isOpen ? "show" : ""}`}
        role="menu"
      >
        {items.map((item) => {
          // Items with hash
          if (item.hash) {
            return (
              <button
                key={item.label}
                type="button"
                className="dropdown-item"
                role="menuitem"
                onClick={() => {
                  closeDropdown();
                  onItemClick?.();

                  navigate(item.to);

                  setTimeout(() => {
                    const element = document.querySelector(item.hash);

                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }, 300);
                }}
              >
                {item.label}
              </button>
            );
          }

          // Normal links
          return (
            <Link
              key={item.label}
              to={item.to}
              className="dropdown-item"
              role="menuitem"
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