import { Link, useNavigate } from "react-router-dom";
import { products } from "../../../Data/ProductsData";
import Button from "../../../UI/Button/Button";
import NextButton from "../../../UI/Button/NextButton";
import Card from "../../../Components/Card";

const OfferSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/shop");
  };
  return (
    <div className="bg-primary py-[200px]">
      <div className="container px-[50px]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-secondary text-4xl italic font-secondary">
              Offer
            </h3>
            <h1 className="text-[50px] font-extrabold text-white">
              We Offer Organic For You
            </h1>
          </div>
          <Button variant="secondary" className="flex items-center gap-2" onClick={handleNavigate}>
            View All Products <NextButton />
          </Button>
        </div>
        <ul className="flex gap-[20px] pt-[40px] justify-between flex-wrap">
          {products.slice(12, 16).map((item) => (
            <li key={item.id}>
              <Link to={`shop/singleproduct/${item.id}`} className="group">
                <Card {...item} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OfferSection;
