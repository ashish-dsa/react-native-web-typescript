import * as React from "react";
import Button from "./Button";

describe("Button", () => {
  it("should render correctly", () => {
    const component = (<Button>Test</Button>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
