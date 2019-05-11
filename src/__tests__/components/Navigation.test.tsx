import * as React from "react";
import { shallow } from "enzyme";

import Logo from "./../../components/Logo";
import Navigation from "./../../components/Navigation";

import { Container, Link, Links } from "../../components/Navigation/styles";

describe("<Navigation>", () => {
  const wrapper = shallow(<Navigation />);

  it("should render <Container />", () => {
    expect(wrapper.find(Container).length).toBe(1);
  });

  it("should render <Logo />", () => {
    expect(wrapper.find(Logo).length).toBe(1);
  });

  it("should render <Links />", () => {
    expect(wrapper.find(Links).length).toBe(1);
  });

  it("should render <Link />", () => {
    expect(wrapper.find(Link).length).toBe(3);
    expect(wrapper.find(Link).at(0).props().active).toBe(true);
  });
});
