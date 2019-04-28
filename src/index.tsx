
import React from "react";
import ReactDOM from "react-dom";

import Landing from "./pages/Landing";
import Navigation from "./components/Navigation";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <Navigation />
        <Landing />
      </>
    );
  }
}

const ROOT = document.getElementById("root");

ReactDOM.render(<App />, ROOT);
