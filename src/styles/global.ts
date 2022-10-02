import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* PRODUTO */
    --purple: #8284fa;
    --purple-dark: #5e60ce;
    --blue: #4ea8de;
    --blue-dark: #1e6f9f;

    /* BASE */
    --gray-700: #0d0d0d;
    --gray-600: #1a1a1a;
    --gray-500: #262626;
    --gray-400: #333333;
    --gray-300: #808080;
    --gray-200: #d9d9d9;
    --gray-100: #f2f2f2;

    --danger: #e25858;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 0.125rem var(--green-500);
  }

  body {
    background: var(--gray-600);
    color: var(--gray-100);
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: regular;
    line-height: 140%;
  }
`;
