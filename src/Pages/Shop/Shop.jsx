import React from "react";
import ShopBanner from "./Components/ShopBanner";
import Newsletter from "./../Home/Testimonials/Components/Newsletter";
import Products from "./Products/Products";

const Shop = () => {
  return (
    <>
      <ShopBanner />
      <Products />
      <Newsletter />
    </>
  );
};

export default Shop;
