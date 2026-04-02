import { memo, useState } from "react";
import { FaShoppingCart, FaExchangeAlt, FaEye } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/Utils";
import { useDispatch } from "react-redux";
import { setNavigateProductId } from "@/app/features/Product/productSlice";
import { addToCart } from "@/app/features/Cart/cartSlice";
import type { IProduct } from "@/Interfaces";
import { toaster } from "../ui/toaster";
import { staggerContainer, fadeInUp } from "@/Utils/animations";
import { motion } from "framer-motion";
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
  Input,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const ProductCard = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const imageUrl = product.thumbnail?.url
    ? `${import.meta.env.VITE_SERVER_BASE}${product.thumbnail.url}`
    : "https://via.placeholder.com/300";

  return (
<<<<<<< HEAD
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        bg="white"
        border="1px solid"
        borderColor="blackAlpha.100"
        borderRadius="2xl"
        overflow="hidden"
        transition="all 0.3s"
        role="group"
        position="relative"
        h="full"
        w="full"
      >
        {/* Badges */}
        <Box
          position="absolute"
          top={4}
          left={0}
          bg="#206bc4"
          color="white"
          fontSize="10px"
          fontWeight="black"
          px={8}
          py={1}
          transform="rotate(-45deg) translateX(-28%) translateY(20%)"
          zIndex={20}
          w={32}
          textAlign="center"
          boxShadow="md"
          textTransform="uppercase"
          letterSpacing="widest"
        >
          NEW ARRIVAL
        </Box>

        {/* Image */}
        <Box
          h={72}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={6}
          position="relative"
          overflow="hidden"
          bgGradient="to-br"
          gradientFrom="white"
          gradientTo="#fdfcfb"
        >
          <Image
            src={imageUrl}
            alt={product.title}
            maxH="full"
            maxW="full"
            objectFit="contain"
            loading="lazy"
            _groupHover={{ transform: "scale(1.1)" }}
            transition="transform 0.7s ease-in-out"
            mixBlendMode="multiply"
          />

          {/* Hover Actions */}
          <Flex
            position="absolute"
            bottom={4}
            left={0}
            right={0}
            justify="center"
            gap={3}
            opacity={0}
            transform="translateY(16px)"
            _groupHover={{ opacity: 1, transform: "translateY(0)" }}
            transition="all 0.3s"
            zIndex={10}
          >
            <IconButton
              aria-label="Quick View"
              h={10}
              w={10}
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
              <FaEye />
            </IconButton>
            <IconButton
              aria-label="Compare"
              h={10}
              w={10}
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
              <FaExchangeAlt />
            </IconButton>
          </Flex>
        </Box>

        {/* Content */}
        <Box p={5}>
          <Flex
            justify="space-between"
            fontSize="xs"
            color="#206bc4"
            mb={2}
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
          >
            <Text
              as="span"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              PREMIUM BRAND
            </Text>
            <Text as="span" color="blackAlpha.400">
              {/* Category placeholder */}
            </Text>
          </Flex>

          <RouterLink
            to="/product"
            onClick={() => dispatch(setNavigateProductId(product.documentId))}
            style={{ display: "block" }}
          >
            <Heading
              as="h3"
              fontWeight="bold"
              color="#1d273b"
              fontSize="lg"
              mb={3}
              h={14}
              overflow="hidden"
              textOverflow="ellipsis"
              lineClamp={2}
              _hover={{ color: "#206bc4" }}
              cursor="pointer"
              transition="colors 0.2s"
              lineHeight="tight"
            >
              {product.title}
            </Heading>
          </RouterLink>

          <Box
            color="#1d273b"
            fontSize="xl"
            fontWeight="bold"
            mb={4}
            fontFamily="mono"
          >
            ${product.price?.toLocaleString()}
          </Box>

          <Flex gap={3}>
            <Flex
              border="1px solid"
              borderColor="blackAlpha.200"
              borderRadius="lg"
              align="center"
              px={1}
              w={16}
              bg="gray.50"
            >
              <Input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value) || 1)}
                w="full"
                outline="none"
                textAlign="center"
                fontSize="sm"
                bg="transparent"
                fontWeight="medium"
                color="#1d273b"
                border="none"
                _focus={{ ring: 0 }}
              />
            </Flex>
            <Button
              flex={1}
              bg="#206bc4"
              _hover={{ bg: "blue.700", boxShadow: "lg" }}
              color="white"
              fontWeight="bold"
              py={2.5}
              px={4}
              borderRadius="lg"
              fontSize="sm"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              transition="all 0.2s"
              boxShadow="md"
              onClick={() => {
                for (let i = 0; i < qty; i++) {
                  dispatch(addToCart(product));
                }
                toaster.create({
                  title: `Added ${qty} item${qty > 1 ? "s" : ""} to Cart`,
                  type: "success",
                });
                setQty(1);
              }}
            >
              <FaShoppingCart />
              ADD
            </Button>
          </Flex>
        </Box>
      </Box>
    </motion.div>
