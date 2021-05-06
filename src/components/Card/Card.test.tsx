import Card from "./Card";

describe("Card", () => {
  it("should render correctly", () => {
    const component = <Card>Test</Card>;

    expect(component).toMatchSnapshot();
  });
});
