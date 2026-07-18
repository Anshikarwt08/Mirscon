import "./Home2.css";

const services = [
  {
    title: "Intelligent Automation",
    description:
      "Helping customers reap true benefits of automation through Business Process Automation, Robotic Process Automation and Cognitive Automation.",
    icon: "⚙️",
  },
  {
    title: "Digital Transformation",
    description:
      "Transforming businesses with digital solutions to improve productivity and operational efficiency.",
    icon: "💻",
  },
  {
    title: "Differentiated Value",
    description:
      "Flexible delivery models including project based, outcome based and build operate transfer.",
    icon: "📈",
  },
  {
    title: "Cloud Services",
    description:
      "Cloud migration, maintenance and infrastructure supported by experienced professionals.",
    icon: "☁️",
  },
];

const stats = [
  { number: "150+", title: "Client Base" },
  { number: "500+", title: "Projects Completed" },
  { number: "250+", title: "Talented Workforce" },
  { number: "15+", title: "Awards Winning" },
];

function Home2() {
  return (
    <section className="home2">

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>
        ))}
      </div>

      <div className="stats-section">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Home2;