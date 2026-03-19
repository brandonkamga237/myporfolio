import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiSpring,
  SiTensorflow,
  SiDocker,
  SiRabbitmq,
  SiGrafana,
  SiPrometheus,
  SiPostgresql,
  SiPython,
  SiJavascript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { BrainCircuit, Sparkles, Database } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";

interface StackItemType {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  /** Brand color shown on hover */
  color: string;
}

interface StackGroup {
  label: string;
  items: StackItemType[];
}

const stackGroups: StackGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "React",        icon: SiReact,       color: "#61DAFB" },
      { name: "Next.js",      icon: SiNextdotjs,   color: "#FFFFFF" },
      { name: "TypeScript",   icon: SiTypescript,  color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js",     icon: SiNodedotjs, color: "#339933" },
      { name: "Express",     icon: SiExpress,   color: "#CCCCCC" },
      { name: "FastAPI",     icon: SiFastapi,   color: "#009688" },
      { name: "Spring Boot", icon: SiSpring,    color: "#6DB33F" },
    ],
  },
  {
    label: "AI / ML",
    items: [
      { name: "LangChain",  icon: BrainCircuit, color: "#1CB888" },
      { name: "Gemini AI",  icon: Sparkles,     color: "#8E75FF" },
      { name: "ChromaDB",   icon: Database,     color: "#E8A45A" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "Docker",     icon: SiDocker,     color: "#2496ED" },
      { name: "RabbitMQ",   icon: SiRabbitmq,   color: "#FF6600" },
      { name: "Grafana",    icon: SiGrafana,    color: "#F46800" },
      { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "Python",     icon: SiPython,     color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Java",       icon: FaJava,       color: "#ED8B00" },
    ],
  },
];

/* ─── Single item with isolated hover state ─────────────────────────────── */
function StackItem({ item }: { item: StackItemType }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="flex items-center gap-2 text-sm cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? item.color : "#A8A8A8",
        transition: "color 0.18s ease",
      }}
    >
      <item.icon
        size={13}
        style={{
          color: hovered ? item.color : "#6B6B6B",
          transition: "color 0.18s ease",
          flexShrink: 0,
        }}
      />
      {item.name}
    </li>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0, 0, 1] },
  },
};

export function Stack() {
  return (
    <section id="stack" className="py-32">
      <SectionLabel>Stack</SectionLabel>

      <p className="text-sm text-[#6B6B6B] mb-14 max-w-[480px] leading-relaxed">
        I work across the full product lifecycle &mdash; from schema design and
        API contracts to deployment pipelines and observability.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10"
      >
        {stackGroups.map((group) => (
          <motion.div key={group.label} variants={itemVariants}>
            <p className="font-mono text-[11px] text-[#6B6B6B] tracking-[0.12em] uppercase mb-4">
              {group.label}
            </p>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <StackItem key={item.name} item={item} />
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
