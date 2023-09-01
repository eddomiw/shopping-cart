import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "../components/Cart";

describe("Render Component Elements", () => {
  const cartItems = {
    1: { itemId: 1, image: "/blank/image", quantity: 10, price: 10.99 },
    2: { itemId: 2, image: "$", quantity: 3, price: 25.99 },
  };
  it("Cart Heading", () => {
    render(<Cart cartItems={cartItems} />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("Item Values", () => {
    render(<Cart cartItems={cartItems} />);
    const image = screen.getByAltText("1");
    const quantity = screen.getByText("Quantity: 10");
    const price = screen.getByText("Price: $10.99");
    expect(image.src).toContain("blank/image");
    expect(quantity).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it("Total Cost", () => {
    render(<Cart cartItems={cartItems} />);
    const totalCost = screen.getByText("Total: $187.87");
    expect(totalCost).toBeInTheDocument();
  });
});

describe("Renders in Different States", () => {
  const cartItems = {
    1: { itemId: 1, image: "/blank/image", quantity: 10, price: 10.99 },
    2: { itemId: 2, image: "$", quantity: 3, price: 25.99 },
  };
  it("Removes item from cartItems", () => {
    render(<Cart cartItems={cartItems} />);
    const user = userEvent.setup();
    const removeButton = screen.getByTestId("removeButton 1");
    user.click(removeButton);
    const itemCount = Object.keys(cartItems).length;
    expect(itemCount).toBe(1);
  });

  it("Increments quantity when + button is clicked", () => {
    render(<Cart cartItems={cartItems} />);
    const user = userEvent.setup();
    const addButton = screen.getByTestId("addButton 1");
    user.click(addButton);
    expect(cartItems[1].quantity).toBe(11);
  });

  it("Decrements quantity when - button is clicked", () => {
    render(<Cart cartItems={cartItems} />);
    const user = userEvent.setup();
    const subtractButton = screen.getByTestId("subtractButton 1");
    user.click(subtractButton);
    expect(cartItems[1].quantity).toBe(9);
  });
});
