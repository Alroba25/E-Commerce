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
    <section className="py-16 bg-imperial-bg/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-imperial-dark tracking-tight">
            Why Shop With Us?
          </h2>
          <div className="w-20 h-1.5 bg-imperial-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-imperial-dark/60 text-base max-w-3xl mx-auto font-medium">
            Over a decade of excellence in delivering premium computer
            components and exceptional service.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex-wrap justify-center gap-0 mb-12 rounded-lg overflow-hidden shadow-sm border border-imperial-dark/10 inline-flex mx-auto bg-white">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-8 py-4 font-bold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-imperial-dark text-imperial-accent"
                    : "bg-white text-imperial-dark/50 hover:bg-imperial-bg hover:text-imperial-primary"
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
                  className="bg-white border-2 border-imperial-primary rounded-xl p-6 flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 border-4 border-imperial-primary rounded-full flex items-center justify-center mb-4 bg-imperial-bg">
                      <FaDesktop className="text-4xl text-imperial-primary" />
                    </div>
                    <span className="text-xs font-bold text-imperial-dark/60 uppercase tracking-wide">
                      {cat.action}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-imperial-dark tracking-wide group-hover:text-imperial-primary transition-colors">
                    {cat.title}
                  </h3>
                  <div className="w-12 h-1 bg-imperial-primary/20 mt-4 rounded-full group-hover:w-24 transition-all duration-300"></div>
                </div>
              );
            }

            // Regular cards for other categories
            return (
              <div
                key={index}
                className="bg-white border border-imperial-dark/10 rounded-xl p-4 flex flex-col items-center group hover:shadow-xl hover:border-imperial-primary/30 transition-all duration-300 cursor-pointer"
              >
                <div className="h-40 flex items-center justify-center w-full mb-4 overflow-hidden rounded-lg bg-gray-50">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                  />
                </div>
                <h3 className="text-base font-bold text-imperial-dark mb-3 text-center group-hover:text-imperial-primary transition-colors">
                  {cat.title}
                </h3>
                <span className="text-xs font-bold text-imperial-dark/40 uppercase tracking-wider group-hover:text-imperial-primary/60 transition-colors">
                  {cat.action}
                </span>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          <button
            className="w-3 h-3 rounded-full bg-imperial-dark/20 hover:bg-imperial-primary transition-colors"
            aria-label="Page 1"
          ></button>
          <button
            className="w-8 h-3 rounded-full bg-imperial-primary"
            aria-label="Page 2"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default WhyBuyFromUs;
