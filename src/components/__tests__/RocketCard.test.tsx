import { render, screen } from "@testing-library/react";
import RocketCard, { RocketCardProps } from "../RocketCard";

describe("<RocketCard/>", () => {
  const renderComponent = (props?: Partial<RocketCardProps>) => {
    return render(<RocketCard {...props} />);
  };

  it("should match to snapshot", () => {
    const { container } = renderComponent({
      country: "USA",
      description: "description",
      image: "NO",
      name: "NAME",
    });
    expect(container).toMatchSnapshot();

    expect(screen.getByText("USA")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    expect(screen.getByText("NAME")).toBeInTheDocument();
  });
});
