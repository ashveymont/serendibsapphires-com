import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ss-black": "#0B0B0B",
        "ss-gold": "#C6A56B",
        "ss-gold-soft": "#BFA37A",
        "ss-ivory": "#F5F1EA",
        "ss-sapphire": "#0F2145",
        "ss-charcoal": "#1A1A1A",
        "ss-border": "#2A2A2A",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      letterSpacing: {
        "widest-xl": "0.4em",
        "wide-lg": "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