=======
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-imperial-dark tracking-tight">
            Featured Collection
          </h2>
          <div className="w-24 h-1.5 bg-imperial-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-imperial-dark/60 text-sm uppercase tracking-widest font-semibold">
            Curated Selections Just For You
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm font-bold uppercase tracking-wider">
          <button className="text-white bg-imperial-dark px-6 py-3 flex items-center gap-2 rounded-full shadow-lg shadow-imperial-dark/20 transform hover:-translate-y-1 transition-all">
            <span className="text-imperial-accent">⚡</span> LATEST
          </button>
          <button className="text-imperial-dark bg-white border border-imperial-dark/10 hover:bg-imperial-bg hover:text-imperial-primary px-6 py-3 transition-all flex items-center gap-2 rounded-full hover:shadow-md">
            <span className="text-green-600">🏆</span> BESTSELLERS
          </button>
          <button className="text-imperial-dark bg-white border border-imperial-dark/10 hover:bg-imperial-bg hover:text-imperial-primary px-6 py-3 transition-all flex items-center gap-2 rounded-full hover:shadow-md">
            <span className="text-red-500">🔥</span> SPECIALS
          </button>
          <button className="text-imperial-dark bg-white border border-imperial-dark/10 hover:bg-imperial-bg hover:text-imperial-primary px-6 py-3 transition-all flex items-center gap-2 rounded-full hover:shadow-md">
            <span className="text-orange-500">🚚</span> COMING SOON
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-imperial-dark/10 rounded-2xl overflow-hidden hover:shadow-xl hover:border-imperial-primary/30 transition-all duration-300 group relative transform hover:-translate-y-2"
            >
              {/* Badges */}
              {product.isNew && (
                <div className="absolute top-4 left-0 bg-imperial-primary text-white text-[10px] font-black px-8 py-1 -rotate-45 translate-x-[-28%] translate-y-[20%] z-20 w-32 text-center shadow-md uppercase tracking-widest">
                  NEW ARRIVAL
                </div>
              )}
              <div className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center bg-imperial-bg text-imperial-dark font-bold rounded-full z-20 shadow-sm border border-imperial-dark/10">
                <span className="text-xs">3</span>
              </div>

              {/* Image */}
              <div className="h-72 flex items-center justify-center p-6 relative overflow-hidden bg-linear-to-br from-white to-imperial-bg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply"
                />

                {/* Hover Actions */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 z-10">
                  <button
                    className="h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center text-imperial-dark hover:bg-imperial-primary hover:text-white transition-all transform hover:scale-110"
                    title="Quick View"
                  >
                    <FaEye />
                  </button>
                  <button
                    className="h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center text-imperial-dark hover:bg-imperial-primary hover:text-white transition-all transform hover:scale-110"
                    title="Compare"
                  >
                    <FaExchangeAlt />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between text-xs text-imperial-primary mb-2 font-bold tracking-wide uppercase">
                  <span className="cursor-pointer hover:underline">
                    {product.category}
                  </span>
                  <span className="text-imperial-dark/40">
                    {product.categoryType}
                  </span>
                </div>

                <h3 className="font-bold text-imperial-dark text-lg mb-3 h-14 overflow-hidden text-ellipsis line-clamp-2 hover:text-imperial-primary cursor-pointer transition-colors leading-tight">
                  {product.name}
                </h3>

                <div className="text-imperial-dark text-xl font-bold mb-4 font-mono">
                  {product.price}
                </div>

                <div className="flex gap-3">
                  <div className="border border-imperial-dark/20 rounded-lg flex items-center px-1 w-16 bg-gray-50">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-full outline-none text-center text-sm bg-transparent font-medium text-imperial-dark"
                    />
                  </div>
                  <button className="flex-1 bg-imperial-primary hover:bg-imperial-hover text-white font-bold py-2.5 px-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg">
                    <FaShoppingCart />
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/products">
            <button className="bg-imperial-dark text-white px-10 py-4 text-sm font-bold tracking-widest hover:bg-imperial-primary transition-all rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1">
              VIEW FULL COLLECTION →
            </button>
          </Link>
        </div>
      </div>
    </section>
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
  );
};

const FeaturedProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["featured-products"],
    queryFn: () => getProducts({}),
  });

  return (
    <Box as="section" py={12} bg="white">
      <Container maxW="container.xl" px={4}>
        <Box textAlign="center" mb={10}>
          <Heading
            as="h2"
            fontSize="4xl"
            fontWeight="bold"
            mb={4}
            color="#1d273b"
            letterSpacing="tight"
          >
            Featured Collection
          </Heading>
          <Box
            w={24}
            h="6px"
            bg="#206bc4"
            mx="auto"
            mb={6}
            borderRadius="full"
          />
          <Text
            color="blackAlpha.600"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="widest"
            fontWeight="semibold"
          >
            Curated Selections Just For You
          </Text>
        </Box>

        {/* Filter Tabs */}
        <Flex
          wrap="wrap"
          justify="center"
          gap={4}
          mb={12}
          fontSize="sm"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wider"
        >
          <Button
            bg="#1d273b"
            color="white"
            px={6}
            py={6}
            borderRadius="full"
            boxShadow="0 10px 15px -3px rgba(29,39,59,0.2)"
            _hover={{ transform: "translateY(-4px)" }}
            transition="all 0.3s"
          >
            <Text as="span" color="#206bc4" mr={2}>
              ⚡
            </Text>{" "}
            LATEST
          </Button>
          <Button
            bg="white"
            color="#1d273b"
            border="1px solid"
            borderColor="blackAlpha.100"
            _hover={{ bg: "#fdfcfb", color: "#206bc4", boxShadow: "md" }}
            px={6}
            py={6}
            borderRadius="full"
            transition="all 0.3s"
          >
            <Text as="span" color="green.600" mr={2}>
              🏆
            </Text>{" "}
            BESTSELLERS
          </Button>
          <Button
            bg="white"
            color="#1d273b"
            border="1px solid"
            borderColor="blackAlpha.100"
            _hover={{ bg: "#fdfcfb", color: "#206bc4", boxShadow: "md" }}
            px={6}
            py={6}
            borderRadius="full"
            transition="all 0.3s"
          >
            <Text as="span" color="red.500" mr={2}>
              🔥
            </Text>{" "}
            SPECIALS
          </Button>
          <Button
            bg="white"
            color="#1d273b"
            border="1px solid"
            borderColor="blackAlpha.100"
            _hover={{ bg: "#fdfcfb", color: "#206bc4", boxShadow: "md" }}
            px={6}
            py={6}
            borderRadius="full"
            transition="all 0.3s"
          >
            <Text as="span" color="orange.500" mr={2}>
              🚚
            </Text>{" "}
            COMING SOON
          </Button>
        </Flex>

        {/* Products Grid */}
        {isLoading ? (
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={8}
          >
            {[...Array(4)].map((_, i) => (
              <Box
                key={i}
                bg="white"
                borderRadius="2xl"
                p={4}
                boxShadow="sm"
                border="1px solid"
                borderColor="blackAlpha.100"
              >
                <Skeleton height="288px" borderRadius="lg" mb={4} />
                <SkeletonText noOfLines={3} />
              </Box>
            ))}
          </Grid>
        ) : error ? (
          <Box textAlign="center" py={12} color="red.500">
            Failed to load featured products.
          </Box>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Grid
              templateColumns={{
                base: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={8}
            >
              {data?.data?.slice(0, 4).map((product: IProduct) => (
                <motion.div variants={fadeInUp} key={product.id}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        )}

        <Box textAlign="center" mt={16}>
          <RouterLink to="/products">
            <Button
              bg="#1d273b"
              color="white"
              px={10}
              py={6}
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="widest"
              _hover={{
                bg: "#206bc4",
                boxShadow: "2xl",
                transform: "translateY(-4px)",
              }}
              transition="all 0.3s"
              borderRadius="full"
              boxShadow="xl"
            >
              VIEW FULL COLLECTION →
            </Button>
          </RouterLink>
        </Box>
      </Container>
    </Box>
  );
};

export default memo(FeaturedProducts);
