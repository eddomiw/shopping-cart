import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation";
import { BrowserRouter } from "react-router-dom";

describe("Navigation Elements Render", () => {
  it("Close Button ", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    const closeButton = screen.queryByRole("button");
    expect(closeButton).toBeInTheDocument();
  });

  it("Navigation Title", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    const navTitle = screen.queryByText("Navigation");
    expect(navTitle).toBeInTheDocument();
  });

  it("Home", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    const homePage = screen.queryByText("Home");
    expect(homePage).toBeInTheDocument();
  });

  it("Apparel", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    const apparelPage = screen.queryByText("Apparel");
    expect(apparelPage).toBeInTheDocument();
  });

  it("Account", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    const AccountPage = screen.queryByText("Account");
    expect(AccountPage).toBeInTheDocument();
  });
});
