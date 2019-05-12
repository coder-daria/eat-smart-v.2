import * as React from "react";
import { shallow } from "enzyme";

import { Container, Links, ScLink } from "../../components/Navigation/styles";
import Logo from "./../../components/Logo";
import Navigation from "./../../components/Navigation";

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

  it("should render 3 <ScLink /> with the right prop: to", () => {
    expect(wrapper.find(ScLink).length).toBe(3);
    expect(wrapper.find(ScLink).at(0).props().activeStyle).toBeDefined();
    expect(wrapper.find(ScLink).at(0).props().to).toBe("/daily");
    expect(wrapper.find(ScLink).at(1).props().to).toBe("/food");
    expect(wrapper.find(ScLink).at(2).props().to).toBe("/preferences");
  });
});
