import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        background: "hsl(var(--background))",
        "background-accent": "hsl(var(--background-accent))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        placeholder: "hsl(var(--placeholder))",
        accent: "hsl(var(--accent))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
