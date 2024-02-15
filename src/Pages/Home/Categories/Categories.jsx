import { Link } from "react-router-dom";
import { products } from "../../../Data/ProductsData";
import Card from "../../../Components/Card";
import ChevronRightIcon from "../../../assets/Icons/ChevronRightIcon";
import Button from "../../../UI/Button/Button";

const Categories = () => {
  return (
    <div>
      <div className="container py-[175px] flex flex-col items-center px-[50px]">
        <h3 className="text-secondary text-4xl italic">Categories</h3>
        <h1 className="text-primary text-[50px] font-extrabold">
          Our Products
        </h1>
        <ul className="flex gap-[20px] pt-[40px] flex-wrap">
          {products.slice(0, 8).map((item) => (
            <li key={item.id}>
              <Link to={`singleproduct/${item.id}`}>
                <Card {...item} />
              </Link>
            </li>
          ))}
        </ul>
        <Button
          variant="primary"
          className="flex items-center gap-3 mt-[140px]"
        >
          Load More <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default Categories;
