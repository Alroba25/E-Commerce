<<<<<<< HEAD
import { Link as RouterLink } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUserPlus,
  FaUserCircle,
} from "react-icons/fa";
=======
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaUserPlus } from "react-icons/fa";
import Image from "./Image";
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
import { getCookie, removeCookie } from "../Api/cookies";
import { RiLogoutBoxLine } from "react-icons/ri";
import { toaster } from "./ui/toaster";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
<<<<<<< HEAD
import { useState, memo } from "react";
import DrawerCom from "./ui/Drawer";
import { Box, Flex, Input, Button, Text, Container } from "@chakra-ui/react";

=======
import { useState } from "react";
import DrawerCom from "./ui/Drawer";
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
const Navbar = () => {
  const productNumber = useSelector(
    ({ cart }: RootState) => cart.productsCart.length,
  );
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
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
              {isAuthenticated?.length > 0 ? (
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
=======
  const isAuthenticated = getCookie("jwt");
  return (
    <nav className="bg-imperial-bg border-b border-imperial-dark/10 sticky top-0 z-50 backdrop-blur-md bg-imperial-bg/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-8">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/">
              <Image
                src="./src/assets/logo.png"
                alt="Logo"
                className="h-12 w-auto drop-shadow-sm"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center shadow-sm">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2.5 text-sm text-imperial-dark placeholder-imperial-dark/50 bg-white border border-imperial-dark/20 rounded-l focus:outline-none focus:border-imperial-primary focus:ring-1 focus:ring-imperial-primary transition-all"
              />
              <button className="px-6 py-2.5 bg-imperial-primary text-white hover:bg-imperial-hover transition-colors rounded-r font-medium shadow-sm cursor-pointer">
                <FaSearch className="text-lg" />
              </button>
            </div>
          </div>

          {/* Right Side - Login, Register, Cart */}
          <div className="flex items-center gap-6">
            {isAuthenticated ? (
              <>
                {/* Logout */}
                <Link
                  to={"#"}
                  onClick={() => {
                    setTimeout(() => {
                      removeCookie("jwt");
                      window.location.href = "/login";
                    }, 2000);
                    toaster.create({
                      title: "Logout successful",
                      type: "success",
                    });
                  }}
                  className="flex items-center gap-2 text-imperial-dark hover:text-imperial-primary transition-colors font-medium"
                >
                  <RiLogoutBoxLine className="text-xl" />
                  <span className="text-sm">Logout</span>
                </Link>
              </>
            ) : (
              <>
                {/* Login */}
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-imperial-dark hover:text-imperial-primary transition-colors font-medium"
                >
                  <FaUser className="text-xl" />
                  <span className="text-sm">Login</span>
                </Link>

                {/* Register */}
                <Link
                  to="/register"
                  className="flex items-center gap-2 text-imperial-dark hover:text-imperial-primary transition-colors font-medium"
                >
                  <FaUserPlus className="text-xl" />
                  <span className="text-sm">Register</span>
                </Link>
              </>
            )}
            {/* Cart */}
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="cursor-pointer border-0 flex items-center gap-3 text-imperial-dark hover:text-imperial-primary transition-colors group"
            >
              <div className="text-right">
                <p className="text-xs text-imperial-dark/70 font-semibold group-hover:text-imperial-primary/80">
                  {productNumber} items
                </p>
              </div>
              <div className="relative p-2 bg-imperial-accent/20 rounded-full group-hover:bg-imperial-accent/40 transition-colors">
                <FaShoppingCart className="text-xl text-imperial-primary" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <DrawerCom open={open} setOpen={setOpen} />
    </nav>
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
  );
};

export default memo(Navbar);
