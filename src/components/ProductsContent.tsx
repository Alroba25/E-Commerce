import { Link as RouterLink } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaExchangeAlt,
  FaEye,
  FaTh,
  FaThList,
} from "react-icons/fa";
import { staggerContainer, fadeInUp } from "@/Utils/animations";
import { motion } from "framer-motion";
import { setNavigateProductId } from "@/app/features/Product/productSlice";
import type { IProduct } from "@/Interfaces";
import { addToCart } from "@/app/features/Cart/cartSlice";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Button,
  Container,
  Grid,
  IconButton,
} from "@chakra-ui/react";
export const ProductsContent = ({
  categoryName,
  showLimit = false,
  data,
  viewMode,
  setViewMode,
  dispatch,
  toaster,
  sortOption,
  setSortOption,
  limitOption,
  setLimitOption,
  currentPage,
  setCurrentPage,
}: {
  data: {
    data: IProduct[];
    meta: {
      pagination: {
        pageCount: number;
      };
    };
  };
  categoryName?: string;
  showLimit?: boolean;
  viewMode: "grid" | "list";
  setViewMode: (viewMode: "grid" | "list") => void;
  dispatch: (action: any) => void;
  toaster: any;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
  limitOption?: number;
  setLimitOption?: (limitOption: number) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}) => {
  return (
    <Box bg="#fdfcfb" minH="100vh" fontFamily="system-ui, sans-serif">
      <Container maxW="container.xl" px={4} py={8}>
        {/* Breadcrumb */}
        <Flex
          align="center"
          gap={2}
          fontSize="sm"
          color="blackAlpha.600"
          mb={8}
        >
          <RouterLink to="/">
            <Flex
              align="center"
              gap={1}
              _hover={{ color: "#206bc4" }}
              transition="colors 0.2s"
            >
              <FaHome /> Home
            </Flex>
          </RouterLink>
          <Text color="blackAlpha.300">/</Text>
          <Text color="#1d273b" fontWeight="medium">
            Products
          </Text>
        </Flex>

        {/* Header & Controls */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ md: "flex-end" }}
          justify="space-between"
          gap={4}
          mb={8}
        >
          <Box>
            <Heading
              as="h1"
              fontSize="4xl"
              fontWeight="bold"
              color="#1d273b"
              mb={2}
              position="relative"
              display="inline-block"
              letterSpacing="tight"
              paddingBottom={3}
            >
              {categoryName ? categoryName : "Our Collection"}
              <Box
                position="absolute"
                bottom="-4px"
                left={0}
                w="33%"
                h="6px"
                bg="#206bc4"
                borderRadius="full"
              />
            </Heading>
            <Text
              color="blackAlpha.600"
              fontSize="sm"
              mt={3}
              fontWeight="medium"
            >
              Showing{" "}
              <Text as="span" fontWeight="bold" color="#206bc4">
                {data?.data?.length || 0}
              </Text>{" "}
              premium items
            </Text>
          </Box>

          <Flex
            wrap="wrap"
            align="center"
            gap={4}
            bg="whiteAlpha.800"
            backdropFilter="blur(4px)"
            p={3}
            borderRadius="xl"
            border="1px solid"
            borderColor="blackAlpha.100"
            boxShadow="sm"
          >
            {/* View Toggles */}
            <Flex
              align="center"
              borderRight="1px solid"
              borderColor="blackAlpha.100"
              pr={4}
              gap={1}
            >
              <IconButton
                aria-label="Grid View"
                onClick={() => setViewMode("grid")}
                variant="ghost"
                size="sm"
                color={viewMode === "grid" ? "#206bc4" : "blackAlpha.400"}
                bg={viewMode === "grid" ? "blue.50" : "transparent"}
                _hover={{ bg: "blackAlpha.50", color: "#1d273b" }}
                borderRadius="lg"
              >
                <FaTh />
              </IconButton>
              <IconButton
                aria-label="List View"
                onClick={() => setViewMode("list")}
                variant="ghost"
                size="sm"
                color={viewMode === "list" ? "#206bc4" : "blackAlpha.400"}
                bg={viewMode === "list" ? "blue.50" : "transparent"}
                _hover={{ bg: "blackAlpha.50", color: "#1d273b" }}
                borderRadius="lg"
              >
                <FaThList />
              </IconButton>
            </Flex>

            {/* Limit Dropdown */}
            {showLimit ? (
              <Flex align="center" gap={2} ml={2}>
                <Text
                  fontSize="sm"
                  color="blackAlpha.500"
                  display={{ base: "none", sm: "inline" }}
                  fontWeight="medium"
                >
                  Show:
                </Text>
                <select
                  style={{
                    fontSize: "0.875rem",
                    border: "none",
                    background: "transparent",
                    fontWeight: "bold",
                    color: "#1d273b",
                    cursor: "pointer",
                    outline: "none",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                  }}
                  value={limitOption?.toString()}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setLimitOption?.(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="-1">All</option>
                </select>
              </Flex>
            ) : null}

            {/* Sort Dropdown */}
            <Flex
              align="center"
              gap={2}
              borderLeft="1px solid"
              borderColor="blackAlpha.100"
              pl={4}
            >
              <Text
                fontSize="sm"
                color="blackAlpha.500"
                display={{ base: "none", sm: "inline" }}
                fontWeight="medium"
              >
                Sort by:
              </Text>
              <select
                style={{
                  fontSize: "0.875rem",
                  border: "none",
                  background: "transparent",
                  fontWeight: "bold",
                  color: "#1d273b",
                  cursor: "pointer",
                  outline: "none",
                  paddingTop: "0.25rem",
                  paddingBottom: "0.25rem",
                }}
                value={sortOption}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setSortOption(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </Flex>
          </Flex>
        </Flex>

        {/* Product Grid/List */}
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <Grid
            templateColumns={
              viewMode === "grid"
                ? {
                    base: "1fr",
                    sm: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(4, 1fr)",
                  }
                : "1fr"
            }
            gap={8}
          >
            {data?.data?.map((p: IProduct) => {
              const imageUrl = p.thumbnail?.url
                ? `${import.meta.env.VITE_SERVER_BASE}${p.thumbnail.url}`
                : "https://via.placeholder.com/300"; // Fallback image
              return (
                <motion.div
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  key={p.id}
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    borderRadius: "1rem",
                  }}
                >
                  <Flex
                    background="white"
                    direction={
                      viewMode === "list"
                        ? { base: "column", sm: "row" }
                        : "column"
                    }
                    role="group"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="blackAlpha.50"
                    overflow="hidden"
                    boxShadow="sm"
                    transition="border-color 0.3s"
                    h="full"
                  >
                    {/* Image Section */}
                    <Box
                      position="relative"
                      overflow="hidden"
                      bgGradient="to-br"
                      gradientFrom="white"
                      gradientTo="#fdfcfb"
                      h={
                        viewMode === "list"
                          ? { base: "288px", sm: "auto" }
                          : "288px"
                      }
                      w={viewMode === "list" ? { sm: "288px" } : "full"}
                      flexShrink={0}
                    >
                      <Image
                        src={imageUrl}
                        alt={p.title}
                        loading="lazy"
                        w="full"
                        h="full"
                        objectFit="contain"
                        p={6}
                        mixBlendMode="multiply"
                        transition="transform 0.7s ease-in-out"
                        _groupHover={{ transform: "scale(1.1)" }}
                      />

                      {/* Badge */}
                      <Box
                        position="absolute"
                        top={3}
                        left={3}
                        bg="whiteAlpha.900"
                        backdropFilter="blur(4px)"
                        color="#1d273b"
                        fontSize="xs"
                        fontWeight="bold"
                        px={3}
                        py={1}
                        borderRadius="full"
                        border="1px solid"
                        borderColor="blackAlpha.100"
                        boxShadow="sm"
                      >
                        NEW
                      </Box>

                      {/* Overlay Actions */}
                      <Flex
                        position="absolute"
                        insetX={0}
                        bottom={4}
                        justify="center"
                        gap={3}
                        opacity={0}
                        transform="translateY(32px)"
                        _groupHover={{ opacity: 1, transform: "translateY(0)" }}
                        transition="all 0.3s"
                        zIndex={10}
                      >
                        <IconButton
                          aria-label="Quick View"
                          h={11}
                          w={11}
                          bg="white"
                          borderRadius="full"
                          boxShadow="lg"
                          color="#1d273b"
                          _hover={{
                            bg: "#206bc4",
                            color: "white",
                            transform: "scale(1.1)",
                          }}
                          transition="all 0.2s"
                        >
                          <FaEye fontSize="18px" />
                        </IconButton>
                        <IconButton
                          aria-label="Add to Wishlist"
                          h={11}
                          w={11}
                          bg="white"
                          borderRadius="full"
                          boxShadow="lg"
                          color="#1d273b"
                          _hover={{
                            bg: "#206bc4",
                            color: "white",
                            transform: "scale(1.1)",
                          }}
                          transition="all 0.2s"
                        >
                          <FaExchangeAlt fontSize="18px" />
                        </IconButton>
                      </Flex>
                    </Box>

                    {/* Content Section */}
                    <Flex
                      p={6}
                      direction="column"
                      flex={1}
                      justify={viewMode === "list" ? "center" : "flex-start"}
                    >
                      {/* Category/Brand */}
                      <Text
                        fontSize="xs"
                        color="blackAlpha.500"
                        mb={2}
                        textTransform="uppercase"
                        letterSpacing="widest"
                        fontWeight="bold"
                      >
                        PREMIUM BRAND
                      </Text>

                      <Box
                        as="button"
                        textAlign="left"
                        onClick={() => {
                          dispatch(setNavigateProductId(p.documentId));
                        }}
                        _groupHover={{ color: "#206bc4" }}
                        transition="colors 0.2s"
                      >
                        <RouterLink
                          to={`/product`}
                          style={{ display: "block" }}
                        >
                          <Heading
                            as="h3"
                            fontWeight="bold"
                            color="#1d273b"
                            fontSize="xl"
                            mb={3}
                            lineHeight="tight"
                            lineClamp={2}
                          >
                            {p.title}
                          </Heading>
                        </RouterLink>
                      </Box>

                      {viewMode === "list" && (
                        <Text
                          color="blackAlpha.700"
                          fontSize="sm"
                          mb={5}
                          lineClamp={2}
                          lineHeight="relaxed"
                        >
                          {p.description || "No description available."}
                        </Text>
                      )}

                      <Flex
                        mt="auto"
                        align="center"
                        justify="space-between"
                        pt={4}
                        borderTop="1px solid"
                        borderColor="blackAlpha.50"
                        gap={2}
                      >
                        <Flex direction="column">
                          <Text
                            fontSize="2xl"
                            fontWeight="bold"
                            color="#206bc4"
                            textAlign="center"
                          >
                            ${p.price?.toLocaleString()}
                          </Text>
                        </Flex>

                        <Button
                          bg="#1d273b"
                          color="white"
                          _hover={{
                            bg: "#206bc4",
                            boxShadow: "0 4px 6px -1px rgba(32, 107, 196, 0.4)",
                          }}
                          px={5}
                          py={5}
                          borderRadius="lg"
                          fontSize="sm"
                          fontWeight="bold"
                          transition="all 0.3s"
                          display="flex"
                          alignItems="center"
                          gap={2}
                          boxShadow="md"
                          onClick={() => {
                            dispatch(addToCart(p));
                            toaster.create({
                              title: `Added 1 item to Cart`,
                              type: "success",
                            });
                          }}
                        >
                          <Box as={FaShoppingCart} />
                          <Text
                            as="span"
                            display={{ base: "none", sm: "inline" }}
                          >
                            Add to Cart
                          </Text>
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </motion.div>
              );
            })}
          </Grid>
        </motion.div>

        {/* Pagination Controls */}
        {data?.meta?.pagination?.pageCount > 1 && (
          <Flex justify="center" align="center" mt={12} gap={4}>
            <Button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              variant="outline"
              colorScheme="blue"
              borderColor="#206bc4"
              color="#206bc4"
              _hover={{ bg: "#206bc4", color: "white" }}
            >
              Previous
            </Button>
            <Text fontWeight="bold" color="#1d273b" fontSize="sm">
              Page {currentPage} of {data.meta.pagination.pageCount}
            </Text>
            <Button
              onClick={() =>
                setCurrentPage(
                  Math.min(data.meta.pagination.pageCount, currentPage + 1),
                )
              }
              disabled={currentPage === data.meta.pagination.pageCount}
              variant="outline"
              colorScheme="blue"
              borderColor="#206bc4"
              color="#206bc4"
              _hover={{ bg: "#206bc4", color: "white" }}
            >
              Next
            </Button>
          </Flex>
        )}
      </Container>
    </Box>
  );
};
