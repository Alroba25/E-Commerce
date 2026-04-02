import type { IProduct, IOrder } from "@/Interfaces";
import { getAdminProducts, getOrdersAdmin } from "@/Utils";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Avatar,
  Heading,
  Button,
  Stack,
  Skeleton,
  SimpleGrid,
  Grid,
  Badge,
} from "@chakra-ui/react";
import { Table } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import {
  FaArrowUp,
  FaArrowDown,
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaBell,
  FaPlus,
  FaBox,
  FaFileAlt,
  FaEdit,
  FaTrash,
  FaLayerGroup,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  setDeleteProductData,
  setEditProductId,
} from "@/app/features/Product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useMemo } from "react";

import AddProductModal from "../AddProductAdmin";
import DeleteModalAdmin from "../DeleteModalAdmin";
import type { RootState } from "@/app/store";
import EditModalAdmin from "../EditModalAdmin";
import axiosConfig from "@/Api/axios.config";
import { getCookie } from "@/Api/cookies";

const StatCard = React.memo(
  ({ value, label, trend, isPositive, icon: Icon, color = "blue" }: any) => (
    <Box
      bg="white"
      p={6}
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.100"
      boxShadow="sm"
      transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
        borderColor: `${color}.200`,
      }}
      position="relative"
      overflow="hidden"
    >
      <Flex justify="space-between" align="start" mb={4}>
        <Flex
          p={3}
          borderRadius="xl"
          bg={`${color}.50`}
          color={`${color}.500`}
          align="center"
          justify="center"
        >
          {Icon && <Icon size={20} />}
        </Flex>
        {trend && (
          <Flex
            align="center"
            px={2.5}
            py={1}
            borderRadius="full"
            bg={isPositive ? "green.50" : "red.50"}
            color={isPositive ? "green.600" : "red.600"}
            fontSize="xs"
            fontWeight="bold"
            gap={1}
          >
            {isPositive ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />}
            {trend}
          </Flex>
        )}
      </Flex>

      <Text
        fontSize="3xl"
        fontWeight="800"
        color="gray.800"
        lineHeight="1.2"
        letterSpacing="tight"
      >
        {value === undefined || value === null ? "0" : value}
      </Text>
      <Text fontSize="sm" fontWeight="bold" color="gray.500" mt={1}>
        {label}
      </Text>

      <Box
        position="absolute"
        bottom="-15px"
        right="-15px"
        opacity="0.05"
        transform="rotate(-15deg)"
        color="gray.800"
      >
        {Icon && <Icon size={80} />}
      </Box>
    </Box>
  ),
);

const StatusBadge = ({ status }: { status: string }) => {
  const config: Record<string, { color: string; bg: string }> = {
    Processing: { color: "blue.700", bg: "blue.50" },
    Shipped: { color: "purple.700", bg: "purple.50" },
    Delivered: { color: "green.700", bg: "green.50" },
    Canceled: { color: "red.700", bg: "red.50" },
  };
  const theme = config[status] || { color: "gray.700", bg: "gray.50" };

  return (
    <Badge
      px={3}
      py={1}
      borderRadius="full"
      fontSize="xs"
      fontWeight="bold"
      color={theme.color}
      bg={theme.bg}
      textTransform="capitalize"
    >
      {status}
    </Badge>
  );
};

