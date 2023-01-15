import { render, screen, waitFor } from "@testing-library/react";
import HomePage from "../HomePage";
import { useQuery } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";
import mockData from "../../services/rocket.json";
import { useWhoIAmContext } from "../../contexts/WhoIAmContext";
import { BrowserRouter } from "react-router-dom";

jest.mock("@tanstack/react-query", () => {
  return {
    ...jest.requireActual("@tanstack/react-query"),
    useMutation: jest.fn(),
    useQuery: jest.fn(),
  };
});

jest.mock("../../contexts/WhoIAmContext", () => {
  return {
    useWhoIAmContext: jest.fn(),
  };
});

jest.mock("../../services/rocket", () => {
  return {
    apiRocket: {
      getRockets: jest.fn(),
    },
  };
});

describe("<HomePage/>", () => {
  const refetch = jest.fn();

  beforeEach(() => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      refetch,
    });
    (useWhoIAmContext as jest.Mock).mockReturnValue({ email: "123@gmail.com" });
  });

  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  };

  it("should match to snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("should call refetch function", () => {
    renderComponent();

    userEvent.click(screen.getByRole("button", { name: "Search" }));

    expect(refetch).toBeCalled();
  });

  it("should call useQuery hook when typing search", async () => {
    renderComponent();

    userEvent.type(screen.getByPlaceholderText("Search By Name"), "test");
    await waitFor(() => {
      expect(useQuery).toBeCalled();
    });
  });

  it("should show error message", () => {
    (useQuery as jest.Mock).mockReturnValue({
      isError: true,
      error: new Error("Message error"),
    });

    renderComponent();

    expect(
      screen.getByText(JSON.stringify("Message error"))
    ).toBeInTheDocument();
  });

  it("should show loading", () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    renderComponent();

    expect(screen.getByTestId("Loading")).toBeInTheDocument();
  });

  it("should not display list rocket when non-auth", () => {
    (useWhoIAmContext as jest.Mock).mockReturnValue({ email: "" });

    const { container } = renderComponent();

    expect(container).toMatchSnapshot();

    expect(screen.getByText(/to see list rocket/)).toBeInTheDocument();
  });
});
