import { memo } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGooglePlusG,
} from "react-icons/fa";
import { Box, Flex, Grid, Heading, Text, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const HomeFooter = () => {
  return (
<<<<<<< HEAD
    <Box
      as="footer"
      bg="#1d273b"
      color="white"
      pt={20}
      pb={10}
      borderTop="8px solid"
      borderColor="#206bc4"
    >
      <Container maxW="container.xl" px={4}>
        {/* Social Media Links - Centered Top */}
        <Flex justify="center" gap={6} mb={16}>
          {/* Facebook */}
          <Box
            asChild
            bg="whiteAlpha.200"
            w={12}
            h={12}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            _hover={{
              bg: "#1877F2", // Real Brand Color
              color: "white",
              boxShadow: "lg",
              transform: "translateY(-4px)",
            }}
            transition="all 0.3s"
          >
            <a href="#">
              <FaFacebookF fontSize="20px" />
            </a>
          </Box>
          {/* Instagram */}
          <Box
            asChild
            bg="whiteAlpha.200"
            w={12}
            h={12}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            _hover={{
              bg: "#E1306C", // Real Brand Color
              color: "white",
              boxShadow: "lg",
              transform: "translateY(-4px)",
            }}
            transition="all 0.3s"
          >
            <a href="#">
              <FaInstagram fontSize="20px" />
            </a>
          </Box>
          {/* YouTube */}
          <Box
            asChild
            bg="whiteAlpha.200"
            w={12}
            h={12}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            _hover={{
              bg: "#FF0000", // Real Brand Color
              color: "white",
              boxShadow: "lg",
              transform: "translateY(-4px)",
            }}
            transition="all 0.3s"
          >
            <a href="#">
              <FaYoutube fontSize="20px" />
            </a>
          </Box>
          {/* Google Plus */}
          <Box
            asChild
            bg="whiteAlpha.200"
            w={12}
            h={12}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            _hover={{
              bg: "#db4a39", // Real Brand Color
              color: "white",
              boxShadow: "lg",
              transform: "translateY(-4px)",
            }}
            transition="all 0.3s"
          >
            <a href="#">
              <FaGooglePlusG fontSize="20px" />
            </a>
          </Box>
        </Flex>

        {/* Footer Columns */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={12}
          mb={16}
          maxW="6xl"
          mx="auto"
        >
          {/* About Us */}
          <Box borderLeft="2px solid" borderColor="#206bc4" pl={6}>
            <Heading
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              color="#206bc4"
              mb={8}
              letterSpacing="wide"
            >
              About Us
            </Heading>
            <Flex as="ul" direction="column" gap={4} listStyleType="none">
              {[
                { name: "About Us", path: "/about" },
                { name: "Delivery", path: "/delivery" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Return and Refund Policy", path: "/returns" },
              ].map((item, idx) => (
                <Box as="li" key={idx}>
                  <Box
                    asChild
                    color="whiteAlpha.700"
                    _hover={{ color: "white", transform: "translateX(4px)" }}
                    transition="all 0.3s"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    <RouterLink to={item.path}>
                      <Box
                        as="span"
                        w={1.5}
                        h={1.5}
                        bg="#206bc4"
                        borderRadius="full"
                      />
                      {item.name}
                    </RouterLink>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>

          {/* Customer Service */}
          <Box borderLeft="2px solid" borderColor="#206bc4" pl={6}>
            <Heading
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              color="#206bc4"
              mb={8}
              letterSpacing="wide"
            >
              Customer Service
            </Heading>
            <Flex as="ul" direction="column" gap={4} listStyleType="none">
              {[
                { name: "Contact", path: "/contact" },
                { name: "Profile", path: "/profile" },
                { name: "Brands", path: "#" },
              ].map((item, idx) => (
                <Box as="li" key={idx}>
                  <Box
                    asChild
                    color="whiteAlpha.700"
                    _hover={{ color: "white", transform: "translateX(4px)" }}
                    transition="all 0.3s"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    <RouterLink to={item.path}>
                      <Box
                        as="span"
                        w={1.5}
                        h={1.5}
                        bg="#206bc4"
                        borderRadius="full"
                      />
                      {item.name}
                    </RouterLink>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>

          {/* My Account */}
          <Box borderLeft="2px solid" borderColor="#206bc4" pl={6}>
            <Heading
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              color="#206bc4"
              mb={8}
              letterSpacing="wide"
            >
              My Account
            </Heading>
            <Flex as="ul" direction="column" gap={4} listStyleType="none">
              {[
                { name: "My Account", path: "/profile" },
                { name: "Order History", path: "/profile" },
                { name: "Cart", path: "/cart" },
              ].map((item, idx) => (
                <Box as="li" key={idx}>
                  <Box
                    asChild
                    color="whiteAlpha.700"
                    _hover={{ color: "white", transform: "translateX(4px)" }}
                    transition="all 0.3s"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    <RouterLink to={item.path}>
                      <Box
                        as="span"
                        w={1.5}
                        h={1.5}
                        bg="#206bc4"
                        borderRadius="full"
                      />
                      {item.name}
                    </RouterLink>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>
        </Grid>
      </Container>

      {/* Chat Widget Placeholder Button */}
      <Box position="fixed" bottom={8} right={8} zIndex={50}>
        <Box
          as="button"
          bg="#206bc4"
          p={4}
          borderRadius="full"
          boxShadow="2xl"
          _hover={{ transform: "scale(1.1) rotate(12deg)" }}
          transition="transform 0.3s"
          border="4px solid"
          borderColor="whiteAlpha.200"
        >
          <Text as="span" fontSize="2xl" color="white">
            💬
          </Text>
        </Box>
      </Box>
    </Box>
=======
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
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
  );
};

export default memo(HomeFooter);
