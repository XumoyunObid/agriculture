import React from "react";

import bg from "../../assets/Home/notfoundbg.png";
import Button from "../../UI/Button/Button";
import NextButton from "../../UI/Button/NextButton";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/")
  }
  return (
    <div
      className="h-full py-[150px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="contaner px-[150px] flex items-center justify-end">
        <div>
          <h1 className="text-[200px] font-bold text-[#8FA8A8]">404</h1>
          <h2 className="text-primary text-[70px] font-extrabold">
            Page Not Found
          </h2>
          <p className="text-base font-semibold text-cityRain">
            The page you are looking for doesn't exist or has been moved
          </p>
          <Button variant="primary" className="flex items-center gap-3 mt-9" onClick={handleNavigate}>
            Got to Homepage <NextButton />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
