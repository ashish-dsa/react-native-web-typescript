
import Switch from "./Switch";

describe("Switch", () => {
it("should render correctly", () => {
   const component = (
      <Switch>
        Test
      </Switch>
    );

    expect(component).toMatchSnapshot();
  });
});
