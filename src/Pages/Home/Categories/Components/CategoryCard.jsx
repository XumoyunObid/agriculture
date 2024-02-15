import React from "react";

const CategoryCard = ({
  status,
  title,
  img,
  rating: Rating,
  price,
  discount,
}) => {
  return (
    <div className="rounded-[30px] relative px-[30px] py-[20px] shadow-2xl flex flex-col justify-between w-[305px] h-[455px]">
      <div>
        <div className="rounded-[8px] text-white bg-primary py-[6px] px-[12px] absolute top-5 left-5">
          {status}
        </div>
        <img src={img} />
      </div>
      <div>
      <h1 className="text-xl font-semibold text-primary">{title}</h1>
      <div className="py-[5px] flex items-center justify-between border-t">
        <div className="flex gap-2 items-center">
          <span className="line-through text-base font-semibold text-cityRain">
            ${discount}
          </span>
          <p className="text-lg text-primary font-bold">${price}</p>
        </div>
        <Rating />
      </div>
      </div>
    </div>
  );
};

export default CategoryCard;
