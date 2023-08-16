import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Renders Header Elements", () => {
  it("Website Title", () => {
    render(<Header />);
    const websiteName = screen.getByRole("heading");
    expect(websiteName).toBeInTheDocument();
  });

  it("Navigation Button", () => {
    render(<Header />);
    const navigationButton = screen.queryByRole("button", {
      name: /navigation/i,
    });
    expect(navigationButton).toBeInTheDocument();
  });

  it("Cart", () => {
    render(<Header />);
    const cartButton = screen.queryByRole("button", {
      name: /shopping cart/i,
    });
    expect(cartButton).toBeInTheDocument();
  });
});
