import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { BackgroundMockup } from "../ui/BackgroundMockup";
import meImg from "../../assets/me.jpeg";

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #0D0D0D 30%, #0D0D0D 70%, #0A0A0A 100%)" }}>
      {/*
        Background mockup — profile photo
        At blur(120px) + grayscale, the image dissolves into a soft luminous
        patch on the right: a human presence without being a literal portrait.
        It warms the cold dark section without adding visual noise.
      */}
      <BackgroundMockup
        src={meImg}
        opacity={0.07}
        blur={120}
        travel="6%"
        style={{
          width: "44%",
          top: "50%",
          right: "-8%",
          transform: "translateY(-50%)",
        }}
      />

      <div className="relative z-10">
        <SectionLabel>About</SectionLabel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
          className="max-w-[640px] space-y-6 text-[15px] text-[#A8A8A8] leading-[1.8]"
        >
          <p>
            I’m Brandon Kamga, an <div className="text-[#F0F0F0] inline-flex items-center gap-0.5 hover:text-[#E8FF47] transition-colors duration-200" > AI & Software Engineer </div> based in Yaoundé, Cameroon.
            I design and build intelligent software systems that combine modern web architecture,
            distributed infrastructure, and generative AI — from API design to production deployment.
          </p>

          {/* Stats row — breaks the text wall, adds substance */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 py-6 border-y border-[#1A1A1A]">
            {[
              { value: "Tech Lead", label: "@ Griote Project-Africa" },
              { value: "Founder", label: "of LesCracks" },
              { value: "20+", label: "engineers mentored" },
              { value: "9", label: "projects shipped" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-[#F0F0F0] text-sm font-medium tracking-[-0.01em]">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] text-[#6B6B6B] tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <p>
            My work spans AI-powered tools, browser extensions, microservice architectures,
            and observability-driven platforms. I focus on systems that are reliable, testable,
            and maintainable — not just functional.

            Currently, I serve as Tech Lead at
            <span className="text-[#F0F0F0]"> Griote Project-Africa</span>,
            where I direct full-stack engineering and infrastructure across a stack that includes
            Grafana, Prometheus, and Docker-based orchestration.
          </p>

          <p>
            In parallel, I founded {" "}
            <a
              href="https://lescracks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F0F0F0] inline-flex items-center gap-0.5 hover:text-[#E8FF47] transition-colors duration-200"
            >
              LesCracks
              <ArrowUpRight size={12} className="mb-0.5" />
            </a>
            — an EdTech initiative dedicated to helping ambitious young engineers in Cameroon
            build unconventional and high-impact careers in technology through mentorship
            and structured technical training.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
