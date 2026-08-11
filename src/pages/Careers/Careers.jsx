import { useState } from "react";
import "./Careers.css";

import Header from "../Header/Header";
import Footer from "../../components/Footer/Footer";

import CareerCard from "../../components/CareerCard/CareerCard";
import CareerModal from "../../components/CareerModal/CareerModal";

const jobs = [
  {
    id: 1,
    title: "Accessibility Trainee",
    experience: "Fresher",
    responsibilities: [
      "Create technical content.",
      "Research industry trends.",
      "Develop user documentation.",
      "Collaborate with technical teams.",
    ],
  },
  {
    id: 2,
    title: "Accessibility Tester",
    experience: "6 months",
    responsibilities: [
      "Write clean PHP code.",
      "Build reusable modules.",
      "Debug applications.",
      "Work with APIs.",
    ],
  },
  {
    id: 3,
    title: "Manager",
    experience: "4-5 Years",
    responsibilities: [
      "Design graphics.",
      "Create marketing material.",
      "Brand identity.",
      "Social media creatives.",
    ],
  },
  {
    id: 4,
    title: "Quality Analyst",
    experience: "2–3 Years",
    responsibilities: [
      "Keyword research.",
      "On-page SEO.",
      "Technical SEO.",
      "Analytics reporting.",
    ],
  },
];

function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <Header />

      <main className="career-page">

        {/* Hero Section */}
        <section className="career-hero">

          

          <h1>
            Current Job Openings
          </h1>

          <p>
            Join our growing team and build innovative digital solutions with
            talented professionals. Explore exciting opportunities and take
            the next step in your career.
          </p>

          

        </section>

        {/* Job Cards */}
        <section className="career-grid">

          {jobs.map((job) => (
            <CareerCard
              key={job.id}
              job={job}
              onApply={() => setSelectedJob(job)}
            />
          ))}

        </section>

        {/* Modal */}
        {selectedJob && (
          <CareerModal
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
          />
        )}

      </main>

      <Footer />
    </>
  );
}

export default Careers;