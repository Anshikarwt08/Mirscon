import pdf from "../../assets/pdf.png";
import ebook from "../../assets/ebook.jpeg";
import epub from "../../assets/epub.png";
import alttext from "../../assets/alttext.png";

const serviceData = {
  "alt-text": {
    title: "Alt Text Services",
    image: alttext,
    description:
      "We create accurate, meaningful, and standards-compliant alternative text for images, charts, graphs, diagrams, tables, and other visual content. Our accessibility experts help publishers, educational institutions, and enterprises meet global accessibility standards.",

    features: [
      {
        title: "STEM, Medical & Technical Content",
        description:
          "Specialized alternative text for scientific, engineering, medical, and academic publications."
      },
      {
        title: "WCAG & PDF/UA Compliance",
        description:
          "Alternative text written according to WCAG 2.2, Section 508, ADA, and PDF/UA standards."
      },
      {
        title: "High Volume Delivery",
        description:
          "Efficient workflows that support thousands of images while maintaining quality."
      },
      {
        title: "Multilingual Support",
        description:
          "Alternative text creation in multiple languages for global publishers."
      }
    ]
  },

  "document-remediation": {
    title: "Document Remediation",
    image: pdf,
    description:
      "Transform inaccessible documents into fully accessible PDFs, Word, Excel, and PowerPoint files compatible with screen readers and assistive technologies.",

    features: [
      {
        title: "PDF Remediation",
        description:
          "Create fully tagged PDFs that comply with PDF/UA and WCAG standards."
      },
      {
        title: "Word Accessibility",
        description:
          "Accessible headings, tables, lists, reading order, and image descriptions."
      },
      {
        title: "PowerPoint Accessibility",
        description:
          "Accessible presentations with keyboard navigation and screen reader support."
      },
      {
        title: "Excel Accessibility",
        description:
          "Proper headers, labels, formulas, and workbook navigation."
      }
    ]
  },

  "digital-publishing": {
    title: "Digital Publishing Services",
    image: ebook,
    description:
      "End-to-end digital publishing solutions for publishers, universities, and enterprises delivering high-quality, standards-compliant digital publications.",

    features: [
      {
        title: "eBook Creation",
        description:
          "Professional conversion into EPUB and Kindle-ready formats."
      },
      {
        title: "EPUB 3 Reflowable",
        description:
          "Responsive EPUB publications optimized for all devices."
      },
      {
        title: "EPUB Fixed Layout",
        description:
          "Rich-layout EPUBs preserving original designs."
      },
      {
        title: "XML Conversion",
        description:
          "Industry-standard XML conversion and validation services."
      }
    ]
  },

  "multimedia-accessibility": {
    title: "Multimedia Accessibility",
    image: epub,
    description:
      "Professional captioning, transcription, subtitles, audio description, and video accessibility services for inclusive multimedia experiences.",

    features: [
      {
        title: "Closed Captioning",
        description:
          "Accurate synchronized captions for videos."
      },
      {
        title: "Subtitle (SRT) Creation",
        description:
          "Professional subtitle creation compatible with major platforms."
      },
      {
        title: "Transcription",
        description:
          "High-quality transcripts for lectures, webinars, and podcasts."
      },
      {
        title: "Audio Description",
        description:
          "Narration describing important visual elements for visually impaired users."
      }
    ]
  }
};

export default serviceData;