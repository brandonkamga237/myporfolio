import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import meImg from "../../assets/me.jpeg";
import dishTradImg from "../../assets/dishtrad.png";
import { BackgroundMockup } from "../ui/BackgroundMockup";

export function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/*
        Background mockup — DishTrad screenshot
        Positioned right-center, bleeds slightly off-screen.
        blur(100px) + grayscale reduces it to abstract light/dark patches
        that break the flatness of the pure-black background.
      */}
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

      {/* Content — z-10 to sit above the mockup */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
      >
        {/* Mobile profile photo — hidden on md+ */}
        <div className="md:hidden mb-10">
          <img
            src={meImg}
            alt="Brandon Kamga"
            className="w-14 h-14 rounded-full object-cover grayscale brightness-75 border border-[#1E1E1E]"
          />
        </div>

        {/* Label + availability */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-10">
          <p className="font-mono text-[11px] text-[#6B6B6B] tracking-[0.14em] uppercase">
            Fullstack AI Engineer &mdash; Yaound&eacute;, CM
          </p>
          <button
            onClick={scrollToContact}
            className="flex items-center gap-1.5 group w-fit"
            aria-label="Available for new work"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
            </span>
            <span className="font-mono text-[11px] text-green-400 tracking-[0.12em] uppercase group-hover:text-green-300 transition-colors duration-200">
              Available for new work
            </span>
          </button>
        </div>

        {/* Display name — clip-path reveal */}
        <div className="overflow-hidden mb-7">
          <motion.h1
            className="text-[clamp(3.2rem,9vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#F0F0F0]"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            Brandon
            <br />
            Kamga.
          </motion.h1>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg text-[#6B6B6B] max-w-[500px] leading-relaxed mb-5">
          I design and build <span className="text-[#A8A8A8]">AI-powered software systems</span>{" "} 
          — from intelligent tools to scalable backend architectures.
        </p>

        {/* Currently building */}
        <p className="font-mono text-[11px] text-[#6B6B6B] tracking-wide mb-12">
          Now &rarr;&nbsp; Griote Project-Africa &middot; LesCracks &middot; YouTube
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
