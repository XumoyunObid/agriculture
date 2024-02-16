import React from "react";
import { products } from "../../../Data/ProductsData";
import Card from "./../../../Components/Card";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <ul className="flex gap-[20px] pt-[40px] flex-wrap container px-[50px]">
      {products.slice(0, 12).map((item) => (
        <li key={item.id}>
          <Link to={`singleproduct/${item.id}`}>
            <Card {...item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Products;
