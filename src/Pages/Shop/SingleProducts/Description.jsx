import React from "react";
import Button from "../../../UI/Button/Button";

const Description = () => {
  return (
    <div className="container px-[50px] flex flex-col items-center pt-[70px]">
      <div className="flex gap-[20px] items-center py-7">
        <Button variant="primary">Product Description</Button>
        <Button variant="info" className="px-[60px]">
          Additional Info
        </Button>
      </div>
      <p className="text-center text-cityRain text-lg">
        Welcome to the world of natural and organic. Here you can discover the
        bounty of nature. We have grown on the principles of health, ecology,
        and care. We aim to give our customers a healthy chemical-free meal for
        perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as
        glucose and fructose — make up 70% and 80% of the carbs in raw.
      </p>
    </div>
  );
};

export default Description;
