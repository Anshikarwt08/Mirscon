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
          "Publishers today manage content across print, eBooks, EPUBs, websites, learning platforms, and digital repositories. Delivering consistent, high-quality content across these formats requires flexible workflows and well-structured digital content.",
      },
      {
        title: "The Shift to Digital",
        text:
          "Publishing is moving toward structured, reusable, and accessible digital content. EPUB 3, XML workflows, multimedia integration, and digital-first distribution are enabling publishers to efficiently adapt content across platforms and formats.",
      },
      {
        title: "The Role of Accessibility",
        text:
          "Accessibility helps publishers create inclusive digital experiences by making publications, documents, images, and multimedia easier to access and navigate with assistive technologies. It also helps ensure essential content can reach a broader audience.",
      },
      {
        title: "Our Capabilities",
        text:
          "We support publishers with digital publishing, EPUB and XML conversion, alt text, document remediation, multimedia accessibility, and other accessibility-focused content services tailored to modern publishing workflows.",
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
        title: "The EdTech and Learning Landscape",
        text:
          "Educational institutions and EdTech organizations rely on digital platforms, eBooks, online courses, videos, documents, and interactive resources to support teaching and learning. These resources need to be clear, structured, engaging, and accessible across different learning environments.",
      },
      {
        title: "The Shift to Digital",
        text:
          "Learning is moving toward personalized, technology-enabled, and multimedia-rich experiences. Digital platforms increasingly bring together structured content, video, audio, interactive resources, and data to support more flexible and connected learning.",
      },
      {
        title: "The Role of Accessibility",
        text:
          "Accessibility helps create learning experiences that can be used by students with different needs and abilities. Accessible documents, captions, alt text, and well-structured digital content help learners access information more independently.",
      },
      {
        title: "Our Capabilities",
        text:
          "We support education and EdTech organizations with document remediation, alt text, digital publishing, EPUB services, multimedia accessibility, accessibility testing, and structured content solutions designed for digital learning environments.",
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
          "Healthcare and life sciences organizations work with patient information, medical publications, research, training materials, reports, digital forms, and online resources. This content must remain accurate, well-structured, and easy to navigate across different digital environments.",
      },
      {
        title: "The Shift to Digital",
        text:
          "Healthcare and life sciences are moving toward connected digital experiences, online information delivery, digital documentation, and technology-enabled services. These developments are creating new ways to deliver and access information across platforms.",
      },
      {
        title: "The Role of Accessibility",
        text:
          "Accessibility helps make essential healthcare and life sciences information easier to access and understand. Properly structured documents, meaningful alternative text, captions, and accessible digital experiences can help reduce barriers to important information.",
      },
      {
        title: "Our Capabilities",
        text:
          "We support healthcare and life sciences organizations with document remediation, alt text, digital content services, multimedia accessibility, accessibility testing, and structured publishing solutions for specialized content.",
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

    intro:
      "Technology and enterprise organizations operate in a fast-changing digital environment where scalable platforms, reliable systems, and accessible user experiences are increasingly important.",

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

    intro:
      "Legal and professional organizations depend on accurate, structured, and accessible information to serve clients, manage documentation, and deliver professional services.",

    points: [
      {
        title: "The Legal and Professional Landscape",
        text:
          "Legal and professional organizations work with contracts, reports, case materials, policies, research, client documentation, presentations, and other information-rich content. Managing this information effectively is essential for communication, collaboration, and service delivery.",
      },
      {
        title: "The Shift to Digital",
        text:
          "The sector is moving toward digital documentation, cloud-based collaboration, online client services, searchable information, and technology-enabled workflows. These changes are helping organizations manage information more efficiently and deliver services through digital channels.",
      },
      {
        title: "The Role of Accessibility",
        text:
          "Accessibility helps ensure that important legal and professional information can be accessed, navigated, and understood by a broader range of users. Accessible documents, websites, and digital platforms can help create more inclusive professional experiences.",
      },
      {
        title: "Our Capabilities",
        text:
          "We support legal and professional organizations with document remediation, alt text, accessibility testing, digital content services, structured publishing, multimedia accessibility, and technology solutions tailored to their digital requirements.",
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