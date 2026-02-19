import { FaShoppingCart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
// Placeholder data
const products = [
  {
    id: 1,
    name: "ASUS PRIME X670-P ATX AM5 Motherboard",
    category: "Asus",
    categoryType: "PRIME X670-P",
    price: "12,500 EGP",
    image: "https://placehold.co/300x300/png?text=Motherboard",
    isNew: true,
  },
  {
    id: 2,
    name: "Patriot Viper Elite 5 DDR5-6400...",
    category: "Patriot",
    categoryType: "VEB532G6432KW",
    price: "23,500 EGP",
    image: "https://placehold.co/300x300/png?text=RAM+White",
    isNew: true,
  },
  {
    id: 3,
    name: "Acer 16GB DDR4-3200 CL22 SO-...",
    category: "Acer",
    categoryType: "BL.9BWWA.213",
    price: "8,500 EGP",
    image: "https://placehold.co/300x300/png?text=RAM+Green",
    isNew: true,
  },
  {
    id: 4,
    name: "Patriot Viper Elite 5 Ultra RGB 32...",
    category: "Patriot",
    categoryType: "VEUR532G6028K",
    price: "23,500 EGP",
    image: "https://placehold.co/300x300/png?text=RAM+RGB",
    isNew: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-imperial-dark tracking-tight">
            Featured Collection
          </h2>
          <div className="w-24 h-1.5 bg-imperial-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-imperial-dark/60 text-sm uppercase tracking-widest font-semibold">
            Curated Selections Just For You
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm font-bold uppercase tracking-wider">
          <button className="text-white bg-imperial-dark px-6 py-3 flex items-center gap-2 rounded-full shadow-lg shadow-imperial-dark/20 transform hover:-translate-y-1 transition-all">
            <span className="text-imperial-accent">⚡</span> LATEST
          </button>
          <button className="text-imperial-dark bg-white border border-imperial-dark/10 hover:bg-imperial-bg hover:text-imperial-primary px-6 py-3 transition-all flex items-center gap-2 rounded-full hover:shadow-md">
            <span className="text-green-600">🏆</span> BESTSELLERS
          </button>
          <button className="text-imperial-dark bg-white border border-imperial-dark/10 hover:bg-imperial-bg hover:text-imperial-primary px-6 py-3 transition-all flex items-center gap-2 rounded-full hover:shadow-md">
            <span className="text-red-500">🔥</span> SPECIALS
          </button>
          <button className="text-imperial-dark bg-white border border-imperial-dark/10 hover:bg-imperial-bg hover:text-imperial-primary px-6 py-3 transition-all flex items-center gap-2 rounded-full hover:shadow-md">
            <span className="text-orange-500">🚚</span> COMING SOON
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-imperial-dark/10 rounded-2xl overflow-hidden hover:shadow-xl hover:border-imperial-primary/30 transition-all duration-300 group relative transform hover:-translate-y-2"
            >
              {/* Badges */}
              {product.isNew && (
                <div className="absolute top-4 left-0 bg-imperial-primary text-white text-[10px] font-black px-8 py-1 -rotate-45 translate-x-[-28%] translate-y-[20%] z-20 w-32 text-center shadow-md uppercase tracking-widest">
                  NEW ARRIVAL
                </div>
              )}
              <div className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center bg-imperial-bg text-imperial-dark font-bold rounded-full z-20 shadow-sm border border-imperial-dark/10">
                <span className="text-xs">3</span>
              </div>

              {/* Image */}
              <div className="h-72 flex items-center justify-center p-6 relative overflow-hidden bg-linear-to-br from-white to-imperial-bg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply"
                />

                {/* Hover Actions */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 z-10">
                  <button
                    className="h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center text-imperial-dark hover:bg-imperial-primary hover:text-white transition-all transform hover:scale-110"
                    title="Quick View"
                  >
                    <FaEye />
                  </button>
                  <button
                    className="h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center text-imperial-dark hover:bg-imperial-primary hover:text-white transition-all transform hover:scale-110"
                    title="Compare"
                  >
                    <FaExchangeAlt />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between text-xs text-imperial-primary mb-2 font-bold tracking-wide uppercase">
                  <span className="cursor-pointer hover:underline">
                    {product.category}
                  </span>
                  <span className="text-imperial-dark/40">
                    {product.categoryType}
                  </span>
                </div>

                <h3 className="font-bold text-imperial-dark text-lg mb-3 h-14 overflow-hidden text-ellipsis line-clamp-2 hover:text-imperial-primary cursor-pointer transition-colors leading-tight">
                  {product.name}
                </h3>

                <div className="text-imperial-dark text-xl font-bold mb-4 font-mono">
                  {product.price}
                </div>

                <div className="flex gap-3">
                  <div className="border border-imperial-dark/20 rounded-lg flex items-center px-1 w-16 bg-gray-50">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-full outline-none text-center text-sm bg-transparent font-medium text-imperial-dark"
                    />
                  </div>
                  <button className="flex-1 bg-imperial-primary hover:bg-imperial-hover text-white font-bold py-2.5 px-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg">
                    <FaShoppingCart />
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/products">
            <button className="bg-imperial-dark text-white px-10 py-4 text-sm font-bold tracking-widest hover:bg-imperial-primary transition-all rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1">
              VIEW FULL COLLECTION →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
