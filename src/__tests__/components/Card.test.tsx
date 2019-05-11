import * as React from "react";
import { shallow } from "enzyme";

import Card from "./../../components/Card";
import { Container, Description, Image } from "./../../components/Card/styles";

describe("<Card>", () => {
  const props = {
    description: "test",
    isReversed: true,
    src: "#",
  };
  const wrapper = shallow(<Card {...props} />);

  it("should render <Container /> with right props", () => {
    expect(wrapper.find(Container).length).toBe(1);
    expect(wrapper.find(Container).props().isReversed).toBe(props.isReversed);
  });

  it("should render <Image /> with right props", () => {
    expect(wrapper.find(Image).length).toBe(1);
    expect(wrapper.find(Image).props().src).toBe(props.src);
  });

  it("should render <Description /> with its children", () => {
    expect(wrapper.find(Description).length).toBe(1);
    expect(wrapper.find(Description).children().text()).toBe(props.description);
  });
});
