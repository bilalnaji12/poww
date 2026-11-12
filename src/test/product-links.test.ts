import { describe, expect, it } from "vitest";
import { catProduct, dogProduct, christmasProduct } from "@/lib/products";

describe("Product purchase destinations", () => {
  it("opens the cat puzzle directly at the supplied Amazon link", () => {
    expect(catProduct.link).toBe("https://link.amazon/B0a3XWM7l");
  });
  it("opens the dog puzzle directly at the supplied Amazon link", () => {
    expect(dogProduct.link).toBe("https://link.amazon/B0efiQX5z");
  });
  it("opens the Christmas puzzle directly at the supplied Amazon link", () => {
    expect(christmasProduct.link).toBe("https://link.amazon/B02F3twCo");
  });
});