const AdminPage = () => {
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<"dashboard" | "orders">(
    "dashboard",
  );
  const dispatch = useDispatch();
  const editProductId = useSelector(
    (state: RootState) => state.product.editProductId,
  );
  const token = localStorage.getItem("jwt") || getCookie("jwt");

  // Queries
  const { data: products, isLoading: productsLoading } = useQuery<IProduct[]>({
    queryKey: ["adminProducts"],
    queryFn: getAdminProducts,
  });

  const { data: userInfo } = useQuery({
    queryKey: ["user", "me"],
    queryFn: async () => {
      const res = await axiosConfig.get("/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
  });

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosConfig.get("/api/users?populate=role", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
  });

  const { data: ordersData, isLoading: ordersLoading } = useQuery({
    queryKey: ["adminOrders"],
    queryFn: getOrdersAdmin,
  });

  const orders = useMemo(() => {
    return Array.isArray(ordersData?.data)
      ? (ordersData.data.map((o: any) => {
          // Normalize the main order data (handles Strapi v4 attributes vs v5 flattened)
          const base = {
            id: o.id,
            documentId: o.documentId,
            ...(o.attributes || o),
          };

          // Deeply resolve the user relationship (Strapi relationship structure can vary)
          let resolvedUser = base.user;
          if (resolvedUser?.data?.attributes) {
            resolvedUser = {
              id: resolvedUser.data.id,
              ...resolvedUser.data.attributes,
            };
          } else if (resolvedUser?.attributes) {
            resolvedUser = resolvedUser.attributes;
          }

          return {
            ...base,
            user: resolvedUser,
          } as IOrder;
        }) as IOrder[])
      : [];
  }, [ordersData]);

  // Statistics calculations
  const stats = useMemo(() => {
    const totalRev = orders.reduce((acc, curr) => acc + (curr.total || 0), 0);
    const avgOrderValue =
      orders.length > 0 ? (totalRev / orders.length).toFixed(2) : 0;
    return {
      totalRevenue: totalRev.toLocaleString(),
      avgOrderValue,
      totalOrders: orders.length,
      totalUsers: users?.length || 0,
      totalProducts: products?.length || 0,
    };
  }, [orders, users, products]);

  if (productsLoading && !products) {
    return (
      <Flex justify="center" align="center" minH="100vh" bg="#f4f6fa">
        <Stack gap={4} align="center">
          <Skeleton height="40px" width="200px" />
          <Text color="gray.500">Loading Dashboard Data...</Text>
        </Stack>
      </Flex>
    );
  }

  return (
    <Box
      minH="100vh"
      bg="#f8fafc"
      color="gray.800"
      fontFamily="system-ui, sans-serif"
    >
      {/* Top Navbar */}
      <Flex
        bg="white"
        px={{ base: 4, md: 8 }}
        py={3}
        borderBottom="1px solid"
        borderColor="gray.200"
        align="center"
        justify="space-between"
        position="sticky"
        top={0}
        zIndex={10}
        boxShadow="sm"
      >
        <Flex align="center" gap={4}>
          <Link to="/admin">
            <Text
              fontSize="2xl"
              fontWeight="900"
              color="#206bc4"
              letterSpacing="tighter"
              cursor="pointer"
              onClick={() => setCurrentView("dashboard")}
            >
              ELBADR
              <Text as="span" color="gray.800">
                GROUP
              </Text>
            </Text>
          </Link>
          <Box w="1px" h="24px" bg="gray.200" mx={2} />
          <Heading
            size="xs"
            fontWeight="bold"
            color="gray.500"
            letterSpacing="widest"
          >
            ADMIN PANEL
          </Heading>
        </Flex>

        <Flex align="center" gap={6}>
          <IconButton
            aria-label="Notifications"
            variant="ghost"
            color="gray.500"
            borderRadius="full"
          >
            <FaBell size={18} />
          </IconButton>
          <Flex
            align="center"
            gap={3}
            pl={6}
            borderLeft="1px solid"
            borderColor="gray.200"
          >
            <Box textAlign="right" display={{ base: "none", sm: "block" }}>
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="gray.800"
                lineHeight="1"
              >
                {userInfo?.firstName} {userInfo?.lastName}
              </Text>
              <Text fontSize="11px" color="#206bc4" fontWeight="bold" mt={1}>
                MAIN ADMINISTRATOR
              </Text>
            </Box>
            <Avatar.Root size="sm">
              <Avatar.Fallback
                name={userInfo?.firstName + " " + userInfo?.lastName}
                color="white"
              />
              <Avatar.Image />
            </Avatar.Root>
          </Flex>
        </Flex>
      </Flex>

      {/* Main Content Area */}
      <Box p={{ base: 4, md: 8 }} maxW="1600px" mx="auto">
        <Flex justify="space-between" align="end" mb={8}>
          <Box>
            <Heading
              size="lg"
              color="#1e293b"
              fontWeight="800"
              letterSpacing="tight"
            >
              {currentView === "dashboard"
                ? "Dashboard Overview"
                : `Store-wide Transactions (${orders.length})`}
            </Heading>
            <Text color="gray.500" fontWeight="medium" mt={1}>
              {currentView === "dashboard"
                ? `Welcome back, ${userInfo?.username}. Here's what's happening with your store today.`
                : "Manage and track every order placed in your store."}
            </Text>
          </Box>
          <Flex gap={3}>
            {currentView === "orders" && (
              <Button
                variant="outline"
                px={6}
                borderRadius="xl"
                onClick={() => setCurrentView("dashboard")}
              >
                Back to Dashboard
              </Button>
            )}
            <Button
              bg="#206bc4"
              color="white"
              px={6}
              borderRadius="xl"
              _hover={{ bg: "blue.700", transform: "translateY(-2px)" }}
              transition="all 0.2s"
              onClick={() => setOpenAdd(true)}
            >
              <FaPlus /> Create New Product
            </Button>
          </Flex>
        </Flex>

        {currentView === "dashboard" ? (
          <>
            {/* Stats Row */}
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 5 }} gap={6} mb={8}>
              <StatCard
                value={`$${stats.totalRevenue}`}
                label="Total Revenue"
                trend="+12.5%"
                isPositive={true}
                icon={FaDollarSign}
                color="green"
              />
              <StatCard
                value={stats.totalOrders}
                label="Total Orders"
                trend="+8%"
                isPositive={true}
                icon={FaShoppingCart}
                color="blue"
              />
              <StatCard
                value={stats.totalUsers}
                label="Total Customers"
                trend="+5%"
                isPositive={true}
                icon={FaUsers}
                color="purple"
              />
              <StatCard
                value={stats.totalProducts}
                label="Products in Store"
                icon={FaBox}
                color="orange"
              />
              <StatCard
                value={`$${stats.avgOrderValue}`}
                label="Avg. Order Value"
                icon={FaFileAlt}
                color="cyan"
              />
            </SimpleGrid>

            {/* Main Grid Layout */}
            <Grid templateColumns={{ base: "1fr", lg: "7fr 3fr" }} gap={8}>
              {/* Left Column */}
              <Stack gap={8}>
                {/* Products Table Section */}
                <Box
                  bg="white"
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="gray.200"
                  overflow="hidden"
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    p={6}
                    borderBottom="1px solid"
                    borderColor="gray.100"
                  >
                    <Heading size="sm" fontWeight="800">
                      Inventory Management
                    </Heading>
                    <Button
                      size="xs"
                      variant="ghost"
                      color="#206bc4"
                      fontWeight="bold"
                    >
                      View Full Inventory
                    </Button>
                  </Flex>
                  <Box overflowX="auto">
                    <Table.Root size="sm" variant="line">
                      <Table.Header bg="gray.50">
                        <Table.Row>
                          <Table.ColumnHeader px={6} py={4}>
                            PRODUCT
                          </Table.ColumnHeader>
                          <Table.ColumnHeader>STOCK STATUS</Table.ColumnHeader>
                          <Table.ColumnHeader>PRICE</Table.ColumnHeader>
                          <Table.ColumnHeader textAlign="right" px={6}>
                            ACTIONS
                          </Table.ColumnHeader>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {products?.slice(0, 5).map((item) => (
                          <Table.Row key={item.id} _hover={{ bg: "blue.50/30" }}>
                            <Table.Cell px={6} py={4}>
                              <Flex align="center" gap={3}>
                                <Avatar.Root size="xs" borderRadius="md">
                                  <Avatar.Image
                                    src={`${import.meta.env.VITE_SERVER_BASE}${item.thumbnail?.url}`}
                                  />
                                  <Avatar.Fallback bg="gray.100">
                                    <FaBox size={10} color="gray.400" />
                                  </Avatar.Fallback>
                                </Avatar.Root>
                                <Text fontWeight="bold" fontSize="sm">
                                  {item.title}
                                </Text>
                              </Flex>
                            </Table.Cell>
                            <Table.Cell>
                              <Badge
                                colorScheme={item.stock > 10 ? "green" : "red"}
                                variant="subtle"
                              >
                                {item.stock} in stock
                              </Badge>
                            </Table.Cell>
                            <Table.Cell fontWeight="bold">
                              ${item.price}
                            </Table.Cell>
                            <Table.Cell textAlign="right" px={6}>
                              <Flex justify="end" gap={1}>
                                <IconButton
                                  size="xs"
                                  variant="ghost"
                                  aria-label="Edit"
                                  _hover={{ color: "green.500" }}
                                  onClick={() => {
                                    dispatch(setEditProductId(item.documentId));
                                    setOpenEdit(true);
                                  }}
                                >
                                  <FaEdit />
                                </IconButton>
                                <IconButton
                                  size="xs"
                                  variant="ghost"
                                  aria-label="Delete"
                                  _hover={{ color: "red.500" }}
                                  onClick={() => {
                                    setOpenDelete(true);
                                    dispatch(setDeleteProductData(item));
                                  }}
                                >
                                  <FaTrash />
                                </IconButton>
                              </Flex>
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table.Root>
                  </Box>
                </Box>

                {/* Recent Orders Section */}
                <Box
                  bg="white"
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="gray.200"
                  overflow="hidden"
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    p={6}
                    borderBottom="1px solid"
                    borderColor="gray.100"
                  >
                    <Heading size="sm" fontWeight="800">
                      Recent Transactions
                    </Heading>
                    <Button
                      size="xs"
                      variant="ghost"
                      color="#206bc4"
                      fontWeight="bold"
                      onClick={() => setCurrentView("orders")}
                    >
                      All Orders
                    </Button>
                  </Flex>
                  <Box overflowX="auto">
                    <Table.Root size="sm" variant="line">
                      <Table.Header bg="gray.50">
                        <Table.Row>
                          <Table.ColumnHeader px={6} py={4}>
                            ORDER ID
                          </Table.ColumnHeader>
                          <Table.ColumnHeader>CUSTOMER</Table.ColumnHeader>
                          <Table.ColumnHeader>ITEMS</Table.ColumnHeader>
                          <Table.ColumnHeader>TOTAL</Table.ColumnHeader>
                          <Table.ColumnHeader textAlign="right" px={6}>
                            STATUS
                          </Table.ColumnHeader>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {ordersLoading ? (
                          Array.from({ length: 3 }).map((_, i) => (
                            <Table.Row key={i}>
                              <Table.Cell px={6} py={4}>
                                <Skeleton h="20px" />
                              </Table.Cell>
                              <Table.Cell>
                                <Skeleton h="20px" />
                              </Table.Cell>
                              <Table.Cell>
                                <Skeleton h="20px" />
                              </Table.Cell>
                              <Table.Cell>
                                <Skeleton h="20px" />
                              </Table.Cell>
                              <Table.Cell px={6}>
                                <Skeleton h="20px" />
                              </Table.Cell>
                            </Table.Row>
                          ))
                        ) : orders.length > 0 ? (
                          orders.slice(0, 5).map((order) => (
                            <Table.Row
                              key={order.id}
                              _hover={{ bg: "blue.50/30" }}
                            >
                              <Table.Cell px={6} py={4}>
                                <Text
                                  fontWeight="bold"
                                  fontSize="xs"
                                  bg="gray.100"
                                  px={2}
                                  py={1}
                                  borderRadius="md"
                                  w="fit-content"
                                >
                                  #{order.orderId || order.id}
                                </Text>
                              </Table.Cell>
                              <Table.Cell>
                                <Text fontWeight="bold" fontSize="sm">
                                  {order.user?.username || "Guest User"}
                                </Text>
                                <Text fontSize="10px" color="gray.500">
                                  {order.user?.email || "No email"}
                                </Text>
                              </Table.Cell>
                              <Table.Cell fontSize="sm">
                                {order.itemsCount} items
                              </Table.Cell>
                              <Table.Cell fontWeight="black" color="#206bc4">
                                ${order.total?.toLocaleString()}
                              </Table.Cell>
                              <Table.Cell textAlign="right" px={6}>
                                <StatusBadge
                                  status={order.status || "Processing"}
                                />
                              </Table.Cell>
                            </Table.Row>
                          ))
                        ) : (
                          <Table.Row>
                            <Table.Cell colSpan={5} py={8} textAlign="center">
                              <Text color="gray.500">
                                No orders recorded yet.
                              </Text>
                            </Table.Cell>
                          </Table.Row>
                        )}
                      </Table.Body>
                    </Table.Root>
                  </Box>
                </Box>
              </Stack>

              {/* Right Column: Charts & Side Info */}
              <Stack gap={8}>
                <Box
                  bg="white"
                  p={6}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <Heading
                    size="xs"
                    mb={6}
                    textTransform="uppercase"
                    letterSpacing="wider"
                    color="gray.500"
                  >
                    Traffic Performance
                  </Heading>
                  <Flex justify="center" position="relative" h="200px">
                    {/* Simplified Circular Chart */}
                    <Box
                      w="150px"
                      h="150px"
                      borderRadius="full"
                      border="15px solid"
                      borderColor="blue.500"
                      borderTopColor="blue.50"
                      transform="rotate(45deg)"
                    />
                    <Box
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      textAlign="center"
                    >
                      <Text fontSize="3xl" fontWeight="900" color="gray.800">
                        84%
                      </Text>
                      <Text fontSize="10px" fontWeight="bold" color="gray.400">
                        TARGET
                      </Text>
                    </Box>
                  </Flex>
                  <Stack gap={3} mt={4}>
                    <Flex justify="space-between" fontSize="sm">
                      <Text color="gray.500">Search Engines</Text>
                      <Text fontWeight="bold">64%</Text>
                    </Flex>
                    <Box w="full" h="6px" bg="gray.100" borderRadius="full">
                      <Box w="64%" h="full" bg="blue.500" borderRadius="full" />
                    </Box>
                    <Flex justify="space-between" fontSize="sm">
                      <Text color="gray.500">Direct Traffic</Text>
                      <Text fontWeight="bold">20%</Text>
                    </Flex>
                    <Box w="full" h="6px" bg="gray.100" borderRadius="full">
                      <Box w="20%" h="full" bg="blue.300" borderRadius="full" />
                    </Box>
                  </Stack>
                </Box>

                <Box
                  bg="#206bc4"
                  p={6}
                  borderRadius="2xl"
                  color="white"
                  position="relative"
                  overflow="hidden"
                >
                  <Heading size="sm" mb={2}>
                    Admin Support
                  </Heading>
                  <Text fontSize="xs" opacity="0.8" mb={4}>
                    Need help with the management tools? Contact our technical
                    support team.
                  </Text>
                  <Button
                    size="sm"
                    bg="white"
                    color="#206bc4"
                    fontWeight="bold"
                    _hover={{ bg: "blue.50" }}
                  >
                    Get Help
                  </Button>
                  <Box
                    position="absolute"
                    top="-20px"
                    right="-20px"
                    opacity="0.1"
                  >
                    <FaLayerGroup size={120} />
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </>
        ) : (
          /* ALL ORDERS FULL VIEW */
          <Box
            bg="white"
            borderRadius="2xl"
            border="1px solid"
            borderColor="gray.200"
            overflow="hidden"
            boxShadow="sm"
          >
            <Flex
              justify="space-between"
              align="center"
              p={6}
              borderBottom="1px solid"
              borderColor="gray.100"
            >
              <Heading size="sm" fontWeight="800">
                All Transactions ({orders.length})
              </Heading>
              <Flex gap={2}>
                <Button size="xs" variant="outline" borderColor="gray.200">
                  Export CSV
                </Button>
                <Button size="xs" colorScheme="blue" variant="subtle">
                  Filter by Date
                </Button>
              </Flex>
            </Flex>
            <Box overflowX="auto">
              <Table.Root size="md" variant="line">
                <Table.Header bg="gray.50">
                  <Table.Row>
                    <Table.ColumnHeader px={6} py={5}>
                      ORDER ID
                    </Table.ColumnHeader>
                    <Table.ColumnHeader>DATE</Table.ColumnHeader>
                    <Table.ColumnHeader>CUSTOMER</Table.ColumnHeader>
                    <Table.ColumnHeader>TOTAL ITEMS</Table.ColumnHeader>
                    <Table.ColumnHeader>NET REVENUE</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="right" px={6}>
                      STATUS
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {orders.length > 0 ? (
                    orders.map((order) => (
                      <Table.Row
                        key={order.id}
                        _hover={{ bg: "blue.50/30" }}
                        transition="all 0.2s"
                      >
                        <Table.Cell px={6}>
                          <Text
                            fontWeight="bold"
                            fontSize="xs"
                            bg="gray.100"
                            px={2}
                            py={1}
                            borderRadius="md"
                            w="fit-content"
                          >
                            #{order.orderId || order.id}
                          </Text>
                        </Table.Cell>
                        <Table.Cell fontSize="sm" color="gray.600">
                          {order.createdAt
                            ? new Date(order.createdAt).toLocaleDateString()
                            : "N/A"}
                        </Table.Cell>
                        <Table.Cell>
                          <Flex align="center" gap={3}>
                            <Avatar.Root size="xs">
                              <Avatar.Fallback
                                name={order.user?.username || "G"}
                                bg="blue.100"
                                color="blue.700"
                              />
                            </Avatar.Root>
                            <Box>
                              <Text fontWeight="bold" fontSize="sm">
                                {order.user?.username || "Guest User"}
                              </Text>
                              <Text fontSize="11px" color="gray.400">
                                {order.user?.email || "No email"}
                              </Text>
                            </Box>
                          </Flex>
                        </Table.Cell>
                        <Table.Cell fontSize="sm">
                          {order.itemsCount} products
                        </Table.Cell>
                        <Table.Cell
                          fontWeight="black"
                          color="#206bc4"
                          fontSize="md"
                        >
                          ${order.total?.toLocaleString()}
                        </Table.Cell>
                        <Table.Cell textAlign="right" px={6}>
                          <StatusBadge status={order.status || "Processing"} />
                        </Table.Cell>
                      </Table.Row>
                    ))
                  ) : (
                    <Table.Row>
                      <Table.Cell colSpan={6} py={12} textAlign="center">
                        <Stack align="center" gap={3}>
                          <FaShoppingCart size={40} color="#e2e8f0" />
                          <Text color="gray.500" fontSize="lg">
                            No orders found in your database.
                          </Text>
                        </Stack>
                      </Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
              </Table.Root>
            </Box>
          </Box>
        )}
      </Box>

      {/* Modals */}
      <DeleteModalAdmin openDelete={openDelete} setOpenDelete={setOpenDelete} />
      <AddProductModal openAdd={openAdd} setOpenAdd={setOpenAdd} />
      <EditModalAdmin
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        documentId={editProductId}
      />
    </Box>
  );
};

export default AdminPage;
