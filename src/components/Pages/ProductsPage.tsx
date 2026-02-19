import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaExchangeAlt,
  FaEye,
  FaTh,
  FaThList,
} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/Utils";
import { useDispatch, useSelector } from "react-redux";
import { setNavigateProductId } from "@/app/features/Product/productSlice";
import type { IProduct } from "@/Interfaces";
import { addToCart } from "@/app/features/Cart/cartSlice";
import type { RootState } from "@/app/store";

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const dispatch = useDispatch();
  const testCart = useSelector((state: RootState) => state.cart.productsCart);
  // Fetch products
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  console.log(data);
  console.log("Test Cart", testCart);
  if (isLoading) {
    return (
      <div className="bg-imperial-bg min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="h-8 bg-imperial-accent/20 rounded w-48 animate-pulse"></div>
            <div className="h-8 bg-imperial-accent/20 rounded w-32 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 shadow-sm border border-imperial-accent/20"
              >
                <div className="h-48 bg-imperial-bg/50 rounded-lg mb-4 animate-pulse"></div>
                <div className="h-4 bg-imperial-accent/20 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-4 bg-imperial-accent/20 rounded w-1/2 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-imperial-bg">
        <div className="text-center p-8 max-w-md">
          <div className="text-imperial-primary text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-imperial-dark mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-imperial-dark/70 mb-6">
            We couldn't load the products. Please try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-imperial-primary text-white rounded hover:bg-imperial-hover transition-colors shadow-lg shadow-imperial-primary/20"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-imperial-bg min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-imperial-dark/60 mb-8">
          <Link
            to="/"
            className="hover:text-imperial-primary transition-colors flex items-center gap-1"
          >
            <FaHome /> Home
          </Link>
          <span className="text-imperial-accent">/</span>
          <span className="text-imperial-dark font-medium">Products</span>
        </nav>

        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-imperial-dark mb-2 relative inline-block tracking-tight">
              Our Collection
              <span className="absolute -bottom-1 left-0 w-1/3 h-1.5 bg-imperial-primary rounded-full"></span>
            </h1>
            <p className="text-imperial-dark/60 text-sm mt-3 font-medium">
              Showing{" "}
              <span className="font-bold text-imperial-primary">
                {data?.length || 0}
              </span>{" "}
              premium items
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-imperial-accent/30 shadow-sm">
            {/* View Toggles */}
            <div className="flex items-center border-r border-imperial-dark/10 pr-4 gap-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${
                  viewMode === "grid"
                    ? "bg-imperial-accent/20 text-imperial-primary"
                    : "text-imperial-dark/40 hover:bg-imperial-bg hover:text-imperial-dark"
                } transition-all`}
                title="Grid View"
              >
                <FaTh />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${
                  viewMode === "list"
                    ? "bg-imperial-accent/20 text-imperial-primary"
                    : "text-imperial-dark/40 hover:bg-imperial-bg hover:text-imperial-dark"
                } transition-all`}
                title="List View"
              >
                <FaThList />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-imperial-dark/50 hidden sm:inline font-medium">
                Sort by:
              </span>
              <select className="text-sm border-none bg-transparent font-bold text-imperial-dark focus:ring-0 cursor-pointer hover:text-imperial-primary transition-colors py-1">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid/List */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              : "flex flex-col gap-6"
          }`}
        >
          {data?.map((p: IProduct) => {
            const imageUrl = p.thumbnail?.url
              ? `${import.meta.env.VITE_SERVER_BASE}${p.thumbnail.url}`
              : "https://via.placeholder.com/300"; // Fallback image
            return (
              <div
                key={p.id}
                className={`group bg-white rounded-2xl border border-imperial-dark/5 overflow-hidden shadow-sm hover:shadow-2xl hover:border-imperial-primary/30 transition-all duration-300 transform hover:-translate-y-2 ${
                  viewMode === "list"
                    ? "flex flex-col sm:flex-row"
                    : "flex flex-col"
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative overflow-hidden bg-linear-to-br from-white to-imperial-bg ${
                    viewMode === "list" ? "sm:w-72 h-72 sm:h-auto" : "h-72"
                  }`}
                >
                  <img
                    src={imageUrl}
                    alt={p.title}
                    className="w-full h-full object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />

                  {/* Badge (Optional - can be dynamic) */}
                  <div className="absolute top-3 left-3 bg-imperial-bg/90 backdrop-blur text-imperial-dark text-xs font-bold px-3 py-1 rounded-full border border-imperial-dark/10 shadow-sm">
                    NEW
                  </div>

                  {/* Overlay Actions */}
                  <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                    <button
                      className="h-11 w-11 bg-white rounded-full shadow-lg flex items-center justify-center text-imperial-dark hover:bg-imperial-primary hover:text-white transition-all transform hover:scale-110"
                      title="Quick View"
                    >
                      <FaEye className="text-lg" />
                    </button>
                    <button
                      className="h-11 w-11 bg-white rounded-full shadow-lg flex items-center justify-center text-imperial-dark hover:bg-imperial-primary hover:text-white transition-all transform hover:scale-110"
                      title="Add to Wishlist"
                    >
                      <FaExchangeAlt className="text-lg" />
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`p-6 flex flex-col flex-1 ${viewMode === "list" ? "justify-center" : ""}`}
                >
                  {/* Category/Brand */}
                  <div className="text-xs text-imperial-dark/50 mb-2 uppercase tracking-widest font-bold">
                    PREMIUM BRAND
                  </div>

                  <button
                    onClick={() => {
                      dispatch(setNavigateProductId(p.documentId));
                    }}
                    className="text-left group-hover:text-imperial-primary transition-colors"
                  >
                    <Link to={`/product`} className="block">
                      <h3 className="font-bold text-imperial-dark text-xl mb-3 leading-tight line-clamp-2">
                        {p.title}
                      </h3>
                    </Link>
                  </button>
                  {viewMode === "list" && (
                    <p className="text-imperial-dark/70 text-sm mb-5 line-clamp-2 leading-relaxed">
                      {p.description || "No description available."}
                    </p>
                  )}

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-imperial-dark/5">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-imperial-primary">
                        ${p.price?.toLocaleString()}
                      </span>
                    </div>

                    <button
                      className="bg-imperial-dark text-white hover:bg-imperial-primary px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 group-btn shadow-md hover:shadow-imperial-primary/40"
                      onClick={() => {
                        dispatch(
                          addToCart({
                            title: p.title,
                            description: p.description,
                            documentId: p.documentId,
                            price: p.price,
                            id: p.id,
                            thumbnail: p.thumbnail,
                          }),
                        );
                      }}
                    >
                      <FaShoppingCart className="group-btn-hover:animate-bounce" />
                      <span className="hidden sm:inline">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
