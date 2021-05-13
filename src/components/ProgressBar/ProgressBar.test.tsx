
import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
it("should render correctly", () => {
   const component = (
      <ProgressBar>
        Test
      </ProgressBar>
    );

    expect(component).toMatchSnapshot();
  });
});
