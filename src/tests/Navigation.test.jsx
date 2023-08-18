import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation";

describe("Navigation Items Render", () => {
  it("Close Button ", () => {
    render(<Navigation />);
    const closeButton = screen.queryByRole("button");
    expect(closeButton).toBeInTheDocument();
  });

  it("Navigation Title", () => {
    render(<Navigation />);
    const navTitle = screen.queryByText("Navigation");
    expect(navTitle).toBeInTheDocument();
  });

  it("Home", () => {
    render(<Navigation />);
    const homePage = screen.queryByText("Home");
    expect(homePage).toBeInTheDocument();
  });

  it("Apparel", () => {
    render(<Navigation />);
    const apparelPage = screen.queryByText("Apparel");
    expect(apparelPage).toBeInTheDocument();
  });

  it("About", () => {
    render(<Navigation />);
    const aboutPage = screen.queryByText("About");
    expect(aboutPage).toBeInTheDocument();
  });
});
