import { useState, memo } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaBars,
  FaPhone,
  FaFire,
  FaLaptop,
  FaUsers,
  FaDesktop,
  FaMicrochip,
  FaKeyboard,
  FaTv,
  FaHeadphones,
  FaGamepad,
  FaWifi,
} from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { Box, Flex, Text, Button, Container } from "@chakra-ui/react";

const departments = [
  { name: "Laptops", icon: FaLaptop },
  { name: "Desktops", icon: FaDesktop },
  { name: "Components", icon: FaMicrochip },
  { name: "Peripherals", icon: FaKeyboard },
  { name: "Monitors", icon: FaTv },
  { name: "Accessories", icon: FaHeadphones },
  { name: "Gaming", icon: FaGamepad },
  { name: "Networking", icon: FaWifi },
];

const StickyNav = () => {
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);

  return (
<<<<<<< HEAD
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={100}
      bg="#1d273b"
      color="white"
      boxShadow="lg"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Container maxW="container.xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <Flex h={14} align="center" justify="space-between">
          {/* Left Side - All Departments */}
          <Flex position="relative" h="full" align="center">
            <Button
              onClick={() => setIsDepartmentsOpen(!isDepartmentsOpen)}
              display="flex"
              alignItems="center"
              gap={3}
              bg="#206bc4"
              _hover={{
                bg: "blue.700",
                boxShadow: "0 0 10px rgba(32, 107, 196, 0.5)",
              }}
              color="white"
              fontWeight="bold"
              px={6}
              h={10}
              borderRadius="lg"
              transition="all 0.2s"
              boxShadow="md"
            >
              <FaBars fontSize="18px" />
              <Text
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                All Departments
              </Text>
            </Button>

            {/* Dropdown Menu */}
            {isDepartmentsOpen && (
              <Box
                position="absolute"
                left={0}
                top={14}
                mt={2}
                w={80}
                bg="white"
                color="#1d273b"
                boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 35px 0px, rgba(0, 0, 0, 0.05) 0px 5px 15px 0px"
                borderRadius="2xl"
                zIndex={50}
                border="1px solid"
                borderColor="blackAlpha.100"
                overflow="hidden"
                animation="fade-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
                transformOrigin="top left"
              >
                <Flex direction="column" p={2}>
                  {departments.map((dept, index) => (
                    <RouterLink
                      key={index}
                      to={`/category/${dept.name}`}
                      onClick={() => setIsDepartmentsOpen(false)}
                    >
                      <Flex
                        align="center"
                        justify="space-between"
                        px={4}
                        py={3}
                        borderRadius="xl"
                        role="group"
                        _hover={{
                          bg: "blue.50",
                          color: "#206bc4",
                          transform: "translateX(4px)",
                        }}
                        transition="all 0.2s"
                        cursor="pointer"
=======
    <nav className="sticky top-0 z-50 bg-imperial-dark text-white shadow-lg border-b border-imperial-primary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Left Side - All Departments */}
          <div className="relative h-full flex items-center">
            <button
              onClick={() => setIsDepartmentsOpen(!isDepartmentsOpen)}
              className="flex items-center gap-3 bg-imperial-primary hover:bg-imperial-hover text-white font-bold px-6 h-10 rounded-lg transition-all shadow-md hover:shadow-imperial-primary/50"
            >
              <FaBars className="text-lg" />
              <span className="text-sm uppercase tracking-wide">
                All Departments
              </span>
            </button>

            {/* Dropdown Menu */}
            {isDepartmentsOpen && (
              <div className="absolute left-0 top-12 mt-2 w-72 bg-white text-imperial-dark shadow-xl rounded-xl z-50 border border-imperial-dark/10 overflow-hidden animate-fade-in">
                <ul className="py-2">
                  {departments.map((dept, index) => (
                    <li key={index}>
                      <Link
                        to={`/category/${dept.toLowerCase()}`}
                        className="block px-6 py-3 hover:bg-imperial-bg hover:text-imperial-primary transition-colors text-sm font-medium border-b border-gray-50 last:border-none"
                        onClick={() => setIsDepartmentsOpen(false)}
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
                      >
                        <Flex align="center" gap={3}>
                          <Box
                            bg="gray.50"
                            p={2}
                            borderRadius="lg"
                            color="blackAlpha.500"
                            _groupHover={{
                              bg: "white",
                              color: "#206bc4",
                              boxShadow: "sm",
                            }}
                            transition="all 0.2s"
                          >
                            <Box as={dept.icon} fontSize="16px" opacity={0.8} />
                          </Box>
                          <Text
                            fontSize="sm"
                            fontWeight="bold"
                            letterSpacing="tight"
                          >
                            {dept.name}
                          </Text>
                        </Flex>
                        <Text
                          fontSize="xs"
                          color="blackAlpha.300"
                          _groupHover={{
                            color: "#206bc4",
                            transform: "translateX(2px)",
                          }}
                          transition="all 0.2s"
                        >
                          →
                        </Text>
                      </Flex>
                    </RouterLink>
                  ))}
                </Flex>
              </Box>
            )}
          </Flex>

          {/* Center - Navigation Links */}
<<<<<<< HEAD
          <Flex
            display={{ base: "none", md: "flex" }}
            align="center"
            gap={8}
            h="full"
          >
            <RouterLink to="/powered-by">
              <Flex
                h="full"
                align="center"
                gap={2}
                color="whiteAlpha.900"
                _hover={{ color: "#206bc4" }}
                transition="colors 0.2s"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="wide"
                role="group"
              >
                <Box
                  color="#206bc4"
                  _groupHover={{ transform: "scale(1.1)" }}
                  transition="transform 0.2s"
                >
                  <FaFire />
                </Box>
                <Text>POWERED BY</Text>
              </Flex>
            </RouterLink>

            <RouterLink to="/category/Laptops">
              <Flex
                h="full"
                align="center"
                gap={2}
                color="whiteAlpha.900"
                _hover={{ color: "#206bc4" }}
                transition="colors 0.2s"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="wide"
                role="group"
              >
                <Box
                  _groupHover={{ transform: "scale(1.1)" }}
                  transition="transform 0.2s"
                >
                  <FaLaptop />
                </Box>
                <Text>LAPTOP</Text>
              </Flex>
            </RouterLink>

            <RouterLink to="/elgato">
              <Flex
                h="full"
                align="center"
                gap={2}
                color="whiteAlpha.900"
                _hover={{ color: "#206bc4" }}
                transition="colors 0.2s"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="wide"
                role="group"
              >
                <Box
                  color="#206bc4"
                  _groupHover={{ transform: "scale(1.1)" }}
                  transition="transform 0.2s"
                >
                  <FaFire />
                </Box>
                <Text>ELGATO</Text>
              </Flex>
            </RouterLink>

            <RouterLink to="/community">
              <Flex
                h="full"
                align="center"
                gap={2}
                color="whiteAlpha.900"
                _hover={{ color: "#206bc4" }}
                transition="colors 0.2s"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="wide"
                role="group"
              >
                <Box
                  _groupHover={{ transform: "scale(1.1)" }}
                  transition="transform 0.2s"
                >
                  <FaUsers />
                </Box>
                <Text>COMMUNITY</Text>
              </Flex>
            </RouterLink>
          </Flex>

          {/* Right Side - Phone & Help */}
          <Flex align="center" gap={6} h="full">
            <Box
              display={{ base: "none", sm: "flex" }}
              h="full"
              alignItems="center"
              gap={2}
              color="whiteAlpha.800"
              _hover={{ color: "#206bc4" }}
              transition="colors 0.2s"
              role="group"
              asChild
            >
              <a href="tel:01096663742">
                <Box
                  fontSize="sm"
                  _groupHover={{ transform: "rotate(12deg)" }}
                  transition="transform 0.2s"
                >
                  <FaPhone />
                </Box>
                <Text as={"span"} fontSize="sm" fontWeight="bold">
                  010 9666 3742
                </Text>
              </a>
            </Box>

            <Button
              h={10}
              display="flex"
              alignItems="center"
              gap={2}
              bg="#206bc4"
              color="white"
              _hover={{ bg: "white", color: "#1d273b" }}
              fontWeight="bold"
              px={5}
              borderRadius="lg"
              transition="all 0.2s"
              boxShadow="md"
            >
              <IoMdHelpCircle fontSize="20px" />
              <Text
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Help!
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Container>

      {/* Mobile Menu Overlay */}
      {isDepartmentsOpen && (
        <Box
          position="fixed"
          inset={0}
          bg="rgba(0,0,0,0.5)"
          zIndex={40}
          backdropFilter="blur(4px)"
=======
          <div className="hidden md:flex items-center gap-8 h-full">
            <Link
              to="/powered-by"
              className="h-full flex items-center gap-2 text-white/90 hover:text-imperial-accent transition-colors text-sm font-bold tracking-wide group"
            >
              <FaFire className="text-imperial-accent group-hover:scale-110 transition-transform" />
              <span>POWERED BY</span>
            </Link>

            <Link
              to="/laptop"
              className="h-full flex items-center gap-2 text-white/90 hover:text-imperial-accent transition-colors text-sm font-bold tracking-wide group"
            >
              <FaLaptop className="group-hover:scale-110 transition-transform" />
              <span>LAPTOP</span>
            </Link>

            <Link
              to="/elgato"
              className="h-full flex items-center gap-2 text-white/90 hover:text-imperial-accent transition-colors text-sm font-bold tracking-wide group"
            >
              <FaFire className="text-imperial-accent group-hover:scale-110 transition-transform" />
              <span>ELGATO</span>
            </Link>

            <Link
              to="/community"
              className="h-full flex items-center gap-2 text-white/90 hover:text-imperial-accent transition-colors text-sm font-bold tracking-wide group"
            >
              <FaUsers className="group-hover:scale-110 transition-transform" />
              <span>COMMUNITY</span>
            </Link>
          </div>

          {/* Right Side - Phone & Help */}
          <div className="flex items-center gap-6 h-full">
            <a
              href="tel:01096663742"
              className="hidden h-full sm:flex items-center gap-2 text-white/80 hover:text-imperial-accent transition-colors group"
            >
              <FaPhone className="text-sm group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-bold">010 9666 3742</span>
            </a>

            <button className="h-10 flex items-center gap-2 bg-imperial-primary hover:bg-white hover:text-imperial-dark text-white font-bold px-5 rounded-lg transition-all shadow-md">
              <IoMdHelpCircle className="text-xl" />
              <span className="text-sm uppercase tracking-wide">Help!</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isDepartmentsOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
          onClick={() => setIsDepartmentsOpen(false)}
        />
      )}
    </Box>
  );
};

export default memo(StickyNav);
