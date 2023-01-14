import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormFilter from "../FormFilter";

describe("<FormFilter/>", () => {
  const onChange = jest.fn();
  const onSearch = jest.fn();

  const renderComponent = () => {
    return render(<FormFilter onChange={onChange} onSearch={onSearch} />);
  };

  it("should match to snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("should call onChange when typing search input", () => {
    renderComponent();

    userEvent.type(screen.getByPlaceholderText("Search By Name"), "test");

    expect(onChange).toBeCalled();
  });

  it("should call onSearch when click button search", () => {
    renderComponent();

    userEvent.click(screen.getByRole("button", { name: "Search" }));

    expect(onSearch).toBeCalled();
  });
});
