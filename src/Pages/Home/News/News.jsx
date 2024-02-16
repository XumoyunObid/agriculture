import Button from "../../../UI/Button/Button";
import NextButton from "../../../UI/Button/NextButton";
import UserIcon from "./../../../assets/Icons/UserIcon";

const News = () => {
  return (
    <div className="py-[180px]">
      <div className="container px-[50px]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-secondary text-4xl italic font-secondary">News</h3>
            <h1 className="text-primary text-[50px] font-extrabold">
              Discover weekly content about <br /> organic food, & more
            </h1>
          </div>
          <Button variant="third" className="flex items-center gap-3">
            More News <NextButton />
          </Button>
        </div>
        <div className="flex gap-[45px] justify-between pt-[45px]">
          <div className="bg-salad bg-cover bg-no-repeat bg-center rounded-[30px] w-1/2 h-[550px] relative">
            <div className="rounded-full px-[25px] font-extrabold flex flex-col items-center py-[15px] bg-white absolute top-[40px] left-[40px]">
              <p className="text-primary text-lg">25</p>
              <p className="text-primary text-lg">Nov</p>
            </div>
            <div className="bg-white w-[570px] h-[300px] rounded-[30px] py-[45px] px-[35px] absolute top-[300px] left-[30px] shadow-xl">
              <span className="flex items-center text-lg text-primary">
                <UserIcon />
                By Rachi Card
              </span>
              <h3 className="text-2xl text-primary font-extrabold">
                The Benefits of Vitamin D & How to Get It
              </h3>
              <p className="text-lg text-cityRain">
                Simply dummy text of the printing and typesetting <br />{" "}
                industry. Lorem Ipsum
              </p>
              <Button
                variant="secondary"
                className="flex items-center gap-3 mt-[15px]"
              >
                Read More <NextButton />{" "}
              </Button>
            </div>
          </div>
          <div className="bg-tomatoes bg-cover bg-no-repeat bg-center rounded-[30px] w-1/2 h-[550px] relative">
            <div className="rounded-full px-[25px] font-extrabold flex flex-col items-center py-[15px] bg-white absolute top-[40px] left-[40px]">
              <p className="text-primary text-lg">25</p>
              <p className="text-primary text-lg">Nov</p>
            </div>
            <div className="bg-white w-[570px] h-[300px] rounded-[30px] py-[45px] px-[35px] absolute top-[300px] left-[30px] shadow-xl">
              <span className="flex items-center text-lg text-primary">
                <UserIcon />
                By Rachi Card
              </span>
              <h3 className="text-2xl text-primary font-extrabold">
                Our Favourite Summertime Tommeto
              </h3>
              <p className="text-lg text-cityRain">
                Simply dummy text of the printing and typesetting <br />{" "}
                industry. Lorem Ipsum
              </p>
              <Button
                variant="secondary"
                className="flex items-center gap-3 mt-[15px]"
              >
                Read More <NextButton />{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
