import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      @import '/node_modules/modern-normalize/modern-normalize.css';

      body {
        font-family: sans-serif;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      ul,
      ol {
        margin: 0;
        padding: 0;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      button {
        cursor: pointer;
      }
    `}
  />
);

export default GlobalStyles;
