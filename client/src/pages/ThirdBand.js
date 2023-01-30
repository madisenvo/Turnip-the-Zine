import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Band from "../components/Band";
import Thoughts from "../components/Thoughts";


const ThirdBand = () => {
  return (
    <div>
      <Band />
      <ProductList />
      <Thoughts />
      <Cart />
    </div>
  );
};

export default ThirdBand;
