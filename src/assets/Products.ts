import Image1 from "./Image1.jpg"

export type productType = {
  id: string;
  name: string;
  img: string;
  price: number;
};

export const Products: productType[] = [
  {
    id: "1",
    name: "book",
    img: Image1,
    price: 45,
  },
];