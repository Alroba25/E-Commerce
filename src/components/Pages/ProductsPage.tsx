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
const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Fetch products
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  console.log(data);
  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
              >
                <div className="h-48 bg-gray-200 rounded mb-4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">
            We couldn't load the products. Please try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const products = Array.isArray(data) ? data : [];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link
            to="/"
            className="hover:text-orange-500 transition-colors flex items-center gap-1"
          >
            <FaHome /> Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-800 font-medium">Products</span>
        </nav>

        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 relative inline-block">
              Our Products
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-orange-500 rounded-full"></span>
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Showing{" "}
              <span className="font-bold text-gray-900">{products.length}</span>{" "}
              results
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            {/* View Toggles */}
            <div className="flex items-center border-r border-gray-200 pr-4 gap-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${
                  viewMode === "grid"
                    ? "bg-orange-50 text-orange-500"
                    : "text-gray-400 hover:bg-gray-50"
                } transition-all`}
                title="Grid View"
              >
                <FaTh />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${
                  viewMode === "list"
                    ? "bg-orange-50 text-orange-500"
                    : "text-gray-400 hover:bg-gray-50"
                } transition-all`}
                title="List View"
              >
                <FaThList />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden sm:inline">
                Sort by:
              </span>
              <select className="text-sm border-none bg-transparent font-medium text-gray-800 focus:ring-0 cursor-pointer hover:text-orange-500 transition-colors">
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
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "flex flex-col gap-4"
          }`}
        >
          {data.map(
            (p: {
              id: number;
              title: string;
              description: string;
              thumbnail: { url: string };
              documentId: string;
              price: number;
            }) => {
              return (
                <div
                  key={p.id}
                  className={`group bg-white rounded-md border border-gray-200 overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-300 ${
                    viewMode === "list"
                      ? "flex flex-col sm:flex-row"
                      : "flex flex-col"
                  }`}
                >
                  {/* Image Section */}
                  <div
                    className={`relative overflow-hidden bg-gray-100 ${
                      viewMode === "list" ? "sm:w-64 h-64 sm:h-auto" : "h-64"
                    }`}
                  >
                    <img
                      src={`${import.meta.env.VITE_SERVER_BASE}${p.thumbnail.url}`}
                      alt={p.title}
                      className="w-full h-full object-contain p-4 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay Actions */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                      <button
                        className="h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-colors"
                        title="Quick View"
                      >
                        <FaEye />
                      </button>
                      <button
                        className="h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-colors"
                        title="Add to Wishlist"
                      >
                        <FaExchangeAlt /> // Using Exchange icon as placeholder
                        for wishlist/compare
                      </button>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`p-5 flex flex-col flex-1 ${viewMode === "list" ? "justify-center" : ""}`}
                  >
                    {/* Category/Brand (Static or from data) */}
                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">
                      {/* Placeholder for category/brand if available */}
                      Brand
                    </div>

                    <Link
                      to={`/products/${p.documentId}?populate=thumbnail`}
                      className="block"
                    >
                      <h3 className="font-bold text-gray-800 text-lg mb-2 leading-tight group-hover:text-orange-500 transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                    </Link>

                    {viewMode === "list" && (
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                        {p.description || "No description available."}
                      </p>
                    )}

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-900">
                          ${p.price.toLocaleString()}
                        </span>
                        {/* Optional: discount price */}
                        {/* <span className="text-sm text-gray-400 line-through">$100.00</span> */}
                      </div>

                      <button className="bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 group-btn">
                        <FaShoppingCart className="group-btn-hover:animate-bounce" />
                        <span className="hidden sm:inline">Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
