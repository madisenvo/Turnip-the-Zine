import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Title from "../components/Title";
import Band from "../components/Band";
// import Video from "../components/Video";
import Posts from "../components/Posts";
// import DisplayPosts from "../components/Posts/DisplayPosts";



const Home = () => {
  const token = localStorage.getItem("id_token")
  if (token){

    return (
      <div>
        <Title />
        <Band />
        {/* <Video /> */}
        <ProductList />
        <Posts />
        {/* <DisplayPosts /> */}
        <Cart />
      </div>
    );
  } else {
window.location.replace("/login")
  }
};

export default Home;
