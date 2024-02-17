import juice from "../../../assets/Home/juice.png";
import food from "../../../assets/Home/food.png";
import cookies from "../../../assets/Home/cookies.png";
const Gallery = () => {
  return (
    <div className="bg-gallery mt-[755px] py-[187px]">
      <div className="flex justify-between gap-[20px]">
        <div
          className="px-[135px] py-[240px] bg-cover bg-center bg-no-repeat flex items-center justify-between"
          style={{
            backgroundImage: `url(${juice})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <button className="bg-white py-[24px] px-[40px] rounded-2xl text-primary text-xl font-medium">
            Organic Juice
          </button>
        </div>
        <div
          className="bg-cover px-[146px] py-[240px] bg-center bg-no-repeat flex items-center justify-between"
          style={{
            backgroundImage: `url(${food})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <button className="bg-white py-[24px] px-[40px] rounded-2xl text-primary text-xl font-medium">
            Organic Food
          </button>
        </div>
        <div
          className="bg-cover px-[135px] py-[240px] bg-center bg-no-repeat flex items-center justify-between"
          style={{
            backgroundImage: `url(${cookies})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <button className="bg-white py-[24px] px-[40px] rounded-2xl text-primary text-xl font-medium">
            Nuts Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
