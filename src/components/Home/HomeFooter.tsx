import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGooglePlusG,
} from "react-icons/fa";

const HomeFooter = () => {
  return (
    <footer className="bg-imperial-dark text-white pt-20 pb-10 border-t-8 border-imperial-primary">
      <div className="container mx-auto px-4">
        {/* Social Media Links - Centered Top */}
        <div className="flex justify-center gap-6 mb-16">
          <a
            href="#"
            className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-imperial-primary hover:text-white hover:shadow-lg hover:shadow-imperial-primary/50 transition-all transform hover:-translate-y-1"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="#"
            className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-imperial-primary hover:text-white hover:shadow-lg hover:shadow-imperial-primary/50 transition-all transform hover:-translate-y-1"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="#"
            className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-imperial-primary hover:text-white hover:shadow-lg hover:shadow-imperial-primary/50 transition-all transform hover:-translate-y-1"
          >
            <FaYoutube className="text-xl" />
          </a>
          <a
            href="#"
            className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-imperial-primary hover:text-white hover:shadow-lg hover:shadow-imperial-primary/50 transition-all transform hover:-translate-y-1"
          >
            <FaGooglePlusG className="text-xl" />
          </a>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-6xl mx-auto">
          {/* About Us */}
          <div className="border-l-2 border-imperial-primary pl-6">
            <h3 className="text-2xl font-bold text-imperial-primary mb-8 tracking-wide">
              About Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-imperial-primary rounded-full"></span>{" "}
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-imperial-primary rounded-full"></span>{" "}
                  Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-imperial-primary rounded-full"></span>{" "}
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-imperial-primary rounded-full"></span>{" "}
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-imperial-primary rounded-full"></span>{" "}
                  Return and Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="border-l-2 border-imperial-primary pl-6">
            <h3 className="text-2xl font-bold text-imperial-primary mb-8 tracking-wide">
              Customer Service
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-imperial-primary rounded-full"></span>{" "}
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-imperial-primary rounded-full"></span>{" "}
                  Site Map
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-imperial-primary rounded-full"></span>{" "}
                  Brands
                </a>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div className="border-l-2 border-imperial-primary pl-6">
            <h3 className="text-2xl font-bold text-imperial-primary mb-8 tracking-wide">
              My Account
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-imperial-primary rounded-full"></span>{" "}
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-imperial-primary rounded-full"></span>{" "}
                  Order History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-imperial-primary rounded-full"></span>{" "}
                  Affiliates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-imperial-primary rounded-full"></span>{" "}
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-imperial-primary rounded-full"></span>{" "}
                  Gift Certificates
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#5e3800] py-8 mt-12 border-t border-white/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            <span className="text-imperial-primary mr-2 text-xl">❝</span>
            Copyright © 2026, elbadrgroupeg.com. All rights reserved.
          </p>

          {/* Chat Widget Placeholder Button */}
          <div className="fixed bottom-8 right-8 z-50">
            <button className="bg-imperial-primary p-4 rounded-full shadow-2xl hover:scale-110 transition-transform hover:rotate-12 border-4 border-white/10">
              <span className="text-2xl text-white">💬</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
