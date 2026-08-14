import "./Industries.css";
import Header from "../Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const industries = [
  {
    title: "Publishing and Media",
    id: "publishing-media",

    intro:
      "Publishing is evolving from traditional print toward digital-first content, accessible publications, and flexible content experiences.",

    points: [
      {
        title: "The Publishing Landscape",
        text:
          "Publishers are managing content across print, eBooks, EPUBs, websites, learning platforms, and digital repositories. Maintaining quality, consistency, and usability across these formats has become increasingly important.",
      },

      {
        title: "The Shift to Digital",
        text:
          "The industry is moving toward structured, reusable, and accessible digital content. EPUB 3, XML workflows, multimedia publishing, and digital-first distribution are becoming important parts of modern publishing.",
      },

      {
        title: "The Role of Accessibility",
        text:
          "Accessibility helps publishers reach a wider audience by making digital publications, documents, images, and multimedia easier to access and navigate with assistive technologies.",
      },

      {
        title: "Our Capabilities",
        text:
          "We support publishers with digital publishing, EPUB conversion, XML conversion, alt text, document remediation, multimedia accessibility, and accessibility-focused content services.",
      },
    ],
  },

  {
    title: "EdTech and Learning",
    id: "edtech-learning",

    intro:
      "Education is becoming increasingly digital, creating new opportunities to deliver learning experiences that are flexible, inclusive, and accessible.",

    points: [
      {
        title: "The EdTech Landscape",
        text:
          "Educational institutions and EdTech organizations rely on digital platforms, online learning materials, eBooks, videos, documents, and interactive resources to support students and educators.",
      },

      {
        title: "The Shift to Digital",
        text:
          "Learning is moving toward personalized, technology-enabled, and multimedia-rich experiences. Digital learning platforms increasingly combine structured content, video, audio, interactive resources, and data.",
      },

      {
        title: "The Role of Accessibility",
        text:
          "Accessible learning content helps students with different abilities access educational materials independently. Accessible documents, captions, alt text, and properly structured digital content support more inclusive learning.",
      },

      {
        title: "Our Capabilities",
        text:
          "We provide accessible document remediation, alt text, digital publishing, EPUB services, multimedia accessibility, accessibility testing, and structured content solutions for education and EdTech.",
      },
    ],
  },

  {
    title: "Healthcare & Life Sciences",
    id: "healthcare-life-sciences",

    intro:
      "Healthcare organizations increasingly depend on digital information, from patient resources and medical publications to research, training materials, and online services.",

    points: [
      {
        title: "The Healthcare & Life Sciences Landscape",
        text:
          "Healthcare and life sciences content spans patient information, medical publications, research, training materials, reports, digital forms, and online services. This information needs to be clear, accurate, and easy to navigate.",
      },

      {
        title: "The Shift to Digital",
        text:
          "Healthcare and life sciences are moving toward connected digital experiences, online information delivery, digital documentation, and technology-enabled services that make information available across different platforms.",
      },

      {
        title: "The Role of Accessibility",
        text:
          "Accessibility makes essential healthcare and life sciences information easier to access and understand. Properly structured documents, meaningful alternative text, captions, and accessible digital experiences can improve access to critical information.",
      },

      {
        title: "Our Capabilities",
        text:
          "We support healthcare and life sciences organizations with document remediation, alt text, digital content services, multimedia accessibility, accessibility testing, and structured publishing solutions.",
      },
    ],
  },

  {
    title: "Finance and Insurance",
    id: "finance-insurance",

    intro:
      "Financial services are becoming increasingly digital, with customers relying on websites, mobile platforms, digital documents, and online services for everyday financial activities.",

    points: [
      {
        title: "The Finance and Insurance Landscape",
        text:
          "Banks, insurers, and financial organizations deliver a wide range of services through digital channels, including online banking, financial documents, customer portals, applications, and self-service platforms.",
      },

      {
        title: "The Shift to Digital",
        text:
          "The sector is moving toward highly digital, automated, and connected financial experiences. Cloud technologies, automation, data platforms, and digital self-service are becoming increasingly important.",
      },

      {
        title: "The Role of Accessibility",
        text:
          "Accessible financial services help customers independently access important information, complete digital tasks, and interact with financial platforms regardless of their abilities or preferred access methods.",
      },

      {
        title: "Our Capabilities",
        text:
          "We provide accessibility testing, document remediation, alt text, automation, cloud solutions, and technology services that support more reliable and accessible financial experiences.",
      },
    ],
  },

  {
    title: "Enterprise and Technology",
    id: "enterprise-technology",

    intro:
      "Technology and enterprise organizations operate in a fast-changing digital environment where scalable platforms, reliable systems, and accessible user experiences are increasingly important.",

    points: [
      {
        title: "The Enterprise and Technology Landscape",
        text:
          "Technology companies and enterprises manage complex digital products, applications, platforms, cloud environments, documentation, and customer experiences that need to perform reliably across different users and environments.",
      },

      {
        title: "The Shift to Digital",
        text:
          "The technology landscape is moving toward cloud-based platforms, automation, data-driven solutions, integrated systems, AI-enabled workflows, and increasingly connected digital experiences.",
      },

      {
        title: "The Role of Accessibility",
        text:
          "Accessibility helps technology products and digital platforms work effectively for a broader range of users. It also encourages more consistent, usable, and inclusive digital experiences.",
      },

      {
        title: "Our Capabilities",
        text:
          "We support technology organizations through accessibility testing, quality automation, product engineering, cloud solutions, digital content services, and technology-focused accessibility solutions.",
      },
    ],
  },

  {
    title: "Legal and Professional",
    id: "legal-professional",

    intro:
      "Legal and professional organizations depend on accurate, structured, and accessible information to serve clients, manage documentation, and deliver professional services.",

    points: [
      {
        title: "The Legal and Professional Landscape",
        text:
          "Legal and professional organizations work with contracts, reports, case materials, policies, research, client documentation, presentations, and other information-heavy content across digital environments.",
      },

      {
        title: "The Shift to Digital",
        text:
          "The sector is moving toward digital documentation, cloud-based collaboration, online client services, searchable information, and technology-enabled workflows that improve efficiency and access to professional content.",
      },

      {
        title: "The Role of Accessibility",
        text:
          "Accessibility helps ensure that important legal and professional information can be accessed, navigated, and understood by a broader range of users across documents, websites, and digital platforms.",
      },

      {
        title: "Our Capabilities",
        text:
          "We provide document remediation, alt text, accessibility testing, digital content services, structured publishing, multimedia accessibility, and technology solutions for legal and professional organizations.",
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