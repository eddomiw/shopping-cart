import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
      name: /cart/i,
    });
    expect(cartButton).toBeInTheDocument();
  });
});

describe("Renders on event click", () => {
  it("Navigation", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const button = screen.getByRole("button", { name: "Navigation" });
    await user.click(button);
    const navigationTitle = screen.getByRole("heading", { name: "Navigation" });
    expect(navigationTitle).toBeInTheDocument();
  });
});
