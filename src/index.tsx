
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalThemeProvider from "./components/GlobalThemeProvider";
import Navigation from "./components/Navigation";
import Routes from "./components/Routes";

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
          <GlobalThemeProvider>
            <Navigation />
         </GlobalThemeProvider>
         <Routes />
      </Router>
    );
  }
}

const ROOT = document.getElementById("root");

ReactDOM.render(<App />, ROOT);
