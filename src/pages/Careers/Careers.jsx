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
      "Learn and apply web accessibility guidelines.",
      "Assist with accessibility testing of websites and digital content.",
      "Review documents and digital content for accessibility issues.",
      "Work with senior accessibility professionals to improve content quality.",
    ],
  },

  {
    id: 2,
    title: "Accessibility Tester",
    experience: "6 months",
    responsibilities: [
      "Perform accessibility testing using manual and automated tools.",
      "Identify accessibility issues across websites and digital content.",
      "Test content using keyboard navigation and assistive technologies.",
      "Document findings and work with teams to resolve accessibility issues.",
    ],
  },

  {
    id: 3,
    title: "Manager",
    experience: "4–5 Years",
    responsibilities: [
      "Manage accessibility projects and day-to-day team operations.",
      "Coordinate with clients and internal teams to deliver projects on time.",
      "Review project quality, performance, and deliverables.",
      "Guide team members and ensure efficient resource allocation.",
    ],
  },

  {
    id: 4,
    title: "Quality Analyst",
    experience: "2–3 Years",
    responsibilities: [
      "Perform quality checks on digital content and accessibility deliverables.",
      "Identify errors and inconsistencies and document quality issues.",
      "Review work against project requirements and accessibility standards.",
      "Collaborate with teams to improve accuracy, consistency, and overall quality.",
    ],
  },
];

function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <Header />

      <main className="career-page">

        {/* =========================
            HERO SECTION
        ========================= */}
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


        {/* =========================
            JOB CARDS
        ========================= */}
        <section className="career-grid">

          {jobs.map((job) => (
            <CareerCard
              key={job.id}
              job={job}
              onApply={() => setSelectedJob(job)}
            />
          ))}

        </section>


        {/* =========================
            CAREER MODAL
        ========================= */}
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