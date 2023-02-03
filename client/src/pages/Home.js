import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Title from "../components/Title";
import Band from "../components/Band";
import PostList from "../components/PostList";


const Home = () => {
  return (
    <div>
      <Title />
      <Band />
      {/* <Video /> */}
      <ProductList />
      <PostList />
      <Cart />
    </div>
  );
};

export default Home;
