import React, { useEffect, useState } from "react";
import "./Home2.css";

import {
  FaUniversalAccess,
  FaLaptopCode,
  FaGraduationCap,
  FaClipboardCheck,
} from "react-icons/fa";

const services = [
  {
    title: "Accessibility Testing",
    description:
      "Identify accessibility barriers through comprehensive testing and audits to improve usability and support WCAG 2.1 and 2.2 compliance.",
    icon: <FaUniversalAccess aria-hidden="true" />,
  },
  {
    title: "Accessible Design & Development",
    description:
      "Build inclusive websites and applications with accessible design, semantic HTML, keyboard navigation, and screen reader compatibility.",
    icon: <FaLaptopCode aria-hidden="true" />,
  },
  {
    title: "Training & Awareness",
    description:
      "Empower your teams with practical accessibility knowledge, inclusive design practices, and training for accessible digital experiences.",
    icon: <FaGraduationCap aria-hidden="true" />,
  },
  {
    title: "Compliance & Reporting",
    description:
      "Understand accessibility gaps with detailed reports, recommendations, and guidance aligned with global accessibility standards.",
    icon: <FaClipboardCheck aria-hidden="true" />,
  },
];

const stats = [
  { number: 150, suffix: "+", title: "Client Base" },
  { number: 500, suffix: "+", title: "Projects Completed" },
  { number: 250, suffix: "+", title: "Talented Workforce" },
  { number: 15, suffix: "+", title: "Awards Won" },
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = Math.ceil(end / (duration / 20));

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span
      className="counter-number"
      aria-label={`${end}${suffix}`}
    >
      {count}
      {suffix}
    </span>
  );
}

function Home2() {
  return (
    <section
      className="accessibility-home-section"
      aria-labelledby="accessibility-heading"
    >

      {/* ===========================
          HOW WE HELP
      ============================ */}

      <div className="services-heading">
        <h2 id="accessibility-heading">
          Creating Accessible Digital Experiences
        </h2>

        <p>
          We help organizations create digital experiences that are
          accessible, inclusive, and usable for everyone. From
          accessibility testing and accessible development to training
          and compliance support, we help remove digital barriers and
          build experiences that work for all users.
        </p>

      </div>


      {/* ===========================
          ACCESSIBILITY SERVICES
      ============================ */}

      <div
        className="services-grid"
        aria-label="Accessibility services"
      >

        {services.map((service) => (

          <article
            key={service.title}
            className="service-card"
          >

            <div
              className="icon-box"
              aria-hidden="true"
            >
              <div className="service-icon">
                {service.icon}
              </div>
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

          </article>

        ))}

      </div>


      {/* ===========================
          STATISTICS
      ============================ */}

      <div
        className="stats-section"
        aria-label="Company statistics"
      >

        {stats.map((item) => (

          <div
            key={item.title}
            className="stat-card"
          >

            <Counter
              end={item.number}
              suffix={item.suffix}
            />

            <p>
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Home2;