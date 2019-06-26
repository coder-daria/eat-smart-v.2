import * as React from "react";
import { mount } from "enzyme";

import { Container, Text } from "./../../components/Snackbar/styles";
import GlobalThemeProvider from "./../../components/GlobalThemeProvider";
import Icon from "./../../components/Icon";
import Snackbar from "./../../components/Snackbar";

describe("<Search>", () => {
  const wrapper = mount(
    <GlobalThemeProvider>
      <Snackbar>Message</Snackbar>
    </GlobalThemeProvider>
  );

  it("should render <Container />", () => {
    expect(wrapper.find(Container).length).toBe(1);
  });

  it("should render <Icon />", () => {
    expect(wrapper.find(Icon).length).toBe(1);
  });

  it("should render <Text />", () => {
    expect(wrapper.find(Text).length).toBe(1);
  });
  
  it("should render children", () => {
    expect(wrapper.find(Text).children().text()).toBe("Message");
  });
});
