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
    <nav className="sticky top-0 z-50 bg-imperial-dark text-white shadow-lg border-b border-imperial-primary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Left Side - All Departments */}
          <div className="relative h-full flex items-center">
            <button
              onClick={() => setIsDepartmentsOpen(!isDepartmentsOpen)}
              className="flex items-center gap-3 bg-imperial-primary hover:bg-imperial-hover text-white font-bold px-6 h-10 rounded-lg transition-all shadow-md hover:shadow-imperial-primary/50"
            >
              <FaBars className="text-lg" />
              <span className="text-sm uppercase tracking-wide">
                All Departments
              </span>
            </button>

            {/* Dropdown Menu */}
            {isDepartmentsOpen && (
              <div className="absolute left-0 top-12 mt-2 w-72 bg-white text-imperial-dark shadow-xl rounded-xl z-50 border border-imperial-dark/10 overflow-hidden animate-fade-in">
                <ul className="py-2">
                  {departments.map((dept, index) => (
                    <li key={index}>
                      <Link
                        to={`/category/${dept.toLowerCase()}`}
                        className="block px-6 py-3 hover:bg-imperial-bg hover:text-imperial-primary transition-colors text-sm font-medium border-b border-gray-50 last:border-none"
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
          <div className="hidden md:flex items-center gap-8 h-full">
            <Link
              to="/powered-by"
              className="h-full flex items-center gap-2 text-white/90 hover:text-imperial-accent transition-colors text-sm font-bold tracking-wide group"
            >
              <FaFire className="text-imperial-accent group-hover:scale-110 transition-transform" />
              <span>POWERED BY</span>
            </Link>

            <Link
              to="/laptop"
              className="h-full flex items-center gap-2 text-white/90 hover:text-imperial-accent transition-colors text-sm font-bold tracking-wide group"
            >
              <FaLaptop className="group-hover:scale-110 transition-transform" />
              <span>LAPTOP</span>
            </Link>

            <Link
              to="/elgato"
              className="h-full flex items-center gap-2 text-white/90 hover:text-imperial-accent transition-colors text-sm font-bold tracking-wide group"
            >
              <FaFire className="text-imperial-accent group-hover:scale-110 transition-transform" />
              <span>ELGATO</span>
            </Link>

            <Link
              to="/community"
              className="h-full flex items-center gap-2 text-white/90 hover:text-imperial-accent transition-colors text-sm font-bold tracking-wide group"
            >
              <FaUsers className="group-hover:scale-110 transition-transform" />
              <span>COMMUNITY</span>
            </Link>
          </div>

          {/* Right Side - Phone & Help */}
          <div className="flex items-center gap-6 h-full">
            <a
              href="tel:01096663742"
              className="hidden h-full sm:flex items-center gap-2 text-white/80 hover:text-imperial-accent transition-colors group"
            >
              <FaPhone className="text-sm group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-bold">010 9666 3742</span>
            </a>

            <button className="h-10 flex items-center gap-2 bg-imperial-primary hover:bg-white hover:text-imperial-dark text-white font-bold px-5 rounded-lg transition-all shadow-md">
              <IoMdHelpCircle className="text-xl" />
              <span className="text-sm uppercase tracking-wide">Help!</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isDepartmentsOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsDepartmentsOpen(false)}
        />
      )}
    </nav>
  );
};

export default StickyNav;
