import * as React from "react";
import { shallow } from "enzyme";

import Logo from "./../../components/Logo";
import { Container } from "./../../components/Logo/styles";

describe("<Logo>", () => {
  const wrapper = shallow(<Logo />);

  it("should render <Container />", () => {
    expect(wrapper.find(Container).length).toBe(1);
  });

  it("should render 2 <span> tags", () => {
    expect(wrapper.find('span').length).toBe(2);
  });
});
