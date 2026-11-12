import catPuzzle from "@/assets/cat-puzzle.png";
import cardBgDay from "@/assets/card-bg-day.webp";
import cardBgEvening from "@/assets/card-bg-evening.webp";
import dogPuzzle from "@/assets/dog-puzzle.png";
import christmasPuzzle from "@/assets/christmas-cat-puzzle-updated.png.asset.json";
import type { Product } from "@/components/pawmade/ProductCard";

export const catProduct: Product = {
    label: "For cat lovers",
    name: "The Calico",
    subtitle: "Wooden cat-shaped puzzle",
    description:
      "A playful, hands-on puzzle for quiet afternoons and anyone who has a soft spot for cats.",
    details: "135 pieces · Cat-shaped design",
    image: catPuzzle,
    imageAlt: "The Calico wooden cat-shaped jigsaw puzzle",
    background: cardBgDay,
    link: "https://link.amazon/B0a3XWM7l",
    path: "/cat-wooden-puzzle",
    kind: "cat",
  };
export const dogProduct: Product = {
    label: "For dog lovers",
    name: "The Pup",
    subtitle: "Wooden dog puzzle",
    description:
      "A thoughtful gift idea for dog people who enjoy a satisfying little challenge.",
    details: "Dog-inspired design · Hands-on fun",
    image: dogPuzzle,
    imageAlt: "The Pup wooden dog puzzle",
    background: cardBgEvening,
    link: "https://link.amazon/B0efiQX5z",
    path: "/dog-wooden-puzzle",
    kind: "dog",
  };

export const christmasProduct: Product = {
  label: "For cat lovers",
  name: "Christmas Cat Wooden Jigsaw Puzzle",
  subtitle: "Christmas cat-shaped wooden puzzle",
  description: "A festive wooden cat-shaped puzzle filled with Christmas cats, gifts and holiday details.",
  details: "Cat-shaped design · Christmas theme",
  image: christmasPuzzle.url,
  imageAlt: "Christmas Cat Wooden Jigsaw Puzzle with festive cats and gifts",
  background: cardBgDay,
  link: "https://link.amazon/B02F3twCo",
  path: "/christmas-cat-wooden-jigsaw-puzzle",
  kind: "cat",
};

export const products: Product[] = [catProduct, dogProduct, christmasProduct];

