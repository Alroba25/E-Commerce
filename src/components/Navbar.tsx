import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaUserPlus } from "react-icons/fa";
import Image from "./Image";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-8">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/">
              <Image
                src="./src/assets/logo.png"
                alt="Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full px-4 py-2.5 text-sm text-gray-700 bg-white border border-gray-300 rounded-l focus:outline-none focus:border-gray-400"
              />
              <button className="px-6 py-2.5 bg-black text-white hover:bg-gray-800 transition-colors rounded-r">
                <FaSearch className="text-lg" />
              </button>
            </div>
          </div>

          {/* Right Side - Login, Register, Cart */}
          <div className="flex items-center gap-6">
            {/* Login */}
            <Link
              to="/login"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
            >
              <FaUser className="text-xl" />
              <span className="text-sm font-medium">Login</span>
            </Link>

            {/* Register */}
            <Link
              to="/register"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
            >
              <FaUserPlus className="text-xl" />
              <span className="text-sm font-medium">Register</span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500">0 item(s) - 0 EGP</p>
              </div>
              <div className="relative">
                <FaShoppingCart className="text-2xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
