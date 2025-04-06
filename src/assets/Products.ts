import Image1 from "./Image1.jpg"
import ball from "./ball.jpg"
import boots from "./boots.jpg"
import casio from "./casio.jpg"
import iphone from "./iphone.jpg"
import samba from "./samba.jpg"
import samsung from "./samsung.jpg"
import sneakers from "./sneakers.jpg"
import soccer from "./soccer.jpg"
import Tshirt from "./Tshirt.jpg"
import sunglasses from "./sunglasses.png"

export type productType = {
  id: string;
  name: string;
  img: string;
  price: number;
};

export const Products: productType[] = [
  {
    id: crypto.randomUUID(),
    name: "book",
    img: Image1,
    price: 45,
  },
  {
    id: crypto.randomUUID(),
    name: "ball",
    img: ball,
    price: 55,
  },
  {
    id: crypto.randomUUID(),
    name: "boots",
    img: boots,
    price: 120,
  },
  {
    id: crypto.randomUUID(),
    name: "casio",
    img: casio,
    price: 220,
  },
  {
    id: crypto.randomUUID(),
    name: "iphone",
    img: iphone,
    price: 1600,
  },
  {
    id: crypto.randomUUID(),
    name: "samba",
    img: samba,
    price: 80,
  },
  {
    id: crypto.randomUUID(),
    name: "samsung",
    img: samsung,
    price: 800,
  },
  {
    id: crypto.randomUUID(),
    name: "sneakers",
    img: sneakers,
    price: 60,
  },
  {
    id: crypto.randomUUID(),
    name: "soccer",
    img: soccer,
    price: 140,
  },
  {
    id: crypto.randomUUID(),
    name: "Tshirt",
    img: Tshirt,
    price: 40,
  },
  {
    id: crypto.randomUUID(),
    name: "sunglasses",
    img: sunglasses,
    price: 50,
  },
];