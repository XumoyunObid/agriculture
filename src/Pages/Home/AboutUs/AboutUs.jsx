import img from "../../../assets/Home/aboutus.png";
import OrgaincFoodIcon from "./../../../assets/Icons/OrgaincFoodIcon";
import MailBoxIcon from "./../../../assets/Icons/MailBoxIcon";
import Button from "../../../UI/Button/Button";
import NextButton from "../../../UI/Button/NextButton";

const AboutUs = () => {
  return (
    <div className="bg-doctor">
      <div className="container px-[50px] pb-[100px] pt-[185px] flex">
        <img className="w-1/2" src={img} alt="" />
        <div className="w-1/2">
          <h3 className="text-secondary text-4xl italic font-secondary">About Us</h3>
          <h1 className="text-primary text-[50px] font-extrabold">
            We Believe in Working <br /> Accredited Farmers
          </h1>
          <p className="text-lg text-cityRain">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to <br /> been the industry's standard dummy text ever
            since the 1500s, when an unknown <br /> printer took a galley.{" "}
          </p>
          <div className="flex flex-col py-[48px] gap-[35px]">
            <div className="flex gap-[20px]">
              <div className="rounded-2xl p-[25px] flex items-center justify-center bg-white">
                <OrgaincFoodIcon />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-primary font-extrabold text-2xl">
                  Organic Foods Only
                </h3>
                <p className="text-cityRain text-lg">
                  Simply dummy text of the printing and typesetting <br />{" "}
                  industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]">
              <div className="rounded-2xl p-[25px] flex items-center justify-center bg-white">
                <MailBoxIcon />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-primary font-extrabold text-2xl">
                  Quality Standards
                </h3>
                <p className="text-cityRain text-lg">
                  Simply dummy text of the printing and typesetting <br />{" "}
                  industry. Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <Button variant="primary" className="flex items-center gap-[10px]">
            Shop Now <NextButton />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
