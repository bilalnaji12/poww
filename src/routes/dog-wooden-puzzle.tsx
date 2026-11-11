import { createFileRoute } from "@tanstack/react-router";
import { ProductLanding } from "@/components/pawmade/ProductLanding";
import { productHead } from "@/lib/product-head";
import { products } from "@/lib/products";

export const Route = createFileRoute("/dog-wooden-puzzle")({
  head: () => productHead(products[1]!, "/dog-wooden-puzzle/", "The Pup Wooden Dog Puzzle | Pawmade"),
  component: () => (
    <ProductLanding product={products[1]!} other={products[0]!} otherPath="/cat-wooden-puzzle/" />
  ),
});
