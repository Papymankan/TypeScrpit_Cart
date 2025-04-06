import { Button, Card, CardContent } from "@mui/material";
import React from "react";
import { productType } from "../assets/Products";

export default function ProductCard({ name, price, id, img }: productType) {
  return (
    <Card>
      <CardContent className="p-4">
        <img
          src={"img"}
          className="w-full h-40 object-cover rounded mb-2"
        />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">${price}</p>
        <Button className="mt-2">Add to Cart</Button>
      </CardContent>
    </Card>
  );
}
