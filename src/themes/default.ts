export const defaultTheme = {
  fonts: {
    title: "Bebas Neue, cursive",
    main: "Roboto Mono, monospace",
  },

  colors: {
    primary1: "#fff",
    background1: "#202024",
    background2: "#121214",
    yellow: "#E6ED17",
    "blue-600": "#176bc2",
    "green-300": "#00B37E",
    "red-500": "#AB222E",
    "blue-100": "#88eed0",
    "pink-300": "#ee2853",
    "green-200": "#3BF531",
    "pink-200": "#F754CE",
    "purple-100": "#C27CB0",
    "purple-300": "#521B76",
    "blue-900": "#0D0B76",
    "blue-500": "#5754F7",
  },

  tagColor: [
    "#176bc2",
    "#521B76",
    "#0D0B76",
    "#5754F7",
    "#00B37E",
    "#AB222E",
    "#ee2853",
    "#3BF531",
    "#F754CE",
    "#C27CB0",
    "#75372E",
    "#751C0E",
    "#700E75",
    "#007518",
  ],

  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
} as const;
