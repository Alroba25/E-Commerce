<<<<<<< HEAD
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
=======
import { clearAllItems, removeItem } from "@/app/features/Cart/cartSlice";
import { setNavigateProductId } from "@/app/features/Product/productSlice";
import type { RootState } from "@/app/store";
import type { IProduct } from "@/Interfaces";
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c

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
<<<<<<< HEAD
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
=======
      <Portal>
        <Drawer.Backdrop className="bg-imperial-dark/50 backdrop-blur-sm" />
        <Drawer.Positioner>
          <Drawer.Content className="max-w-sm flex flex-col bg-imperial-bg border-l-4 border-imperial-primary shadow-2xl">
            {/* Header */}
            <Drawer.Header className="border-b border-imperial-accent/30 bg-imperial-bg">
              <Drawer.Title className="text-xl font-bold text-imperial-dark flex items-center gap-2">
                <span className="text-2xl">🛒</span> Your Cart (
                {cartContent.length})
              </Drawer.Title>
            </Drawer.Header>

            {/* Body */}
            <Drawer.Body className="flex-1 overflow-y-auto bg-imperial-bg p-4 scrollbar-thin">
              {cartContent.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-imperial-dark/50 text-lg mb-2">
                    Your cart is empty
                  </p>
                  <p className="text-4xl">🍂</p>
                  <Button
                    onClick={() => setOpen(false)}
                    className="mt-4 bg-imperial-primary text-white hover:bg-imperial-hover"
                  >
                    Start Shopping
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {cartContent.map((p: IProduct) => {
                    const imageUrl = p.thumbnail?.url
                      ? `${import.meta.env.VITE_SERVER_BASE}${p.thumbnail.url}`
                      : "https://via.placeholder.com/80";

                    return (
                      <div
                        key={p.id}
                        className="flex items-center gap-4 bg-white border border-imperial-accent/30 rounded-xl p-3 shadow-sm hover:shadow-md hover:border-imperial-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        {/* Product Image */}
                        <div className="bg-imperial-bg/50 rounded-lg p-2">
                          <img
                            src={imageUrl}
                            alt={p.title}
                            className="w-16 h-16 object-contain mix-blend-multiply"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <Link
                            to="/product"
                            onClick={() => {
                              dispatch(setNavigateProductId(p.documentId));
                              setOpen(false);
                            }}
                            className="font-bold text-imperial-dark hover:text-imperial-primary line-clamp-1 text-lg mb-1"
                          >
                            {p.title}
                          </Link>

                          <p className="text-xs text-imperial-dark/60 line-clamp-1 mb-1">
                            {p.description || "No description"}
                          </p>

                          <span className="text-imperial-primary font-bold text-md">
                            ${p.price}
                          </span>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => {
                            dispatch(removeItem(p.documentId));
                          }}
                          className="cursor-pointer text-imperial-dark/40 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50"
                          title="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </Drawer.Body>

            {/* Footer */}
            <Drawer.Footer className="flex gap-3 border-t border-imperial-accent/30 bg-imperial-bg p-4">
              <Link className="flex-1" to={"/cart"}>
                <Button
                  width="full"
                  className="bg-imperial-primary text-white hover:bg-imperial-hover font-bold shadow-md hover:shadow-lg transition-all"
                >
                  Checkout
                </Button>
              </Link>
              <Button
                width="full"
                className="bg-white border border-imperial-dark/20 text-imperial-dark hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                onClick={() => {
                  dispatch(clearAllItems());
                }}
              >
                Clear
              </Button>
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton
                size="sm"
                className="text-imperial-dark hover:bg-imperial-accent/20"
              />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
    </Drawer.Root>
  );
};

export default DrawerCom;
