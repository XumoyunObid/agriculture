import Description from "./Description";
import ProductWrapper from "./ProductWrapper";
import SingleProductBanner from "./SingleProductBanner";
import RelatedProducts from "./RelatedProducts";
import Newsletter from "../../../Components/Newsletter";

const SingleProducts = () => {
  return (
    <div>
      <SingleProductBanner />
      <ProductWrapper />
      <Description />
      <RelatedProducts />
      <Newsletter />
    </div>
  );
};

export default SingleProducts;
