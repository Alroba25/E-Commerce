import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaPhone, FaFire, FaLaptop, FaUsers } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";

const StickyNav = () => {
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);

  const departments = [
    "Laptops",
    "Desktops",
    "Components",
    "Peripherals",
    "Monitors",
    "Accessories",
    "Gaming",
    "Networking",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          {/* Left Side - All Departments */}
          <div className="relative">
            <button
              onClick={() => setIsDepartmentsOpen(!isDepartmentsOpen)}
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded transition-colors h-12"
            >
              <FaBars className="text-lg" />
              <span className="text-sm uppercase">All Departments</span>
            </button>

            {/* Dropdown Menu */}
            {isDepartmentsOpen && (
              <div className="absolute left-0 top-full mt-0 w-64 bg-white text-black shadow-lg rounded-b z-50">
                <ul className="py-2">
                  {departments.map((dept, index) => (
                    <li key={index}>
                      <Link
                        to={`/category/${dept.toLowerCase()}`}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors text-sm"
                        onClick={() => setIsDepartmentsOpen(false)}
                      >
                        {dept}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center gap-6 h-full">
            <Link
              to="/powered-by"
              className=" h-full flex items-center gap-2 text-white hover:bg-yellow-500 hover:text-black transition-colors text-sm font-medium"
            >
              <FaFire className="text-orange-500" />
              <span>POWERED BY</span>
            </Link>

            <Link
              to="/laptop"
              className="h-full flex items-center gap-2 text-white hover:bg-yellow-500 hover:text-black transition-colors text-sm font-medium"
            >
              <FaLaptop />
              <span>LAPTOP</span>
            </Link>

            <Link
              to="/elgato"
              className="h-full flex items-center gap-2 text-white hover:bg-yellow-500 hover:text-black transition-colors text-sm font-medium"
            >
              <FaFire className="text-orange-500" />
              <span>ELGATO</span>
            </Link>

            <Link
              to="/community"
              className="h-full flex items-center gap-2 text-white hover:bg-yellow-500 hover:text-black transition-colors text-sm font-medium"
            >
              <FaUsers />
              <span>COMMUNITY</span>
            </Link>
          </div>

          {/* Right Side - Phone & Help */}
          <div className="flex items-center gap-4 h-full">
            <a
              href="tel:01096663742"
              className="hidden h-full sm:flex items-center gap-2 text-white hover:bg-white hover:text-black transition-colors"
            >
              <FaPhone className="text-sm" />
              <span className="text-sm font-medium">01096663742</span>
            </a>

            <button className="h-full flex items-center gap-2 bg-yellow-500 hover:bg-white text-black font-semibold px-4 py-2 rounded transition-colors">
              <IoMdHelpCircle className="text-lg" />
              <span className="text-sm uppercase">Help!</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isDepartmentsOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsDepartmentsOpen(false)}
        />
      )}
    </nav>
  );
};

export default StickyNav;
