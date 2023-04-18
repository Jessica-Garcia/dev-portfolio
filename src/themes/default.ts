export const defaultTheme = {
  fonts: {
    title: "Bebas Neue, cursive",
    main: "Roboto Mono, monospace",
  },

  colors: {
    primary1: "#fff",
    background1: "#202024",
    background2: "#121214",
  },

  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
} as const;
