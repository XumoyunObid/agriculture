import Button from "../../../UI/Button/Button";

const Gallery = () => {
  return (
    <div className="bg-gallery mt-[755px] py-[187px]">
      <div className="flex justify-between gap-[25px]">
        <div className="bg-organicjuice px-[146px] py-[240px] bg-cover bg-center bg-no-repeat flex items-center justify-between">
          <button className="bg-white py-[24px] px-[40px] rounded-2xl text-primary text-xl font-medium">
            Organic Juice
          </button>
        </div>
        <div className="bg-organicfood bg-cover px-[146px] py-[240px] bg-center bg-no-repeat flex items-center justify-between">
          <button className="bg-white py-[24px] px-[40px] rounded-2xl text-primary text-xl font-medium">
            Organic Food
          </button>
        </div>
        <div className="bg-cookies bg-cover px-[146px] py-[240px] bg-center bg-no-repeat flex items-center justify-between">
          <button className="bg-white py-[24px] px-[40px] rounded-2xl text-primary text-xl font-medium">
            Nuts Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
