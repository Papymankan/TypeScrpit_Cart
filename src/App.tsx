import { Button, Card, CardContent } from "@mui/material";
import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Products</h1>
          <Link to="/cart">
            <Button>Go to Cart (3)</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <img
                src={"./assets/Image1.png"}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h2 className="text-xl font-semibold">book</h2>
              <p className="text-gray-600">$50</p>
              <Button className="mt-2">Add to Cart</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
