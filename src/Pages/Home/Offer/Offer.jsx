

const Offer = () => {
  return (
    <>
      <div className="py-[145px] container px-[50px] flex items-center gap-[35px]">
        <div className="bg-offer1 w-1/2 rounded-lg py-[90px] px-[55px] bg-no-repeat bg-contain">
          <h3 className="text-4xl italic text-white font-secondary">Natural!!</h3>
          <h1 className="font-extrabold text-white text-[40px]">
            Get Garden <br /> Fresh Fruits
          </h1>
        </div>
        <div className="bg-offer2 w-1/2 rounded-lg py-[90px] px-[55px] bg-no-repeat bg-contain">
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
