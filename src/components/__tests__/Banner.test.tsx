import { render, screen } from "@testing-library/react";
import Banner from "../Banner";

describe("<Banner/>", () => {
  const renderComponent = () => {
    return render(<Banner />);
  };

  it("should match to snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("should has necessary text", () => {
    renderComponent();

    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("SHOP SPACEX")).toBeInTheDocument();
  });
});
