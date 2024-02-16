import bannerBg from "../../../assets/Home/aboutBg.png"

const AboutBanner = () => {
  return (
    <div className="h-[50vh] w-full flex items-center justify-center" style={{ backgroundImage: `url(${bannerBg})`, backgroundPosition: "center", backgroundSize: 'cover' }}>
      <h1 className="text-primary text-[50px] font-extrabold">About Us</h1>
    </div>
  );
};

export default AboutBanner;
