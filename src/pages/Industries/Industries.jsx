import "./Industries.css";
import Header from "../Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const industries = [
  {
    title: "Publishing and Media",
    id: "publishing-media",

    points: [
      {
        title: "The Publishing Landscape",
        text:
          "The publishing landscape has transformed from static, traditional print models into a dynamic, multi-channel digital ecosystem. Today's publishers, media companies and digital creators need fast, scalable solutions to manage content, reach global audiences, and adapt to shifting readers behaviours.",
      },
      {
        title: "The Shift to Digital",
        text:
          "It is the evolution of content from static, physical pages to fluid, screen- agnostic formats. It replaces rigid print cycles with instant, global delivery across smartphones, e-readers, and browsers. More than a new medium, it tranforms reading from a one-way experience into an interactive, data-driven ecosystem.",
      },
      {
        title: "The Role of Accessibility",
        text:
          "Accessibility turns digital content into an inclusive experience. Structuring content for assistive technology, screen readers, and customizable displays does not just meet legal mandates like WCAG, but it also expands reach to millions of previously underserved readers.",
      },
      {
        title: "Our Capabilities",
        text:
          "We provide end-to-end support across digital publishing, content conversion, EPUB and XML services, accessibility remediation, alt text, document processing, and multimedia accessibility. Our approach combines technology, quality, and domain expertise to support efficient publishing workflows.",
      },
    ],
  },

  {
    title: "EdTech and Learning",
    id: "edtech-learning",

    points: [
      {
        title: "The EdTech and Learning Landscape",
        text:
          "Technology and human potential are converging to reshape the future of learning. Today’s EdTech landscape moves beyond passive content delivery, prioritizing intuitive digital design, interactive environments, and personalized learning pathways.",
      },
      {
        title: "The Shift to Digital",
        text:
          "The shift to digital isn't just about new tools—it's a complete transformation of how we learn. By combining smart software with interactive formats, it turns rigid instruction into flexible, personalized pathways for lifelong growth.",
      },
      {
        title: "The Role of Accessibility",
        text:
          "Accessibility ensures digital learning remains open to every learner, regardless of physical, sensory, or cognitive abilities. By following WCAG standards, supporting screen readers, and applying universal design, we help remove barriers and create equal learning opportunities for everyone.",
      },
      {
        title: "Our Capabilities",
        text:
          "We combine intuitive UI/UX design, robust digital architecture, and universal accessibility to build seamless, high-impact EdTech platforms. By bridging the gap between innovative technology and sound pedagogy, we craft engaging, outcome-driven learning ecosystems that empower every user to succeed.",
      },
    ],
  },

  {
    title: "Healthcare & Life Sciences",
    id: "healthcare-life-sciences",

    
    points: [
      {
        title: "The Healthcare & Life Sciences Landscape",
        text:
          "The Healthcare & Life Sciences Landscape is an ecosystem at the intersection of medicine, biotechnology, clinical research, software engineering, and regulatory compliance. It encompasses everything from patient care delivery and pharmaceuticals to medical device manufacturing and public health systems.",
      },
      {
        title: "The Shift to Digital",
        text:
          "The Shift to Digital in healthcare and life sciences represents a fundamental transition from legacy, paper-based processes and siloed data toward integrated, technology-driven ecosystems. It reshapes how clinical research is conducted, how regulatory data is managed, and how patient care is delivered across platforms.",
      },
      {
        title: "The Role of Accessibility",
        text:
        "Accessibility ensures essential medical resources and digital care platforms are usable by everyone. By integrating screen reader support and structured formatting, healthcare organizations empower every patient and professional to access vital information independently.",
      },
      {
        title: "Our Capabilities",
        text:
          "From clinical research and patient portals to regulatory documentation, we build and remediate healthcare digital assets to meet strict global accessibility standards—ensuring seamless navigation, regulatory compliance, and universal access for all users.",
      },
    ],
  },

  {
    title: "Finance and Insurance",
    id: "finance-insurance",

    
    points: [
      {
        title: "The Finance and Insurance Landscape",
        text:
          "Banks, insurers, and financial organizations deliver services through digital channels such as online banking, customer portals, mobile applications, financial documents, and self-service platforms. Clear and reliable digital information is essential across these experiences.",
      },
      {
        title: "The Shift to Digital",
        text:
          "The sector is moving toward connected, automated, and technology-driven financial experiences. Cloud platforms, automation, data-driven services, and digital self-service are transforming how organizations deliver information and interact with customers.",
      },
      {
        title: "The Role of Accessibility",
        text:
          "Accessibility helps customers independently access financial information, complete digital tasks, and interact with online services. Accessible documents, websites, applications, and digital content can create more inclusive financial experiences.",
      },
      {
        title: "Our Capabilities",
        text:
          "We support financial and insurance organizations with accessibility testing, document remediation, alt text, quality automation, cloud solutions, and technology services that help create reliable and accessible digital experiences.",
      },
    ],
  },

  {
    title: "Enterprise and Technology",
    id: "enterprise-technology",

    
    points: [
      {
        title: "The Enterprise and Technology Landscape",
        text:
          "Technology companies and enterprises manage complex products, applications, platforms, cloud environments, documentation, and customer experiences. These digital ecosystems require reliable systems, well-structured information, and consistent experiences across users and platforms.",
      },
      {
        title: "The Shift to Digital",
        text:
          "The technology landscape is evolving toward cloud-based platforms, automation, data-driven solutions, integrated systems, and AI-enabled workflows. Organizations are increasingly connecting technologies to create more efficient and scalable digital experiences.",
      },
      {
        title: "The Role of Accessibility",
        text:
          "Accessibility helps technology products and digital platforms serve a broader range of users. Building accessibility into digital experiences can also support clearer navigation, better usability, and more consistent interactions across platforms.",
      },
      {
        title: "Our Capabilities",
        text:
          "We support technology and enterprise organizations through accessibility testing, quality automation, product engineering, cloud solutions, digital content services, and technology-focused accessibility solutions.",
      },
    ],
  },

  {
    title: "Legal and Professional",
    id: "legal-professional",

    
    points: [
      {
        title: "The Legal and Professional Landscape",
        text:
          "Legal and professional services handle contracts, compliance filings, client records, and regulatory disclosures. This content must remain secure, highly accurate, and easy to navigate across multi-platform environments.",
      },
      {
        title: "The Shift to Digital",
        text:
          "Legal and professional services are moving toward secure digital workflows, virtual client consultations, automated contract management, and cloud-based document delivery. These developments streamline collaboration and create new ways to access critical legal and advisory resources across platforms.",
      },
      {
        title: "The Role of Accessibility",
        text:
          "Accessibility ensures that essential legal filings, contracts, compliance reports, and advisory resources are easy to access and understand. Properly structured documents, clear typography, screen-reader compatibility, and accessible digital portals help eliminate barriers for clients, legal professionals, and regulatory bodies alike.",
      },
      {
        title: "Our Capabilities",
        text:
          "We help legal and professional service firms transform complex documents and platforms into fully compliant, accessible digital assets. Our solutions span WCAG-compliant document remediation, secure client portal UI design, structured publishing, and comprehensive accessibility auditing to mitigate risk and ensure seamless usability for all clients.",
      },
    ],
  },
];

