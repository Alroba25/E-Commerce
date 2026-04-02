import { memo } from "react";
import { Box, Flex, Heading, Image, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

// Placeholder brands based roughly on image or previous structure
const brands = [
  "https://th.bing.com/th/id/OIP.FpaFpQ3an4eBdVIEuJN3DAHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse2.mm.bing.net/th/id/OIP.4s6KlxdQjxcLIRNDdqa4cQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf551841908035.57b95f53f1aef.png",
  "https://tse1.mm.bing.net/th/id/OIP.Q4Nu3-LN3L7_C0TvuCVu8QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  "data:image/webp;base64,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",
  "https://th.bing.com/th/id/OIP.L3ARdlIfvszxRGGNrrznJAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse2.mm.bing.net/th/id/OIP.CDbfxWunOQIffyVH2U--iwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse4.mm.bing.net/th/id/OIP.EHOGx2P-EYMQ797BURn-LAHaF4?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://th.bing.com/th/id/R.f199c0b737746e9d31a227b8886500b1?rik=uXFShadsFtqnBQ&pid=ImgRaw&r=0",
];

const ShopByBrand = () => {
  return (
<<<<<<< HEAD
    <Box
      as="section"
      py={16}
      bg="white"
      borderTop="1px solid"
      borderColor="blackAlpha.100"
    >
      <Container maxW="container.xl" px={4}>
        <Box textAlign="center" mb={12}>
          <Heading
            as="h2"
            fontSize="3xl"
            fontWeight="bold"
            mb={4}
            color="#1d273b"
            letterSpacing="tight"
          >
            Shop by Brand
          </Heading>
          <Box w={16} h={1} bg="#f26f33" mx="auto" mb={6} borderRadius="full" />
        </Box>

        <Box
          css={{
            "& .swiper-pagination": {
              position: "relative",
              marginTop: "2rem",
            },
            "& .swiper-pagination-bullet": {
              width: "8px",
              height: "8px",
              backgroundColor: "rgba(0,0,0,0.1)",
              opacity: 1,
              margin: "0 6px !important",
            },
            "& .swiper-pagination-bullet-active": {
              backgroundColor: "#f26f33",
            },
          }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              480: { slidesPerView: 3 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 7 },
              1280: { slidesPerView: 8 },
            }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Flex
                    border="1px solid"
                    borderColor="blackAlpha.100"
                    borderRadius="xl"
                    p={4}
                    h="100px" // give it a consistent height
                    align="center"
                    justify="center"
                    bg="white"
                    filter="grayscale(100%) opacity(80%)"
                    _hover={{
                      filter: "grayscale(0%) opacity(100%)",
                      boxShadow: "sm",
                      borderColor: "blackAlpha.200",
                    }}
                    transition="all 0.3s"
                    cursor="pointer"
                    w="full"
                  >
                    <Image
                      src={brand}
                      alt={`Brand ${index}`}
                      loading="lazy"
                      maxW="full"
                      h="auto"
                      maxH="100%"
                      objectFit="contain"
                    />
                  </Flex>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
=======
    <section className="py-16 bg-white border-t border-imperial-dark/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-imperial-dark tracking-tight">
            Premium Partners
          </h2>
          <div className="w-16 h-1 bg-imperial-primary mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Brands Grid/Slider */}
        <div className="flex flex-wrap justify-between items-center gap-6 overflow-x-auto pb-4 no-scrollbar">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="border border-imperial-dark/10 rounded-xl p-4 min-w-[140px] flex items-center justify-center hover:shadow-lg transition-all duration-300 bg-white grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:border-imperial-primary/30"
            >
              <img
                src={brand}
                alt="Brand Logo"
                className="max-w-full h-auto max-h-12"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {/* Pagination dots simulation */}
          <span className="w-2 h-2 rounded-full bg-imperial-dark/10 cursor-pointer hover:bg-imperial-primary/50 transition-colors"></span>
          <span className="w-2 h-2 rounded-full bg-imperial-dark/10 cursor-pointer hover:bg-imperial-primary/50 transition-colors"></span>
          <span className="w-2 h-2 rounded-full bg-imperial-dark/10 cursor-pointer hover:bg-imperial-primary/50 transition-colors"></span>
          <span className="w-8 h-2 rounded-full bg-imperial-primary cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-imperial-dark/10 cursor-pointer hover:bg-imperial-primary/50 transition-colors"></span>
        </div>
      </div>
    </section>
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
  );
};

export default memo(ShopByBrand);
