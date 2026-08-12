import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import "./Dropdown.css";

function Dropdown({ title, items, onItemClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const navigate = useNavigate();

  const closeDropdown = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  /* ==========================================
     Close when clicking outside
  ========================================== */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* ==========================================
     Escape key
  ========================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (openSubmenu !== null) {
          setOpenSubmenu(null);
          return;
        }

        if (isOpen) {
          closeDropdown();
          buttonRef.current?.focus();
        }
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen, openSubmenu]);

  /* ==========================================
     Normal link click
  ========================================== */

  const handleItemClick = () => {
    closeDropdown();
    onItemClick?.();
  };

  /* ==========================================
     Hash navigation
  ========================================== */

  const handleHashClick = (item) => {
    closeDropdown();
    onItemClick?.();

    navigate(item.to);

    setTimeout(() => {
      const element = document.querySelector(
        item.hash
      );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <div
      className="mirscon-dropdown"
      ref={dropdownRef}
    >

      {/* ========================================
          MAIN DROPDOWN BUTTON
      ======================================== */}

      <button
        ref={buttonRef}
        type="button"
        className="dropdown-toggle"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setOpenSubmenu(null);
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{title}</span>

        <FiChevronDown
          className={`dropdown-icon ${
            isOpen ? "rotate" : ""
          }`}
        />
      </button>


      {/* ========================================
          MAIN DROPDOWN MENU
      ======================================== */}

      <div
        className={`dropdown-menu ${
          isOpen ? "show" : ""
        }`}
        role="menu"
      >

        {items.map((item) => {

          /* ======================================
             ITEM WITH SUBMENU
          ====================================== */

          if (item.children) {
            const submenuOpen =
              openSubmenu === item.label;

            return (
              <div
                key={item.label}
                className="nested-dropdown"

                onMouseEnter={() => {
                  setOpenSubmenu(item.label);
                }}

                onMouseLeave={() => {
                  setOpenSubmenu(null);
                }}
              >

                {/* ==================================
                    DIGITAL ACCESSIBILITY SOLUTIONS
                    NO ARROW
                ================================== */}

                <Link
                  to={item.to}
                  className="accessibility-link"
                  role="menuitem"
                  onClick={handleItemClick}
                >
                  {item.label}
                </Link>


                {/* ==================================
                    ACCESSIBILITY SUBMENU
                ================================== */}

                <div
                  className={`nested-menu ${
                    submenuOpen ? "show" : ""
                  }`}
                  role="menu"
                >

                  {item.children.map((child) => {

                    /* Hash child */

                    if (child.hash) {
                      return (
                        <button
                          key={child.label}
                          type="button"
                          className="dropdown-item nested-item"
                          role="menuitem"
                          onClick={() =>
                            handleHashClick(child)
                          }
                        >
                          {child.label}
                        </button>
                      );
                    }


                    /* Normal child */

                    return (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="dropdown-item nested-item"
                        role="menuitem"
                        onClick={handleItemClick}
                      >
                        {child.label}
                      </Link>
                    );
                  })}

                </div>

              </div>
            );
          }


          /* ======================================
             HASH ITEM
          ====================================== */

          if (item.hash) {
            return (
              <button
                key={item.label}
                type="button"
                className="dropdown-item"
                role="menuitem"
                onClick={() =>
                  handleHashClick(item)
                }
              >
                {item.label}
              </button>
            );
          }


          /* ======================================
             NORMAL LINK
          ====================================== */

          return (
            <Link
              key={item.label}
              to={item.to}
              className="dropdown-item"
              role="menuitem"
              onClick={handleItemClick}
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