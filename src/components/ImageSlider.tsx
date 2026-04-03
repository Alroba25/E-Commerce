import { useState } from "react";
import nightmareImg from "@/assets/nightmare-1920x1080w.jpg";
import nvidiaImg from "@/assets/El-Badr-Nvidia-1920x1080.jpg";
import { Box, Image, IconButton } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/effect-fade";

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
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <Box
      position="relative"
      w="full"
      h={{ base: "300px", md: "500px" }}
      overflow="hidden"
      bg="black"
      css={{
        "& .swiper": {
          width: "100%",
          height: "100%",
        },
        "& .swiper-pagination-bullet": {
          width: "8px",
          height: "8px",
          backgroundColor: "rgba(255,255,255,0.5)",
          opacity: 1,
          transition: "all 0.3s",
        },
        "& .swiper-pagination-bullet-active": {
          backgroundColor: "#206bc4",
          width: "32px",
          borderRadius: "8px",
        },
      }}
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        onSwiper={setSwiperInstance}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt={slide.title}
              loading={index === 0 ? "eager" : "lazy"}
              w="full"
              h="full"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <IconButton
        aria-label="Previous slide"
        onClick={() => swiperInstance?.slidePrev()}
        position="absolute"
        left={4}
        top="50%"
        transform="translateY(-50%)"
        bg="rgba(29, 39, 59, 0.3)"
        color="white"
        p={3}
        borderRadius="full"
        _hover={{ bg: "#206bc4", transform: "translateY(-50%) scale(1.1)" }}
        transition="all 0.3s"
        backdropFilter="blur(4px)"
        zIndex={10}
        border="1px solid"
        borderColor="whiteAlpha.100"
      >
        <FaChevronLeft fontSize="20px" />
      </IconButton>

      <IconButton
        aria-label="Next slide"
        onClick={() => swiperInstance?.slideNext()}
        position="absolute"
        right={4}
        top="50%"
        transform="translateY(-50%)"
        bg="rgba(29, 39, 59, 0.3)"
        color="white"
        p={3}
        borderRadius="full"
        _hover={{ bg: "#206bc4", transform: "translateY(-50%) scale(1.1)" }}
        transition="all 0.3s"
        backdropFilter="blur(4px)"
        zIndex={10}
        border="1px solid"
        borderColor="whiteAlpha.100"
      >
        <FaChevronRight fontSize="20px" />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
