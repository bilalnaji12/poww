import catPuzzle from "@/assets/cat-puzzle.png";
import cardBgDay from "@/assets/card-bg-day.webp";
import cardBgEvening from "@/assets/card-bg-evening.webp";
import dogPuzzle from "@/assets/dog-puzzle.png";
import type { Product } from "@/components/pawmade/ProductCard";

export const products: Product[] = [
  {
    label: "For cat lovers",
    name: "The Calico",
    subtitle: "Wooden cat-shaped puzzle",
    description:
      "A playful, hands-on puzzle for quiet afternoons and anyone who has a soft spot for cats.",
    details: "135 pieces · Cat-shaped design",
    image: catPuzzle,
    imageAlt: "The Calico wooden cat-shaped jigsaw puzzle",
    background: cardBgDay,
    link: "/go/cat",
    kind: "cat",
  },
  {
    label: "For dog lovers",
    name: "The Pup",
    subtitle: "Wooden dog puzzle",
    description:
      "A thoughtful gift idea for dog people who enjoy a satisfying little challenge.",
    details: "Dog-inspired design · Hands-on fun",
    image: dogPuzzle,
    imageAlt: "The Pup wooden dog puzzle",
    background: cardBgEvening,
    link: "/go/dog",
    kind: "dog",
  },
];

