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
  );
};

export default memo(HomeFooter);
