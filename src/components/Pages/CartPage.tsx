<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store";
import { Link as RouterLink } from "react-router-dom";
import {
  removeItem,
  clearAllItems,
  increaseQuantity,
  decreaseQuantity,
} from "@/app/features/Cart/cartSlice";
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
  IconButton,
} from "@chakra-ui/react";
import {
  FaTrash,
  FaArrowRight,
  FaShoppingBag,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const CartPage = () => {
  const cartContent = useSelector(
    (state: RootState) => state.cart.productsCart,
  );
  const dispatch = useDispatch();

  const subtotal = cartContent.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  if (cartContent.length === 0) {
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
          <Box
            fontSize="6xl"
            color="blackAlpha.300"
            mb={6}
            display="inline-block"
          >
            <FaShoppingBag />
          </Box>
          <Heading
            as="h1"
            fontSize="4xl"
            color="#1d273b"
            mb={4}
            fontWeight="black"
            letterSpacing="tight"
          >
            Your Cart is Empty
          </Heading>
          <Text fontSize="lg" color="blackAlpha.600" mb={8}>
            Looks like you haven't added anything to your cart yet.
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
              Start Shopping
            </Button>
          </RouterLink>
        </Container>
      </Box>
    );
  }

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
          Shopping Cart
          <Text
            as="span"
            fontSize="lg"
            color="blackAlpha.500"
            fontWeight="medium"
            ml={4}
          >
            {cartContent.length} Items
          </Text>
        </Heading>

        <Grid templateColumns={{ base: "1fr", lg: "7fr 4fr" }} gap={10}>
          {/* Cart Items List */}
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
                bg="blackAlpha.50"
                px={6}
                py={4}
                borderBottom="1px solid"
                borderColor="blackAlpha.100"
                fontWeight="bold"
                color="blackAlpha.700"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wider"
                display={{ base: "none", md: "flex" }}
              >
                <Box flex={2}>Product Details</Box>
                <Box flex={1} textAlign="center">
                  Quantity
                </Box>
                <Box flex={1} textAlign="right">
                  Price
                </Box>
                <Box w={12}></Box>
              </Flex>

              {cartContent.map((item) => {
                const imageUrl = item.thumbnail?.url
                  ? `${import.meta.env.VITE_SERVER_BASE}${item.thumbnail.url}`
                  : "https://via.placeholder.com/150";

                const itemTotal = item.price * item.quantity;

                return (
                  <Flex
                    key={item.id}
                    px={6}
                    py={6}
                    borderBottom="1px solid"
                    borderColor="blackAlpha.50"
                    _last={{ borderBottom: "none" }}
                    align="center"
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: 6, md: 4 }}
                  >
                    {/* Details */}
                    <Flex flex={2} align="center" gap={4} w="full">
                      <Box
                        w={24}
                        h={24}
                        bg="blackAlpha.50"
                        borderRadius="xl"
                        p={2}
                        flexShrink={0}
                      >
                        <Image
                          src={imageUrl}
                          alt={item.title}
                          loading="lazy"
                          w="full"
                          h="full"
                          objectFit="contain"
                          mixBlendMode="multiply"
                        />
                      </Box>
                      <Box>
                        <Heading
                          as="h3"
                          fontSize="lg"
                          fontWeight="bold"
                          color="#1d273b"
                          mb={1}
                          lineClamp={2}
                        >
                          {item.title}
                        </Heading>
                        <Text fontSize="sm" color="blackAlpha.500" mb={2}>
                          SKU: {item.documentId.slice(-8).toUpperCase()}
                        </Text>
                      </Box>
                    </Flex>

                    {/* Quantity Controls */}
                    <Flex
                      flex={1}
                      justify={{ base: "flex-start", md: "center" }}
                      w="full"
                    >
                      <Flex
                        align="center"
                        border="1px solid"
                        borderColor="blackAlpha.100"
                        borderRadius="lg"
                        overflow="hidden"
                        h={9}
                      >
                        <IconButton
                          aria-label="Decrease"
                          variant="ghost"
                          size="sm"
                          borderRadius="none"
                          onClick={() =>
                            dispatch(decreaseQuantity(item.documentId))
                          }
                          color="blackAlpha.600"
                          _hover={{ bg: "gray.100" }}
                        >
                          <FaMinus size={12} />
                        </IconButton>
                        <Flex
                          w={10}
                          h="full"
                          justify="center"
                          align="center"
                          fontSize="md"
                          fontWeight="bold"
                          color="#1d273b"
                          bg="gray.50"
                        >
                          {item.quantity}
                        </Flex>
                        <IconButton
                          aria-label="Increase"
                          variant="ghost"
                          size="sm"
                          borderRadius="none"
                          onClick={() =>
                            dispatch(increaseQuantity(item.documentId))
                          }
                          color="blackAlpha.600"
                          _hover={{ bg: "gray.100" }}
                        >
                          <FaPlus size={12} />
                        </IconButton>
                      </Flex>
                    </Flex>

                    {/* Price */}
                    <Box
                      flex={1}
                      textAlign={{ base: "left", md: "right" }}
                      w="full"
                    >
                      <Text fontSize="xl" fontWeight="bold" color="#206bc4">
                        ${itemTotal.toLocaleString()}
                      </Text>
                    </Box>

                    {/* Remove */}
                    <Box w={{ base: "full", md: 12 }} textAlign="right">
                      <IconButton
                        aria-label="Remove item"
                        onClick={() => dispatch(removeItem(item.documentId))}
                        variant="ghost"
                        color="red.400"
                        _hover={{ bg: "red.50", color: "red.600" }}
                        size="md"
                        borderRadius="full"
                      >
                        <FaTrash />
                      </IconButton>
                    </Box>
                  </Flex>
                );
              })}

              <Flex
                px={6}
                py={4}
                bg="blackAlpha.50"
                justify="flex-end"
                borderTop="1px solid"
                borderColor="blackAlpha.100"
              >
                <Button
                  variant="ghost"
                  color="red.500"
                  _hover={{ bg: "red.50" }}
                  onClick={() => dispatch(clearAllItems())}
                >
                  Clear Cart
                </Button>
              </Flex>
            </Box>
          </GridItem>

          {/* Order Summary */}
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
                Order Summary
              </Heading>

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
                <Text>Shipping Estimate</Text>
                <Text fontWeight="bold" color="#1d273b">
                  ${shipping.toLocaleString()}
                </Text>
              </Flex>

              <Flex
                justify="space-between"
                mb={6}
                fontSize="lg"
                color="blackAlpha.700"
              >
                <Text>Tax</Text>
                <Text fontWeight="bold" color="#1d273b">
                  Calculated at checkout
                </Text>
              </Flex>

              <Box as="hr" borderColor="blackAlpha.200" mb={6} />

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

              <RouterLink to="/checkout" style={{ display: "block" }}>
                <Button
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
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={3}
                >
                  Checkout <FaArrowRight />
                </Button>
              </RouterLink>

              <Flex justify="center" mt={6}>
                <RouterLink to="/products">
                  <Text
                    color="#206bc4"
                    fontWeight="bold"
                    fontSize="sm"
                    _hover={{ textDecoration: "underline" }}
                  >
                    or Continue Shopping
                  </Text>
                </RouterLink>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default CartPage;
=======
const CartPage = () => {
    return ( 
        <>
        
        </>
     );
}
 
export default CartPage;
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
