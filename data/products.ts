
export type Product = {
  id: number;
  name: string;
  category: string;
  skinType: string[];
  price: number;
  image: string;
  quantity: string;
  tag?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "The Glow Serum",
    category: "Serums",
    skinType: ["Normal", "Dry", "Combination"],
    price: 899,
    image: "/serum.jpeg",
    quantity: "30 ml",
    tag: "BESTSELLER",
  },
  {
    id: 2,
    name: "Daily Dew Cream",
    category: "Moisturizers",
    skinType: ["Dry", "Normal", "Sensitive"],
    price: 749,
    image: "/moisturizer.jpeg",
    quantity: "50 g",
    tag: "POPULAR",
  },
  {
    id: 3,
    name: "Soft Reset Cleanser",
    category: "Cleansers",
    skinType: ["Oily", "Combination", "Sensitive"],
    price: 599,
    image: "/cleanser.jpeg",
    quantity: "100 ml",
    tag: "GENTLE CARE",
  },
  {
    id: 4,
    name: "Sun Veil SPF 50",
    category: "Sun Care",
    skinType: ["All Skin Types"],
    price: 799,
    image: "/sunscreen.jpeg",
    quantity: "50 ml",
    tag: "DAILY ESSENTIAL",
  },
  {
    id: 5,
    name: "Purity Clay Mask",
    category: "Face Masks",
    skinType: ["Oily", "Combination"],
    price: 649,
    image: "/claymask.jpeg",
    quantity: "75 g",
    tag: "NEW",
  },
  {
    id: 6,
    name: "Skin Polish Exfoliator",
    category: "Exfoliators",
    skinType: ["Normal", "Oily", "Combination"],
    price: 549,
    image: "/exfoliator.jpeg",
    quantity: "50 g",
  },
  {
    id: 7,
    name: "Hydra Eye Revival",
    category: "Eye Care",
    skinType: ["All Skin Types"],
    price: 699,
    image: "/eyecare.jpeg",
    quantity: "15 g",
    tag: "EYE CARE",
  },
  {
    id: 8,
    name: "Berry Bliss Lip Balm",
    category: "Lip Care",
    skinType: ["All Skin Types"],
    price: 299,
    image: "/lipbalm.jpeg",
    quantity: "10 g",
    tag: "MUST HAVE",
  },
  {
    id: 9,
    name: "Fresh Start Face Wash",
    category: "Cleansers",
    skinType: ["Normal", "Oily", "Combination"],
    price: 499,
    image: "/facewash.jpeg",
    quantity: "100 ml",
  },
];
