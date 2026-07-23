import "./Team.css";
import { FaLinkedinIn } from "react-icons/fa";

import member1 from "../../assets/Asir.jpg";
import member2 from "../../assets/Mam.jpg";
import member3 from "../../assets/Rsir.jpg";

function Team() {
  return (
    <section className="team">

      <div className="team-header">
    

        <h2>OUR TEAM</h2>

        <p>
          Our talented professionals combine innovation, expertise, and
          collaboration to deliver exceptional technology solutions for our
          clients.
        </p>
      </div>

      <div className="team-container">

        <div className="team-card">
          <div className="team-image">
            <img src={member1} alt="John Doe, Chief Executive Officer" />
          </div>

          <h3>Anand Chaudhary</h3>
          <h4>Director</h4>

       <p>
  Driving business strategy, innovation, and organizational growth through visionary leadership and industry expertise.
</p>

          <a
            href="https://www.linkedin.com/in/anand-chaudhary-921b2416/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit John Doe's LinkedIn profile"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img src={member2} alt="Jane Smith, Technical Director" />
          </div>

  
            
          <h3>Sunidhi Chauhan</h3>
          <h4>Associate Vice President</h4>

       <p>
            Overseeing operations, client success, and strategic initiatives while delivering high quality business outcomes.  
       </p>
          <a
            href="https://www.linkedin.com/in/sunidhi-chauhan-1b71b6180/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Jane Smith's LinkedIn profile"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img src={member3} alt="Alex Brown, Project Manager" />
          </div>

        <h3>Rajat Sinha</h3>
          <h4>Associate Director</h4>
<p>
  Leading cross functional teams to deliver scalable technology solutions and ensure successful project execution.
</p>
          <a
            href="https://www.linkedin.com/in/rajat-sinha-949659251/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Alex Brown's LinkedIn profile"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
        </div>

      </div>

    </section>
  );
}

export default Team;