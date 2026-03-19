import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionLabel } from "../ui/SectionLabel";

const experiences = [
  {
    period: "2025 – Present",
    role: "Tech Lead & Project Manager",
    company: "Griote – Project Africa",
    location: "Yaoundé, CM",
    description:
      "Technical direction of full-stack development (React, Node.js, Docker). Designed and deployed an observability stack with Grafana and Prometheus. Manages sprint planning, team coordination, and deliverable tracking.",
  },
  {
    period: "Aug 2025 – Present",
    role: "Founder & Mentor",
    company: "LesCracks",
    location: "Yaoundé, CM",
    description:
      "Built an EdTech agency that trains young engineers in frontend development, DevOps, and ML. Provides mentorship on soft skills and connects graduates with professional opportunities.",
  },
  {
    period: "May 2025 – Present",
    role: "Full Stack AI Developer Intern",
    company: "Seed Softengine",
    location: "Yaoundé, CM",
    description:
      "Developed browser extensions and full-stack applications. Integrated generative AI services and APIs. Led adoption of DevOps practices within the engineering team.",
  },
  {
    period: "2023 – 2024",
    role: "Backend Co-Lead",
    company: "Google Developer Student Club",
    location: "Université de Yaoundé 1",
    description:
      "Organized practical workshops on Spring Boot and Node.js. Mentored 20+ junior developers on backend architecture, API design, and debugging complex systems.",
  },
  {
    period: "Apr – Jun 2024",
    role: "Technical Instructor",
    company: "Technopole Training School",
    location: "Yaoundé, CM",
    description:
      "Delivered a full-stack web curriculum covering HTML, CSS, JavaScript, and Node.js. Designed personalized learning programs adapted to each cohort. Achieved a 100% student pass rate.",
  },
];

/** Homepage shows only the 3 most recent entries */
const PREVIEW_COUNT = 3;
const previewExperiences = experiences.slice(0, PREVIEW_COUNT);

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

export function Experience() {
  return (
    <section id="experience" className="py-32">
      <SectionLabel>Experience</SectionLabel>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {previewExperiences.map((exp, i) => (
          <motion.div key={i} variants={itemVariants}>
            <div
              className={`py-8 border-t border-[#1E1E1E] grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-10 ${
                i === PREVIEW_COUNT - 1 ? "border-b" : ""
              }`}
            >
              {/* Left: period + location */}
              <div className="flex md:flex-col gap-2 md:gap-1">
                <span className="font-mono text-[11px] text-[#6B6B6B] leading-relaxed whitespace-nowrap">
                  {exp.period}
                </span>
                <span className="font-mono text-[11px] text-[#6B6B6B] hidden md:block">
                  {exp.location}
                </span>
              </div>

              {/* Right: content */}
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

      <div className="flex items-center gap-8 mt-10">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-mono text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200"
        >
          Download CV
          <ArrowUpRight size={12} />
        </a>
        <Link
          to="/experiences"
          className="inline-flex items-center gap-1 text-sm font-mono text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200"
        >
          View all experiences
          <ArrowUpRight size={12} />
        </Link>
      </div>
    </section>
  );
}
