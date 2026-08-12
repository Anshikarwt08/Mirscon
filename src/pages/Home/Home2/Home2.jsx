import React, { useEffect, useState } from "react";
import "./Home2.css";

import { IoIosPeople } from "react-icons/io";
import { LuLaptopMinimalCheck, LuShieldCheck } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";

const services = [
  {
    title: "Expertise",
    description:
      "Deep domain knowledge and accessibility expertise across content formats, standards and complex content.",
    icon: < IoIosPeople aria-hidden="true" />,
  },
  {
    title: "Delivery",
    description:
      "Structured process, skilled teams and scalable capacity enables us to manage projects of varied sizes and complexity.",
    icon: <LuLaptopMinimalCheck  aria-hidden="true" />,
  },
  {
    title: "Quality",
    description:
      "Quality is built into every stage through defined processes, multiple levels of review, validation and continuous improvement.",
    icon: <LuShieldCheck  aria-hidden="true" />,
  },
  {
    title: "Innovation",
    description:
      "Automate and include new workflows in smarter ways to improve efficiency keeping human expertise at the core of delivery.",
    icon: <HiOutlineLightBulb aria-hidden="true" />,
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
          Accessibility at Scale<br></br> Quality at Every Touchpoint
        </h2>

        <p>
        Mirscon brings human expertise and technology together at every stage, combining the scale and efficiency of technology with the insight, judgement and quality control of experienced accessibility professionals.
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