import * as React from "react";
import { shallow } from "enzyme";

import Card from "../components/Card";
import { Container, Description, Image } from "../components/Card/styles";

describe("<Card>", () => {
  const wrappper = shallow(<Card src="#" text="test"/>);

  it("should render <Container />", () => {
    expect(wrappper.find(Container).length).toBe(1);
  });

  it("should render <Image />", () => {
    expect(wrappper.find(Image).length).toBe(1);
  });

  it("should render <Description />", () => {
    expect(wrappper.find(Description).length).toBe(1);
  });
});
