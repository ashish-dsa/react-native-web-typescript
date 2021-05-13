
import Dialog from "./Dialog";

describe("Dialog", () => {
it("should render correctly", () => {
   const component = (
      <Dialog>
        Test
      </Dialog>
    );

    expect(component).toMatchSnapshot();
  });
});
