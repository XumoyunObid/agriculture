import React from "react";

import bg from "../../../assets/Home/shopBg.png";

const ShopBanner = () => {
  return (
    <div
      className="h-[50vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-primary text-[50px] font-extrabold">Shop</h1>
    </div>
  );
};

export default ShopBanner;
