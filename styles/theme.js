import { theme as defaultTheme, extendTheme } from '@chakra-ui/react';
// import { createBreakpoints } from '@chakra-ui/theme-tools';

/* const breakpoints = createBreakpoints({
  sm: '425px',
  md: '768px',
  lg: '960px',
  xl: '1280px',
  '2xl': '1440px',
}); */

const colors = {
  bright: "#f2f2f2",
}

const theme = extendTheme({
  fonts: {
    heading: `'Inter', ${defaultTheme.fonts.heading}`,
    body: `'Inter', ${defaultTheme.fonts.body}`,
  },
  // breakpoints,
  colors,
});

export default theme;
