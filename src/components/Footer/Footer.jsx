import "./Footer.css";
import MirsconLogo from "../../assets/Mirscon.png";

import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* =========================
            LEFT SECTION
        ========================= */}
        <div>
          <div className="footer-logo">
            <img
              src={MirsconLogo}
              alt="Mirscon Logo"
            />
          </div>

          <p>
            Platina Heights, C-24, Sector 62,
            <br />
            Noida, Uttar Pradesh 201301
          </p>

          <p>
            Plot No. 21, Iksana Workspace, IT Park,
            <br />
            Sahastradhara Road,
            <br />
            Dehradun, Uttarakhand 248013
          </p>

          <div className="contact-info">

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@mirscon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              info@mirscon.com
            </a>

            <a
              href="https://wa.me/919582221555"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              +91 958 2221 555
            </a>

          </div>

          <div className="social">

            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <BsTwitterX />
            </a>

            <a
              href="https://www.mirscon.com/industry.php/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
            >
              <FaGoogle />
            </a>

            <a
              href="https://www.linkedin.com/company/mirscon-consultants-llp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>


        {/* =========================
            SERVICES
        ========================= */}
        <div>
          <h3>Services</h3>

          <ul>

            <li>
              <Link to="/services/digital-publishing">
                Digital Publishing
              </Link>
            </li>

            <li>
              <Link to="/services/document-remediation">
                Document Remediation
              </Link>
            </li>

            <li>
              <Link to="/services/alt-text">
                Image Accessibility
              </Link>
            </li>

            <li>
              <Link to="/services/multimedia-accessibility">
                Multimedia Accessibility
              </Link>
            </li>

            {/* Resource Outsourcing has its own route */}
            <li>
              <Link to="/resource-outsourcing">
                Resource Outsourcing
              </Link>
            </li>

          </ul>
        </div>


        {/* =========================
            INDUSTRIES
        ========================= */}
        <div>
          <h3>Industries</h3>

          <ul>

            <li>
              <Link to="/industries#publishing-media">
                Publishing and Media
              </Link>
            </li>

            <li>
              <Link to="/industries#edtech-learning">
                EdTech and Learning
              </Link>
            </li>

            <li>
              <Link to="/industries#healthcare-life-sciences">
                Healthcare & Life Sciences
              </Link>
            </li>

            <li>
              <Link to="/industries#finance-insurance">
                Finance and Insurance
              </Link>
            </li>

            <li>
              <Link to="/industries#enterprise-technology">
                Enterprise and Technology
              </Link>
            </li>

            <li>
              <Link to="/industries#legal-professional">
                Legal and Professional
              </Link>
            </li>

          </ul>
        </div>


        {/* =========================
            ABOUT
        ========================= */}
        <div>
          <h3>You can trust us</h3>

          <p>
            MIRSCON is committed to partnering with its customers by
            delivering end-to-end solutions using disruptive technologies
            that help businesses achieve a competitive advantage.
          </p>
        </div>

      </div>


      {/* =========================
          FOOTER BOTTOM
      ========================= */}
      <div className="footer-bottom">
        © 2026 Copyright MIRSCON. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;