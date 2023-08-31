import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";

describe("Renders Header Elements", () => {
  const cartItems = {};
  it("Website Title", () => {
    render(
      <BrowserRouter>
        <Header cartItems={cartItems} />
      </BrowserRouter>
    );
    const websiteName = screen.getByRole("heading");
    expect(websiteName).toBeInTheDocument();
  });

  it("Navigation Button", () => {
    render(
      <BrowserRouter>
        <Header cartItems={cartItems} />
      </BrowserRouter>
    );
    const navigationButton = screen.queryByRole("button", {
      name: /navigation/i,
    });
    expect(navigationButton).toBeInTheDocument();
  });

  it("Cart", () => {
    render(
      <BrowserRouter>
        <Header cartItems={cartItems} />
      </BrowserRouter>
    );
    const cartButton = screen.getByRole("button", {
      name: /cart/i,
    });
    expect(cartButton).toBeInTheDocument();
  });
});

describe("Renders on event click", () => {
  it("Navigation", async () => {
    const cartItems = {};

    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Header cartItems={cartItems} />
      </BrowserRouter>
    );
    const button = screen.getByRole("button", { name: "Navigation" });
    await user.click(button);
    const navigationTitle = screen.getByRole("heading", { name: "Navigation" });
    expect(navigationTitle).toBeInTheDocument();
  });
});
