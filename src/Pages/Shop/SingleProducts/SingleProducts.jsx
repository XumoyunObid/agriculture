import Description from "./Description";
import ProductWrapper from "./ProductWrapper";
import SingleProductBanner from "./SingleProductBanner";
import Newsletter from "./../../Home/Testimonials/Components/Newsletter";
import RelatedProducts from "./RelatedProducts";

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
