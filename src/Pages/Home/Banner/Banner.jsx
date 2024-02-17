import NextButton from "../../../UI/Button/NextButton";
import Button from "./../../../UI/Button/Button";
import bannerBg from "../../../assets/Home/bannerBg.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/shop");
  };
  return (
    <div
      className="h-[100vh] w-full relative"
      style={{ backgroundPosition: "center", backgroundSize: "cover" }}
    >
      <img src={bannerBg} className="absolute" alt="" />
      <div
        className="container px-[50px] flex flex-col items-start justify-center pt-[8%] absolute left-[5%]"
      >
        <h2 className="text-4xl text-secondary italic font-secondary">
          100% Natural Food
        </h2>
        <h1 className="text-[70px] text-primary font-extrabold">
          Choose the best <br /> healthier way <br /> of life
        </h1>
        <Button
          variant="secondary"
          className="flex items-center gap-[15px]"
          onClick={handleNavigate}
        >
          Explore Now <NextButton />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
