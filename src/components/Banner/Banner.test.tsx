
import Banner from "./Banner";

describe("Banner", () => {
it("should render correctly", () => {
   const component = (
      <Banner>
        Test
      </Banner>
    );

    expect(component).toMatchSnapshot();
  });
});
