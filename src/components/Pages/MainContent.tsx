import ImageSlider from "../ImageSlider";
import WhyBuyFromUs from "../Home/WhyBuyFromUs";
import FeaturedProducts from "../Home/FeaturedProducts";
import ShopByBrand from "../Home/ShopByBrand";
import HomeFooter from "../Home/HomeFooter";

const MainContent = () => {
  return (
    <div className="bg-white">
      <ImageSlider />
      <WhyBuyFromUs />
      <FeaturedProducts />
      <ShopByBrand />
      <HomeFooter />
    </div>
  );
};

export default MainContent;
