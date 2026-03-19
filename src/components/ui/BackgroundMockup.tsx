import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Ambient background mockup — absolutely positioned within a
 * `relative overflow-hidden` parent section.
 *
 * Two-layer approach:
 *   outer div  → CSS positioning (top/right/bottom/left + centering transform)
 *   motion.img → Framer Motion parallax (y) + visual treatment (blur, grayscale)
 *
 * The grain overlay (body::before z-9999) sits above everything,
 * so these images integrate seamlessly into the page texture.
 */

interface BackgroundMockupProps {
  src: string;
  /** Inline CSS for the outer positioning shell */
  style: React.CSSProperties;
  /** 0–1, recommended 0.03–0.08 */
  opacity?: number;
  /** px — heavy values (60–120) reduce to abstracted light/shadow */
  blur?: number;
  /** Parallax travel distance as CSS percentage string, e.g. "8%" */
  travel?: string;
  className?: string;
}

export function BackgroundMockup({
  src,
  style,
  opacity = 0.05,
  blur = 80,
  travel = "8%",
  className = "",
}: BackgroundMockupProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const half = parseFloat(travel) / 2;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${half}%`, `${half}%`]
  );

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ opacity, ...style }}
    >
      <motion.img
        src={src}
        alt=""
        draggable={false}
        loading="lazy"
        style={{
          y,
          filter: `blur(${blur}px) grayscale(1) brightness(0.9)`,
          willChange: "transform",
        }}
        className="w-full h-auto block"
      />
    </div>
  );
}
