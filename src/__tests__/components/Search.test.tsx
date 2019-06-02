import * as React from "react";
import { mount } from "enzyme";

import GlobalThemeProvider from "./../../components/GlobalThemeProvider";

import { 
  Container,
  CancelIcon,
  SearchIcon,
  StyledInput
} from "./../../components/Search/styles";
import Search from "./../../components/Search";

describe("<Search>", () => {
  const wrapper = mount(
    <GlobalThemeProvider>
      <Search />
    </GlobalThemeProvider>
  );

  const mockCallBack = jest.fn();

  it("should render <Container />", () => {
    expect(wrapper.find(Container).length).toBe(1);
  });

  it("should render <StyledInput />", () => {
    expect(wrapper.find(StyledInput).length).toBe(1);
  });

  it("should render <CancelIcon />", () => {
    expect(wrapper.find(CancelIcon).length).toBe(1);
  });
  
  it("should render <SearchIcon />", () => {
    expect(wrapper.find(SearchIcon).length).toBe(1);
  });

  it("should handle onChange event", () => {
    const e = { target: { value: "food" }};

    wrapper.find(StyledInput).simulate("change", e);
    expect(wrapper.find(StyledInput).props().value).toBe("food");
  });

  it("should handle onClick event", () => {
    const e = { currentTarget: { name: "food" }};

    wrapper.find(CancelIcon).simulate("click", e);
    expect(wrapper.find(StyledInput).props().value).toBe("");
  });
});
