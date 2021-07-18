import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f1f2f5;
    color: #333;
  }

  input, textarea, button, select, body {
    font: 400 1rem 'Montserrat', sans-serif;
  }

  button, input, textarea {
    outline: 0;
    border: 0;
  }
`;