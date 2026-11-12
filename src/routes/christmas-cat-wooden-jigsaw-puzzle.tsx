import { createFileRoute } from "@tanstack/react-router";
import { ProductLanding } from "@/components/pawmade/ProductLanding";
import { productHead } from "@/lib/product-head";
import { catProduct, christmasProduct } from "@/lib/products";

export const Route = createFileRoute("/christmas-cat-wooden-jigsaw-puzzle")({
  head: () => productHead(christmasProduct, "/christmas-cat-wooden-jigsaw-puzzle/", "Christmas Cat Wooden Jigsaw Puzzle | Pawmade"),
  component: ChristmasPuzzlePage,
});

function ChristmasPuzzlePage() {
  return <ProductLanding product={christmasProduct} other={catProduct} otherPath="/cat-wooden-puzzle/" />;
}