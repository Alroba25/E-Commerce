<<<<<<< HEAD
import { useState } from "react";
import { getOneProduct } from "@/Utils";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";
import { addToCart } from "@/app/features/Cart/cartSlice";
import toast from "react-hot-toast";
import { Link as RouterLink } from "react-router-dom";
=======
import { getOneProduct } from "@/Utils";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { Link } from "react-router-dom";
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
import {
  FaShoppingCart,
  FaMinus,
  FaPlus,
  FaCheck,
  FaHome,
  FaStar,
} from "react-icons/fa";
import type { IProduct } from "@/Interfaces";
<<<<<<< HEAD
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
=======
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c

const Product = () => {
  // 1. Get the documentId from Redux store
  const documentId = useSelector(
    (state: RootState) => state.product.navigateProductId,
  );
<<<<<<< HEAD
  const dispatch = useDispatch();

  // Local state for quantity
  const [qty, setQty] = useState(1);
=======
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c

  // 2. Fetch product details
  const { data, isLoading, error } = useQuery({
    queryKey: ["oneProduct", documentId],
    queryFn: () => getOneProduct(documentId),
    enabled: !!documentId,
  });

  // 3. Handle Loading/Error/Empty states
  if (isLoading) {
    return (
<<<<<<< HEAD
      <Flex minH="100vh" bg="gray.50" align="center" justify="center">
        <Spinner size="xl" color="orange.500" />
      </Flex>
=======
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
    );
  }

  if (error || !data) {
    return (
<<<<<<< HEAD
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
=======
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-gray-600">
        <p className="mb-4 text-lg">Product not found or error loading data.</p>
        <Link to="/" className="text-orange-500 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  // 4. Data preparation
  const product = data as IProduct; // Assume IProduct structure based on ProductsPage usage
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
  const { title, description, price, thumbnail } = product;

  // Safe image access with fallback
  const imageUrl = thumbnail?.url
    ? `${import.meta.env.VITE_SERVER_BASE}${thumbnail.url}`
    : "https://via.placeholder.com/600x600?text=No+Image";
<<<<<<< HEAD

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
=======
  return (
    <div className="bg-imperial-bg/30 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-imperial-dark/50 mb-8 overflow-x-auto whitespace-nowrap font-medium">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-imperial-primary transition-colors"
          >
            <FaHome /> Home
          </Link>
          <span className="text-imperial-dark/30">/</span>
          <Link
            to="/products"
            className="hover:text-imperial-primary transition-colors"
          >
            Products
          </Link>
          <span className="text-imperial-dark/30">/</span>
          <span className="text-imperial-dark font-bold truncate max-w-[200px] sm:max-w-none">
            {title}
          </span>
        </nav>

        <div className="bg-white rounded-2xl shadow-xl border border-imperial-dark/10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left: Image Gallery */}
            <div className="p-6 lg:p-10 bg-white flex flex-col items-center border-b md:border-b-0 md:border-r border-imperial-dark/10">
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center bg-radial from-white to-imperial-bg/20 rounded-2xl overflow-hidden mb-6 group border border-imperial-dark/5">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-imperial-primary text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  New Arrival
                </div>
              </div>

              {/* Thumbnails (Mockup behavior since we only have one image usually) */}
              <div className="flex gap-4 overflow-x-auto w-full justify-center pb-2">
                {[imageUrl].map((img, idx) => (
                  <button
                    key={idx}
                    className="w-20 h-20 border-2 border-imperial-primary rounded-xl overflow-hidden p-1 bg-white shadow-md hover:scale-105 transition-all"
                  >
                    <img
                      src={img}
                      alt="Thumbnail"
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </button>
                ))}
                {/* Placeholders to simulate gallery if needed */}
                {/* <div className="w-20 h-20 border border-gray-200 rounded-md bg-gray-50"></div> */}
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="p-6 lg:p-10 flex flex-col bg-white">
              <div className="mb-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-imperial-dark mb-4 leading-tight tracking-tight">
                  {title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-imperial-dark/60 mb-6 font-medium">
                  <div className="flex items-center gap-1 text-imperial-accent">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaStar className="text-gray-200" />
                    <span className="text-imperial-dark/60 ml-1">(4.0)</span>
                  </div>
                  <span className="text-imperial-dark/20">|</span>
                  <span className="text-green-600 flex items-center gap-1 font-bold bg-green-50 px-3 py-1 rounded-full border border-green-100">
                    <FaCheck size={12} /> In Stock
                  </span>
                  <span className="text-imperial-dark/20">|</span>
                  <span>
                    Model:{" "}
                    <span className="text-imperial-dark font-mono font-bold">
                      MDL-{product.id}
                    </span>
                  </span>
                </div>

                <hr className="border-imperial-dark/10 my-8" />

                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-5xl font-bold text-imperial-dark tracking-tighter">
                    ${price?.toLocaleString()}
                  </span>
                  {/* Mock previous price */}
                  {/* <span className="text-lg text-gray-400 line-through">$29,000</span> */}
                  <span className="text-sm font-bold text-imperial-primary bg-imperial-bg px-3 py-1 rounded-full uppercase tracking-wide">
                    Best Price
                  </span>
                </div>

                <div className="prose prose-sm text-imperial-dark/70 mb-10 max-w-none leading-relaxed">
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
                  <p>
                    {description ||
                      "No description available for this product."}
                  </p>
<<<<<<< HEAD
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
=======
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  {/* Quantity */}
                  <div className="flex items-center border border-imperial-dark/20 rounded-xl w-fit overflow-hidden bg-gray-50">
                    <button className="px-5 py-4 text-imperial-dark hover:bg-imperial-bg transition-colors">
                      <FaMinus size={12} />
                    </button>
                    <input
                      type="number"
                      readOnly
                      className="w-12 text-center border-none focus:ring-0 text-imperial-dark font-bold bg-transparent [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button className="px-5 py-4 text-imperial-dark hover:bg-imperial-bg transition-colors">
                      <FaPlus size={12} />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button className="flex-1 bg-imperial-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-imperial-hover hover:shadow-xl hover:shadow-imperial-primary/30 transition-all flex items-center justify-center gap-3 group transform hover:-translate-y-0.5">
                    <FaShoppingCart className="group-hover:scale-110 transition-transform" />
                    ADD TO CART
                  </button>
                </div>

                {/* Extras / Tags */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {["Fast Shipping", "Official Warranty", "Original"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold text-imperial-dark/60 bg-imperial-bg/50 px-4 py-2 rounded-full border border-imperial-dark/5"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
  );
};

export default Product;
