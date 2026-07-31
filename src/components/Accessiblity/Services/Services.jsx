import "./Services.css";

import pdf from "../../../assets/pdf.png";
import epub from "../../../assets/epub.png";
import ebook from "../../../assets/ebook.jpeg";
import word from "../../../assets/word.png";
import alttext from "../../../assets/alttext.png";

const services = [
  {
    title: "PDF Remediation",
    image: pdf,
    description:
      "We transform PDF documents into fully accessible files that comply with WCAG, PDF/UA, and Section 508 standards. Our remediation process improves document structure, reading order, tables, forms, and alternative text to ensure compatibility with assistive technologies.",
    points: [
      "Tagged PDF Structure",
      "Reading Order Optimization",
      "Accessible Forms & Tables",,
      "Screen Reader Compatibility",
    ],
  },
  {
    title: "EPUB Accessibility",
    image: epub,
    description:
      "Our EPUB accessibility services ensure digital publications meet EPUB 3 accessibility requirements. We enhance navigation, semantic markup, multimedia, and content structure to deliver an inclusive reading experience across all major eReaders.",
    points: [
      "EPUB 3 Accessibility",
      "Semantic Content Structure",
      "Accessible Navigation",
      "Media Accessibility",
      "Assistive Technology Support",
    ],
  },
  {
    title: "eBook Accessibility",
    image: ebook,
    description:
      "We create accessible eBooks that provide equal access for every reader. From proper heading structures and navigation to image descriptions and logical reading flow, every publication is optimized for accessibility and usability.",
    points: [
      "Structured Content",
      "Accessible Navigation",
      "Alternative Text",
      "Logical Reading Flow",
      "Screen Reader Ready",
    ],
  },
  {
    title: "Word & PowerPoint Remediation",
    image: word,
    description:
      "Our experts remediate Microsoft Word documents and PowerPoint presentations by improving document structure, headings, tables, lists, reading order, and alternative text. Every file is optimized to meet accessibility standards and support assistive technologies.",
    points: [
      "Accessible Word Documents",
      "Accessible Presentations",
      "Reading Order Improvements",
      "WCAG & Section 508 Compliance",
    ],
  },
   {
    title: "Alternate Text Services",
    image: alttext,
    description:
      "We create accurate, meaningful, and standards-compliant alternate text for images, charts, graphs, diagrams, infographics, and other visual content. Every description is written to improve accessibility, support screen reader users, and meet WCAG, PDF/UA, EPUB Accessibility, and Section 508 requirements.",
    points: [
      "WCAG & Section 508 Compliance",
      "Meaningful Image Descriptions",
      "Charts & Infographics",
      "Decorative Image Identification",
      "Expert Human Quality Review",
    ],
  },
];

function Services() {
  return (
    <section className="services" id="services">

      {services.map((service, index) => (
        <div
          className={`service-row ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
        >
          {/* Image */}
          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>

          {/* Content */}
          <div className="service-info">
            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <h4>What We Deliver</h4>

            <ul>
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Services;