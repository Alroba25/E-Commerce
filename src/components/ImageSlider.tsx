import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import nightmareImg from "@/assets/nightmare-1920x1080w.jpg";
import nvidiaImg from "@/assets/El-Badr-Nvidia-1920x1080.jpg";

interface Slide {
  image: string;
  title: string;
}

const slides: Slide[] = [
  {
    image: nightmareImg,
    title: "nightmareImg",
  },
  {
    image: nvidiaImg,
    title: "nvidiaImg",
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Next Image
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Previous Image
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-imperial-dark/30 hover:bg-imperial-primary text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10 border border-white/10 hover:scale-110"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-xl" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-imperial-dark/30 hover:bg-imperial-primary text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10 border border-white/10 hover:scale-110"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
              index === current
                ? "bg-imperial-primary w-8"
                : "bg-white/50 w-2 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
