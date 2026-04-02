import { memo } from "react";
import { FaDesktop } from "react-icons/fa";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/Utils/animations";

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
    image:
      "https://tse1.mm.bing.net/th/id/OIP.EvCWuu-iEuh7ZgEf1VEQyAHaFd?rs=1&pid=ImgDetMain&o=7&rm=3",
    action: "VGA",
  },
  {
    title: "COOLING",
    image:
      "https://tse3.mm.bing.net/th/id/OIF.0CcMTXHEWpzzMU1PJcrSmA?rs=1&pid=ImgDetMain&o=7&rm=3",
    action: "COOLING",
  },
  {
    title: "POWER SUPPLY",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.56Ld-evKLzugoyFM-vA1GgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    action: "POWER SUPPLY",
  },
  {
    title: "CPU",
    image:
      "https://th.bing.com/th/id/OIP.IOhqEdoZKB9uKj7So5qZ4AHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    action: "CPU",
  },
];

const WhyBuyFromUs = () => {
  return (
<<<<<<< HEAD
    <Box as="section" py={16} bg="#fdfcfb">
      <Container maxW="container.xl" px={4}>
        {/* Header */}
        <Box textAlign="center" mb={12}>
          <Heading
            as="h2"
            fontSize="4xl"
            fontWeight="bold"
            mb={3}
            color="#1d273b"
            letterSpacing="tight"
          >
            Why Shop With Us?
          </Heading>
          <Box
            w={20}
            h="6px"
            bg="#206bc4"
            mx="auto"
            mb={6}
            borderRadius="full"
          />
          <Text
            color="blackAlpha.600"
            fontSize="md"
            maxW="3xl"
            mx="auto"
            fontWeight="medium"
          >
            Over a decade of excellence in delivering premium computer
            components and exceptional service.
          </Text>
        </Box>

        {/* Categories Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap={5}
            maxW="7xl"
            mx="auto"
          >
            {categories.map((cat, index) => {
              // Special styling for the first card (MONITORS)
              if (index === 0) {
                return (
                  <motion.div
                    variants={fadeInUp}
                    key={index}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Flex
                      direction="column"
                      align="center"
                      justify="center"
                      bg="white"
                      border="2px solid"
                      borderColor="#206bc4"
                      borderRadius="xl"
                      p={6}
                      role="group"
                      _hover={{
                        boxShadow: "xl",
                        transform: "translateY(-4px)",
                      }}
                      transition="all 0.3s"
                      cursor="pointer"
                    >
                      <Flex direction="column" align="center" mb={6}>
                        <Flex
                          w={20}
                          h={20}
                          border="4px solid"
                          borderColor="#206bc4"
                          borderRadius="full"
                          align="center"
                          justify="center"
                          mb={4}
                          bg="#fdfcfb"
                        >
                          <FaDesktop fontSize="36px" color="#206bc4" />
                        </Flex>
                        <Text
                          fontSize="xs"
                          fontWeight="bold"
                          color="blackAlpha.600"
                          textTransform="uppercase"
                          letterSpacing="wide"
                        >
                          {cat.action}
                        </Text>
                      </Flex>
                      <Heading
                        as="h3"
                        fontSize="2xl"
                        fontWeight="black"
                        color="#1d273b"
                        letterSpacing="wide"
                        _groupHover={{ color: "#206bc4" }}
                        transition="colors"
                      >
                        {cat.title}
                      </Heading>
                      <Box
                        w={12}
                        h="4px"
                        bg="blue.100"
                        mt={4}
                        borderRadius="full"
                        _groupHover={{ w: 24 }}
                        transition="all 0.3s"
                      />
                    </Flex>
                  </motion.div>
                );
              }

              // Regular cards for other categories
              return (
                <motion.div
                  variants={fadeInUp}
                  key={index}
                  style={{ height: "100%", width: "100%" }}
                >
                  <Flex
                    key={index}
                    direction="column"
                    align="center"
                    bg="white"
                    border="1px solid"
                    borderColor="blackAlpha.100"
                    borderRadius="xl"
                    p={4}
                    role="group"
                    _hover={{ boxShadow: "xl", borderColor: "#206bc4" }}
                    transition="all 0.3s"
                    cursor="pointer"
                  >
                    <Flex
                      h={40}
                      align="center"
                      justify="center"
                      w="full"
                      mb={4}
                      overflow="hidden"
                      borderRadius="lg"
                      bg="gray.50"
                    >
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        loading="lazy"
                        maxH="full"
                        maxW="full"
                        objectFit="contain"
                        _groupHover={{ transform: "scale(1.1)" }}
                        transition="transform 0.5s"
                        mixBlendMode="multiply"
                      />
                    </Flex>
                    <Heading
                      as="h3"
                      fontSize="md"
                      fontWeight="bold"
                      color="#1d273b"
                      mb={3}
                      textAlign="center"
                      _groupHover={{ color: "#206bc4" }}
                      transition="colors"
                    >
                      {cat.title}
                    </Heading>
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      color="blackAlpha.400"
                      textTransform="uppercase"
                      letterSpacing="wider"
                      _groupHover={{ color: "blue.400" }}
                      transition="colors"
                    >
                      {cat.action}
                    </Text>
                  </Flex>
                </motion.div>
              );
            })}
          </Grid>
        </motion.div>

        {/* Pagination Dots */}
        <Flex justify="center" gap={3} mt={12}>
          <Box
            as="button"
            aria-label="Page 1"
            w={3}
            h={3}
            borderRadius="full"
            bg="blackAlpha.200"
            _hover={{ bg: "#206bc4" }}
            transition="colors"
          />
          <Box
            as="button"
=======
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
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
            aria-label="Page 2"
            w={8}
            h={3}
            borderRadius="full"
            bg="#206bc4"
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default memo(WhyBuyFromUs);
