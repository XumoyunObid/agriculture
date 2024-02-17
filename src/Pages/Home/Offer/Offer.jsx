import offer1 from "../../../assets/Home/offer1.png"
import offer2 from "../../../assets/Home/offer2.png"

const Offer = () => {
  return (
    <>
      <div className="py-[145px] container px-[50px] flex items-center gap-[35px]">
        <div className=" w-1/2 rounded-lg py-[90px] px-[55px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url(${offer1})`,
          backgroundRepeat: "no-repeat",
        }}>
          <h3 className="text-4xl italic text-white font-secondary">Natural!!</h3>
          <h1 className="font-extrabold text-white text-[40px]">
            Get Garden <br /> Fresh Fruits
          </h1>
        </div>
        <div className="w-1/2 rounded-lg py-[90px] px-[55px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url(${offer2})`,
          backgroundRepeat: "no-repeat",
        }}>
          <h3 className="text-4xl italic text-secondary font-secondary">Offer!!</h3>
          <h1 className="font-extrabold text-primary text-[40px]">
            Get 10% off <br /> on Vegetables
          </h1>
        </div>
      </div>
    </>
  );
};

export default Offer;
