import { createFileRoute } from "@tanstack/react-router";
import { ProductLanding } from "@/components/pawmade/ProductLanding";
import { productHead } from "@/lib/product-head";
import { products } from "@/lib/products";

export const Route = createFileRoute("/cat-wooden-puzzle")({
  head: () => productHead(products[0]!, "/cat-wooden-puzzle/", "The Calico Wooden Cat Puzzle | Pawmade"),
  component: () => (
    <ProductLanding product={products[0]!} other={products[1]!} otherPath="/dog-wooden-puzzle/" />
  ),
});
