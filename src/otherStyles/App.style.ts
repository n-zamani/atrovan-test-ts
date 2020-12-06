import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
  }

  body, html, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
  }
`;
