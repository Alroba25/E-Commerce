import ImageSlider from "../ImageSlider";
import WhyBuyFromUs from "../Home/WhyBuyFromUs";
import FeaturedProducts from "../Home/FeaturedProducts";
import ShopByBrand from "../Home/ShopByBrand";
import HomeFooter from "../Home/HomeFooter";
import Navbar from "../Navbar";
import StickyNav from "../StickyNav";

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <StickyNav/>
      <ImageSlider />
      <WhyBuyFromUs />
      <FeaturedProducts />
      <ShopByBrand />
      <HomeFooter />
    </>
  );
};

export default HomePage;
