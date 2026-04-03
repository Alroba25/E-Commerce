import { useState } from "react";
import { getOneProduct } from "@/Utils";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";
import { addToCart } from "@/app/features/Cart/cartSlice";
import toast from "react-hot-toast";
import { Link as RouterLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaMinus,
  FaPlus,
  FaCheck,
  FaHome,
  FaStar,
} from "react-icons/fa";
import type { IProduct } from "@/Interfaces";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Button,
  Container,
  Grid,
  GridItem,
  Spinner,
  IconButton,
  Input,
} from "@chakra-ui/react";

const Product = () => {
  // 1. Get the documentId from Redux store
  const documentId = useSelector(
    (state: RootState) => state.product.navigateProductId,
  );
  const dispatch = useDispatch();

  // Local state for quantity
  const [qty, setQty] = useState(1);

  // 2. Fetch product details
  const { data, isLoading, error } = useQuery({
    queryKey: ["oneProduct", documentId],
    queryFn: () => getOneProduct(documentId),
    enabled: !!documentId,
  });

  // 3. Handle Loading/Error/Empty states
  if (isLoading) {
    return (
      <Flex minH="100vh" bg="gray.50" align="center" justify="center">
        <Spinner size="xl" color="orange.500" />
      </Flex>
    );
  }

  if (error || !data) {
    return (
      <Flex
        minH="100vh"
        bg="gray.50"
        direction="column"
        align="center"
        justify="center"
        color="gray.600"
      >
        <Text mb={4} fontSize="lg">
          Product not found or error loading data.
        </Text>
        <RouterLink to="/" style={{ color: "#dd6b20", textDecoration: "none" }}>
          <Box _hover={{ textDecoration: "underline" }}>Back to Products</Box>
        </RouterLink>
      </Flex>
    );
  }

  // 4. Data preparation (handling Strapi object wrapper)
  const product = data.data as IProduct; // API actually returns { data: IProduct }
  const { title, description, price, thumbnail } = product;

  // Safe image access with fallback
  const imageUrl = thumbnail?.url
    ? `${import.meta.env.VITE_SERVER_BASE}${thumbnail.url}`
    : "https://via.placeholder.com/600x600?text=No+Image";

  return (
    <Box bg="#fdfcfb" minH="100vh" fontFamily="system-ui, sans-serif">
      <Container maxW="container.xl" px={4} py={8}>
        {/* Breadcrumbs */}
        <Flex
          align="center"
          gap={2}
          fontSize="sm"
          color="blackAlpha.500"
          mb={8}
          overflowX="auto"
          whiteSpace="nowrap"
          fontWeight="medium"
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
          <RouterLink to="/products">
            <Box _hover={{ color: "#206bc4" }} transition="colors 0.2s">
              Products
            </Box>
          </RouterLink>
          <Text color="blackAlpha.300">/</Text>
          <Text
            color="#1d273b"
            fontWeight="bold"
            truncate
            maxW={{ base: "200px", sm: "none" }}
          >
            {title}
          </Text>
        </Flex>

        <Box
          bg="white"
          borderRadius="2xl"
          boxShadow="xl"
          border="1px solid"
          borderColor="blackAlpha.100"
          overflow="hidden"
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={0}>
            {/* Left: Image Gallery */}
            <GridItem
              p={{ base: 6, lg: 10 }}
              bg="white"
              display="flex"
              flexDir="column"
              alignItems="center"
              borderBottom={{ base: "1px solid", md: "0" }}
              borderRight={{ md: "1px solid" }}
              borderColor="blackAlpha.100"
            >
              <Box
                position="relative"
                w="full"
                maxW="500px"
                aspectRatio={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgGradient="radial"
                gradientFrom="white"
                gradientTo="blackAlpha.50"
                borderRadius="2xl"
                overflow="hidden"
                mb={6}
                border="1px solid"
                borderColor="blackAlpha.50"
                role="group"
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  loading="lazy"
                  w="full"
                  h="full"
                  objectFit="contain"
                  mixBlendMode="multiply"
                  transition="transform 0.7s ease-in-out"
                  _groupHover={{ transform: "scale(1.1)" }}
                />
                <Box
                  position="absolute"
                  top={4}
                  left={4}
                  bg="#206bc4"
                  color="white"
                  fontSize="xs"
                  fontWeight="black"
                  px={4}
                  py={1.5}
                  borderRadius="full"
                  textTransform="uppercase"
                  letterSpacing="widest"
                  boxShadow="lg"
                >
                  New Arrival
                </Box>
              </Box>

              {/* Thumbnails */}
              <Flex gap={4} overflowX="auto" w="full" justify="center" pb={2}>
                {[imageUrl].map((img, idx) => (
                  <Box
                    as="button"
                    key={idx}
                    w={20}
                    h={20}
                    border="2px solid"
                    borderColor="#206bc4"
                    borderRadius="xl"
                    overflow="hidden"
                    p={1}
                    bg="white"
                    boxShadow="md"
                    _hover={{ transform: "scale(1.05)" }}
                    transition="all 0.2s"
                  >
                    <Image
                      src={img}
                      alt="Thumbnail"
                      loading="lazy"
                      w="full"
                      h="full"
                      objectFit="contain"
                      mixBlendMode="multiply"
                    />
                  </Box>
                ))}
              </Flex>
            </GridItem>

            {/* Right: Product Details */}
            <GridItem
              p={{ base: 6, lg: 10 }}
              display="flex"
              flexDir="column"
              bg="white"
            >
              <Box mb={6}>
                <Heading
                  as="h1"
                  fontSize={{ base: "3xl", lg: "4xl" }}
                  fontWeight="bold"
                  color="#1d273b"
                  mb={4}
                  lineHeight="45px"
                  letterSpacing="tight"
                >
                  {title}
                </Heading>

                {/* Meta Info */}
                <Flex
                  wrap="wrap"
                  align="center"
                  gap={4}
                  fontSize="sm"
                  color="blackAlpha.600"
                  mb={6}
                  fontWeight="medium"
                >
                  <Flex align="center" gap={1} color="#206bc4">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    <Box color="gray.200">
                      <FaStar />
                    </Box>
                    <Text color="blackAlpha.600" ml={1}>
                      (4.0)
                    </Text>
                  </Flex>
                  <Text color="blackAlpha.200">|</Text>
                  <Flex
                    align="center"
                    gap={1}
                    color="green.600"
                    fontWeight="bold"
                    bg="green.50"
                    px={3}
                    py={1}
                    borderRadius="full"
                    border="1px solid"
                    borderColor="green.100"
                  >
                    <FaCheck size={12} /> In Stock
                  </Flex>
                  <Text color="blackAlpha.200">|</Text>
                  <Text>
                    Model:{" "}
                    <Text
                      as="span"
                      color="#1d273b"
                      fontFamily="mono"
                      fontWeight="bold"
                    >
                      MDL-{product.id}
                    </Text>
                  </Text>
                </Flex>

                <Box as="hr" borderColor="blackAlpha.100" my={8} />

                <Flex align="baseline" gap={4} mb={8}>
                  <Text
                    fontSize="5xl"
                    fontWeight="bold"
                    color="#1d273b"
                    letterSpacing="tighter"
                  >
                    ${price?.toLocaleString()}
                  </Text>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    color="#206bc4"
                    bg="#fdfcfb"
                    px={3}
                    py={1}
                    borderRadius="full"
                    textTransform="uppercase"
                    letterSpacing="wide"
                  >
                    Best Price
                  </Text>
                </Flex>

                <Box
                  fontSize="sm"
                  color="blackAlpha.700"
                  mb={10}
                  lineHeight="relaxed"
                >
                  <p>
                    {description ||
                      "No description available for this product."}
                  </p>
                </Box>

                {/* Actions */}
                <Flex direction={{ base: "column", sm: "row" }} gap={4} mb={10}>
                  {/* Quantity */}
                  <Flex
                    align="center"
                    border="1px solid"
                    borderColor="blackAlpha.200"
                    borderRadius="xl"
                    w="fit"
                    overflow="hidden"
                    bg="gray.50"
                  >
                    <IconButton
                      aria-label="decrease"
                      variant="ghost"
                      px={5}
                      py={4}
                      color="#1d273b"
                      _hover={{ bg: "#fdfcfb" }}
                      borderRadius="none"
                      onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                    >
                      <FaMinus size={12} />
                    </IconButton>
                    <Input
                      type="number"
                      readOnly
                      value={qty}
                      w={12}
                      textAlign="center"
                      border="none"
                      _focus={{ ring: 0 }}
                      color="#1d273b"
                      fontWeight="bold"
                      bg="transparent"
                    />
                    <IconButton
                      aria-label="increase"
                      variant="ghost"
                      px={5}
                      py={4}
                      color="#1d273b"
                      _hover={{ bg: "#fdfcfb" }}
                      borderRadius="none"
                      onClick={() => setQty((prev) => prev + 1)}
                    >
                      <FaPlus size={12} />
                    </IconButton>
                  </Flex>

                  {/* Add to Cart */}
                  <Button
                    flex={1}
                    bg="#206bc4"
                    color="white"
                    fontWeight="bold"
                    py={4}
                    px={8}
                    borderRadius="xl"
                    _hover={{
                      bg: "blue.700",
                      boxShadow: "xl",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={3}
                    role="group"
                    h="auto"
                    onClick={() => {
                      for (let i = 0; i < qty; i++) {
                        dispatch(addToCart(product));
                      }
                      toast.success(`Added ${qty} item(s) to Cart 🎉`);
                      setQty(1); // Reset
                    }}
                  >
                    <Box
                      _groupHover={{ transform: "scale(1.1)" }}
                      transition="transform 0.2s"
                    >
                      <FaShoppingCart />
                    </Box>
                    ADD TO CART
                  </Button>
                </Flex>

                {/* Extras / Tags */}
                <Flex wrap="wrap" gap={3} mt="auto">
                  {["Fast Shipping", "Official Warranty", "Original"].map(
                    (tag) => (
                      <Box
                        key={tag}
                        fontSize="xs"
                        fontWeight="bold"
                        color="blackAlpha.600"
                        bg="blackAlpha.50"
                        px={4}
                        py={2}
                        borderRadius="full"
                        border="1px solid"
                        borderColor="blackAlpha.50"
                      >
                        {tag}
                      </Box>
                    ),
                  )}
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Product;
