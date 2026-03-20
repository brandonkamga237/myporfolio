import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import meImg from "../../assets/me.jpeg";
import dishTradImg from "../../assets/dishtrad.png";
import { BackgroundMockup } from "../ui/BackgroundMockup";

export function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">

      {/* ── Brand glow — always-visible warm presence behind H1 ── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div
          className="absolute top-[20%] -left-[8%] w-[640px] h-[640px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(232,255,71,0.045) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── Background mockup — DishTrad ── */}
      <BackgroundMockup
        src={dishTradImg}
        opacity={0.055}
        blur={100}
        travel="10%"
        style={{
          width: "52%",
          top: "50%",
          right: "-4%",
          transform: "translateY(-50%)",
        }}
      />

      {/* ── Desktop portrait — absolute right, masked on edges ── */}
      <motion.div
        className="hidden md:block absolute right-0 top-1/2 -translate-y-[55%] pointer-events-none select-none"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.25, 0, 0, 1] }}
        aria-hidden="true"
      >
        <img
          src={meImg}
          alt=""
          draggable={false}
          className="h-[340px] w-auto object-cover grayscale brightness-[0.55]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 28%, black 72%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 28%, black 72%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* ── Main content — right padding on desktop reserves space for portrait ── */}
      <motion.div
        className="relative z-10 md:pr-[272px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
      >
        {/* Mobile profile photo */}
        <div className="md:hidden mb-10">
          <img
            src={meImg}
            alt="Brandon Kamga"
            className="w-14 h-14 rounded-full object-cover grayscale brightness-75 border border-[#1E1E1E]"
          />
        </div>

        {/* Label + availability pill */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-10">
          <p className="font-mono text-[11px] text-[#6B6B6B] tracking-[0.14em] uppercase">
            Fullstack AI Engineer &mdash; Yaound&eacute;, CM
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#E8FF47]/[0.07] border border-[#E8FF47]/20 w-fit group hover:bg-[#E8FF47]/10 hover:border-[#E8FF47]/35 transition-all duration-200"
            aria-label="Available for new work"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8FF47] opacity-50" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E8FF47]" />
            </span>
            <span className="font-mono text-[10px] text-[#E8FF47] tracking-[0.1em] uppercase">
              Available for new work
            </span>
          </button>
        </div>

        {/* H1 — clip-path reveal */}
        <div className="overflow-hidden mb-7">
          <motion.h1
            className="text-[clamp(3.2rem,9vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#F0F0F0]"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
          >
            Brandon
            <br />
            Kamga.
          </motion.h1>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg text-[#6B6B6B] max-w-[480px] leading-relaxed mb-3">
          I design and build{" "}
          <span className="text-[#A8A8A8]">AI-powered software systems</span>
          {" "}— from intelligent tools to scalable backend architectures.
        </p>

        {/* Bold position statement */}
        <p className="text-sm text-[#3E3E3E] max-w-[440px] leading-relaxed mb-8 font-mono tracking-wide italic">
          Building for Africa. Visible globally.
        </p>

        {/* Currently building — active links */}
        <p className="font-mono text-[11px] text-[#6B6B6B] tracking-wide mb-12">
          <span className="text-[#3E3E3E]">Now</span>
          <span className="text-[#E8FF47]/40 mx-1.5">&rarr;</span>
          <a
            href="https://griote.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A8A8A8] transition-colors duration-150"
          >
            Griote
          </a>
          <span className="mx-1.5 text-[#2A2A2A]">&middot;</span>
          <a
            href="https://lescracks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A8A8A8] transition-colors duration-150"
          >
            LesCracks
          </a>
          <span className="mx-1.5 text-[#2A2A2A]">&middot;</span>
          <a
            href="https://youtube.com/@brandonkamga"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A8A8A8] transition-colors duration-150"
          >
            YouTube
          </a>
        </p>

        {/* CTA */}
        <button
          onClick={scrollToWork}
          className="group flex items-center gap-2 text-sm text-[#A8A8A8] hover:text-[#E8FF47] transition-colors duration-200"
        >
          <span>See my work</span>
          <ArrowDown
            size={14}
            className="group-hover:translate-y-1 transition-transform duration-200"
          />
        </button>
      </motion.div>
    </section>
  );
}
