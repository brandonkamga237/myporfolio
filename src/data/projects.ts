import dishTradImg from "../assets/dishtrad.png";
import egolyaImg from "../assets/egolya.png";
import coachMyMoveImg from "../assets/coach-my-move.png";
import lesCracksImg from "../assets/lescracks.png";
import portfolioImg from "../assets/portfolio.png";
// TODO: add src/assets/griote.png, fortube.png, propelize.png, tekizz.png screenshots
import placeholderImg from "../assets/me.jpeg";

export interface Project {
  index: string;
  title: string;
  type: string;
  description: string;
  stackCore: string[];
  stackInfra: string[];
  /** Full GitHub repo URL — null means private / not yet published */
  github: string | null;
  /** Live demo / deployed URL */
  demo: string | null;
  featured?: boolean;
  thumbnail: string;
}

export const allProjects: Project[] = [
  {
    index: "01",
    title: "Griote Platform",
    type: "Fullstack Platform",
    description:
      "Pan-African platform for structuring, transmitting and showcasing African academic and technological knowledge. Modular architecture with a unified CI/CD pipeline, full monitoring stack, and production-ready deployment infrastructure.",
    stackCore: ["Express.js", "PostgreSQL", "React", "Docker"],
    stackInfra: ["Traefik", "Prometheus", "Grafana", "Loki", "MinIO", "GitHub Actions"],
    // TODO: verify exact repo name
    github: "https://github.com/brandonkamga237/griote-platform",
    // TODO: add live URL when available
    demo: null,
    featured: true,
    thumbnail: placeholderImg, // TODO: replace with src/assets/griote.png
  },
  {
    index: "02",
    title: "DishTrad",
    type: "AI Platform",
    description:
      "AI platform celebrating Cameroonian and Ghanaian traditional cuisine. Combines image recognition and a chatbot for recipe discovery and cultural food documentation. Distributed microservices with async queuing and vector search.",
    stackCore: ["React", "Node.js", "TensorFlow Lite", "LangChain"],
    stackInfra: ["Express", "Sequelize", "MySQL", "ChromaDB", "Gemini", "Docker"],
    // TODO: verify exact repo name
    github: "https://github.com/brandonkamga237/dishtrad",
    demo: null,
    featured: true,
    thumbnail: dishTradImg,
  },
  {
    index: "03",
    title: "ForTube",
    type: "Web App",
    description:
      "Self-hosted YouTube downloader with a premium dark UI. 6 quality levels, real-time progress streaming via SSE, password-protected admin dashboard with analytics, geolocation, and activity logs.",
    stackCore: ["FastAPI", "React 19", "TypeScript", "yt-dlp"],
    stackInfra: ["Uvicorn", "SQLite", "Tailwind CSS", "Framer Motion", "Recharts"],
    // TODO: verify exact repo name
    github: "https://github.com/brandonkamga237/fortube",
    // TODO: add live URL when available
    demo: null,
    featured: true,
    thumbnail: placeholderImg, // TODO: replace with src/assets/fortube.png
  },
  {
    index: "04",
    title: "LesCracks Platform",
    type: "SaaS Platform",
    description:
      "Full training platform for LesCracks with distinct backend and frontend services. Handles user management, courses, and OAuth2 authentication via Google and GitHub. Built for scale with Spring Boot and a modern React frontend.",
    stackCore: ["Spring Boot", "Java 21", "React", "PostgreSQL"],
    stackInfra: ["JWT", "Spring Security OAuth2", "Vite", "Tailwind CSS", "Framer Motion"],
    github: null, // private repo
    demo: "https://lescracks.com",
    featured: true,
    thumbnail: lesCracksImg,
  },
  {
    index: "05",
    title: "CoachMyMove",
    type: "AI Product",
    description:
      "Interactive chess learning platform with a RAG-powered AI coach. Guides users through openings and strategies step by step, explains decisions in plain language, and generates personalized training scenarios.",
    stackCore: ["LangChain", "Gemini API", "Node.js", "Express"],
    stackInfra: ["React", "TypeScript", "MySQL", "Docker"],
    // TODO: verify exact repo name
    github: "https://github.com/brandonkamga237/coach-my-move",
    demo: null,
    thumbnail: coachMyMoveImg,
  },
  {
    index: "06",
    title: "Egolya",
    type: "Browser Extension",
    description:
      "AI platform for WhatsApp message processing — a Node.js API with Google Gemini/LangChain integration and a Chrome extension for WhatsApp Web. Message suggestions, text enhancement, and intelligent automation.",
    stackCore: ["LangChain", "Gemini 2.0 Flash", "Chrome Extension API"],
    stackInfra: ["Node.js", "Express", "Mongoose", "Docker"],
    // TODO: verify exact repo name
    github: "https://github.com/brandonkamga237/egolya",
    demo: null,
    thumbnail: egolyaImg,
  },
  {
    index: "07",
    title: "TekIzz",
    type: "SaaS Platform",
    description:
      "Tech training platform with Spring Boot backend, OAuth2, and user management. Modern frontend with full internationalization support, built with React 19 and a rich component library.",
    stackCore: ["Spring Boot", "Java 21", "React 19", "TypeScript"],
    stackInfra: ["PostgreSQL", "JWT", "OAuth2", "i18next", "Tailwind CSS", "Framer Motion"],
    // TODO: verify exact repo name
    github: "https://github.com/brandonkamga237/tekizz",
    // TODO: add live URL when available
    demo: null,
    thumbnail: placeholderImg, // TODO: replace with src/assets/tekizz.png
  },
  {
    index: "08",
    title: "Propelize",
    type: "REST API",
    description:
      "Secure, modular Node.js RESTful API for user and vehicle management. Implements JWT authentication, full CRUD operations, input validation, and Docker-ready production deployment.",
    stackCore: ["Node.js", "Express", "PostgreSQL", "JWT"],
    stackInfra: ["Sequelize ORM", "Joi", "Vitest", "Docker Compose"],
    // TODO: verify exact repo name
    github: "https://github.com/brandonkamga237/propelize",
    demo: null,
    thumbnail: placeholderImg, // TODO: replace with src/assets/propelize.png
  },
  {
    index: "09",
    title: "Portfolio",
    type: "Web App",
    description:
      "This portfolio. Built from scratch with a focus on editorial design, intentional typography, ambient backgrounds, and minimal interaction patterns inspired by premium product companies.",
    stackCore: ["React", "TypeScript", "Framer Motion"],
    stackInfra: ["Vite", "Tailwind CSS", "Docker", "Traefik"],
    github: "https://github.com/brandonkamga237/myporfolio",
    demo: "https://brandonkamga.com",
    thumbnail: portfolioImg,
  },
];

/** Top 4 projects for the homepage Work section */
export const featuredProjects = allProjects.slice(0, 4);
