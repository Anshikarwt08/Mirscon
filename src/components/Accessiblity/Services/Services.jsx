import "./Services.css";
import { Link } from "react-router-dom";

function Services() {
  const services = [
     {
  id: "digital-publishing",
  title: "Digital Publishing Services",
  description:
    "We transform traditional and digital content into accessible, structured, and engaging publications that work across devices, platforms, and assistive technologies. Our digital publishing solutions help publishers, businesses, and organizations deliver content that is easier to access, navigate, and consume. From content conversion and document remediation to accessible EPUBs, PDFs, and eBooks, we ensure accessibility is integrated throughout the publishing workflow rather than treated as an afterthought."
},
    {
      id: "document-remediation",
      title: "Document Remediation",
      description:
        "Our document remediation services transform PDFs, Word files, PowerPoint presentations, and other digital documents into accessible, structured, and user-friendly formats. We improve document structure, headings, reading order, tables, links, images, and accessibility tags to support screen readers and assistive technologies while helping organizations meet accessibility standards."

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
        "We turn multimedia content into accessible experiences that connect with every audience. From professional captions and accurate transcripts to audio descriptions and accessible video, we help your content become easier to follow, understand, and enjoy."
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