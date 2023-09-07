import { describe, expect, it, vi } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Apparel from "../components/Apparel";

it("Renders component without errors", () => {
  render(<Apparel />);
});

describe("Renders in Different States", () => {
  it("Displays loading message when isLoading is true", () => {
    render(<Apparel />);
    const loadingMessage = screen.getByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();
  });

  it("Displays no error message when error is present", () => {
    render(<Apparel />);
    const errorDisplay = screen.queryByText("Server Error");
    expect(errorDisplay).not.toBeInTheDocument();
  });

  it("Increments button '+' is pressed one time", async () => {
    const user = userEvent.setup();
    const itemCounts = { 1: 3 };
    const incrementCount = vi.fn();
    const decrementCount = vi.fn();
    render(
      <Apparel
        decrementCount={decrementCount}
        incrementCount={incrementCount}
        itemCounts={itemCounts}
      />
    );
    await waitFor(async () => {
      const addButton = screen.getByTestId("addButton 2");
      await user.click(addButton);

      expect(incrementCount.mock.calls.length).toBe(1);
    });
  });

  it("Decrements button '-' is pressed one time", async () => {
    const itemCounts = { 1: 3 };
    const incrementCount = vi.fn();
    const decrementCount = vi.fn();
    const user = userEvent.setup();
    render(
      <Apparel
        decrementCount={decrementCount}
        incrementCount={incrementCount}
        itemCounts={itemCounts}
      />
    );
    await waitFor(async () => {
      const addButton = screen.getByTestId("addButton 2");
      const subtractButton = screen.getByTestId("subtractButton 2");
      await user.click(addButton);
      await user.click(addButton);
      await user.click(addButton);
      await user.click(subtractButton);

      expect(incrementCount.mock.calls.length).toBe(3);
      expect(decrementCount.mock.calls.length).toBe(1);
    });
  });
});
