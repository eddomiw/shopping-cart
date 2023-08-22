import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ImageSlider from "../components/ImageSlider";

describe("Render Image Slider Elements", () => {
  it("Two Images ", () => {
    const imageData = [
      "https://s7d1.scene7.com/is/image/scom/207_24_CTK_HPR_xl?$1500w$",
      "https://s7d1.scene7.com/is/image/scom/207_HPR_24_OBK_xl?$1500w$",
    ];
    render(<ImageSlider images={imageData} />);
    const allImages = screen.queryAllByRole("img");
    expect(allImages.length).toBe(2);
  });

  it("Displays a Single Image on Mobile", () => {
    window.innerWidth = 360;
    const imageData = [
      "https://s7d1.scene7.com/is/image/scom/207_24_CTK_HPR_xl?$1500w$",
      "https://s7d1.scene7.com/is/image/scom/207_HPR_24_OBK_xl?$1500w$",
    ];
    render(<ImageSlider images={imageData} />);
    const image1Or2 = screen.getByRole("img", { name: /Image (1|2)/i });

    expect(image1Or2).toBeInTheDocument();
  });

  it("Displays Two Images on Desktop", () => {
    window.innerWidth = 1200;

    const imageData = [
      "https://s7d1.scene7.com/is/image/scom/207_24_CTK_HPR_xl?$1500w$",
      "https://s7d1.scene7.com/is/image/scom/207_HPR_24_OBK_xl?$1500w$",
    ];
    render(<ImageSlider images={imageData} />);

    const image1 = screen.getByRole("img", { name: "Image 1" });
    const image2 = screen.getByRole("img", { name: "Image 2" });

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
  });
});
