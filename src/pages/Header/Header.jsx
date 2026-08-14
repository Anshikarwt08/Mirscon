import "./Header.css";
import logo from "../../assets/Mirscon.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Dropdown from "../../components/Dropdown/Dropdown";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu with Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // --------------------------------
  // About Dropdown
  // --------------------------------

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

  // --------------------------------
  // Services Dropdown
  // --------------------------------

  const serviceItems = [
    {
      label: "Digital Accessibility Solutions",
      to: "/accessibility",

      children: [
        {
          label: "Digital Publishing",
          to: "/accessibility#digital-publishing",
        },
        {
          label: "Document Remediation",
          to: "/accessibility#document-remediation",
        },
        {
          label: "Alt Text Services",
          to: "/accessibility#alt-text",
        },
        {
          label: "Multimedia Accessibility",
          to: "/accessibility#multimedia-accessibility",
        },
      ],
    },

    {
      label: "Resource Outsourcing",
      to: "/resource-outsourcing",
    },
  ];

  // --------------------------------
  // Industries Dropdown
  // --------------------------------

 const industryItems = [
  {
    label: "Publishing & Media",
    to: "/industries#publishing-media",
  },
  {
    label: "EdTech & Learning",
    to: "/industries#edtech-learning",
  },
  {
    label: "Healthcare & Life Sciences",
    to: "/industries#healthcare-life-sciences",
  },
  {
    label: "Finance & Insurance",
    to: "/industries#finance-insurance",
  },
  {
    label: "Enterprise & Technology",
    to: "/industries#enterprise-technology",
  },
  {
    label: "Legal & Professional",
    to: "/industries#legal-professional",
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
          <Link
            to="/"
            aria-label="Go to Home page"
            onClick={closeMenu}
          >
            <img src={logo} alt="Mirscon Logo" />
          </Link>
        </div>

        {/* Navigation */}
        <nav
          id="primary-navigation"
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
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
          <Dropdown
            title="Industries"
            items={industryItems}
            onItemClick={closeMenu}
          />

          {/* Careers */}
          <Link
            to="/career"
            className="career-btn"
            onClick={closeMenu}
          >
            Careers
          </Link>

        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="contactus-btn desktop-btn"
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
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
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
    </>
  );
}

export default Header;