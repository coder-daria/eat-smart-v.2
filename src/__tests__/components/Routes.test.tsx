import * as React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import Daily from "../../templates/Daily";
import Food from "../../templates/Food";
import Landing from "../../templates/Landing";
import PageNotFound from "../../components/PageNotFound";
import Preferences from "../../templates/Preferences";
import Routes from "../../components/Routes";

describe("<Routes/>", () => {
  const renderWrapper = (path: string[]) => {
    return mount(
      <MemoryRouter initialEntries={path}>
        <Routes/>
      </MemoryRouter>
    );
  };

  it("should redirect to 404 when path is invalid", () => {
    const wrapper = renderWrapper(["/random"]);

    expect(wrapper.find(Landing).length).toBe(0);
    expect(wrapper.find(PageNotFound).length).toBe(1);
  });

  it("should render <Landing /> with path: /", () => {
    const wrapper = renderWrapper(["/"]);

    expect(wrapper.find(Landing).length).toBe(1);
    expect(wrapper.find(PageNotFound).length).toBe(0);
  });

  it("should render <Food /> with path: /food", () => {
    const wrapper = renderWrapper(["/food"]);

    expect(wrapper.find(PageNotFound).length).toBe(0);
    expect(wrapper.find(Food).length).toBe(1);
  });

  it("should render <Daily /> with path: /daily", () => {
    const wrapper = renderWrapper(["/daily"]);

    expect(wrapper.find(PageNotFound).length).toBe(0);
    expect(wrapper.find(Daily).length).toBe(1);
  });

  it("should render <Preferences /> with path: /preferences", () => {
    const wrapper = renderWrapper(["/preferences"]);

    expect(wrapper.find(PageNotFound).length).toBe(0);
    expect(wrapper.find(Preferences).length).toBe(1);
  });
});