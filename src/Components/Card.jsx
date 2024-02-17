import React from "react";

const Card = ({ status, title, img, rating: Rating, price, discount }) => {
  return (
    <div className="rounded-[30px] bg-white relative hover:scale-[1.7] px-[30px] py-[20px] border shadow-xl flex flex-col justify-between w-[305px]">
      <div className="flex items-center justify-center">
        <div className="rounded-[8px] text-white bg-primary py-[6px] px-[12px] absolute top-5 left-5">
          {status}
        </div>
        <img className="w-[300px] h-[300px]" src={img} />
      </div>
      <div>
        <h1 className="text-xl font-semibold text-primary mb-3">{title}</h1>
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

export default Card;
