export type Product = {
  id: string;
  name: string;
  priceTRY: number;
  image: string;
  blurb: string;
};

export const PRODUCTS: Product[] = [
  { id: "ürün1", name: "ürün1", priceTRY: 1290, image: "https://picsum.photos/seed/lotus/800", blurb: "gümüs" },
  { id: "ürün2", name: "ürün2", priceTRY: 1490, image: "https://picsum.photos/seed/halfmoon/800", blurb: "gümüs" },
  { id: "ürün3", name: "ürün3", priceTRY: 990, image: "https://picsum.photos/seed/shine/800", blurb: "gümüs" },
  { id: "ürün4", name: "ürün4", priceTRY: 1690, image: "https://picsum.photos/seed/signet/800", blurb: "gümüs" },
  { id: "ürün5", name: "ürün5", priceTRY: 1250, image: "https://picsum.photos/seed/twist/800", blurb: "gümüs" },
  { id: "ürün6", name: "ürün6", priceTRY: 1150, image: "https://picsum.photos/seed/paperclip/800", blurb: "gümüs" },
];
