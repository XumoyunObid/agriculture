import about from "../../assets/About/aboutus.png";
import MoernEquipmentIcon from "./../../assets/Icons/MoernEquipmentIcon";
import FactoryIcon from "./../../assets/Icons/FactoryIcon";
import Button from "./../../UI/Button/Button";
import NextButton from "./../../UI/Button/NextButton";

const AboutUs = () => {
  return (
    <div className="py-[150px]">
      <div className="flex items-center gap-[40px] container px-[50px]">
        <img src={about} alt="" className="w-1/2" />
        <div className="w-1/2">
          <h3 className="text-secondary text-4xl font-secondary">About Us</h3>
          <h1 className="text-[50px] font-extrabold text-primary">
            We do Creative <br />
            Things for Success
          </h1>
          <p className="text-lg text-cityRain">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
            <br /> <br />
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="flex justify-between items-center py-[50px]">
            <div className="flex items-center gap-[15px]">
              <MoernEquipmentIcon />
              <h3 className="text-primary text-2xl font-medium">
                Modern Agriculture <br /> Equipment
              </h3>
            </div>
            <div className="flex items-center gap-[15px]">
              <FactoryIcon />
              <h3 className="text-primary text-2xl font-medium">
                No growth <br /> hormones are used
              </h3>
            </div>
          </div>
          <Button variant="primary" className="flex items-center gap-3">
            Explore More <NextButton />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
