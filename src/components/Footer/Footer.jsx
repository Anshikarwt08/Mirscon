import "./Footer.css";
import MirsconLogo from "../../assets/Mirscon.png";

import {FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

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
          <p>Platina Heights, C-24, Sector 62,
            <br/>
             Noida, Uttar Pradesh 201301</p>
          <p>
            Plot No. 21, Iksana Workspace, IT Park,<br/> Sahastradhara Road,
            
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

        {/* Services */}
        <div>
          <h3>Services</h3>

          <ul>
            <li>Digital Publishing</li>
            <li>Document Remediation</li>
            <li>Image Accessibility</li>
            <li>Document Remediation</li>
            <li>Multimedia Accessibility</li>
            <li>Resource Outsourcing</li>
          </ul>
        </div>

        {/* Industry */}
        <div>
          <h3>Industries</h3>


          <ul>
            <li>Publishing and Media</li>
            <li>EdTech and Learning</li>
            <li>Healthcare & Life Sciences</li>
            <li>Finance and Insurance</li>
            <li>Enterprise and Technology</li>
            <li>Legal and Professional </li>
            
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
        © 2026 Copyright MIRSCON. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;