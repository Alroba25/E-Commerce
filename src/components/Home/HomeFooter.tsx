import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGooglePlusG,
} from "react-icons/fa";

const HomeFooter = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Social Media Links - Centered Top */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="#"
            className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 hover:shadow-md transition-all"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-pink-600 hover:shadow-md transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-red-600 hover:shadow-md transition-all"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-red-500 hover:shadow-md transition-all"
          >
            <FaGooglePlusG />
          </a>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Us */}
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-xl font-bold text-gray-800 mb-6">About Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Return and Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Site Map
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Brands
                </a>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-xl font-bold text-gray-800 mb-6">My Account</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Order History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Affiliates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Gift Certificates
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gray-700 py-6 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            <span className="text-orange-500 mr-2">❝</span>
            Copyright © 2018, elbadrgroupeg.com.
          </p>

          {/* Chat Widget Placeholder Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <button className="bg-yellow-400 p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
              <span className="text-2xl">💬</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
