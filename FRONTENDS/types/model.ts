export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Blue T-Shirt",
    description: "Comfortable cotton t-shirt in KENI blue",
    price: 29.99,
    image: "/images/blue-tshirt.jpg",
    category: "clothing",
  },
  {
    id: 2,
    name: "White Sneakers",
    description: "Stylish white sneakers with blue accents",
    price: 89.99,
    image: "/images/white-sneakers.jpg",
    category: "footwear",
  },
];
