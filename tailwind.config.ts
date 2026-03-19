import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        bg: "#0A0A0A",
        surface: "#111111",
        "border-subtle": "#1E1E1E",
        muted: "#6B6B6B",
        body: "#A8A8A8",
        primary: "#F0F0F0",
        brand: "#E8FF47",
      },
      maxWidth: {
        content: "900px",
      },
      maxWidth: {
        content: "900px",
      },
    },
  },
  plugins: [],
} satisfies Config;
