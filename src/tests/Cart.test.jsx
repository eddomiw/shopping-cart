import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "../components/Cart";

describe("Render Component Elements", () => {
  const cartItems = {
    1: { itemId: 1, image: "/blank/image", quantity: 10, price: 10.99 },
    2: { itemId: 2, image: "$", quantity: 3, price: 25.99 },
  };

  const updateCartItems = vi.fn();

  it("Cart Heading", () => {
    render(<Cart cartItems={cartItems} />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("Item Values", () => {
    render(<Cart cartItems={cartItems} />);
    const image = screen.queryByAltText("1");
    const quantity = screen.queryByText("Quantity: 10");
    const price = screen.queryByText("$10.99");
    expect(image.src).toContain("blank/image");
    expect(quantity).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it("Total Cost", () => {
    render(<Cart cartItems={cartItems} updateCartItems={updateCartItems} />);
    const totalCost = screen.queryByText("TOTAL: $187.87");
    expect(totalCost).toBeInTheDocument();
  });
});

describe("Renders in Different States", () => {
  const cartItems = {
    1: { itemId: 1, image: "/blank/image", quantity: 10, price: 10.99 },
    2: { itemId: 2, image: "$", quantity: 3, price: 25.99 },
  };
  const updateCartItems = vi.fn();

  it("Removes item from cartItems", async () => {
    render(<Cart cartItems={cartItems} updateCartItems={updateCartItems} />);
    const user = userEvent.setup();
    const removeButton = screen.getByTestId("removeButton 1");
    await user.click(removeButton);
    expect(updateCartItems).toHaveBeenCalledWith({
      2: { itemId: 2, image: "$", quantity: 3, price: 25.99 },
    });
  });
});
