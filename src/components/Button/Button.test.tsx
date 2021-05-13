
import Button from "./Button";

describe("Button", () => {
it("should render correctly", () => {
   const component = (
      <Button>
        Test
      </Button>
    );

    expect(component).toMatchSnapshot();
  });
});
