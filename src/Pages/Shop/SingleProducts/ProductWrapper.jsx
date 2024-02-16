import Button from "./../../../UI/Button/Button";
import NextButton from "./../../../UI/Button/NextButton";
import { products } from './../../../Data/ProductsData';
import { useParams } from "react-router-dom";

const ProductWrapper = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  return (
    <div className="container px-[50px] flex gap-[85px] pt-[110px]">
        <div className="rounded-[30px] w-1/2 bg-white relative px-[30px] py-[20px] border shadow-xl flex flex-col justify-between items-center h-[500px]">
          <div className="flex items-center justify-center">
            <div className="rounded-[8px] text-white bg-primary py-[6px] px-[12px] absolute top-8 left-8">
              {product.status}
            </div>
            <img src={product.img} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-1/2">
          <h1 className="font-semibold text-primary text-[40px]">
            {product.title}
          </h1>
          <span>{product.rating}</span>
          <div className="flex items-center">
            <p className="line-through text-cityRain font-semibold text-xl">
              ${product.discount}
            </p>
            <p className="text-primary font-bold text-2xl">${product.price}</p>
          </div>
          <p className="text-base text-cityRain py-[35px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had <br /> ceased to been the industry's standard dummy text ever
            since the 1500s, <br /> when an unknown printer took a galley.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-primary text-xl font-bold">Quantity: </p>
            <div className="flex items-center gap-5">
              <Button variant="third">1</Button>
              <Button variant="primary" className="flex items-center gap-3">
                Add to Card <NextButton />{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProductWrapper
