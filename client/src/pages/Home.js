import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Title from "../components/Title";
import Band from "../components/Band";
import Thoughts from "../components/Posts";


const Home = () => {
  return (
    <div>
      <Title />
      <Band />
      <ProductList />
      <Thoughts />
      <Cart />
    </div>
  );
};

export default Home;
