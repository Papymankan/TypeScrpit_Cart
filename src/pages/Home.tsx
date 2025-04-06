import { Button, Card, CardContent } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../Context/ProductsContext";
import ProductCard from "../components/ProductCard";

function Home() {
  const context = useContext(ProductsContext);

  return (
    <>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Products</h1>
          <Link to="/cart">
            <Button>Go to Cart ({context?.cart.length})</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
          {context?.products.length ? (
            context?.products.map((item) => (
              <ProductCard
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

export default Home;
