
import TouchableRipple from "./TouchableRipple";

describe("TouchableRipple", () => {
it("should render correctly", () => {
   const component = (
      <TouchableRipple>
        Test
      </TouchableRipple>
    );

    expect(component).toMatchSnapshot();
  });
});
