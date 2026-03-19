import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (!isHome) {
      window.location.href = "/" + href;
      return;
    }
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1E1E1E]"
          : ""
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          to="/"
          className="font-mono text-sm font-medium text-[#F0F0F0] tracking-widest hover:text-[#E8FF47] transition-colors duration-200"
        >
          BK
        </Link>

        {/* Desktop nav + availability */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Availability indicator */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="flex items-center gap-1.5 group"
            aria-label="Available for new work"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
            </span>
            <span className="font-mono text-[10px] text-green-400 tracking-[0.12em] uppercase group-hover:text-green-300 transition-colors duration-200">
              Available
            </span>
          </button>
        </div>

        {/* Mobile: availability dot + menu toggle */}
        <div className="md:hidden flex items-center gap-4">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#6B6B6B] hover:text-[#F0F0F0] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <span className="font-mono text-xs">
              {menuOpen ? "[close]" : "[menu]"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#1E1E1E] px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-base text-[#A8A8A8] hover:text-[#F0F0F0] transition-colors duration-200 font-medium py-1"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#1E1E1E]">
            <p className="font-mono text-[11px] text-green-400 tracking-[0.1em] uppercase">
              Open to new work
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
