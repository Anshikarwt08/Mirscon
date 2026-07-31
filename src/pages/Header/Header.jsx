import "./Header.css";
import logo from "../../assets/Mirscon.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Dropdown from "../../components/Dropdown/Dropdown";
import Modal from "../../components/Modal/Modal"
import CareerForm from "../../components/CareerForm/CareerForm";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);

  // Close menu & modal with Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setCareerOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow =
      menuOpen || careerOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen, careerOpen]);

  const closeMenu = () => setMenuOpen(false);

  const openCareerModal = () => {
    closeMenu();
    setCareerOpen(true);
  };

  // -----------------------------
  // Dropdown Items
  // -----------------------------

const aboutItems = [
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Our Team",
    to: "/about",
    hash: "#team",
  },
];

  const serviceItems = [
    {
      label: "Accessibility",
      to: "/accessibility",
    },
    {
      label: "Resource Outsourcing",
      to: "/resource-outsourcing",
    },
  ];

  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="mirscon-header">
        {/* Logo */}
        <div className="mirscon-logo">
          <Link to="/" aria-label="Go to Home page">
            <img src={logo} alt="Mirscon Logo" />
          </Link>
        </div>

        {/* Navigation */}
        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-label="Primary Navigation"
        >
          {/* About */}
          <Dropdown
            title="About"
            items={aboutItems}
            onItemClick={closeMenu}
          />

          {/* Services */}
          <Dropdown
            title="Services"
            items={serviceItems}
            onItemClick={closeMenu}
          />

          {/* Industries */}
          <Link to="/industries" onClick={closeMenu}>
            Industries
          </Link>

          {/* Career */}
          <button
            type="button"
            className="career-btn"
            onClick={openCareerModal}
            aria-haspopup="dialog"
            aria-expanded={careerOpen}
          >
            Career
          </button>
        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="contact-btn desktop-btn"
          aria-label="Contact Us"
          onClick={closeMenu}
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Career Modal */}
      <Modal
        isOpen={careerOpen}
        onClose={() => setCareerOpen(false)}
      >
        <CareerForm />
      </Modal>
    </>
  );
}

export default Header;