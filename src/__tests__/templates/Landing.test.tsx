import * as React from "react";
import { shallow } from "enzyme";

import Card from "./../../components/Card";
import Landing from "../../pages/Landing";
import {   
  BackgroundImageWrapper,
  BackgroundLayer,
  Description,
  Hero,
  Text,
} from "../../pages/Landing/styles";

describe("<Landing>", () => {
  const wrapper = shallow(<Landing />);

  it("should render <Hero />", () => {
    expect(wrapper.find(Hero).length).toBe(1);
  });

  it("should render <BackgroundLayer /> ", () => {
    expect(wrapper.find(BackgroundLayer).length).toBe(1);
  });

  it("should render <BackgroundImageWrapper />", () => {
    expect(wrapper.find(BackgroundImageWrapper).length).toBe(1);
  });

  it("should render <img />", () => {
    expect(wrapper.find("img").length).toBe(1);
  });

  it("should render <Text /> with its children", () => {
    expect(wrapper.find(Text).length).toBe(1);
    expect(wrapper.find(Text).children()).toBeDefined();
  });
  
  it("should render <Description /> with its children", () => {
    expect(wrapper.find(Description).length).toBe(1);
    expect(wrapper.find(Description).children()).toBeDefined();
  });

  it("should render <Card />s with right props", () => {
    expect(wrapper.find(Card).length).toBe(4);
  });
});
