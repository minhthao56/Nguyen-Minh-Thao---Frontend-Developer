import { render, screen } from "@testing-library/react";
import PrimaryButton, { PrimaryButtonProps } from "../PrimaryButton";

describe("<PrimaryButton/>", () => {
  const renderComponent = (props?: Partial<PrimaryButtonProps>) => {
    return render(<PrimaryButton {...props}>{props?.children}</PrimaryButton>);
  };

  it("should match to snapshot with black", () => {
    const { container } = renderComponent({ children: "Name", color: "black" });
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("should match to snapshot with white", () => {
    const { container } = renderComponent({ children: "Name", color: "white" });
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Name")).toBeInTheDocument();
  });
});
