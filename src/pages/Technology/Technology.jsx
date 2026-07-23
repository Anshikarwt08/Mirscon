import "./Technology.css";

import azure from "../../assets/technology/Azure.png";
import azureSynapse from "../../assets/technology/azureSynapse.png";
import databricks from "../../assets/technology/databricks.png";
import dell from "../../assets/technology/Dell.png";
import informatica from "../../assets/technology/Informatica.png";
import powerBi from "../../assets/technology/PowerBi.png";
import snapLogic from "../../assets/technology/snapLogic.png";
import snowflake from "../../assets/technology/snowflake.png";
import tableau from "../../assets/technology/tableau.png";
import salesforce from "../../assets/salesforce.jpg";

const technologies = [
  {
    image: azure,
    name: "Microsoft Azure",
    category: "Cloud Platform",
  },
  {
    image: azureSynapse,
    name: "Azure Synapse",
    category: "Analytics",
  },
  {
    image: databricks,
    name: "Databricks",
    category: "Data Engineering",
  },
  {
    image: dell,
    name: "Dell Boomi",
    category: "Integration",
  },
  {
    image: informatica,
    name: "Informatica",
    category: "ETL Platform",
  },
  {
    image: powerBi,
    name: "Power BI",
    category: "Business Intelligence",
  },
  {
    image: snapLogic,
    name: "SnapLogic",
    category: "Integration",
  },
  {
    image: snowflake,
    name: "Snowflake",
    category: "Cloud Data Warehouse",
  },
  {
    image: tableau,
    name: "Tableau",
    category: "Visualization",
  },
  {
    image: salesforce,
    name: "Salesforce",
    category: "CRM Platform",
  },
];

function Technology() {
  return (
    <section className="technology">

      <div className="technology-header">

        <h2>
          OUR TECHNOLOGY
        </h2>

        <p>
          We leverage industry-leading cloud, analytics, CRM and integration
          platforms to build secure, scalable and high-performing digital
          solutions.
        </p>

        <div className="line"></div>

      </div>

      <div className="logo-grid">

        {technologies.map((tech, index) => (
          <div className="logo-card" key={index}>

            <img src={tech.image} alt={tech.name} />

            <h3>{tech.name}</h3>

            <p>{tech.category}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Technology;