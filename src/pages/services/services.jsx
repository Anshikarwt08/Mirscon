import "./services.css";
import SectionTitle from "../../components/SectionTitle";
import ServiceCard from "../../components/ServiceCard";

import {
  FaCogs,
  FaSalesforce,
  FaProjectDiagram,
  FaServicestack,
  FaCloud,
  FaCube,
} from "react-icons/fa";

function Services() {
  return (
    <section className="services">
      <SectionTitle title="Our Services" />

      <div className="services-container">
        <ServiceCard
          icon={<FaCogs />}
          title="Quality Automation"
          subTitle="MIRSCON Technologies layout Quality Automation for you to attain a strong market competitive edge."
          btnText="More details"
        />

        <ServiceCard
          icon={<FaSalesforce />}
          title="Salesforce"
          subTitle="Our Salesforce services allow businesses to use cloud technology to better bracket customers, partners, and investors."
          btnText="More details"
        />

        <ServiceCard
          icon={<FaProjectDiagram />}
          title="Integration Technology"
          subTitle="Our well coordinated use of cloud computing and digital devices unlocks the path to escalate the heights of proliferation."
          btnText="More details"
        />

        <ServiceCard
          icon={<FaServicestack />}
          title="Service Now"
          subTitle="We provide a cloud based workflow automation platform allowing enterprise organisations to improve operational efficiencies."
          btnText="More details"
        />

        <ServiceCard
          icon={<FaCloud />}
          title="Cloud"
          subTitle="We use the cloud to place your business on the map with high impact transformation and calculated strategies."
          btnText="More details"
        />

        <ServiceCard
          icon={<FaCube />}
          title="Product Engineering"
          subTitle="We use discrete hardwares, ingrained softwares, and IT service solutions for the outline and preparations of products."
          btnText="More details"
        />
      </div>
    </section>
  );
}

export default Services;