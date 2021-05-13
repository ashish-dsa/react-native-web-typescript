
import Badge from "./Badge";

describe("Badge", () => {
it("should render correctly", () => {
   const component = (
      <Badge>
        Test
      </Badge>
    );

    expect(component).toMatchSnapshot();
  });
});
