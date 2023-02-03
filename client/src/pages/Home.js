import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Title from "../components/Title";
import Band from "../components/Band";
// import Video from "../components/Video";
import Thoughts from "../components/Posts";


const Home = () => {
  return (
    <div>
      <Title />
      <Band />
      {/* <Video /> */}
      <ProductList />
      <Thoughts />
      <Cart />
    </div>
  );
};

export default Home;
