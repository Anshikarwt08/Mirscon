import "./Services.css";
import { useNavigate } from "react-router-dom";

import pdf from "../../../assets/pdf.png";
import ebook from "../../../assets/ebook.jpeg";
import epub from "../../../assets/epub.png";
import alttext from "../../../assets/alttext.png";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: "alt-text",
      title: "Alt Text Services",
      image: alttext,
      description:
        "We create accurate, meaningful, and standards-compliant alternative text for images, charts, graphs, diagrams, tables, and other visual content. With nearly a decade of experience, we help publishers, EdTech organizations, and enterprises deliver accessible digital content that complies with global accessibility standards."
    },

    {
      id: "document-remediation",
      title: "Document Remediation",
      image: pdf,
      description:
        "Our document remediation services transform inaccessible files into fully accessible documents compatible with screen readers and assistive technologies. Every document is remediated according to international accessibility standards."
    },

    {
      id: "digital-publishing",
      title: "Digital Publishing Services",
      image: ebook,
      description:
        "We provide end-to-end digital publishing solutions for publishers, educational institutions, and enterprises. Our workflows ensure accurate, standards-compliant, and high-quality digital publications."
    },

    {
      id: "multimedia-accessibility",
      title: "Multimedia Accessibility",
      image: epub,
      description:
        "We make multimedia content accessible by providing professional captioning, transcription, audio description, and video accessibility services that ensure an inclusive experience for every user."
    }
  ];

  return (
    <>
      {services.map((service, index) => (
        <div
          id={service.id}
          key={service.id}
          className={`accessibility-service-row ${
            index % 2 !== 0 ? "accessibility-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="accessibility-service-image">
            <img src={service.image} alt={service.title} />
          </div>

          {/* Content */}
          <div className="accessibility-service-content">
            <h3
              className="accessibility-service-title"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              {service.title}
            </h3>

            <p className="accessibility-service-description">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Services;