import { createFileRoute } from "@tanstack/react-router";
import { ProductLanding } from "@/components/pawmade/ProductLanding";
import { productHead } from "@/lib/product-head";
import { catProduct, dogProduct } from "@/lib/products";

export const Route = createFileRoute("/cat-wooden-puzzle")({
  head: () => productHead(catProduct, "/cat-wooden-puzzle/", "The Calico Wooden Cat Puzzle | Pawmade"),
  component: () => (
    <ProductLanding product={catProduct} other={dogProduct} otherPath="/dog-wooden-puzzle/" />
  ),
});
