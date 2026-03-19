import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { SectionLabel } from "../ui/SectionLabel";
import { featuredProjects } from "../../data/projects";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0, 0, 1] },
  },
};

export function Work() {
  return (
    <section id="work" className="py-32">
      <SectionLabel>Selected Work</SectionLabel>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {featuredProjects.map((project, i) => (
          <motion.div key={project.index} variants={itemVariants}>
            <div
              className={`group relative py-8 border-t border-[#1E1E1E] flex gap-5 md:gap-8 transition-colors duration-200 hover:bg-white/[0.015] ${
                i === featuredProjects.length - 1 ? "border-b" : ""
              }`}
            >
              {/* Thumbnail — desktop only */}
              <div className="hidden md:block shrink-0 w-[108px] h-[66px] overflow-hidden mt-0.5 rounded-sm">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-[0.45] group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-500"
                />
              </div>

              {/* Index */}
              <span className="font-mono text-[11px] text-[#6B6B6B] mt-[3px] shrink-0 w-5">
                {project.index}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Title + tags row */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <h3 className="text-[15px] font-medium text-[#F0F0F0] group-hover:text-[#E8FF47] transition-colors duration-200 tracking-[-0.01em] leading-snug">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="font-mono text-[10px] text-[#E8FF47]/60 bg-[#E8FF47]/5 px-1.5 py-0.5">
                      Featured
                    </span>
                  )}
                  <span className="font-mono text-[10px] text-[#6B6B6B] bg-white/[0.04] px-1.5 py-0.5">
                    {project.type}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-col gap-1 mb-5">
                  {project.stackCore.length > 0 && (
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                      {project.stackCore.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] text-[#A8A8A8] tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.stackInfra.length > 0 && (
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                      {project.stackInfra.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] text-[#6B6B6B] tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* GitHub / Demo pills — always rendered if URL exists */}
                <div className="flex items-center gap-2 flex-wrap">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#2A2A2A] font-mono text-[11px] text-[#A8A8A8] hover:text-[#F0F0F0] hover:border-[#3E3E3E] transition-all duration-200"
                    >
                      <FaGithub size={11} />
                      GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#1E1E1E] font-mono text-[11px] text-[#3A3A3A] cursor-default select-none">
                      <FaGithub size={11} />
                      Private repo
                    </span>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E8FF47]/25 font-mono text-[11px] text-[#E8FF47]/70 hover:text-[#E8FF47] hover:border-[#E8FF47]/50 transition-all duration-200"
                    >
                      <ArrowUpRight size={11} />
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-sm font-mono text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200"
        >
          View all projects
          <ArrowUpRight size={12} />
        </Link>
      </div>
    </section>
  );
}
