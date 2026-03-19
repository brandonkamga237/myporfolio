import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { BackgroundMockup } from "../ui/BackgroundMockup";
import lesCracksImg from "../../assets/lescracks.png";

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <>{count}</>;
}

export function LesCracks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="lescracks" className="relative py-32 overflow-hidden">
      {/*
        Background mockup — lescracks.com screenshot
        Positioned top-right, bleeding slightly off-screen.
        The soft-blurred interface suggests a product without
        competing with the foreground text.
      */}
      <BackgroundMockup
        src={lesCracksImg}
        opacity={0.06}
        blur={72}
        travel="8%"
        style={{
          width: "54%",
          top: "-8%",
          right: "-6%",
        }}
      />

      <div className="relative z-10">
        <SectionLabel>Initiative</SectionLabel>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-20"
        >
          {/* Left: text */}
          <div className="max-w-[520px]">
            <h2 className="text-[22px] font-semibold text-[#F0F0F0] tracking-[-0.02em] mb-2 leading-tight">
              LesCracks
            </h2>
            <p className="font-mono text-[11px] text-[#6B6B6B] tracking-[0.06em] italic mb-7">
              &ldquo;Deviens un Crack de la Tech.&rdquo;
            </p>
            <p className="text-[15px] text-[#A8A8A8] leading-[1.8] mb-8">
              An EdTech initiative that helps young engineers in build
              thier own paths in tech &mdash; through structured
              mentorship, hands-on training, and direct access to professional
              opportunities.
            </p>
            <a
              href="https://lescracks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-[#A8A8A8] hover:text-[#E8FF47] transition-colors duration-200"
            >
              <span>lescracks.com</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </div>

          {/* Right: metrics */}
          <div className="flex flex-row md:flex-col gap-10 md:gap-8 shrink-0">
            <div>
              <p className="text-[clamp(2rem,5vw,2.8rem)] font-semibold text-[#F0F0F0] tracking-[-0.04em] leading-none mb-2">
                <CountUp target={10} inView={inView} />+
              </p>
              <p className="font-mono text-[11px] text-[#6B6B6B] tracking-[0.1em] uppercase">
                Students mentored
              </p>
            </div>
            <div>
              <p className="text-[clamp(2rem,5vw,2.8rem)] font-semibold text-[#F0F0F0] tracking-[-0.04em] leading-none mb-2">
                <CountUp target={2} inView={inView} />
              </p>
              <p className="font-mono text-[11px] text-[#6B6B6B] tracking-[0.1em] uppercase">
                Cohorts trained
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
