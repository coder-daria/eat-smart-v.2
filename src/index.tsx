
import React from "react";
import ReactDOM from "react-dom";

import Landing from "./pages/Landing";
import Navigation from "./components/Navigation";
import GlobalThemeProvider from "./components/GlobalThemeProvider";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <GlobalThemeProvider>
        <>
        <Navigation />
        <Landing />
        </>
      </GlobalThemeProvider>
    );
  }
}

const ROOT = document.getElementById("root");

ReactDOM.render(<App />, ROOT);
