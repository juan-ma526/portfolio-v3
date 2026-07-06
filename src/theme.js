import { createTheme } from "@mui/material/styles";

// ── Tokens de color (paleta cyberpunk/neón oscura) ────────────────────────
// Uso:
//   theme.palette.background.default   → fondo base
//   theme.palette.background.paper     → fondo elevado (modals, cards)
//   theme.palette.neon.cyan            → acento principal (bordes, links)
//   theme.palette.neon.magenta         → hover, CTA, divisores
//   theme.palette.neon.violet          → sub-acentos / chips / scrollbar
//   theme.palette.text.primary         → texto blanco
//   theme.palette.text.secondary       → texto gris (descripciones)
//   theme.palette.divider              → bordes sutiles
const neon = {
  cyan:    "#00FFFF",
  magenta: "#FF1D8D",
  violet:  "#8A2BE2",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary:   { main: neon.cyan    },
    secondary: { main: neon.magenta },
    error:     { main: neon.violet  },
    background: {
      default: "#121212",
      paper:   "#161616",
    },
    text: {
      primary:   "#FFFFFF",
      secondary: "#A3A3A3",
    },
    divider: "rgba(255, 255, 255, 0.1)",
    // Alias personalizados accesibles vía theme.palette.neon.*
    neon,
  },

  // Par tipográfico:
  //   - "Chakra Petch"  → display (títulos/hero), geométrica y techy
  //   - "Outfit"        → body, limpia y legible para texto largo (ES/EN)
  // Jerarquía responsive: deja de harcodear fontSize en cada sx.
  typography: {
    fontFamily: '"Outfit", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Chakra Petch", "Outfit", sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.01em",
      fontSize: "3rem",
      lineHeight: 1.1,
      "@media (min-width:900px)": { fontSize: "4.5rem" },
    },
    h2: {
      fontFamily: '"Chakra Petch", "Outfit", sans-serif',
      fontWeight: 700,
      fontSize: "1.875rem",
      lineHeight: 1.2,
      "@media (min-width:900px)": { fontSize: "2.25rem" },
    },
    h3: {
      fontFamily: '"Chakra Petch", "Outfit", sans-serif',
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Chakra Petch", "Outfit", sans-serif',
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.3,
    },
    h5: { fontWeight: 600, fontSize: "1.25rem", lineHeight: 1.4 },
    h6: { fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.4 },
    body1: { fontSize: "1.125rem", lineHeight: 1.7, color: "#A3A3A3" },
    body2: { fontSize: "1rem",     lineHeight: 1.6, color: "#A3A3A3" },
    subtitle1: { fontFamily: '"Chakra Petch", "Outfit", sans-serif', fontWeight: 700, fontSize: "1rem", lineHeight: 1.4 },
    button: { textTransform: "none", fontWeight: 600 },
  },

  shape: { borderRadius: 16 },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollPaddingTop: "85px" },
        body: { backgroundColor: "#121212" },
        // Accesibilidad: respeta a quienes piden reducir movimiento
        "@media (prefers-reduced-motion: reduce)": {
          "*, *::before, *::after": {
            animationDuration: "0.01ms !important",
            animationIterationCount: "1 !important",
            transitionDuration: "0.01ms !important",
            scrollBehavior: "auto !important",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#161616",
          border: "1px solid rgba(255, 29, 141, 0.3)",
          borderRadius: 16,
          boxShadow: "0 0 30px rgba(0,0,0,0.8)",
        },
      },
    },
  },
});

export default theme;