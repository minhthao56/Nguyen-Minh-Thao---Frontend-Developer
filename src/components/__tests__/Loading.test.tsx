import { render } from "@testing-library/react";
import Loading from "../Loading";

describe("<Loading/>", () => {
  const renderComponent = () => {
    return render(<Loading />);
  };

  it("should match to snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
