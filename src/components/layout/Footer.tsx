import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t border-[#1E1E1E] mt-32">
      <div className="max-w-content mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left: copyright + community */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs text-[#6B6B6B]">
              &copy; 2026 Brandon Kamga
            </p>
            <a
              href="https://whatsapp.com/channel/0029VbAyFN21HsprPN1amr2a"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-mono text-[11px] text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200"
            >
              Join the community
              <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* Right: social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/brandonkamga237"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/brandon-duclerc-tamwa-kamga/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200"
            >
              <FaLinkedin size={15} />
            </a>
            <a
              href="https://x.com/TamwaKamga51178"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200"
            >
              <FaXTwitter size={15} />
            </a>
            <a
              href="https://youtube.com/@brandonkamga"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200"
            >
              <FaYoutube size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
