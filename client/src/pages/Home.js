import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Title from "../components/Title";
import Band from "../components/Band";
import Posts from "../components/Posts";


const Home = () => {
  return (
    <div>
      <Title />
      <Band />
      {/* <Video /> */}
      <ProductList />
      <Posts />
      <Cart />
    </div>
  );
};

export default Home;
