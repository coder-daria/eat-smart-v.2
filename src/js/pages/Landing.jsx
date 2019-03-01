import React, { Component } from "react";
import ReactDOM from "react-dom";

import Input from "../components/atoms/Input";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { seo_title } = this.state;

    return (
      <div>
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default LandingPage;

const root = document.getElementById("root");
root ? ReactDOM.render(<LandingPage />, root) : false;
