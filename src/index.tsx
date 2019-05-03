
import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import Landing from "./pages/Landing";
import Navigation from "./components/Navigation";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <GlobalStyle />
        <Navigation />
        <Landing />
      </>
    );
  }
}

const ROOT = document.getElementById("root");

ReactDOM.render(<App />, ROOT);
