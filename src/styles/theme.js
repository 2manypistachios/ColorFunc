import { theme as defaultTheme, extendTheme } from '@chakra-ui/react';

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
