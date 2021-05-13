
import List from "./List";

describe("List", () => {
it("should render correctly", () => {
   const component = (
      <List>
        Test
      </List>
    );

    expect(component).toMatchSnapshot();
  });
});
