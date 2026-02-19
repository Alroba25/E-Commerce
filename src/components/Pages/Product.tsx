import { getOneProduct } from "@/Utils";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaMinus,
  FaPlus,
  FaCheck,
  FaHome,
  FaStar,
} from "react-icons/fa";
import type { IProduct } from "@/Interfaces";

const Product = () => {
  // 1. Get the documentId from Redux store
  const documentId = useSelector(
    (state: RootState) => state.product.navigateProductId,
  );

  // 2. Fetch product details
  const { data, isLoading, error } = useQuery({
    queryKey: ["oneProduct", documentId],
    queryFn: () => getOneProduct(documentId),
    enabled: !!documentId,
  });

  // 3. Handle Loading/Error/Empty states
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-gray-600">
        <p className="mb-4 text-lg">Product not found or error loading data.</p>
        <Link to="/" className="text-orange-500 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  // 4. Data preparation
  const product = data as IProduct; // Assume IProduct structure based on ProductsPage usage
  const { title, description, price, thumbnail } = product;

  // Safe image access with fallback
  const imageUrl = thumbnail?.url
    ? `${import.meta.env.VITE_SERVER_BASE}${thumbnail.url}`
    : "https://via.placeholder.com/600x600?text=No+Image";
  return (
    <div className="bg-imperial-bg/30 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-imperial-dark/50 mb-8 overflow-x-auto whitespace-nowrap font-medium">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-imperial-primary transition-colors"
          >
            <FaHome /> Home
          </Link>
          <span className="text-imperial-dark/30">/</span>
          <Link
            to="/products"
            className="hover:text-imperial-primary transition-colors"
          >
            Products
          </Link>
          <span className="text-imperial-dark/30">/</span>
          <span className="text-imperial-dark font-bold truncate max-w-[200px] sm:max-w-none">
            {title}
          </span>
        </nav>

        <div className="bg-white rounded-2xl shadow-xl border border-imperial-dark/10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left: Image Gallery */}
            <div className="p-6 lg:p-10 bg-white flex flex-col items-center border-b md:border-b-0 md:border-r border-imperial-dark/10">
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center bg-radial from-white to-imperial-bg/20 rounded-2xl overflow-hidden mb-6 group border border-imperial-dark/5">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-imperial-primary text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  New Arrival
                </div>
              </div>

              {/* Thumbnails (Mockup behavior since we only have one image usually) */}
              <div className="flex gap-4 overflow-x-auto w-full justify-center pb-2">
                {[imageUrl].map((img, idx) => (
                  <button
                    key={idx}
                    className="w-20 h-20 border-2 border-imperial-primary rounded-xl overflow-hidden p-1 bg-white shadow-md hover:scale-105 transition-all"
                  >
                    <img
                      src={img}
                      alt="Thumbnail"
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </button>
                ))}
                {/* Placeholders to simulate gallery if needed */}
                {/* <div className="w-20 h-20 border border-gray-200 rounded-md bg-gray-50"></div> */}
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="p-6 lg:p-10 flex flex-col bg-white">
              <div className="mb-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-imperial-dark mb-4 leading-tight tracking-tight">
                  {title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-imperial-dark/60 mb-6 font-medium">
                  <div className="flex items-center gap-1 text-imperial-accent">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaStar className="text-gray-200" />
                    <span className="text-imperial-dark/60 ml-1">(4.0)</span>
                  </div>
                  <span className="text-imperial-dark/20">|</span>
                  <span className="text-green-600 flex items-center gap-1 font-bold bg-green-50 px-3 py-1 rounded-full border border-green-100">
                    <FaCheck size={12} /> In Stock
                  </span>
                  <span className="text-imperial-dark/20">|</span>
                  <span>
                    Model:{" "}
                    <span className="text-imperial-dark font-mono font-bold">
                      MDL-{product.id}
                    </span>
                  </span>
                </div>

                <hr className="border-imperial-dark/10 my-8" />

                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-5xl font-bold text-imperial-dark tracking-tighter">
                    ${price?.toLocaleString()}
                  </span>
                  {/* Mock previous price */}
                  {/* <span className="text-lg text-gray-400 line-through">$29,000</span> */}
                  <span className="text-sm font-bold text-imperial-primary bg-imperial-bg px-3 py-1 rounded-full uppercase tracking-wide">
                    Best Price
                  </span>
                </div>

                <div className="prose prose-sm text-imperial-dark/70 mb-10 max-w-none leading-relaxed">
                  <p>
                    {description ||
                      "No description available for this product."}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  {/* Quantity */}
                  <div className="flex items-center border border-imperial-dark/20 rounded-xl w-fit overflow-hidden bg-gray-50">
                    <button className="px-5 py-4 text-imperial-dark hover:bg-imperial-bg transition-colors">
                      <FaMinus size={12} />
                    </button>
                    <input
                      type="number"
                      readOnly
                      className="w-12 text-center border-none focus:ring-0 text-imperial-dark font-bold bg-transparent [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button className="px-5 py-4 text-imperial-dark hover:bg-imperial-bg transition-colors">
                      <FaPlus size={12} />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button className="flex-1 bg-imperial-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-imperial-hover hover:shadow-xl hover:shadow-imperial-primary/30 transition-all flex items-center justify-center gap-3 group transform hover:-translate-y-0.5">
                    <FaShoppingCart className="group-hover:scale-110 transition-transform" />
                    ADD TO CART
                  </button>
                </div>

                {/* Extras / Tags */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {["Fast Shipping", "Official Warranty", "Original"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold text-imperial-dark/60 bg-imperial-bg/50 px-4 py-2 rounded-full border border-imperial-dark/5"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
