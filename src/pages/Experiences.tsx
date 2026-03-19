import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SectionLabel } from "../components/ui/SectionLabel";

const allExperiences = [
  {
    period: "2025 – Present",
    role: "Tech Lead & Project Manager",
    company: "Griote – Project Africa",
    location: "Yaoundé, CM",
    description:
      "Technical direction of full-stack development using React, Node.js, and Docker. Designed and deployed an observability stack with Grafana and Prometheus. Responsible for sprint planning, team coordination, onboarding, and deliverable tracking.",
  },
  {
    period: "Aug 2025 – Present",
    role: "Founder & Mentor",
    company: "LesCracks",
    location: "Yaoundé, CM",
    description:
      "Founded an EdTech agency to train and mentor young engineers in Cameroon. Focus areas: frontend development, DevOps, and ML. Provides structured mentorship on soft skills and actively connects graduates with professional opportunities.",
  },
  {
    period: "May 2025 – Present",
    role: "Full Stack AI Developer Intern",
    company: "Seed Softengine",
    location: "Yaoundé, CM",
    description:
      "Developed browser extensions and full-stack web applications. Integrated generative AI services via LangChain and Gemini AI. Led the adoption of DevOps practices and CI/CD workflows within the engineering team.",
  },
  {
    period: "Apr – Jun 2024",
    role: "Technical Instructor",
    company: "Technopole Training School",
    location: "Yaoundé, CM",
    description:
      "Delivered a structured full-stack curriculum covering HTML, CSS, JavaScript, and Node.js. Designed personalized learning programs adapted to learner profiles. Achieved a 100% student pass rate.",
  },
  {
    period: "2023 – 2024",
    role: "Backend Co-Lead",
    company: "Google Developer Student Club",
    location: "Université de Yaoundé 1",
    description:
      "Organized practical workshops on modern backend technologies including Spring Boot and Node.js. Provided technical mentorship to 20+ junior developers, guiding them on API design, debugging, and project structure.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0, 0, 1] },
  },
};

const ExperiencesPage = () => (
  <>
    <Header />
    <main className="max-w-content mx-auto px-6 md:px-12 pt-32 pb-24">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-mono text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200 mb-16"
      >
        <ArrowLeft size={12} />
        Back
      </Link>

      <SectionLabel>Full Timeline</SectionLabel>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {allExperiences.map((exp, i) => (
          <motion.div key={i} variants={itemVariants}>
            <div
              className={`py-8 border-t border-[#1E1E1E] grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-10 ${
                i === allExperiences.length - 1 ? "border-b" : ""
              }`}
            >
              {/* Left */}
              <div className="flex md:flex-col gap-2 md:gap-1">
                <span className="font-mono text-[11px] text-[#6B6B6B] whitespace-nowrap">
                  {exp.period}
                </span>
                <span className="font-mono text-[11px] text-[#6B6B6B] hidden md:block">
                  {exp.location}
                </span>
              </div>

              {/* Right */}
              <div>
                <h3 className="text-[15px] font-medium text-[#F0F0F0] mb-1 tracking-[-0.01em]">
                  {exp.role}
                </h3>
                <p className="font-mono text-[11px] text-[#6B6B6B] mb-4">
                  {exp.company}
                </p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-mono text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200"
        >
          Download CV
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </main>
    <Footer />
  </>
);

export default ExperiencesPage;
