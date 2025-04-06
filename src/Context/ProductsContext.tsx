import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { productType } from "../assets/Products";
import {Products as allProducts} from "../assets/Products";

type ProductsContextStateType = {
  products: productType[];
  cart: productType[];
  setCart: (arr: productType[]) => void;
};

export const ProductsContext = createContext<ProductsContextStateType | null>(
  null
);

export const ProductsContextProvider = ({ children }: PropsWithChildren) => {
  const [Products, setProducts] = useState<productType[]>([]);
  const [Cart, setCart] = useState<productType[]>([]);

  const SetCart = (arr: productType[]) => {
    setCart(arr);
  };

  useEffect(() => {
    setProducts(allProducts)
  }, []);

  return (
    <>
      <ProductsContext.Provider
        value={{ products: Products, cart: Cart, setCart: SetCart }}
      >
        {children}
      </ProductsContext.Provider>
      ;
    </>
  );
};
