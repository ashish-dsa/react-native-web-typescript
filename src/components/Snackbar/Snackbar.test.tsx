
import Snackbar from "./Snackbar";

describe("Snackbar", () => {
it("should render correctly", () => {
   const component = (
      <Snackbar>
        Test
      </Snackbar>
    );

    expect(component).toMatchSnapshot();
  });
});
