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
      "Flexible delivery models including project based, outcome based and build operate transfer.",
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
  { number: 15, suffix: "+", title: "Awards Winning" },
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
    <h2>
      {count}
      {suffix}
    </h2>
  );
}

function Home2() {
  return (
    <section className="home2">
      {/* Services */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-box">
              <div className="service-icon">{service.icon}</div>
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
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