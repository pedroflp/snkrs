import { Inter } from '@next/font/google';
import { createGlobalStyle } from "styled-components";

const inter = Inter({ subsets: ['latin'] });

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${inter.style.fontFamily};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    font-size: 16px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed
    }
  }
`