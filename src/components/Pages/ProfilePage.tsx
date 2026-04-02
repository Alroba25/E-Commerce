import { useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Container,
  Grid,
  GridItem,
  Button,
  VStack,
  Spinner,
  Center,
} from "@chakra-ui/react";
import {
  FaUser,
  FaBoxOpen,
  FaSignOutAlt,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaBox,
  FaTruck,
} from "react-icons/fa";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "@/Api/cookies";
import axiosConfig from "@/Api/axios.config";
import { toaster } from "@/components/ui/toaster";
import { useQuery } from "@tanstack/react-query";
import EditProfileModal from "../EditProfileModal";
import { useState } from "react";
import { setProfileData } from "@/app/features/Profile";
import { useDispatch } from "react-redux";

const ProfilePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt") || getCookie("jwt");
  const [openEdit, setOpenEdit] = useState(false);

  const {
    data: userInfo,
    isLoading: userLoading,
    error: userError,
  } = useQuery({
    queryKey: ["user", "me"],
    queryFn: async () => {
      const res = await axiosConfig.get("/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
    enabled: !!token,
    retry: false,
  });

  const { data: ordersData, isLoading: ordersLoading } = useQuery({
    queryKey: ["orders", userInfo?.id],
    queryFn: async () => {
      const res = await axiosConfig.get(`/api/orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.data || [];
    },
    enabled: !!token && !!userInfo?.id,
  });

  // Handle unauthorized state
  useEffect(() => {
    const err = userError as any;
    if (err && (err.response?.status === 401 || err.response?.status === 403)) {
      localStorage.removeItem("jwt");
      removeCookie("jwt");
      navigate("/login");
    }
  }, [userError, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    removeCookie("jwt");
    toaster.create({
      title: "Logout successful",
      type: "success",
    });
    navigate("/login");
  };

  const loading = userLoading || (userInfo && ordersLoading);
  const orders = ordersData || [];

  if (loading) {
    return (
      <Center minH="100vh" bg="#fdfcfb">
        <Spinner size="xl" color="#206bc4" />
      </Center>
    );
  }
  const dispatch = useDispatch();
  return (
    <Box bg="#fdfcfb" minH="100vh" py={12} fontFamily="system-ui, sans-serif">
      <Container maxW="container.xl" px={4}>
        <Heading
          as="h1"
          fontSize="4xl"
          fontWeight="black"
          color="#1d273b"
          mb={8}
          letterSpacing="tight"
        >
          My Account
        </Heading>

        <Grid templateColumns={{ base: "1fr", lg: "3fr 8fr" }} gap={8}>
          {/* Sidebar */}
          <GridItem>
            <Box
              bg="white"
              borderRadius="2xl"
              border="1px solid"
              borderColor="blackAlpha.100"
              boxShadow="sm"
              overflow="hidden"
            >
              <Flex
                direction="column"
                align="center"
                p={8}
                borderBottom="1px solid"
                borderColor="blackAlpha.50"
              >
                <Box
                  w={24}
                  h={24}
                  bg="blue.50"
                  color="#206bc4"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={4}
                >
                  <FaUser fontSize="40px" />
                </Box>
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="bold"
                  color="#1d273b"
                >
                  {userInfo?.firstName || "User"} {userInfo?.lastName || ""}
                </Heading>
                <Text color="blackAlpha.600" fontSize="sm">
                  {userInfo?.email || ""}
                </Text>
              </Flex>

              <VStack align="stretch" gap={0}>
                <Flex
                  align="center"
                  gap={3}
                  p={5}
                  cursor="pointer"
                  bg="#fdfcfb"
                  borderLeft="4px solid"
                  borderColor="#206bc4"
                  color="#206bc4"
                >
                  <FaUser /> <Text fontWeight="bold">Profile Details</Text>
                </Flex>
                <Flex
                  align="center"
                  gap={3}
                  p={5}
                  cursor="pointer"
                  color="blackAlpha.700"
                  _hover={{ bg: "blackAlpha.50", color: "#206bc4" }}
                  transition="colors 0.2s"
                >
                  <FaBoxOpen /> <Text fontWeight="medium">My Orders</Text>
                </Flex>
                <Flex
                  align="center"
                  gap={3}
                  p={5}
                  cursor="pointer"
                  color="red.500"
                  _hover={{ bg: "red.50" }}
                  transition="colors 0.2s"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt /> <Text fontWeight="medium">Logout</Text>
                </Flex>
              </VStack>
            </Box>
          </GridItem>

          {/* Main Content */}
          <GridItem>
            <VStack gap={8} align="stretch">
              {/* Profile Details Card */}
              <Box
                bg="white"
                borderRadius="2xl"
                border="1px solid"
                borderColor="blackAlpha.100"
                boxShadow="sm"
                p={8}
              >
                <Heading
                  as="h2"
                  fontSize="2xl"
                  fontWeight="bold"
                  color="#1d273b"
                  mb={6}
                >
                  Personal Information
                </Heading>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
                  <Box>
                    <Text
                      fontSize="sm"
                      color="blackAlpha.500"
                      mb={1}
                      fontWeight="bold"
                    >
                      First Name
                    </Text>
                    <Text fontSize="lg" color="#1d273b" fontWeight="medium">
                      {userInfo?.firstName || "N/A"}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="sm"
                      color="blackAlpha.500"
                      mb={1}
                      fontWeight="bold"
                    >
                      Last Name
                    </Text>
                    <Text fontSize="lg" color="#1d273b" fontWeight="medium">
                      {userInfo?.lastName || "N/A"}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="sm"
                      color="blackAlpha.500"
                      mb={1}
                      fontWeight="bold"
                    >
                      Email Address
                    </Text>
                    <Text fontSize="lg" color="#1d273b" fontWeight="medium">
                      {userInfo?.email || "N/A"}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="sm"
                      color="blackAlpha.500"
                      mb={1}
                      fontWeight="bold"
                    >
                      Phone Number
                    </Text>
                    <Text fontSize="lg" color="#1d273b" fontWeight="medium">
                      {userInfo?.phoneNumber || "N/A"}
                    </Text>
                  </Box>
                </Grid>
                <Button
                  mt={8}
                  bg="white"
                  color="#1d273b"
                  border="1px solid"
                  borderColor="blackAlpha.200"
                  px={6}
                  _hover={{ borderColor: "#206bc4", color: "#206bc4" }}
                  onClick={() => {
                    dispatch(
                      setProfileData({
                        firstName: userInfo?.firstName || "",
                        lastName: userInfo?.lastName || "",
                        email: userInfo?.email || "",
                        phoneNumber: userInfo?.phoneNumber || "",
                      }),
                    );
                    setOpenEdit(true);
                  }}
                >
                  Edit Details
                </Button>
              </Box>

              {/* Order History */}
              <Box
                bg="white"
                borderRadius="2xl"
                border="1px solid"
                borderColor="blackAlpha.100"
                boxShadow="sm"
                overflow="hidden"
              >
                <Flex
                  p={8}
                  borderBottom="1px solid"
                  borderColor="blackAlpha.50"
                  justify="space-between"
                  align="center"
                >
                  <Heading
                    as="h2"
                    fontSize="2xl"
                    fontWeight="bold"
                    color="#1d273b"
                  >
                    Recent Orders
                  </Heading>
                  <RouterLink to="/products">
                    <Button variant="ghost" color="#206bc4">
                      Continue Shopping
                    </Button>
                  </RouterLink>
                </Flex>

                <Box p={8}>
                  {orders.length === 0 && (
                    <Box textAlign="center">
                      <Text color="blackAlpha.500">
                        No recent orders found.
                      </Text>
                    </Box>
                  )}
                  {orders.map((item: any, idx: number) => {
                    const order = item.attributes || item;
                    // Standardize status
                    const currentStatus = order.status || "Processing";
                    const orderDate = order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : "N/A";
                    const orderId =
                      order.orderId ||
                      `ORD-${item.id || item.documentId || ""}`;

                    // Define steps
                    const steps = [
                      {
                        label: "order confirmed",
                        icon: FaClipboardCheck,
                        statusKey: "Confirmed",
                      },
                      {
                        label: "payment accepted",
                        icon: FaMoneyBillWave,
                        statusKey: "Paid",
                      },
                      {
                        label: "order is being prepared",
                        icon: FaBox,
                        statusKey: "Processing",
                      },
                      {
                        label: "order has been shipped",
                        icon: FaTruck,
                        statusKey: "Shipped",
                      },
                      {
                        label: "order successfully delivered",
                        icon: FaBoxOpen,
                        statusKey: "Delivered",
                      },
                    ];

                    // Determine current step index based on backend status string
                    // This logic assumes backend provides: Processing, Shipped, Delivered.
                    // We'll map "Processing" -> index 2, "Shipped" -> index 3, "Delivered" -> index 4
                    let activeIndex = 0;
                    if (currentStatus === "Delivered") activeIndex = 4;
                    else if (currentStatus === "Shipped") activeIndex = 3;
                    else if (currentStatus === "Processing") activeIndex = 2;
                    else if (currentStatus === "Paid") activeIndex = 1;

                    return (
                      <Box
                        key={idx}
                        mb={8}
                        p={6}
                        border="1px solid"
                        borderColor="blackAlpha.100"
                        borderRadius="xl"
                        bg="#fdfcfb"
                      >
                        {/* Order Header */}
                        <Flex
                          justify="space-between"
                          align="center"
                          mb={8}
                          pb={4}
                          borderBottom="1px solid"
                          borderColor="blackAlpha.100"
                        >
                          <Box>
                            <Text fontWeight="bold" color="#206bc4">
                              {orderId}
                            </Text>
                            <Text fontSize="sm" color="blackAlpha.500">
                              Placed on {orderDate} • {order.itemsCount || 0}{" "}
                              Items
                            </Text>
                          </Box>
                          <Box textAlign="right">
                            <Text
                              fontWeight="black"
                              color="#1d273b"
                              fontSize="xl"
                            >
                              ${order.total || "0.00"}
                            </Text>
                          </Box>
                        </Flex>

                        {/* Vertical Timeline */}
                        <VStack
                          align="stretch"
                          gap={0}
                          position="relative"
                          pl={4}
                        >
                          {/* Continuous Background Line */}
                          <Box
                            position="absolute"
                            left="51px"
                            top="20px"
                            bottom="20px"
                            w="2px"
                            bg="blackAlpha.200"
                            zIndex={0}
                          />

                          {steps.map((step, stepIdx) => {
                            const isCompleted = stepIdx <= activeIndex;
                            const isActive = stepIdx === activeIndex;

                            return (
                              <Flex
                                key={stepIdx}
                                align="center"
                                position="relative"
                                zIndex={1}
                                h="70px"
                              >
                                {/* Left Icon */}
                                <Flex
                                  w="40px"
                                  justify="center"
                                  color="blackAlpha.500"
                                  fontSize="2xl"
                                >
                                  <step.icon />
                                </Flex>

                                {/* Dot Tracker */}
                                <Flex
                                  w="24px"
                                  h="24px"
                                  borderRadius="full"
                                  border="2px solid"
                                  borderColor={
                                    isCompleted ? "#1d273b" : "blackAlpha.300"
                                  }
                                  bg={isCompleted ? "#FFD700" : "white"}
                                  justify="center"
                                  align="center"
                                  mx={6}
                                >
                                  {isCompleted && (
                                    <Box
                                      w="8px"
                                      h="8px"
                                      borderRadius="full"
                                      bg="transparent" // keeping dot clean as per design
                                    />
                                  )}
                                </Flex>

                                {/* Text Label */}
                                <Text
                                  fontWeight={isActive ? "bold" : "medium"}
                                  color={
                                    isCompleted ? "#1d273b" : "blackAlpha.500"
                                  }
                                  fontSize="md"
                                >
                                  {step.label}
                                </Text>
                              </Flex>
                            );
                          })}
                        </VStack>
                      </Box>
                    );
                  })}
                </Box>
                <EditProfileModal
                  openEdit={openEdit}
                  setOpenEdit={setOpenEdit}
                  userId={userInfo?.id}
                />
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePage;
