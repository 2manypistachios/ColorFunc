import { Global, css } from '@emotion/react';

const GlobalStyle = ({ children }) => (
  <>
    <Global
      styles={css`
        html {
          scoll-behavior: smooth;
          cursor: default;
        }

        @font-face {
          font-family: "Brant";
          src: url("/fonts/Brant.woff") format("woff");
          font-style: normal;
          font-weight: 600;
          font-display: swap;
        }

        @font-face {
          font-family: "Coves";
          src: url("/fonts/Coves.woff") format("woff");
          font-style: normal;
          font-weight: 600;
          font-display: swap;
        }
      `}
    />
    {children}
  </>
);

export default GlobalStyle;
