import { createFileRoute } from "@tanstack/react-router";
import { ProductLanding } from "@/components/pawmade/ProductLanding";
import { productHead } from "@/lib/product-head";
import { catProduct, dogProduct } from "@/lib/products";

export const Route = createFileRoute("/dog-wooden-puzzle")({
  head: () => productHead(dogProduct, "/dog-wooden-puzzle/", "The Pup Wooden Dog Puzzle | Pawmade"),
  component: () => (
    <ProductLanding product={dogProduct} other={catProduct} otherPath="/cat-wooden-puzzle/" />
  ),
});
