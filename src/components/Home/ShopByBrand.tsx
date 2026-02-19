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
    <section className="py-16 bg-white border-t border-imperial-dark/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-imperial-dark tracking-tight">
            Premium Partners
          </h2>
          <div className="w-16 h-1 bg-imperial-primary mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Brands Grid/Slider */}
        <div className="flex flex-wrap justify-between items-center gap-6 overflow-x-auto pb-4 no-scrollbar">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="border border-imperial-dark/10 rounded-xl p-4 min-w-[140px] flex items-center justify-center hover:shadow-lg transition-all duration-300 bg-white grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:border-imperial-primary/30"
            >
              <img
                src={brand}
                alt="Brand Logo"
                className="max-w-full h-auto max-h-12"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {/* Pagination dots simulation */}
          <span className="w-2 h-2 rounded-full bg-imperial-dark/10 cursor-pointer hover:bg-imperial-primary/50 transition-colors"></span>
          <span className="w-2 h-2 rounded-full bg-imperial-dark/10 cursor-pointer hover:bg-imperial-primary/50 transition-colors"></span>
          <span className="w-2 h-2 rounded-full bg-imperial-dark/10 cursor-pointer hover:bg-imperial-primary/50 transition-colors"></span>
          <span className="w-8 h-2 rounded-full bg-imperial-primary cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-imperial-dark/10 cursor-pointer hover:bg-imperial-primary/50 transition-colors"></span>
        </div>
      </div>
    </section>
  );
};

export default ShopByBrand;
