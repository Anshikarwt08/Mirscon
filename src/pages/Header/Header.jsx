import "./Header.css";
import logo from "../../assets/Mirscon.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mirscon-header">
      <div className="mirscon-logo">
        <img src={logo} alt="Mirscon Logo" />
      </div>

      <nav className="nav-links">
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#team">Our Team</a>
      </nav>

      <Link to="/contact" className="contact-btn">
        Contact Us
      </Link>
    </header>
  );
}

export default Header;