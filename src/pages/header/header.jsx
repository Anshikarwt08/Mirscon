import { useState } from "react";
import "./Header.css";

import { FaGlobe } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useTranslation } from "react-i18next";

function Header() {
  const [showLanguage, setShowLanguage] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "EN",
    name: "English",
  });

  const { t, i18n } = useTranslation();

  const changeLanguage = (code, name, language) => {
    i18n.changeLanguage(language);

    setSelectedLanguage({
      code,
      name,
    });

    setShowLanguage(false);
  };

  return (
    <header className="mirscon-header">
      {/* Logo */}
      <div className="mirscon-logo">
        <img
          src="https://www.mirscon.com/assets/images/logo.png"
          alt="Mirscon Logo"
        />
      </div>

      {/* Navigation */}
      <nav className="mirscon-navbar">

        {/* About */}
        <div className="dropdown">
          <button className="dropdown-btn">
            {t("header.About")}
            <FiChevronDown />
          </button>

          <div className="dropdown-content">
            <a href="#about">{t("header.AboutUs")}</a>
            <a href="#team">{t("header.OurTeam")}</a>
          </div>
        </div>

        {/* Services */}
        <div className="dropdown">
          <button className="dropdown-btn">
            {t("header.Services")}
            <FiChevronDown />
          </button>

          <div className="dropdown-content">
            <a href="#resource-outsourcing">
              {t("header.ResourceOutsourcing")}
            </a>

            <a href="#accessibility">
              {t("header.Accessibility")}
            </a>
          </div>
        </div>

        {/* Industries */}
        <a href="#industries">{t("header.Industries")}</a>

        {/* Careers */}
        <a href="#careers">{t("header.Careers")}</a>

        {/* Contact */}
        <a href="#contact">{t("header.ContactUs")}</a>

      </nav>

      {/* Language Selector */}
      <div className="language-selector">
        <button
          className="language-btn"
          onClick={() => setShowLanguage(!showLanguage)}
          aria-label="Select language"
          aria-haspopup="menu"
          aria-expanded={showLanguage}
        >
          <FaGlobe />
          <span>{selectedLanguage.name}</span>
          {showLanguage ? <FiChevronUp /> : <FiChevronDown />}
        </button>

        {showLanguage && (
          <div className="language-dropdown">
            <button
              type="button"
              onClick={() => changeLanguage("EN", "English", "en")}
            >
              English
            </button>

            <button
              type="button"
              onClick={() => changeLanguage("ES", "Español", "es")}
            >
              Español
            </button>

            <button
              type="button"
              onClick={() => changeLanguage("DE", "Deutsch", "de")}
            >
              Deutsch
            </button>

            <button
              type="button"
              onClick={() => changeLanguage("HI", "हिन्दी", "hi")}
            >
              हिन्दी
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;