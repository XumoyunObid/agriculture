import RoundIcon from "./../../../assets/Icons/RoundIcon";
import whychoose from "../../../assets/About/whychoose.png";
import { service } from "../../../Data/ProductsData";
import AboutServiceCard from "../Components/AboutServiceCard";
import PaymentIcon from "../../../assets/Icons/PaymentIcon";
const WhyChoose = () => {
  return (
    <div className="bg-doctor py-[190px]">
      <div className="container px-[50px] flex items-center gap-[50px] justify-between">
        <div className="w-1/2">
          <h3 className="text-secondary text-4xl italic font-secondary">
            Why Choose Us?
          </h3>
          <h1 className="text-[50px] font-extrabold text-primary">
            We do not buy from the <br />
            open market & traders.
          </h1>
          <p className="text-lg text-cityRain">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased <br /> to been the industry's standard the 1500s, when an
            unknown
          </p>
          <div className="pt-[30px] flex flex-col gap-[15px]">
            <div className="flex flex-col gap-4">
              <div className="rounded-full w-[330px] bg-[#ECECEC] px-[35px] py-[25px] flex items-center">
                <RoundIcon />{" "}
                <span className="text-primary text-xl font-medium">
                  100% Natural Product
                </span>
              </div>
              <p className="text-lg text-cityRain pl-[50px]">
                Simply dummy text of the printing and typesetting <br />{" "}
                industry Lorem Ipsum
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-full w-[330px] bg-[#ECECEC] px-[35px] py-[25px] flex items-center">
                <RoundIcon />{" "}
                <span className="text-primary text-xl font-medium">
                  {" "}
                  Increases resistance
                </span>
              </div>
              <p className="text-lg text-cityRain pl-[50px]">
                Filling, and temptingly healthy, our Biona Organic <br />{" "}
                Granola with Wild Berries is just the thing
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src={whychoose} />
        </div>
      </div>
      <ul className="flex gap-[30px] justify-center pt-[90px]">
        {service.map((item) => (
          <li key={item.id}>
            <AboutServiceCard
              title={item.title}
              text={item.text}
              img={item.img}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChoose;
