import { render } from "@testing-library/react";
import Heading from "./Heading";
import { axe } from "jest-axe";

describe("Heading", () => {
  it("renders the heading text correctly", () => {
    const text = "Hello, World!";
    const { getByText } = render(<Heading text={text} />);
    expect(getByText(text)).toBeInTheDocument();
  });

  it("renders the heading with the correct HTML tag", () => {
    const { container } = render(<Heading as="h2" text="Heading" />);
    expect(container.querySelector("h2")).toBeInTheDocument();
  });

  it("passes the Jest-axe accessibility test", async () => {
    const { container } = render(<Heading text="Accessible Heading" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
