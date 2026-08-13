import Ebook1 from "../../assets/Ebook1.png";
import Ebook2 from "../../assets/Ebook2.png";
import Pdf1 from "../../assets/Pdf1.png";
import Pdf2 from "../../assets/Pdf2.png";
import Epub1 from "../../assets/Epub1.png";
import Epub2 from "../../assets/Epub2.png";
import Xml1 from "../../assets/Xml1.png";
import Xml2 from "../../assets/Xml2.png";
import Ppt1 from "../../assets/Ppt1.png";
import Ppt2 from "../../assets/Ppt2.png";
import Word1 from "../../assets/Word1.png";
import Word2 from "../../assets/Word2.png";
import Excel1 from "../../assets/Excel1.png";
import Excel2 from "../../assets/Excel2.png";

import TranscriptionServices from "../../assets/TranscriptionServices.png";
import Srt from "../../assets/Srt.png";
import AudioEngineering from "../../assets/AudioEngineering.png";
import VideoAnnotation from "../../assets/VideoAnnotation.png";

import Alt from "../../assets/Alt.png";
import Alt2 from "../../assets/Alt2.png";

const serviceData = {
  /* =========================================================
     ALT TEXT SERVICES
  ========================================================= */

  "alt-text": {
    title: "Alt Text Services",

    description:
      "We create accurate, meaningful, and standards-compliant alternative text for images, charts, graphs, diagrams, tables, and other visual content. Our accessibility experts help publishers, educational institutions, and enterprises meet global accessibility standards.",

    features: [

      {
        title: "Charts, Graphs & Diagrams",
        images: [Alt],
        paragraphs: [
          "We create clear, meaningful alt text for charts, graphs, and diagrams, capturing the key information so complex visuals remain accessible to every reader.",
          "From data trends and comparisons to processes and technical diagrams, our descriptions focus on essential details while keeping the content concise, accurate, and easy to understand."
        ]
      },

      {
        title: "STEM, Medical & Technical Content",
        images:[Alt2],
        paragraphs: [
          "We craft clear, accurate content for complex STEM, medical, and technical subjects, making specialized information easy to understand and accessible to every reader.",

          "From scientific concepts to medical terminology and technical documentation, we ensure content is precise, well-structured, and ready for accessible digital publishing."

        ]
      },      

    ],
    industries: [
      "Educational Publishing",
      "Higher Education",
      "Medical & Healthcare Publishing",
      "Scientific Publishing",
      "STEM Content",
      "EdTech",
      "Enterprise Documentation"
    ],

    process: [
      {
        step: "01",
        title: "Content Analysis",
        description:
          "We review the visual content and understand its context and purpose within the document."
      },
      {
        step: "02",
        title: "Description Creation",
        description:
          "Our accessibility specialists create meaningful descriptions based on the content requirements."
      },
      {
        step: "03",
        title: "Quality Review",
        description:
          "Descriptions are reviewed for accuracy, clarity, consistency, and accessibility requirements."
      },
      {
        step: "04",
        title: "Final Delivery",
        description:
          "Approved content is delivered in the required format according to project specifications."
      }
    ],

    faqs: [
      {
        question: "What is alt text?",
        answer:
          "Alt text is a textual description of visual content that helps communicate essential information to users who cannot access the visual content directly."
      },
      {
        question: "What types of content do you support?",
        answer:
          "We support images, charts, graphs, diagrams, tables, illustrations, and other visual content."
      },
      {
        question: "Do you support high-volume projects?",
        answer:
          "Yes. Our workflows can support large-scale accessibility and publishing projects while maintaining quality and consistency."
      }
    ]
  },

  /* =========================================================
     DOCUMENT REMEDIATION
  ========================================================= */

  "document-remediation": {
    title: "Document Remediation",

    description:
      "Transform inaccessible documents into fully accessible PDFs, Word, Excel, and PowerPoint files compatible with screen readers and assistive technologies.",

    overview:
      "Our document remediation services help organizations transform existing digital documents into accessible formats. We focus on document structure, reading order, tagging, navigation, alternative text, tables, headings, and other accessibility requirements.",

    features: [
      {
        title: "PDF Remediation",
        images: [Pdf1, Pdf2],

        paragraphs: [
          "From simple reports to complex publications, we enhance PDFs with the accessibility structures needed for clear navigation, meaningful content relationships, and a better experience with assistive technologies.",

          "Our expertise supports documents with complex layouts, tables, lists, links, images, and long-form content while maintaining the integrity and professional presentation of the original document."

        ]
      },

      {
        title: "Word Accessibility",

        images: [Word1, Word2],

        paragraphs: [
          "We help organizations turn everyday Word documents into more inclusive digital content, making essential information easier to navigate and access across different user needs.",

          "Whether it is a report, handbook, learning material, or business document, we focus on creating a consistent accessibility experience while preserving the document's original purpose and presentation."

        ]
      },

      {
        title: "PowerPoint Accessibility",

        images: [Ppt1, Ppt2],

        paragraphs: [

          "Accessible presentations should communicate their message clearly to every audience. We enhance PowerPoint content so that important information remains understandable beyond the visual slide experience.",

          "Our expertise supports presentations ranging from business decks and training materials to educational and technical content, helping organizations create more inclusive digital presentations."
        ]
      },

      {
        title: "Excel Accessibility",
        images:[Excel1,Excel2],
        paragraphs: [
          "Complex spreadsheets can contain large amounts of information that are difficult to navigate without a clear accessible structure. We help make data-driven Excel content more organized and usable for diverse audiences.",

          "From business reports and financial data to research and operational workbooks, we focus on improving the accessibility of information while preserving the purpose and functionality of the original spreadsheet."
        ]
      },
    ],
    industries: [
      "Educational Institutions",
      "Publishers",
      "Government Organizations",
      "Corporate Enterprises",
      "Healthcare",
      "Legal & Professional Services",
      "EdTech"
    ],

    process: [
      {
        step: "01",
        title: "Document Assessment",
        description:
          "We review the document structure and identify accessibility issues and remediation requirements."
      },
      {
        step: "02",
        title: "Remediation",
        description:
          "Our team applies the required structural, semantic, navigation, and accessibility improvements."
      },
      {
        step: "03",
        title: "Accessibility Validation",
        description:
          "The remediated document is reviewed against the applicable accessibility requirements."
      },
      {
        step: "04",
        title: "Final Delivery",
        description:
          "The completed accessible document is delivered according to project requirements."
      }
    ],

    faqs: [
      {
        question: "What types of documents can you remediate?",
        answer:
          "We support formats including PDF, Microsoft Word, PowerPoint, and Excel."
      },
      {
        question: "Can you remediate large document collections?",
        answer:
          "Yes. Our workflows can be adapted for high-volume document remediation projects."
      },
      {
        question: "Do you provide accessibility validation?",
        answer:
          "Yes. Remediated documents can be reviewed against applicable accessibility requirements and project specifications."
      }
    ]
  },

  /* =========================================================
     DIGITAL PUBLISHING
  ========================================================= */

  "digital-publishing": {
    title: "Digital Publishing Services",

    description:
      "End-to-end digital publishing solutions for publishers, universities, and enterprises delivering high-quality, standards-compliant digital publications.",

    overview:
      "Our digital publishing services support organizations in creating, converting, structuring, and validating digital publications. We help transform content into flexible digital formats while maintaining quality, structure, usability, and accessibility.",

    features: [
      {
        title: "eBook Production with Audio Integration",

        images: [Ebook1, Ebook2],

        paragraphs: [
          "From PDF to polished eBook, we transform your source content into a digital reading experience that stays true to the original design.",

          "Make your eBooks more immersive with synchronized audio, allowing readers to listen to professionally narrated content while following the text through seamless, precisely timed audio synchronization."
        ]
      },

      {
        title: "EPUB 3 Reflowable & Fixed Layout",

        images: [Epub1, Epub2],

        paragraphs: [
          "We create flexible EPUB 3 publications that adapt seamlessly across phones, tablets, eReaders, and desktops. Content flows naturally according to screen size while maintaining clear structure, intuitive navigation, consistent formatting, and a smooth reading experience.",

          "For visually rich publications, we create fixed-layout EPUB 3 experiences that preserve the original design with precision. Typography, images, page composition, and interactive elements remain carefully positioned, delivering a polished digital experience without compromising the publication's visual identity."
        ]
      },

      {
        title: "XML Conversion",

        images: [Xml1, Xml2],

        paragraphs: [
          "We convert publishing content into structured XML formats to support content reuse, distribution, and downstream publishing workflows.",

          "Structured content makes it easier for organizations to manage and repurpose content across different platforms and publication formats.",

          "Our workflows can be adapted to project-specific XML structures and publishing requirements."

        ]
      }
    ],

    industries: [
      "Academic Publishers",
      "Educational Institutions",
      "Higher Education",
      "Professional Publishing",
      "Digital Learning",
      "EdTech",
      "Enterprise Publishing"
    ],

    process: [
      {
        step: "01",
        title: "Content Assessment",
        description:
          "We review the source content, structure, format, and publishing requirements."
      },
      {
        step: "02",
        title: "Content Conversion",
        description:
          "Content is converted and structured according to the required digital publishing format."
      },
      {
        step: "03",
        title: "Quality & Validation",
        description:
          "The publication is reviewed for structure, formatting, navigation, and technical requirements."
      },
      {
        step: "04",
        title: "Final Delivery",
        description:
          "Validated digital publications are delivered in the required formats."
      }
    ],

    faqs: [
      {
        question: "What digital formats do you support?",
        answer:
          "Our services include EPUB, XML, and other digital publishing formats based on project requirements."
      },
      {
        question: "Do you support EPUB 3?",
        answer:
          "Yes. We support both reflowable and fixed-layout EPUB 3 publications."
      },
      {
        question: "Do you validate EPUB files?",
        answer:
          "Yes. EPUB publications can be reviewed and validated as part of the publishing workflow."
      }
    ]
  },

  /* =========================================================
     MULTIMEDIA ACCESSIBILITY
  ========================================================= */

  "multimedia-accessibility": {
    title: "Multimedia Accessibility",

    description:
      "Professional captioning, transcription, subtitles, audio description, and video accessibility services for inclusive multimedia experiences.",

    overview:
      "Our multimedia accessibility services help organizations make video, audio, and other multimedia content more accessible. We provide services designed to support users with different accessibility needs while maintaining accuracy, synchronization, and content quality.",

    features: [

      {
        title: "Subtitle & SRT Creation",
          images: [Srt],
        paragraphs: [
          "We create and synchronize subtitle files such as SRT according to the requirements of the target platform and content.",

          "Our workflow focuses on timing, segmentation, readability, synchronization, and consistency so that subtitles remain easy to follow.",

          "Subtitle files can be prepared according to project-specific formatting and delivery requirements."
        ]
      },

      {
        title: "Transcription Services",
        images: [TranscriptionServices],
        paragraphs: [
          "We convert spoken content from lectures, meetings, webinars, podcasts, interviews, training sessions, and videos into structured text.",

          "Transcripts can provide an alternative way to access multimedia content and can also support search, content reuse, documentation, and publishing workflows.",

          "Our transcription workflows can be adapted to different content types, formats, and project requirements."
        ]
      },

      {
        title: "Audio Engineering",
images: [AudioEngineering],
        paragraphs: [
          "We create professionally formatted subtitles that make multimedia content easier to follow across platforms, audiences, and viewing environments.",

          "From educational content to corporate and digital media, our subtitle solutions maintain clear segmentation, natural reading flow, and precise synchronization with the original content."
        ]
      },


      {
        title: "Video Annotation",
images: [VideoAnnotation],
        paragraphs: [
          "We organize video content through detailed annotation of relevant objects, scenes, actions, and events, making complex visual information easier to categorize and work with.",

          "Our annotation services can support searchable content, structured datasets, media analysis, research, and other applications where precise video information is essential."
        ]
      },

    ],



    industries: [
      "Education",
      "Higher Education",
      "EdTech",
      "Corporate Training",
      "Media & Entertainment",
      "Publishing",
      "Healthcare"
    ],

    process: [
      {
        step: "01",
        title: "Content Assessment",
        description:
          "We review the multimedia content and determine the accessibility services required."
      },
      {
        step: "02",
        title: "Content Production",
        description:
          "Captions, transcripts, subtitles, descriptions, or annotations are created according to project requirements."
      },
      {
        step: "03",
        title: "Quality Review",
        description:
          "Content is reviewed for accuracy, timing, synchronization, consistency, and accessibility."
      },
      {
        step: "04",
        title: "Final Delivery",
        description:
          "Completed multimedia accessibility files are delivered in the required formats."
      }
    ],

    faqs: [
      {
        question: "What multimedia services do you provide?",
        answer:
          "We provide captioning, subtitles, SRT creation, transcription, audio description, and video annotation services."
      },
      {
        question: "Can you handle large video libraries?",
        answer:
          "Yes. Our workflows can support large-scale multimedia accessibility projects."
      },
      {
        question: "Do you provide synchronized captions?",
        answer:
          "Yes. Captioning and subtitle files can be synchronized with the corresponding multimedia content."
      }
    ]
  }
};

export default serviceData;