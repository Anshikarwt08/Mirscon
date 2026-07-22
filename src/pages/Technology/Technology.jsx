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

function Technology() {
  return (
    <section className="technology">
      <div className="technology-header">
        <span>OUR TECHNOLOGY</span>

        <h2>Technology Stack</h2>

        <p>
          We leverage industry-leading platforms and modern technologies to
          build scalable, secure, and high-performing digital solutions.
        </p>

        <div className="line"></div>
      </div>

      <div className="logo-grid">

        <div className="logo-card">
          <img src={azure} alt="Microsoft Azure" />
        </div>

        <div className="logo-card">
          <img src={azureSynapse} alt="Azure Synapse Analytics" />
        </div>

        <div className="logo-card">
          <img src={databricks} alt="Databricks" />
        </div>

        <div className="logo-card">
          <img src={dell} alt="Dell Technologies" />
        </div>

        <div className="logo-card">
          <img src={informatica} alt="Informatica" />
        </div>

        <div className="logo-card">
          <img src={powerBi} alt="Microsoft Power BI" />
        </div>

        <div className="logo-card">
          <img src={snapLogic} alt="SnapLogic" />
        </div>

        <div className="logo-card">
          <img src={snowflake} alt="Snowflake" />
        </div>

        <div className="logo-card">
          <img src={tableau} alt="Tableau" />
        </div>

        <div className="logo-card">
  <img src={salesforce} alt="Salesforce" />
</div>

      </div>
    </section>
  );
}

export default Technology;