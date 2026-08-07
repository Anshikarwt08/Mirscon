import { useState } from "react";
import "./Services.css";

import pdf from "../../../assets/pdf.png";
import ebook from "../../../assets/ebook.jpeg";
import epub from "../../../assets/epub.png";
import alttext from "../../../assets/alttext.png";

function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
       id: "alt-text",
      title: "Alt Text Services",
      image: alttext,
      description:
        "We create accurate, meaningful, and standards-compliant alternative text for images, charts, graphs, diagrams, tables, and other visual content. With nearly a decade of experience, we help publishers, EdTech organizations, and enterprises deliver accessible digital content that complies with global accessibility standards.",

      details: [
        {
          title: "STEM, Medical, Engineering & Social Sciences",
          description:
            "Our accessibility experts create domain-specific alternative text for highly technical and academic content while maintaining accuracy and clarity."
        },
        {
          title: "WCAG 2.2, Section 508 & ADA Compliant",
          description:
            "Every description follows global accessibility standards to ensure compliance across educational, publishing, and enterprise platforms."
        },
        {
          title: "High-volume Project Delivery",
          description:
            "Our scalable production workflows enable us to deliver thousands of high-quality alt texts efficiently without compromising accuracy."
        },
        {
          title: "Multilingual Support",
          description:
            "We provide professional alternative text in English, Spanish, German, and French for global accessibility projects."
        }
      ]
    },

    {
       id: "document-remediation",
      title: "Document Remediation",
      image: pdf,
      description:
        "Our document remediation services transform inaccessible files into fully accessible documents compatible with screen readers and assistive technologies. Every document is remediated according to international accessibility standards.",

      details: [
        {
          title: "PDF Remediation",
          description:
            "Convert PDF documents into fully tagged and accessible PDFs compliant with PDF/UA and WCAG."
        },
        {
          title: "Microsoft Word Remediation",
          description:
            "Improve Word documents with accessible headings, tables, lists, reading order, and alternative text."
        },
        {
          title: "PowerPoint Remediation",
          description:
            "Create accessible presentations with correct reading order, image descriptions, and keyboard navigation."
        },
        {
          title: "Excel Accessibility",
          description:
            "Make spreadsheets accessible through proper headers, labels, formulas, and navigation."
        }
      ]
    },

    {
       id: "digital-publishing",
      title: "Digital Publishing Services",
      image: ebook,
      description:
        "We provide end-to-end digital publishing solutions for publishers, educational institutions, and enterprises. Our workflows ensure accurate, standards-compliant, and high-quality digital publications.",

      details: [
        {
          title: "eBook Creation & Conversion",
          description:
            "Convert print and digital publications into accessible eBooks for multiple platforms."
        },
        {
          title: "EPUB 3 Reflowable",
          description:
            "Develop responsive EPUB publications that adapt to different screen sizes and devices."
        },
        {
          title: "EPUB 3 Fixed Layout",
          description:
            "Produce visually rich EPUBs while maintaining accessibility compliance."
        },
        {
          title: "XML Conversion & Validation",
          description:
            "Convert structured content into industry-standard XML formats with validation."
        }
      ]
    },

    {
      id: "multimedia-accessibility",
      title: "Multimedia Accessibility",
      image: epub,
      description:
        "We make multimedia content accessible by providing professional captioning, transcription, audio description, and video accessibility services that ensure an inclusive experience for every user.",

      details: [
        {
          title: "Closed Captioning",
          description:
            "Accurate captions synchronized with multimedia content for deaf and hard-of-hearing users."
        },
        {
          title: "SRT File Creation & Synchronization",
          description:
            "Professional subtitle creation and synchronization compatible with major video platforms."
        },
        {
          title: "Transcription Services",
          description:
            "High-quality transcripts for webinars, lectures, podcasts, meetings, and multimedia content."
        },
        {
          title: "Audio Description Services",
          description:
            "Narration describing important visual information for people with visual impairments."
        },
        {
          title: "Video Annotation ",
          description:
            "We provide accurate video annotation services by identifying, labeling, and tagging visual elements, objects, scenes, and events within video content to improve organization, searchability, AI model training, and content analysis."
        }
      ]
    }
  ];

return (
  <>
    {/* Service Sections */}

    {services.map((service, index) => (
      <div
        id={service.id}
        key={service.id}
        className={`service-row ${
          index % 2 !== 0 ? "reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="service-image">
          <img src={service.image} alt={service.title} />
        </div>

        {/* Content */}
        <div className="service-info">
          <h3>{service.title}</h3>

          <p>{service.description}</p>

          <button
            className="details-btn"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            {openIndex === index ? "Hide Details" : "View Details"}
          </button>

          {openIndex === index && (
            <div className="service-details">
              {service.details.map((detail, i) => (
                <div className="detail-item" key={i}>
                  <h5>{detail.title}</h5>
                  <p>{detail.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    ))}
  </>
);
}
export default Services;