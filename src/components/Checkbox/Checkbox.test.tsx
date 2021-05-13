
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
it("should render correctly", () => {
   const component = (
      <Checkbox>
        Test
      </Checkbox>
    );

    expect(component).toMatchSnapshot();
  });
});
