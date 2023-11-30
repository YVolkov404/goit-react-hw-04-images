import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    button, input {
      font: inherit;
    }

    button {
      padding: 0;
      outline-style: none;
      outline-color: transparent;
    }

    h1,
    h2,
    ul {
      margin: 0;
      padding: 0;
    }

    ul {
      list-style: none;
    }

    img {
      width: 100%;
      display: block;
      object-fit: cover;
    }

    ${
      '' /* :focus {
    outline: 0;
    } */
    }

`;
