
import React from "react";
import ReactDOM from "react-dom";

interface LandingProps {
  children: string,
}

class LandingPage extends React.Component<LandingProps, {}> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default LandingPage;

const ROOT = document.getElementById("root");

ReactDOM.render(<LandingPage>Hi</LandingPage>, ROOT);
