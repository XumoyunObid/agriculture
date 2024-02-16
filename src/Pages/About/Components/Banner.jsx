import bannerBg from "../../../assets/Home/aboutBg.png";

const AboutBanner = () => {
  return (
    <div
      className="h-[50vh] w-full relative flex items-center justify-center"
      style={{ backgroundPosition: "center", backgroundSize: "cover" }}
    >
      <img src={bannerBg} className="absolute" alt="" />
      <h1 className="text-primary text-[50px] font-extrabold">About Us</h1>
    </div>
  );
};

export default AboutBanner;
