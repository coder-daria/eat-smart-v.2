
import * as React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "./theme";

interface GlobalThemeProviderProps {
  children: React.ReactChild;
}

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  input {
    border: none;
    margin: 0;
    outline: none;
  }
`;

const GlobalThemeProvider:React.FC<GlobalThemeProviderProps> = ({children}) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
   </ThemeProvider>
);

export default GlobalThemeProvider;

