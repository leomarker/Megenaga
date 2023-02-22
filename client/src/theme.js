// color design tokens export
// export const colorTokens = {
//   grey: {
//     0: "#FFFFFF",
//     10: "#F6F6F6",
//     50: "#F0F0F0",
//     100: "#E0E0E0",
//     200: "#C2C2C2",
//     300: "#A3A3A3",
//     400: "#858585",
//     500: "#666666",
//     600: "#4D4D4D",
//     700: "#333333",
//     800: "#1A1A1A",
//     900: "#0A0A0A",
//     1000: "#000000",
//   },
//   primary: {
//     50: "#E6FBFF",
//     100: "#CCF7FE",
//     200: "#99EEFD",
//     300: "#66E6FC",
//     400: "#33DDFB",
//     500: "#00D5FA",
//     600: "#00A0BC",
//     700: "#006B7D",
//     800: "#00353F",
//     900: "#001519",
//   },
// };

// mui theme settings
// export const themeSettings = (mode) => {
//   return {
//     palette: {
//       mode: mode,
//       ...(mode === "dark"
//         ? {
//             // palette values for dark mode
//             primary: {
//               dark: colorTokens.primary[200],
//               main: colorTokens.primary[500],
//               light: colorTokens.primary[800],
//             },
//             neutral: {
//               dark: colorTokens.grey[100],
//               main: colorTokens.grey[200],
//               mediumMain: colorTokens.grey[300],
//               medium: colorTokens.grey[400],
//               light: colorTokens.grey[700],
//             },
//             background: {
//               default: colorTokens.grey[900],
//               alt: colorTokens.grey[800],
//             },
//           }
//         : {
//             // palette values for light mode
//             primary: {
//               dark: colorTokens.primary[700],
//               main: colorTokens.primary[500],
//               light: colorTokens.primary[50],
//             },
//             neutral: {
//               dark: colorTokens.grey[700],
//               main: colorTokens.grey[500],
//               mediumMain: colorTokens.grey[400],
//               medium: colorTokens.grey[300],
//               light: colorTokens.grey[50],
//             },
//             background: {
//               default: colorTokens.grey[10],
//               alt: colorTokens.grey[0],
//             },
//           }),
//     },
//     typography: {
//       fontFamily: ["Rubik", "sans-serif"].join(","),
//       fontSize: 12,
//       h1: {
//         fontFamily: ["Rubik", "sans-serif"].join(","),
//         fontSize: 40,
//       },
//       h2: {
//         fontFamily: ["Rubik", "sans-serif"].join(","),
//         fontSize: 32,
//       },
//       h3: {
//         fontFamily: ["Rubik", "sans-serif"].join(","),
//         fontSize: 24,
//       },
//       h4: {
//         fontFamily: ["Rubik", "sans-serif"].join(","),
//         fontSize: 20,
//       },
//       h5: {
//         fontFamily: ["Rubik", "sans-serif"].join(","),
//         fontSize: 16,
//       },
//       h6: {
//         fontFamily: ["Rubik", "sans-serif"].join(","),
//         fontSize: 14,
//       },
//     },
//   };
// };

import { extendTheme } from "@chakra-ui/react";

const colors = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
};
// example theme
const theme = extendTheme({
  colors: {
    primary: {
      dark: colors.primary[700],
      main: colors.primary[500],
      light: colors.primary[50],
    },
    neutral: {
      dark: colors.grey[700],
      main: colors.grey[500],
      mediumMain: colors.grey[400],
      medium: colors.grey[300],
      light: colors.grey[50],
    },
    background: {
      default: colors.grey[10],
      alt: colors.grey[0],
    },
  },

  fonts: {
    body: "Rubik, sans-serif",
    heading: "Rubik, sans-serif",
    mono: "Rubik, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
});

export default theme;
