import "./Team.css";
import { FaLinkedinIn } from "react-icons/fa";

import member1 from "../../assets/Asir.jpg";
import member2 from "../../assets/Mam.jpg";
import member3 from "../../assets/Rsir.jpg";
import member4 from "../../assets/Mam.jpg";

function Team() {
  return (
    <section className="team-section">

      <div className="team-heading">
        <h2>Technology enables what we do Our people define how we do it</h2>

        <p>
          Together we shape our strategy, build our capabilities and ensure every experience is a commitment to delivering meaningful results.
        </p>
      </div>

<div className="team-container">

  {/* Rekha */}
  <div className="team-card">
    <div className="team-image">
      <img /*src={member4} */alt="Rekha Singh, Founder and CEO" />
    </div>

    <h3>Rekha Singh</h3>
    <h4>Founder & CEO</h4>

    <p>
      Driving the company's vision, strategic growth and innovation
      to build strong relationships and deliver value.
    </p>

    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Rekha Singh's LinkedIn profile"
    >
      <FaLinkedinIn aria-hidden="true" />
    </a>
  </div>


  {/* Anand */}
  <div className="team-card">
    <div className="team-image">
      <img /*src={member1} */alt="Anand Chaudhary, Director" />
    </div>

    <h3>Anand Chaudhary</h3>
    <h4>Director</h4>

    <p>
      Driving business strategy, innovation and organizational growth
      through visionary leadership and expertise.
    </p>

    <a
      href="https://www.linkedin.com/in/anand-chaudhary-921b2416/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Anand Chaudhary's LinkedIn profile"
    >
      <FaLinkedinIn aria-hidden="true" />
    </a>
  </div>


  {/* Sunidhi */}
  <div className="team-card">
    <div className="team-image">
      <img /*src={member2}*/ alt="Sunidhi Chauhan, Associate Vice President" />
    </div>

    <h3>Sunidhi Chauhan</h3>
    <h4>Associate Vice President</h4>

    <p>
      Overseeing operations, client success, and strategic initiatives
      while delivering high quality business outcomes.
    </p>

    <a
      href="https://www.linkedin.com/in/sunidhi-chauhan-1b71b6180/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Sunidhi Chauhan's LinkedIn profile"
    >
      <FaLinkedinIn aria-hidden="true" />
    </a>
  </div>


  {/* Rajat */}
  <div className="team-card">
    <div className="team-image">
      <img /*src={member3}*/ alt="Rajat Sinha, Associate Director" />
    </div>

    <h3>Rajat Sinha</h3>
    <h4>Associate Director</h4>

    <p>
      Leading cross functional teams to deliver scalable technology
      solutions and ensure successful project execution.
    </p>

    <a
      href="https://www.linkedin.com/in/rajat-sinha-949659251/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Rajat Sinha's LinkedIn profile"
    >
      <FaLinkedinIn aria-hidden="true" />
    </a>
  </div>

</div>
    </section>
  );
}

export default Team;