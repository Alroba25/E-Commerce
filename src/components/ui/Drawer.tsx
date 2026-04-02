import {
  clearAllItems,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "@/app/features/Cart/cartSlice";
import { setNavigateProductId } from "@/app/features/Product/productSlice";
import type { RootState } from "@/app/store";
import {
  Button,
  CloseButton,
  Drawer,
  Box,
  Flex,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

interface IDrawer {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerCom = ({ open, setOpen }: IDrawer) => {
  const dispatch = useDispatch();

  const cartContent = useSelector(
    (state: RootState) => state.cart.productsCart,
  );

  return (
    <Drawer.Root open={open} onOpenChange={(details) => setOpen(details.open)}>
      <Drawer.Backdrop
        bg="rgba(29, 39, 59, 0.5)"
        backdropFilter="blur(4px)"
        zIndex={1500}
      />
      <Drawer.Positioner zIndex={1500}>
        <Drawer.Content
          zIndex={1500}
          maxW="sm"
          display="flex"
          flexDir="column"
          bg="#fdfcfb"
          borderLeft="4px solid"
          borderColor="#206bc4"
          boxShadow="2xl"
        >
          {/* Header */}
          <Drawer.Header
            borderBottom="1px solid"
            borderColor="blackAlpha.200"
            bg="#fdfcfb"
          >
            <Drawer.Title
              fontSize="xl"
              fontWeight="bold"
              color="#1d273b"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Text as="span" fontSize="2xl">
                🛒
              </Text>{" "}
              Your Cart ({cartContent.length})
            </Drawer.Title>
          </Drawer.Header>

          {/* Body */}
          <Drawer.Body flex={1} overflowY="auto" bg="#fdfcfb" p={4}>
            {cartContent.length === 0 ? (
              <Flex
                direction="column"
                align="center"
                justify="center"
                h="full"
                textAlign="center"
              >
                <Text color="blackAlpha.500" fontSize="lg" mb={2}>
                  Your cart is empty
                </Text>
                <Text fontSize="4xl">🍂</Text>
                <Button
                  onClick={() => setOpen(false)}
                  mt={4}
                  bg="#206bc4"
                  color="white"
                  _hover={{ bg: "blue.700" }}
                >
                  Start Shopping
                </Button>
              </Flex>
            ) : (
              <Flex direction="column" gap={4}>
                {cartContent.map((p) => {
                  const imageUrl = p.thumbnail?.url
                    ? `${import.meta.env.VITE_SERVER_BASE}${p.thumbnail.url}`
                    : "https://via.placeholder.com/80";

                  const itemTotal = p.price * p.quantity;

                  return (
                    <Flex
                      key={p.id}
                      align="center"
                      gap={4}
                      bg="white"
                      border="1px solid"
                      borderColor="blackAlpha.200"
                      borderRadius="xl"
                      p={3}
                      boxShadow="sm"
                      _hover={{
                        boxShadow: "md",
                        borderColor: "blue.300",
                        transform: "translateY(-4px)",
                      }}
                      transition="all 0.3s"
                    >
                      {/* Product Image */}
                      <Box bg="blackAlpha.50" borderRadius="lg" p={2}>
                        <Image
                          src={imageUrl}
                          alt={p.title}
                          w={16}
                          h={16}
                          objectFit="contain"
                          mixBlendMode="multiply"
                        />
                      </Box>

                      {/* Product Info */}
                      <Box flex={1}>
                        <RouterLink
                          to="/product"
                          onClick={() => {
                            dispatch(setNavigateProductId(p.documentId));
                            setOpen(false);
                          }}
                        >
                          <Text
                            fontWeight="bold"
                            color="#1d273b"
                            _hover={{ color: "#206bc4" }}
                            lineClamp={1}
                            fontSize="lg"
                            mb={1}
                          >
                            {p.title}
                          </Text>
                        </RouterLink>

                        {/* Quantity Controls */}
                        <Flex
                          align="center"
                          border="1px solid"
                          borderColor="blackAlpha.100"
                          borderRadius="lg"
                          w="fit"
                          mb={2}
                          overflow="hidden"
                          h={7}
                        >
                          <IconButton
                            aria-label="Decrease"
                            variant="ghost"
                            size="xs"
                            borderRadius="none"
                            onClick={() =>
                              dispatch(decreaseQuantity(p.documentId))
                            }
                            color="blackAlpha.600"
                            _hover={{ bg: "gray.100" }}
                          >
                            <FaMinus size={10} />
                          </IconButton>
                          <Flex
                            w={8}
                            justify="center"
                            align="center"
                            fontSize="sm"
                            fontWeight="bold"
                            color="#1d273b"
                            bg="gray.50"
                          >
                            {p.quantity}
                          </Flex>
                          <IconButton
                            aria-label="Increase"
                            variant="ghost"
                            size="xs"
                            borderRadius="none"
                            onClick={() =>
                              dispatch(increaseQuantity(p.documentId))
                            }
                            color="blackAlpha.600"
                            _hover={{ bg: "gray.100" }}
                          >
                            <FaPlus size={10} />
                          </IconButton>
                        </Flex>

                        <Text color="#206bc4" fontWeight="bold" fontSize="md">
                          ${itemTotal.toLocaleString()}
                        </Text>
                      </Box>

                      {/* Remove Button */}
                      <IconButton
                        aria-label="Remove item"
                        onClick={() => {
                          dispatch(removeItem(p.documentId));
                        }}
                        color="blackAlpha.400"
                        variant="ghost"
                        _hover={{ color: "red.600", bg: "red.50" }}
                        p={2}
                        borderRadius="full"
                        transition="colors 0.2s"
                        size="sm"
                      >
                        ✕
                      </IconButton>
                    </Flex>
                  );
                })}
              </Flex>
            )}
          </Drawer.Body>

          {/* Footer */}
          <Drawer.Footer
            display="flex"
            gap={3}
            borderTop="1px solid"
            borderColor="blackAlpha.200"
            bg="#fdfcfb"
            p={4}
          >
            <RouterLink
              to="/cart"
              style={{ flex: 1 }}
              onClick={() => setOpen(false)}
            >
              <Button
                width="full"
                bg="#206bc4"
                color="white"
                _hover={{ bg: "blue.700", boxShadow: "lg" }}
                fontWeight="bold"
                boxShadow="md"
                transition="all 0.2s"
              >
                Checkout
              </Button>
            </RouterLink>
            <Button
              width="full"
              flex={1}
              bg="white"
              border="1px solid"
              borderColor="blackAlpha.200"
              color="#1d273b"
              _hover={{
                bg: "red.50",
                color: "red.600",
                borderColor: "red.200",
              }}
              onClick={() => {
                dispatch(clearAllItems());
                setOpen(false);
              }}
            >
              Clear
            </Button>
          </Drawer.Footer>

          <Drawer.CloseTrigger asChild>
            <CloseButton
              position="absolute"
              top={2}
              right={2}
              size="sm"
              color="#1d273b"
              _hover={{ bg: "blackAlpha.100" }}
            />
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
};

export default DrawerCom;
