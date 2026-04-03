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
          onClick={() => setIsDepartmentsOpen(false)}
        />
      )}
    </Box>
  );
};

export default memo(StickyNav);
