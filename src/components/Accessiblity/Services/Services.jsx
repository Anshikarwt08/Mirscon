import "./Services.css";
import { Link } from "react-router-dom";

function Services() {
  const services = [
     {
  id: "digital-publishing",
  title: "Digital Publishing Services",
  subtitle: "Make every publication accessible. Make every reader count.",
  description:
    "We transform traditional and digital content into accessible, structured, and engaging publications that work across devices, platforms, and assistive technologies. Our digital publishing solutions help publishers, businesses, and organizations deliver content that is easier to access, navigate, and consume. From content conversion and document remediation to accessible EPUBs, PDFs, and eBooks, we ensure accessibility is integrated throughout the publishing workflow rather than treated as an afterthought."
},
    {
      id: "document-remediation",
      title: "Document Remediation",
      description:
        "Our document remediation services transform inaccessible files into fully accessible documents compatible with screen readers and assistive technologies. Every document is remediated according to international accessibility standards."
    },
    {
      id: "alt-text",
      title: "Alt Text Services",
      description:
        "We provide accurate, context-rich, and standards-compliant alt text for diverse digital content across multiple languages and specialised subject areas. Our services include alt text creation for Spanish and Italian content, as well as highly specialised descriptions for disciplines such as chemistry and neuroscience. We carefully capture the essential information conveyed through images, charts, graphs, diagrams, tables, and other visual elements, helping publishers, educators, and organisations create accessible digital content that is clear, meaningful, and aligned with global accessibility standards."
    },

    {
      id: "multimedia-accessibility",
      title: "Multimedia Accessibility",
      description:
        "We make multimedia content accessible by providing professional captioning, transcription, audio description, and video accessibility services that ensure an inclusive experience for every user."
    }
  ];

  return (
    <section className="services">

      {services.map((service) => (
        <div
          id={service.id}
          key={service.id}
          className="accessibility-service-row"
        >

          {/* =========================
              Content
          ========================= */}

          <div className="accessibility-service-content">

            {/* Service Heading */}
            <h3 className="accessibility-service-title">
              {service.title}
            </h3>
            {service.subtitle && (
              <h4 className="service-subtitle">{service.subtitle}</h4>
            )}
            {/* Description */}
            <p className="accessibility-service-description">
              {service.description}
            </p>

            {/* Explore Service Button */}
            <Link
              to={`/services/${service.id}`}
              className="accessibility-service-explore"
              aria-label={`Explore ${service.title}`}
            >
              <span>Explore More</span>

              <span
                className="explore-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

          </div>

        </div>
      ))}

    </section>
  );
}

export default Services;