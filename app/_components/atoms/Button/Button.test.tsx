import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { axe } from "jest-axe";

describe("Button", () => {
  it("renders the button with the provided children", () => {
    render(<Button>Hello</Button>);
    const buttonElement = screen.getByRole("button", { name: /hello/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies the provided props to the button element", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click me");
    buttonElement.click();
    expect(onClick).toHaveBeenCalled();
  });
});

describe("Accessibility", () => {
  it("passes the accessibility test with no violations", async () => {
    render(<Button>Hello</Button>);
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
