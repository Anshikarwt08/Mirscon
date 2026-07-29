import "./Header.css";
import logo from "../../assets/Mirscon.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="mirscon-header">

        <div className="mirscon-logo">
          <Link to="/" aria-label="Go to Home page">
            <img src={logo} alt="Mirscon Logo" />
          </Link>
        </div>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-label="Primary Navigation"
        >
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#team" onClick={closeMenu}>Our Team</a>

          <Link
            to="/contact"
            className="mobile-contact-btn"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </nav>

        <Link
          to="/contact"
          className="contact-btn desktop-btn"
          aria-label="Contact Us"
        >
          Contact Us
        </Link>

        <button
          className="menu-btn"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </header>

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}

export default Header;