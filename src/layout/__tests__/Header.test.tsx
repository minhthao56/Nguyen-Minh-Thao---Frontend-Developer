import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { useWhoIAmContext } from "../../contexts/WhoIAmContext";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../contexts/WhoIAmContext", () => {
  return {
    useWhoIAmContext: jest.fn(),
  };
});

describe("<Header/>", () => {
  beforeEach(() => {
    (useWhoIAmContext as jest.Mock).mockReturnValue({ email: "123@gmail.com" });
  });

  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  };

  it("should match to snapshot when having auth", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
    expect(screen.getByText("123@gmail.com")).toBeInTheDocument();
  });

  it("should match to snapshot when non-auth", () => {
    (useWhoIAmContext as jest.Mock).mockReturnValue({ email: "" });
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
    expect(screen.queryByText("123@gmail.com")).not.toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign in" })).toBeInTheDocument();
  });
});
