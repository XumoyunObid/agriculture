import React from "react";
import { products } from "../../../Data/ProductsData";
import Card from "../../../Components/Card";

const RelatedProducts = () => {
  return (
    <div className="container px-[50px] pt-[140px]">
      <h1 className="text-[50px] text-primary font-extrabold text-center">
        Related Products
      </h1>
      <ul className="flex gap-[20px] pt-[40px] flex-wrap">
        {products.slice(0, 4).map((item) => (
          <li key={item.id}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedProducts;
