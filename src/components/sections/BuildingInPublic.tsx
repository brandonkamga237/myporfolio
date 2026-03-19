import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { SectionLabel } from "../ui/SectionLabel";

const videos = [
  {
    title: "Partir de Zéro",
    url: "https://youtu.be/zUO5nmw1gQ0",
  },
  {
    title: "Software Engineering : Ce que personne ne te dit avant de commencer",
    url: "https://youtu.be/hVgL4N1sDLc",
  },
  {
    title: "Le problème que YouTube ne résout pas… alors je crée Fortube (Build in Public #1)",
    url: "https://youtu.be/qjD1AYWpsxU",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0, 0, 1] as const },
  },
};

export function BuildingInPublic() {
  return (
    <section id="building" className="py-32">
      <SectionLabel>Building in Public</SectionLabel>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] as const }}
      >
        {/* YouTube block */}
        <div className="mb-16">
          <div className="flex items-start gap-3 mb-8">
            <FaYoutube size={15} className="text-[#6B6B6B] mt-0.5 shrink-0" />
            <div>
              <p className="text-[15px] text-[#A8A8A8] leading-[1.8] max-w-[520px] mb-4">
                I document my work, experiments, and learning on YouTube. Not
                tutorials &mdash; raw process: what I built, what broke, what I
                learned.
              </p>
              <a
                href="https://youtube.com/@brandonkamga"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm font-mono text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200"
              >
                youtube.com/@brandonkamga
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </div>
          </div>

          {/* Video list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="ml-7"
          >
            {videos.map((video, i) => (
              <motion.div key={i} variants={itemVariants}>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-start justify-between gap-6 py-5 border-t border-[#1E1E1E] hover:bg-white/[0.015] transition-colors duration-200 ${
                    i === videos.length - 1 ? "border-b" : ""
                  }`}
                >
                  <p className="text-sm text-[#6B6B6B] group-hover:text-[#A8A8A8] transition-colors duration-200 leading-relaxed">
                    {video.title}
                  </p>
                  <ArrowUpRight
                    size={13}
                    className="text-[#6B6B6B] shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 group-hover:text-[#E8FF47] transition-all duration-200"
                  />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E1E1E] pt-12">
          {/* WhatsApp block */}
          <div className="flex items-start gap-3">
            <FaWhatsapp
              size={15}
              className="text-[#6B6B6B] mt-0.5 shrink-0"
            />
            <div>
              <p className="text-[15px] font-medium text-[#F0F0F0] mb-2">
                Stay in the loop.
              </p>
              <p className="text-sm text-[#6B6B6B] max-w-[440px] leading-relaxed mb-5">
                Updates, experiments, and ideas from my work &mdash; no feed,
                no algorithm. Join the community on WhatsApp.
              </p>
              <a
                href="https://whatsapp.com/channel/0029VbAyFN21HsprPN1amr2a"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm font-mono text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200"
              >
                Join the channel
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
