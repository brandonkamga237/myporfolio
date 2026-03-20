import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { BackgroundMockup } from "../ui/BackgroundMockup";
import egolyaImg from "../../assets/egolya.png";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #0C0C0C 50%, #0A0A0A 100%)" }}>
      {/*
        Background mockup — Egolya screenshot
        Positioned bottom-right, fading into the section edge.
        Creates depth at the last touchpoint of the page,
        leaving the visitor with a visual echo of the work.
      */}
      <BackgroundMockup
        src={egolyaImg}
        opacity={0.052}
        blur={85}
        travel="6%"
        style={{
          width: "50%",
          bottom: "-12%",
          right: "-4%",
        }}
      />

      {/* Warm brand glow — bottom-left, gives the page an energetic ending */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(232,255,71,0.03) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <SectionLabel>Contact</SectionLabel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
        >
          {/* Display headline — clip-path reveal */}
          <div className="overflow-hidden mb-8">
            <motion.h2
              className="text-[clamp(2.4rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#F0F0F0]"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            >
              Let&apos;s build
              <br />
              something.
            </motion.h2>
          </div>

          <p className="text-sm text-[#6B6B6B] mb-12 max-w-[480px] leading-relaxed">
            Open to AI engineering roles, founding engineer opportunities, and
            startup collaborations &mdash; particularly in edtech, developer
            tools, or AI products. If you&apos;re building something hard, I
            want to hear about it.
          </p>

          {/* Primary contacts */}
          <div className="flex flex-col gap-4 mb-12">
            <a
              href="mailto:brandonkamga237@gmail.com"
              className="group inline-flex items-center gap-2 text-base text-[#F0F0F0] hover:text-[#E8FF47] transition-colors duration-200 py-1"
            >
              <span>brandonkamga237@gmail.com</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/brandon-duclerc-tamwa-kamga/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-[#A8A8A8] hover:text-[#E8FF47] transition-colors duration-200 py-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </div>

          {/* Community — visually separated */}
          <div className="border-t border-[#1E1E1E] pt-8">
            <p className="font-mono text-[11px] text-[#6B6B6B] tracking-[0.1em] uppercase mb-4">
              Or join the community
            </p>
            <a
              href="https://whatsapp.com/channel/0029VbAyFN21HsprPN1amr2a"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200 py-1"
            >
              <span>WhatsApp Channel</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
