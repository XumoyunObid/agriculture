import { about_category } from "../../../Data/ProductsData";
import AboutCategoryCard from "../Components/AboutCategoryCard";

const AboutCategory = () => {
  return (
    <div className="bg-primary py-[185px]">
      <div className="flex flex-col container px-[50px] items-center gap-[30px]">
        <div className="text-center">
          <h3 className="italic font-secondary text-secondary text-4xl">
            About Us
          </h3>
          <h1 className="text-white text-[50px] font-extrabold">
            What We Offer for You
          </h1>
        </div>
        <ul className="flex items-center gap-[20px]">
          {about_category.map((item) => (
            <li key={item.id}>
              <AboutCategoryCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutCategory;
