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
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Featured Products
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-500 text-sm uppercase tracking-wider">
            Check Latest Products from Features Categories...
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-bold uppercase text-gray-400">
          <button className="text-white bg-black px-4 py-2 flex items-center gap-2">
            <span className="text-yellow-500">⚡</span> LATEST
          </button>
          <button className="hover:text-black hover:bg-gray-100 px-4 py-2 transition-colors flex items-center gap-2">
            <span className="text-green-500">🏆</span> BESTSELLERS
          </button>
          <button className="hover:text-black hover:bg-gray-100 px-4 py-2 transition-colors flex items-center gap-2">
            <span className="text-red-500">🔥</span> SPECIALS
          </button>
          <button className="hover:text-black hover:bg-gray-100 px-4 py-2 transition-colors flex items-center gap-2">
            <span className="text-orange-500">🚚</span> COMING SOON
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group relative"
            >
              {/* Badges */}
              {product.isNew && (
                <div className="absolute top-0 left-0 bg-yellow-400 text-white text-xs font-bold px-3 py-1 -rotate-45 translate-x-[-25%] translate-y-[30%] z-10 w-24 text-center shadow-sm">
                  NEW
                </div>
              )}
              <div className="absolute top-2 right-2 p-1 bg-yellow-400 rounded-full z-10">
                <span className="text-xs font-bold text-black px-1">3</span>
              </div>

              {/* Image */}
              <div className="h-64 flex items-center justify-center p-4 relative overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Actions */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <button
                    className="bg-white p-2 text-gray-600 hover:text-red-500 hover:bg-gray-50 rounded-full shadow-md transition-colors"
                    title="Quick View"
                  >
                    <FaEye />
                  </button>
                  <button
                    className="bg-white p-2 text-gray-600 hover:text-red-500 hover:bg-gray-50 rounded-full shadow-md transition-colors"
                    title="Compare"
                  >
                    <FaExchangeAlt />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between text-xs text-blue-400 mb-2">
                  <span className="underline cursor-pointer hover:text-blue-600">
                    {product.category}
                  </span>
                  <span className="text-gray-400">{product.categoryType}</span>
                </div>

                <h3 className="font-bold text-gray-800 text-sm mb-3 h-10 overflow-hidden text-ellipsis line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors">
                  {product.name}
                </h3>

                <div className="text-gray-900 font-bold mb-4">
                  {product.price}
                </div>

                <div className="flex gap-2">
                  <div className="border border-gray-300 rounded flex items-center px-2 py-1 flex-1">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-full outline-none text-center text-sm"
                    />
                  </div>
                  <button className="flex-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded text-sm flex items-center justify-center gap-2 transition-colors">
                    <FaShoppingCart />
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products">
            <button className="bg-black text-white px-8 py-3 text-sm font-bold hover:bg-gray-800 transition-colors">
              SEE ALL PRODUCTS →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
