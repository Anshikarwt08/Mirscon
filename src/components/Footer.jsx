import "./Footer.css";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Left Section */}
        <div>
          <div className="footer-logo">
            <img
              src="https://www.mirscon.com/assets/images/logo.png"
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
            <span>info@mirscon.com</span>
            <span>+91 958 2221 555</span>
          </div>

          <div className="social">
            <FaFacebookF />
            <FaGooglePlusG />
            <FaLinkedinIn />
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