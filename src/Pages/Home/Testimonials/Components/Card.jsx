import React from "react";

const Card = ({ title, text }) => {
  return (
    <div className="rounded-full border-secondary border-4 flex flex-col items-center justify-center py-[55px] px-[45px] bg-[#f1f1f1]">
      <h1 className="text-primary font-extrabold text-[50px]">{title}</h1>
      <p className="text-primary font-semibold text-lg">{text}</p>
    </div>
  );
};

export default Card;
