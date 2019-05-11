
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./templates/Landing";
import Daily from "./templates/Daily";
import Food from "./templates/Food";
import Preferences from "./templates/Preferences";
import Navigation from "./components/Navigation";
import GlobalThemeProvider from "./components/GlobalThemeProvider";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div>
          <GlobalThemeProvider>
            <Navigation />          
          </GlobalThemeProvider>
          <Route path="/" exact component={Landing} />
          <Route path="/food" exact component={Food} />
          <Route path="/daily" exact component={Daily} />
          <Route path="/preferences" component={Preferences} />
        </div>
      </Router>
    );
  }
}

const ROOT = document.getElementById("root");

ReactDOM.render(<App />, ROOT);
