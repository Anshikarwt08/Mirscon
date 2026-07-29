import React, { useEffect, useState } from "react";
import "./Home2.css";

import {
  FaRobot,
  FaLaptopCode,
  FaChartLine,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    title: "Intelligent Automation",
    description:
      "Helping customers reap true benefits of automation through Business Process Automation, Robotic Process Automation and Cognitive Automation.",
    icon: <FaRobot />,
  },
  {
    title: "Digital Transformation",
    description:
      "Transforming businesses with digital solutions to improve productivity and operational efficiency.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Differentiated Value",
    description:
      "Flexible delivery models including project-based, outcome-based and Build-Operate-Transfer engagements.",
    icon: <FaChartLine />,
  },
  {
    title: "Cloud Services",
    description:
      "Cloud migration, maintenance and infrastructure supported by experienced professionals.",
    icon: <FaCloud />,
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
    <h3 className="counter-number">
      {count}
      {suffix}
    </h3>
  );
}

function Home2() {
  return (
    <section className="home2">
      {/* Services Heading */}

      <div className="services-heading">

        <h2>
          Innovative Technology Solutions for Modern Businesses
        </h2>

        <p>
          We empower organizations with intelligent automation, digital
          transformation, cloud solutions, and value-driven technology
          services that accelerate business growth.
        </p>
      </div>

      {/* Services Grid */}

      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={index}>
            <div className="icon-box">
              <div className="service-icon">{service.icon}</div>
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </article>
        ))}
      </div>

      {/* Statistics */}

      <div className="stats-section">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <Counter end={item.number} suffix={item.suffix} />

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home2;