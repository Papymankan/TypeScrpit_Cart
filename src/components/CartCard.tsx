import { Button, Card, CardContent } from "@mui/material";
import React, { useContext } from "react";
import { productType } from "../assets/Products";
import { ProductsContext } from "../Context/ProductsContext";

export default function CartCard({ name, price, id, img }: productType) {
  const context = useContext(ProductsContext);

  const removeHandler = () =>{
    let arr = context?.cart.filter(item => item.id != id)
    context?.setCart(arr!)
  }

    return (
      <Card>
        <CardContent className="p-4">
          <img
            src={img}
            className="w-full h-40 object-cover rounded mb-2"
          />
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">${price}</p>
          <Button className="mt-2" style={{backgroundColor : "red" , color:"white"}} onClick={removeHandler}>Remove</Button>
        </CardContent>
      </Card>
    );
  }
