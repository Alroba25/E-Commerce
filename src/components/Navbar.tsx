import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaUserPlus } from "react-icons/fa";
import Image from "./Image";
import { getCookie, removeCookie } from "../Api/cookies";
import { RiLogoutBoxLine } from "react-icons/ri";
import { toaster } from "./ui/toaster";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { useState } from "react";
import DrawerCom from "./ui/Drawer";
const Navbar = () => {
  const productNumber = useSelector(
    ({ cart }: RootState) => cart.productsCart.length,
  );
  const [open, setOpen] = useState(false);
  const isAuthenticated = getCookie("jwt");
  return (
    <nav className="bg-imperial-bg border-b border-imperial-dark/10 sticky top-0 z-50 backdrop-blur-md bg-imperial-bg/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-8">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/">
              <Image
                src="./src/assets/logo.png"
                alt="Logo"
                className="h-12 w-auto drop-shadow-sm"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center shadow-sm">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2.5 text-sm text-imperial-dark placeholder-imperial-dark/50 bg-white border border-imperial-dark/20 rounded-l focus:outline-none focus:border-imperial-primary focus:ring-1 focus:ring-imperial-primary transition-all"
              />
              <button className="px-6 py-2.5 bg-imperial-primary text-white hover:bg-imperial-hover transition-colors rounded-r font-medium shadow-sm cursor-pointer">
                <FaSearch className="text-lg" />
              </button>
            </div>
          </div>

          {/* Right Side - Login, Register, Cart */}
          <div className="flex items-center gap-6">
            {isAuthenticated ? (
              <>
                {/* Logout */}
                <Link
                  to={"#"}
                  onClick={() => {
                    setTimeout(() => {
                      removeCookie("jwt");
                      window.location.href = "/login";
                    }, 2000);
                    toaster.create({
                      title: "Logout successful",
                      type: "success",
                    });
                  }}
                  className="flex items-center gap-2 text-imperial-dark hover:text-imperial-primary transition-colors font-medium"
                >
                  <RiLogoutBoxLine className="text-xl" />
                  <span className="text-sm">Logout</span>
                </Link>
              </>
            ) : (
              <>
                {/* Login */}
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-imperial-dark hover:text-imperial-primary transition-colors font-medium"
                >
                  <FaUser className="text-xl" />
                  <span className="text-sm">Login</span>
                </Link>

                {/* Register */}
                <Link
                  to="/register"
                  className="flex items-center gap-2 text-imperial-dark hover:text-imperial-primary transition-colors font-medium"
                >
                  <FaUserPlus className="text-xl" />
                  <span className="text-sm">Register</span>
                </Link>
              </>
            )}
            {/* Cart */}
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="cursor-pointer border-0 flex items-center gap-3 text-imperial-dark hover:text-imperial-primary transition-colors group"
            >
              <div className="text-right">
                <p className="text-xs text-imperial-dark/70 font-semibold group-hover:text-imperial-primary/80">
                  {productNumber} items
                </p>
              </div>
              <div className="relative p-2 bg-imperial-accent/20 rounded-full group-hover:bg-imperial-accent/40 transition-colors">
                <FaShoppingCart className="text-xl text-imperial-primary" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <DrawerCom open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
