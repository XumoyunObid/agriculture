import { testimonials } from "../../../Data/ProductsData";
import sara from "../../../assets/Home/sara.jpg";
import RatingStars from "../../../assets/Icons/RatingStars";
import Card from "./Components/Card";

const Testimonials = () => {
  return (
    <div className="bg-testimonial bg-cover bg-center bg-no-repeat">
      <div className="container px-[50px] py-[105px] flex flex-col items-center">
        <h3 className="text-secondary text-4xl italic">Testimonial</h3>
        <h1 className="text-[50px] font-extrabold text-primary">
          What Our Customer Saying?
        </h1>
        <div className="flex flex-col items-center gap-3 pt-[50px] pb-[25px]">
          <img className="rounded-full" src={sara} />
          <RatingStars />
        </div>
        <div className="flex flex-col items-center pb-[100px] gap-[20px]">
          <p className="text-lg text-cityRain text-center">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy <br /> text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>
          <span className="text-primary font-semibold text-2xl">
            Sara Taylor
          </span>
          <p className="text-base text-cityRain">Consumer</p>
        </div>
        <div className="border-t pt-[100px]">
          <ul className="flex gap-[62px] justify-between items-center">
            {testimonials.map((item) => (
              <li key={item.id}>
                <Card {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
