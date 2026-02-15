// Placeholder brands
const brands = [
  "https://placehold.co/150x80/png?text=CORSAIR",
  "https://placehold.co/150x80/png?text=Thermaltake",
  "https://placehold.co/150x80/png?text=ZOTAC",
  "https://placehold.co/150x80/png?text=BenQ",
  "https://placehold.co/150x80/png?text=EVGA",
  "https://placehold.co/150x80/png?text=Crucial",
  "https://placehold.co/150x80/png?text=LEPA",
  "https://placehold.co/150x80/png?text=CREATIVE",
  "https://placehold.co/150x80/png?text=CRYORIG",
];

const ShopByBrand = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Shop by Brand
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-6"></div>
        </div>

        {/* Brands Grid/Slider */}
        <div className="flex flex-wrap justify-between items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-2 min-w-[120px] flex items-center justify-center hover:shadow-md transition-shadow bg-white grayscale hover:grayscale-0 opacity-70 hover:opacity-100 duration-300"
            >
              <img src={brand} alt="Brand Logo" className="max-w-full h-auto" />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {/* Pagination dots simulation */}
          <span className="w-2 h-2 rounded-full bg-gray-200 cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-gray-200 cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-gray-200 cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-orange-500 cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-gray-200 cursor-pointer"></span>
        </div>
      </div>
    </section>
  );
};

export default ShopByBrand;
