// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.3;
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin: 0 0 15px 0;
    line-height: 1.7;
  }
`;

export default GlobalStyles;
