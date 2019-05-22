import * as React from "react";

import Icon from "../Icon";

import { Container, StyledIcon, StyledInput } from "./styles";

interface SearchState {
  value: string;
}

class Search extends React.Component<{}, SearchState> {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  handleChange = (e:any):void => {
    this.setState({
      value: e.target.value,
    });
  }

  handleClick = (e:any):void => {
    if(e.currentTarget.name === "search") {
      //look for a searched value
    }
    this.setState({
      value: "",
    });
  }

  render() {
    const { value } = this.state;

    return (
      <Container>
        <StyledInput value={value} onChange={this.handleChange} />
        <StyledIcon
          iconName="cancelCircle" 
          iconSize={10} 
          onClick={this.handleClick} 
        />
        <Icon 
          iconName="search" 
          iconSize={15} 
          onClick={this.handleClick} 
        />
      </Container> 
    )
  }
}

export default Search;