function Industries() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <main className="industries-page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="industries-hero">

          <div className="industries-hero-content">

            <h1>
              Technology Solutions
              <br />
              Built Around Your Industry
            </h1>

            <p>
              Every industry has different challenges, requirements, and
              digital priorities. We combine technology, accessibility, and
              specialized expertise to support organizations across
              industries.
            </p>

          </div>

        </section>


        {/* =========================================
            INTRO
        ========================================= */}

      


        {/* =========================================
            INDUSTRIES
        ========================================= */}

        <section className="industry-list">

          {industries.map((industry) => (

            <section
              className="industry-block"
              id={industry.id}
              key={industry.id}
            >

              {/* INDUSTRY HEADING */}

              <div className="industry-heading">

                <h2>
                  {industry.title}
                </h2>

                <p>
                  {industry.intro}
                </p>

              </div>


              {/* FOUR CONTENT POINTS */}

              <div className="industry-points">

                {industry.points.map((point) => (

                  <article
                    className="industry-point"
                    key={point.title}
                  >

                    <div className="point-content">

                      <h3>
                        {point.title}
                      </h3>

                      <p>
                        {point.text}
                      </p>

                    </div>

                  </article>

                ))}

              </div>

            </section>

          ))}

        </section>


        {/* =========================================
            CTA
        ========================================= */}

        <section className="industries-cta">

          <div className="industries-cta-content">

            <span className="industries-label">
              LET'S WORK TOGETHER
            </span>

            <h2>
              Looking for the Right
              Technology Partner?
            </h2>

            <p>
              Tell us about your industry, challenges, and goals.
              Let's find the right solution for your organization.
            </p>

          </div>

          <button
            onClick={() => navigate("/contact")}
          >
            Contact Us
            <span>→</span>
          </button>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Industries;