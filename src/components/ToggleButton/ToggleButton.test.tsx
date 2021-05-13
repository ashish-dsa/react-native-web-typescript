
import ToggleButton from "./ToggleButton";

describe("ToggleButton", () => {
it("should render correctly", () => {
   const component = (
      <ToggleButton>
        Test
      </ToggleButton>
    );

    expect(component).toMatchSnapshot();
  });
});
