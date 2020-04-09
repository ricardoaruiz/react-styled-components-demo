import "jest-styled-components";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Button from "./Button";

configure({ adapter: new Adapter() });

const callbackClick = jest.fn();
let component;

beforeEach(() => {
  component = shallow(<Button id="b1" onClick={callbackClick} />);
});

afterEach(() => {
  component.unmount();
});

describe("Button tests", () => {
  it("should be render", () => {
    expect(component.exists()).toBe(true);
    expect(component.prop("disabled")).toBeUndefined();
  });

  it("should perform callback click function on click", () => {
    component.simulate("click");
    expect(callbackClick).toBeCalledTimes(1);
  });

  it("should has primary class when button type is primary", () => {
    component.setProps({ primary: true });
    expect(
      component.dive().find("button").at(0).hasClass("primary")
    ).toBeTruthy();
  });

  it("should has success class when button type is success", () => {
    component.setProps({ success: true });
    expect(
      component.dive().find("button").at(0).hasClass("success")
    ).toBeTruthy();
  });

  it("should has warn class when button type is warn", () => {
    component.setProps({ warn: true });
    expect(component.dive().find("button").at(0).hasClass("warn")).toBeTruthy();
  });

  it("should has danger class when button type is danger", () => {
    component.setProps({ danger: true });
    expect(
      component.dive().find("button").at(0).hasClass("danger")
    ).toBeTruthy();
  });

  it("should button is disabled when pass disabled property", () => {
    const button = shallow(<Button id="b1" disabled />).dive();
    expect(button.find("button").prop("disabled")).toBe(true);
    button.unmount();
  });

  it("should button is disabled when pass disabled property with true value", () => {
    component.setProps({ disabled: true });
    expect(component.dive().find("button").prop("disabled")).toBe(true);
  });

  it("should button is enabled when pass disabled property with false value", () => {
    component.setProps({ disabled: false });
    expect(component.dive().find("button").prop("disabled")).toBe(false);
  });
});
