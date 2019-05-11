import * as React from "react";
import { shallow } from "enzyme";
import { ThemeProvider } from "styled-components";

import GlobalThemeProvider from "./../../components/GlobalThemeProvider";

describe("<GlobalThemeProvider>", () => {
  const wrapper = shallow(
    <GlobalThemeProvider>
      <span>children</span>
    </GlobalThemeProvider>
  );

  describe("should render <ThemeProvider />", () => {
    expect(wrapper.find(ThemeProvider).length).toBe(1);

    it("with 2 children", () => {
      expect(wrapper.find(ThemeProvider).children().length).toBe(2);
    });
  })

  it("should render children", () => {
    expect(wrapper.find('span').children().text()).toBe("children");
  });
});
