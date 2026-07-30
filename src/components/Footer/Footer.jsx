import "./Footer.css";
import MirsconLogo from "../../assets/Mirscon.png";

import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Left Section */}
        <div>
          <div className="footer-logo">
            <img
              src={MirsconLogo}
              alt="Mirscon Logo"
            />
          </div>

          <p>
            Plot No. 21, Iksana Workspace, 3rd Floor,
            <br />
            IT Park, Sahastradhara Road,
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
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
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

        {/* Services */}
        <div>
          <h3>Services</h3>

          <ul>
            <li>Quality Automation</li>
            <li>Accessibility Testing</li>
            <li>Salesforce</li>
            <li>Integration Technology</li>
            <li>Service Now</li>
            <li>Cloud</li>
            <li>Product Engineering</li>
          </ul>
        </div>

        {/* Industry */}
        <div>
          <h3>Industry</h3>

          <ul>
            <li>Gaming</li>
            <li>Finance & Insurance</li>
            <li>Healthcare & Life Sciences</li>
            <li>Retail & Ecommerce</li>
            <li>Technology</li>
            <li>Media Entertainment</li>
            <li>Telecom</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3>You can trust us</h3>

          <p>
            MIRSCON is committed to partnering with its customers by
            delivering end-to-end solutions using disruptive technologies
            that help businesses achieve a competitive advantage.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2022 Copyright MIRSCON. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;