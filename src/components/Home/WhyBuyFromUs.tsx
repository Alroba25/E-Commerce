import { useState } from "react";
import {
  FaMicrochip,
  FaGamepad,
  FaKeyboard,
  FaCompactDisc,
  FaDesktop,
} from "react-icons/fa";

// Category data matching the reference website
const categories = [
  {
    title: "MONITORS",
    type: "icon", // This one uses an icon instead of image
    action: "SHOP",
    subtitle: "MONITORS",
  },
  {
    title: "VGA",
    image: "https://placehold.co/300x200/e8e8e8/808080?text=VGA+Card",
    action: "VGA",
  },
  {
    title: "COOLING",
    image: "https://placehold.co/300x200/e8e8e8/808080?text=Cooling+System",
    action: "COOLING",
  },
  {
    title: "POWER SUPPLY",
    image: "https://placehold.co/300x200/e8e8e8/808080?text=Power+Supply",
    action: "POWER SUPPLY",
  },
  {
    title: "CPU",
    image: "https://placehold.co/300x300/e8e8e8/808080?text=CPU",
    action: "CPU",
  },
];

const tabs = [
  { id: "hardware", label: "HARDWARE", icon: FaMicrochip },
  { id: "accessories", label: "ACCESSORIES", icon: FaKeyboard },
  { id: "software", label: "SOFTWARE", icon: FaCompactDisc },
  { id: "console", label: "CONSOLE", icon: FaGamepad },
];

const WhyBuyFromUs = () => {
  const [activeTab, setActiveTab] = useState("hardware");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-gray-900">
            Why buy from us?
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-base max-w-3xl mx-auto">
            With more than 10 years of experience in computer components, which
            helps us to meet your needs in purchasing the best components at the
            lowest prices.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-0 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-8 py-4 font-bold text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-black text-white"
                    : "bg-white text-gray-500 hover:text-gray-800"
                }`}
              >
                <Icon className="text-lg" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
          {categories.map((cat, index) => {
            // Special styling for the first card (MONITORS)
            if (index === 0) {
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-blue-500 rounded-md p-6 flex flex-col items-center justify-center group hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 border-4 border-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <FaDesktop className="text-4xl text-blue-500" />
                    </div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      {cat.action}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-blue-600 tracking-wide">
                    {cat.title}
                  </h3>
                  <div className="w-full h-0.5 bg-gray-200 mt-4"></div>
                </div>
              );
            }

            // Regular cards for other categories
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-md p-4 flex flex-col items-center group hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="h-40 flex items-center justify-center w-full mb-4 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base font-bold text-gray-700 mb-3 text-center">
                  {cat.title}
                </h3>
                <span className="text-xs font-semibold text-gray-500 uppercase">
                  {cat.action}
                </span>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          <button
            className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-orange-500 transition-colors"
            aria-label="Page 1"
          ></button>
          <button
            className="w-2.5 h-2.5 rounded-full bg-orange-500"
            aria-label="Page 2"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default WhyBuyFromUs;
