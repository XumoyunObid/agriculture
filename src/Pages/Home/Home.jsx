import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import EcoFriendly from "./EcoFriendly/EcoFriendly";
import Gallery from "./Gallery/Gallery";
import News from "./News/News";
import Offer from "./Offer/Offer";
import OfferSection from "./OfferSection/OfferSection";
import Newsletter from "./Testimonials/Components/Newsletter";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Offer />
      <AboutUs />
      <Categories />
      <Testimonials />
      <OfferSection />
      <EcoFriendly />
      <Gallery />
      <News />
      <Newsletter />
    </>
  );
};

export default Home;
