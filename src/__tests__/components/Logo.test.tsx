import * as React from "react";
import { shallow } from "enzyme";

import { ScLink } from "./../../components/Logo/styles";
import Logo from "./../../components/Logo";

describe("<Logo>", () => {
  const wrapper = shallow(<Logo />);

  it("should render <ScLink /> with the right prop: to", () => {
    expect(wrapper.find(ScLink).length).toBe(1);
    expect(wrapper.find(ScLink).props().to).toBe("/");
  });

  it("should render 2 <span> tags", () => {
    expect(wrapper.find("span").length).toBe(2);
  });
});
