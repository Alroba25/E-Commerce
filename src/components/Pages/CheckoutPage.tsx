import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { clearAllItems } from "@/app/features/Cart/cartSlice";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Container,
  Grid,
  GridItem,
  Input,
  VStack,
} from "@chakra-ui/react";
import { FaCheckCircle, FaLock, FaArrowLeft } from "react-icons/fa";
import toast from "react-hot-toast";
import { getCookie } from "@/Api/cookies";
import axiosConfig from "@/Api/axios.config";
import { updateUserProfileHandelar } from "@/Utils";
import { checkoutSchema } from "@/validation";
import InputErrorMessage from "../ui/InputErrorMessage";

const CheckoutPage = () => {
  const cartContent = useSelector(
    (state: RootState) => state.cart.productsCart,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    governorate: "",
    zipCode: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("jwt") || getCookie("jwt");
        if (token) {
          const res = await axiosConfig.get("/api/users/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const user = res.data;
          setFormData({
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            email: user.email || "",
            address: user.address || "",
            city: user.city || "",
            governorate: user.governorate || "",
            zipCode: user.zipCode || "",
            phoneNumber: user.phoneNumber || "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch user logic", error);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const subtotal = cartContent.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cartContent.length === 0) return;

    try {
      await checkoutSchema.validate(formData, { abortEarly: false });
      setErrors({});
    } catch (err: any) {
      if (err.name === "ValidationError") {
        const validationErrors: { [key: string]: string } = {};
        err.inner.forEach((error: any) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        setErrors(validationErrors);
        return;
      }
    }

    setIsProcessing(true);

    try {
      const token = localStorage.getItem("jwt") || getCookie("jwt");
      if (!token) {
        toast.error("You must be logged in to place an order.");
        setIsProcessing(false);
        navigate("/login");
        return;
      }

      // decode token or get user id
      const resUser = await axiosConfig.get("/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userId = resUser.data.id;

      try {
        await updateUserProfileHandelar(userId, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          city: formData.city,
          governorate: formData.governorate,
          zipCode: formData.zipCode,
          phoneNumber: formData.phoneNumber,
        });
      } catch (profileError: any) {
        if (profileError.response?.status === 403) {
          toast.error(
            "Note: Cannot save address to profile (Strapi Permission Denied). Order will proceed.",
          );
          console.error("Profile update 403 error. See Strapi Role Settings.");
        } else {
          console.error("Failed to update user profile", profileError);
        }
        // We will no longer throw an error here. We want the order to succeed even if address saving fails.
      }

      const orderData = {
        data: {
          orderId: `ORD-${Date.now().toString().slice(-6)}`,
          total: total,
          itemsCount: cartContent.reduce((acc, c) => acc + c.quantity, 0),
          status: "Processing",
          user: userId,
          products: cartContent.map((item) => item.documentId || item.id), // Link relation to products
        },
      };

      await axiosConfig.post("/api/orders", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(clearAllItems());
      toast.success("Order Placed Successfully! 🎉", {
        duration: 4000,
        position: "top-center",
      });
      navigate("/profile", { replace: true });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while placing your order.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartContent.length === 0 && !isProcessing) {
    return (
      <Box
        bg="#fdfcfb"
        minH="80vh"
        py={20}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxW="container.md" textAlign="center">
          <Heading
            as="h1"
            fontSize="4xl"
            color="#1d273b"
            mb={4}
            fontWeight="black"
            letterSpacing="tight"
          >
            Checkout Unavailable
          </Heading>
          <Text fontSize="lg" color="blackAlpha.600" mb={8}>
            You need to have items in your cart to proceed to checkout.
          </Text>
          <RouterLink to="/products">
            <Button
              bg="#206bc4"
              color="white"
              size="lg"
              px={10}
              py={6}
              borderRadius="xl"
              fontWeight="bold"
              _hover={{
                bg: "blue.700",
                transform: "translateY(-2px)",
                boxShadow: "xl",
              }}
              transition="all 0.3s"
            >
              Return to Shop
            </Button>
          </RouterLink>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg="#fdfcfb" minH="100vh" py={12} fontFamily="system-ui, sans-serif">
      <Container maxW="container.xl" px={4}>
        <Flex align="center" gap={4} mb={8}>
          <RouterLink to="/cart">
            <Flex
              align="center"
              gap={2}
              color="blackAlpha.500"
              _hover={{ color: "#206bc4" }}
              transition="colors 0.2s"
              fontWeight="bold"
            >
              <FaArrowLeft /> <Text>Back to Cart</Text>
            </Flex>
          </RouterLink>
        </Flex>

        <Heading
          as="h1"
          fontSize="4xl"
          fontWeight="black"
          color="#1d273b"
          mb={2}
          letterSpacing="tight"
        >
          Secure Checkout
        </Heading>
        <Flex
          align="center"
          gap={2}
          color="green.500"
          mb={10}
          fontWeight="bold"
          fontSize="sm"
        >
          <FaLock /> <Text>SSL Encrypted Transaction</Text>
        </Flex>

        <Box as="form" onSubmit={handlePlaceOrder}>
          <Grid templateColumns={{ base: "1fr", lg: "7fr 5fr" }} gap={10}>
            {/* Left: Shipping Details */}
            <GridItem>
              <Box
                bg="white"
                p={8}
                borderRadius="2xl"
                border="1px solid"
                borderColor="blackAlpha.100"
                boxShadow="sm"
                mb={8}
              >
                <Heading
                  as="h2"
                  fontSize="2xl"
                  fontWeight="bold"
                  color="#1d273b"
                  mb={6}
                >
                  Shipping Information
                </Heading>

                <Grid
                  templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                  gap={6}
                  mb={6}
                >
                  <Box>
                    <Text
                      fontWeight="bold"
                      color="blackAlpha.700"
                      fontSize="sm"
                      mb={2}
                    >
                      First Name
                    </Text>
                    <Input
                      placeholder="John"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      bg="gray.50"
                      border="1px solid"
                      borderColor="blackAlpha.200"
                      _focus={{
                        borderColor: "#206bc4",
                        ring: 1,
                        ringColor: "#206bc4",
                      }}
                      h={12}
                      borderRadius="xl"
                    />
                    <InputErrorMessage msg={errors.firstName} />
                  </Box>
                  <Box>
                    <Text
                      fontWeight="bold"
                      color="blackAlpha.700"
                      fontSize="sm"
                      mb={2}
                    >
                      Last Name
                    </Text>
                    <Input
                      placeholder="Doe"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      bg="gray.50"
                      border="1px solid"
                      borderColor="blackAlpha.200"
                      _focus={{
                        borderColor: "#206bc4",
                        ring: 1,
                        ringColor: "#206bc4",
                      }}
                      h={12}
                      borderRadius="xl"
                    />
                    <InputErrorMessage msg={errors.lastName} />
                  </Box>
                </Grid>

                <Box mb={6}>
                  <Text
                    fontWeight="bold"
                    color="blackAlpha.700"
                    fontSize="sm"
                    mb={2}
                  >
                    Email Address
                  </Text>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    bg="gray.50"
                    border="1px solid"
                    borderColor="blackAlpha.200"
                    _focus={{
                      borderColor: "#206bc4",
                      ring: 1,
                      ringColor: "#206bc4",
                    }}
                    h={12}
                    borderRadius="xl"
                  />
                  <InputErrorMessage msg={errors.email} />
                </Box>

                <Box mb={6}>
                  <Text
                    fontWeight="bold"
                    color="blackAlpha.700"
                    fontSize="sm"
                    mb={2}
                  >
                    Shipping Address
                  </Text>
                  <Input
                    placeholder="123 Main St"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    bg="gray.50"
                    border="1px solid"
                    borderColor="blackAlpha.200"
                    _focus={{
                      borderColor: "#206bc4",
                      ring: 1,
                      ringColor: "#206bc4",
                    }}
                    h={12}
                    borderRadius="xl"
                  />
                  <InputErrorMessage msg={errors.address} />
                </Box>

                <Box mb={6}>
                  <Text
                    fontWeight="bold"
                    color="blackAlpha.700"
                    fontSize="sm"
                    mb={2}
                  >
                    Phone Number
                  </Text>
                  <Input
                    placeholder="+20 123 456 7890"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    bg="gray.50"
                    border="1px solid"
                    borderColor="blackAlpha.200"
                    _focus={{
                      borderColor: "#206bc4",
                      ring: 1,
                      ringColor: "#206bc4",
                    }}
                    h={12}
                    borderRadius="xl"
                  />
                  <InputErrorMessage msg={errors.phoneNumber} />
                </Box>

                <Grid
                  templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
                  gap={6}
                >
                  <Box>
                    <Text
                      fontWeight="bold"
                      color="blackAlpha.700"
                      fontSize="sm"
                      mb={2}
                    >
                      City
                    </Text>
                    <Input
                      placeholder="Cairo"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      bg="gray.50"
                      border="1px solid"
                      borderColor="blackAlpha.200"
                      _focus={{
                        borderColor: "#206bc4",
                        ring: 1,
                        ringColor: "#206bc4",
                      }}
                      h={12}
                      borderRadius="xl"
                    />
                    <InputErrorMessage msg={errors.city} />
                  </Box>
                  <Box>
                    <Text
                      fontWeight="bold"
                      color="blackAlpha.700"
                      fontSize="sm"
                      mb={2}
                    >
                      Governorate
                    </Text>
                    <Input
                      placeholder="Cairo"
                      name="governorate"
                      value={formData.governorate}
                      onChange={handleChange}
                      bg="gray.50"
                      border="1px solid"
                      borderColor="blackAlpha.200"
                      _focus={{
                        borderColor: "#206bc4",
                        ring: 1,
                        ringColor: "#206bc4",
                      }}
                      h={12}
                      borderRadius="xl"
                    />
                    <InputErrorMessage msg={errors.governorate} />
                  </Box>
                  <Box>
                    <Text
                      fontWeight="bold"
                      color="blackAlpha.700"
                      fontSize="sm"
                      mb={2}
                    >
                      Zip Code
                    </Text>
                    <Input
                      placeholder="11511"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      bg="gray.50"
                      border="1px solid"
                      borderColor="blackAlpha.200"
                      _focus={{
                        borderColor: "#206bc4",
                        ring: 1,
                        ringColor: "#206bc4",
                      }}
                      h={12}
                      borderRadius="xl"
                    />
                    <InputErrorMessage msg={errors.zipCode} />
                  </Box>
                </Grid>
              </Box>

              <Box
                bg="white"
                p={8}
                borderRadius="2xl"
                border="1px solid"
                borderColor="blackAlpha.100"
                boxShadow="sm"
              >
                <Heading
                  as="h2"
                  fontSize="2xl"
                  fontWeight="bold"
                  color="#1d273b"
                  mb={6}
                >
                  Payment Method
                </Heading>
                <Flex
                  align="center"
                  gap={4}
                  p={4}
                  border="2px solid"
                  borderColor="#206bc4"
                  borderRadius="xl"
                  bg="blue.50"
                  cursor="pointer"
                >
                  <Box color="#206bc4" fontSize="xl">
                    <FaCheckCircle />
                  </Box>
                  <Text fontWeight="bold" color="#1d273b">
                    Cash on Delivery (COD)
                  </Text>
                </Flex>
                <Text fontSize="sm" color="blackAlpha.500" mt={4} ml={2}>
                  This is a simulated checkout. Real orders will require backend
                  integration.
                </Text>
              </Box>
            </GridItem>

            {/* Right: Order Summary */}
            <GridItem>
              <Box
                bg="white"
                borderRadius="2xl"
                border="1px solid"
                borderColor="blackAlpha.100"
                boxShadow="lg"
                p={8}
                position="sticky"
                top={28}
              >
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="bold"
                  color="#1d273b"
                  mb={6}
                >
                  Order Review
                </Heading>

                <VStack align="stretch" gap={4} mb={8}>
                  {cartContent.map((item, idx) => (
                    <Flex
                      key={idx}
                      justify="space-between"
                      fontSize="sm"
                      color="blackAlpha.700"
                      pb={4}
                      borderBottom="1px solid"
                      borderColor="blackAlpha.50"
                      _last={{ borderBottom: "none", pb: 0 }}
                    >
                      <Text lineClamp={1} pr={4}>
                        {item.title}{" "}
                        <Text as="span" fontWeight="bold" color="#206bc4">
                          (x{item.quantity})
                        </Text>
                      </Text>
                      <Text fontWeight="bold" color="#1d273b">
                        ${(item.price * item.quantity).toLocaleString()}
                      </Text>
                    </Flex>
                  ))}
                </VStack>

                <Box as="hr" borderColor="blackAlpha.200" mb={6} />

                <Flex
                  justify="space-between"
                  mb={4}
                  fontSize="lg"
                  color="blackAlpha.700"
                >
                  <Text>Subtotal</Text>
                  <Text fontWeight="bold" color="#1d273b">
                    ${subtotal.toLocaleString()}
                  </Text>
                </Flex>

                <Flex
                  justify="space-between"
                  mb={4}
                  fontSize="lg"
                  color="blackAlpha.700"
                >
                  <Text>Shipping</Text>
                  <Text fontWeight="bold" color="#1d273b">
                    ${shipping.toLocaleString()}
                  </Text>
                </Flex>

                <Flex justify="space-between" mb={8} alignItems="center">
                  <Text fontSize="xl" fontWeight="bold" color="#1d273b">
                    Total
                  </Text>
                  <Text
                    fontSize="4xl"
                    fontWeight="black"
                    color="#206bc4"
                    letterSpacing="tighter"
                  >
                    ${total.toLocaleString()}
                  </Text>
                </Flex>

                <Button
                  type="submit"
                  loading={isProcessing}
                  loadingText="Processing Order..."
                  w="full"
                  bg="#206bc4"
                  color="white"
                  size="lg"
                  py={7}
                  borderRadius="xl"
                  fontWeight="bold"
                  fontSize="lg"
                  _hover={{
                    bg: "blue.700",
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                  }}
                  transition="all 0.3s"
                >
                  Confirm & Place Order
                </Button>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CheckoutPage;
