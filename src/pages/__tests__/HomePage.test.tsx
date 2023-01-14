import { render, screen, waitFor } from "@testing-library/react";
import AuthPage from "../AuthPage";
import useDefinePage from "../../hooks/useDefinePage";

import { useMutation } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";

jest.mock("@tanstack/react-query", () => {
  return {
    ...jest.requireActual("@tanstack/react-query"),
    useMutation: jest.fn(),
  };
});
jest.mock("../../hooks/useDefinePage", () => jest.fn());
jest.mock("../../services/user", () => {
  return {
    apiUser: {
      register: jest.fn(),
      login: jest.fn(),
    },
  };
});

describe("<AuthPage/>", () => {
  const mutateAsync = jest.fn();

  beforeEach(() => {
    (useMutation as jest.Mock).mockReturnValue({ mutateAsync });
    (useDefinePage as jest.Mock).mockReturnValue({ isLoginPage: true });
  });

  const renderComponent = () => {
    return render(<AuthPage />);
  };

  it("should match to snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("schould call mutateAsync when submitting login", async () => {
    mutateAsync.mockReturnValue({ token: "1234" });
    renderComponent();

    userEvent.type(
      screen.getByPlaceholderText("Your Email"),
      "minhthao5648@gmail.com"
    );

    userEvent.type(screen.getByPlaceholderText("Your Password"), "124333");

    userEvent.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(mutateAsync).toBeCalled();
    });
  });

  it("schould call mutateAsync when submitting sign up", async () => {
    (useDefinePage as jest.Mock).mockReturnValue({ isLoginPage: false });
    mutateAsync.mockReturnValue({ token: "1234" });
    renderComponent();

    userEvent.type(
      screen.getByPlaceholderText("Your Email"),
      "minhthao5648@gmail.com"
    );

    userEvent.type(screen.getByPlaceholderText("Your Password"), "124333");

    userEvent.click(screen.getByRole("button", { name: "Register" }));

    await waitFor(() => {
      expect(mutateAsync).toBeCalled();
    });
  });
});
