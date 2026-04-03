import { Link as RouterLink } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUserPlus,
  FaUserCircle,
} from "react-icons/fa";
import { getCookie, removeCookie } from "../Api/cookies";
import { RiLogoutBoxLine } from "react-icons/ri";
import { toaster } from "./ui/toaster";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { useState, memo } from "react";
import DrawerCom from "./ui/Drawer";
import { Box, Flex, Input, Button, Text, Container } from "@chakra-ui/react";
const Navbar = () => {
  const productNumber = useSelector(
    ({ cart }: RootState) => cart.productsCart.length,
  );
  const [open, setOpen] = useState(false);
  const isAuthenticated = getCookie("jwt") || localStorage.getItem("jwt");

  return (
    <>
      <Box
        as="nav"
        bg="rgba(255, 255, 255, 0.95)"
        borderBottom="1px solid"
        borderColor="blackAlpha.100"
        backdropFilter="blur(12px)"
      >
        <Container maxW="container.xl" px={{ base: 4, sm: 6, lg: 8 }}>
          <Flex h={20} align="center" justify="space-between" gap={8}>
            {/* Logo */}
            <Box flexShrink={0}>
              <RouterLink to="/">
                <Text
                  fontSize="2xl"
                  fontWeight="black"
                  color="#206bc4"
                  letterSpacing="tighter"
                >
                  Next
                  <Text as="span" color="#206bc4">
                    Frame
                  </Text>
                </Text>
              </RouterLink>
            </Box>

            {/* Search Bar */}
            <Box flex={1} maxW="2xl" display={{ base: "none", md: "block" }}>
              <Flex
                align="center"
                borderRadius="lg"
                border="1px solid"
                borderColor="blackAlpha.200"
                overflow="hidden"
              >
                <Input
                  type="text"
                  placeholder="Search..."
                  bg="white"
                  border="none"
                  borderRight="none"
                  borderRightRadius={0}
                  px={4}
                  py={2.5}
                  fontSize="sm"
                  color="#1d273b"
                  _placeholder={{ color: "blackAlpha.500" }}
                  _focus={{
                    outline: "none",
                    borderColor: "#206bc4",
                    ring: 1,
                    ringColor: "#206bc4",
                  }}
                  transition="all 0.2s"
                />
                <Button
                  bg="#206bc4"
                  color="white"
                  px={6}
                  py={6}
                  borderLeftRadius={0}
                  _hover={{ bg: "blue.700" }}
                  transition="colors 0.2s"
                >
                  <FaSearch fontSize="18px" />
                </Button>
              </Flex>
            </Box>

            {/* Right Side - Login, Register, Cart */}
            <Flex align="center" gap={6}>
              {isAuthenticated && isAuthenticated.length > 0 ? (
                <>
                  {/* Profile Link */}
                  <RouterLink to="/profile">
                    <Flex
                      align="center"
                      gap={2}
                      color="#1d273b"
                      _hover={{ color: "#206bc4" }}
                      transition="colors 0.2s"
                      fontWeight="medium"
                    >
                      <FaUserCircle fontSize="20px" />
                      <Text
                        fontSize="sm"
                        display={{ base: "none", sm: "block" }}
                      >
                        My Account
                      </Text>
                    </Flex>
                  </RouterLink>

                  {/* Logout */}
                  <RouterLink
                    to="/"
                    onClick={() => {
                      setTimeout(() => {
                        localStorage.removeItem("jwt");
                        removeCookie("jwt");
                        window.location.href = "/login";
                      }, 2000);
                      toaster.create({
                        title: "Logout successful",
                        type: "success",
                      });
                    }}
                  >
                    <Flex
                      align="center"
                      gap={2}
                      color="#1d273b"
                      _hover={{ color: "#206bc4" }}
                      transition="colors 0.2s"
                      fontWeight="medium"
                    >
                      <RiLogoutBoxLine fontSize="20px" />
                      <Text
                        fontSize="sm"
                        display={{ base: "none", sm: "block" }}
                      >
                        Logout
                      </Text>
                    </Flex>
                  </RouterLink>
                </>
              ) : (
                <>
                  {/* Login */}
                  <RouterLink to="/login">
                    <Flex
                      align="center"
                      gap={2}
                      color="#1d273b"
                      _hover={{ color: "#206bc4" }}
                      transition="colors 0.2s"
                      fontWeight="medium"
                    >
                      <FaUser fontSize="20px" />
                      <Text
                        fontSize="sm"
                        display={{ base: "none", sm: "block" }}
                      >
                        Login
                      </Text>
                    </Flex>
                  </RouterLink>

                  {/* Register */}
                  <RouterLink to="/register">
                    <Flex
                      align="center"
                      gap={2}
                      color="#1d273b"
                      _hover={{ color: "#206bc4" }}
                      transition="colors 0.2s"
                      fontWeight="medium"
                    >
                      <FaUserPlus fontSize="20px" />
                      <Text
                        fontSize="sm"
                        display={{ base: "none", sm: "block" }}
                      >
                        Register
                      </Text>
                    </Flex>
                  </RouterLink>
                </>
              )}
              {/* Cart */}
              <Box
                as="button"
                onClick={() => setOpen(true)}
                display="flex"
                alignItems="center"
                gap={3}
                color="#1d273b"
                _hover={{ color: "#206bc4" }}
                transition="colors 0.2s"
                role="group"
                cursor="pointer"
                border="none"
                bg="transparent"
              >
                <Box textAlign="right" display={{ base: "none", sm: "block" }}>
                  <Text
                    fontSize="xs"
                    color="blackAlpha.700"
                    fontWeight="semibold"
                    _groupHover={{ color: "blue.700" }}
                  >
                    {productNumber} items
                  </Text>
                </Box>
                <Box
                  position="relative"
                  p={2}
                  bg="#EBF2FA"
                  borderRadius="full"
                  _groupHover={{ bg: "blue.100" }}
                  transition="colors 0.2s"
                >
                  <FaShoppingCart fontSize="20px" color="#206bc4" />
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <DrawerCom open={open} setOpen={setOpen} />
    </>
  );
};

export default memo(Navbar);
