
import Menu from "./Menu";

describe("Menu", () => {
it("should render correctly", () => {
   const component = (
      <Menu>
        Test
      </Menu>
    );

    expect(component).toMatchSnapshot();
  });
});
