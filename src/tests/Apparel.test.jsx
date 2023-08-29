import { describe, expect, it } from "vitest";
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

  it("Displays sweaters when not in loading or error state", async () => {
    render(<Apparel />);

    await waitFor(() => {
      const imageElements = screen.getAllByRole("img");
      expect(imageElements.length).toBeGreaterThan(3);
    });
  });

  it("Increments item count when '+' is pressed", async () => {
    const user = userEvent.setup();
    render(<Apparel />);
    await waitFor(async () => {
      const addButton = screen.getByTestId("addButton 1");
      await user.click(addButton);
      const count = screen.getByText("Count: 1");
      expect(count).toBeInTheDocument();
    });
  });

  it("Decrements item count when '-' is pressed", async () => {
    const user = userEvent.setup();
    render(<Apparel />);
    await waitFor(async () => {
      const addButton = screen.getByTestId("addButton 1");
      const subtractButton = screen.getByTestId("subtractButton 1");
      await user.click(addButton);
      await user.click(addButton);
      await user.click(addButton);
      await user.click(subtractButton);

      const count = screen.getByText("Count: 2");
      expect(count).toBeInTheDocument();
    });
  });
});
