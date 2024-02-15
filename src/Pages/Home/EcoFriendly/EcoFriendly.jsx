import eco from "../../../assets/Home/ecofriendlyBg.png";

const EcoFriendly = () => {
  return (
    <div className="relative">
      <img
        src={eco}
        className="absolute left-0 shadow-lg top-0 bottom-0 w-1/2"
      />
      <div className="py-[80px] px-[90px] rounded-2xl shadow-xl w-1/2 absolute flex flex-col gap-3 bg-white top-[100px] right-[110px]">
        <h3 className="text-secondary text-2xl italic">Eco Friendly</h3>
        <h1 className="text-[35px] font-extrabold text-primary">
          Econis is a Friendly <br /> Organic Store
        </h1>
        <div>
          <h3 className="text-xl text-primary font-medium">
            Start with Our Company First
          </h3>
          <p className="text-base text-primary">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
        <div>
          <h3 className="text-xl text-primary font-medium">
            Learn How to Grow Yourself
          </h3>
          <p className="text-base text-primary">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
        <div>
          <h3 className="text-xl text-primary font-medium">
            Farming Strategies of Today
          </h3>
          <p className="text-base text-primary">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium <br /> doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EcoFriendly;
