import React, { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ProductCard from "../components/ProductCard";
import CartCard from "../components/CartCard";

export default function CartPage() {
  const context = useContext(ProductsContext);

  return (
    <>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Cart</h1>
          <Link to="/">
            <Button>Go to Products</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
          {context?.cart.length ? (
            context?.cart.map((item) => (
              <CartCard
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
              />
            ))
          ) : (
            <div>empty</div>
          )}
        </div>
      </div>
    </>
  );
}
