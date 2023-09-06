import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LatestReleases from "../components/LatestReleases";

it("Renders component without errors", () => {
  render(<LatestReleases />);
});

describe("Renders in Different States", () => {
  it("Displays loading message when isLoading is true", () => {
    render(<LatestReleases />);
    const loadingMessage = screen.getByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();
  });

  it("Displays no error message when error is present", () => {
    render(<LatestReleases />);
    const errorDisplay = screen.queryByText("Server Error");
    expect(errorDisplay).not.toBeInTheDocument();
  });
});
