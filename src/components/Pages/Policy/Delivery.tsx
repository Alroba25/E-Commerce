import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaTruck, FaArrowLeft } from "react-icons/fa";

const Delivery = () => {
  return (
    <Box bg="#fdfcfb" minH="100vh" py={12} fontFamily="system-ui, sans-serif">
      <Container maxW="container.xl" px={4}>
        <RouterLink to="/">
          <Box
            display="inline-flex"
            alignItems="center"
            gap={2}
            mb={8}
            color="blackAlpha.500"
            _hover={{ color: "#206bc4" }}
            fontWeight="bold"
            transition="colors 0.2s"
          >
            <FaArrowLeft /> Back to Home
          </Box>
        </RouterLink>

        <Box
          bg="white"
          p={10}
          borderRadius="3xl"
          border="1px solid"
          borderColor="blackAlpha.100"
          boxShadow="lg"
          maxW="4xl"
          mx="auto"
        >
          <Box color="#206bc4" fontSize="4xl" mb={4}>
            <FaTruck />
          </Box>
          <Heading
            as="h1"
            fontSize="4xl"
            fontWeight="black"
            color="#1d273b"
            mb={4}
            letterSpacing="tight"
          >
            Delivery Information
          </Heading>
          <Text color="blackAlpha.500" fontSize="sm" mb={10} fontWeight="bold">
            Last Updated: January 1, 2026
          </Text>

          <VStack
            align="stretch"
            gap={8}
            color="blackAlpha.700"
            fontSize="md"
            lineHeight="tall"
          >
            <Box>
              <Heading
                as="h2"
                fontSize="xl"
                fontWeight="bold"
                color="#1d273b"
                mb={3}
              >
                1. Shipping Methods
              </Heading>
              <Text>
                We offer multiple shipping methods to meet your needs. We
                deliver to all governorates within Egypt. All orders are subject
                to product availability. If an item is not in stock at the time
                you place your order, we will notify you and refund you the
                total amount of your order, using the original method of
                payment.
              </Text>
            </Box>

            <Box>
              <Heading
                as="h2"
                fontSize="xl"
                fontWeight="bold"
                color="#1d273b"
                mb={3}
              >
                2. Delivery Time
              </Heading>
              <Text mb={2}>
                An estimated delivery time will be provided to you once your
                order is placed. Delivery times are estimates and commence from
                the date of shipping, rather than the date of order. Delivery
                times are to be used as a guide only and are subject to the
                acceptance and approval of your order.
              </Text>
              <Text>
                Unless there are exceptional circumstances, we make every effort
                to fulfill your order within [3] business days of the date of
                your order. Business day mean Monday to Friday, except holidays.
              </Text>
            </Box>

            <Box>
              <Heading
                as="h2"
                fontSize="xl"
                fontWeight="bold"
                color="#1d273b"
                mb={3}
              >
                3. Shipping Costs
              </Heading>
              <Text>
                Shipping costs are based on the weight of your order and the
                delivery method. To find out how much your order will cost,
                simple add the items you would like to purchase to your cart,
                and proceed to the checkout page. Once at the checkout screen,
                shipping charges will be displayed.
              </Text>
            </Box>

            <Box>
              <Heading
                as="h2"
                fontSize="xl"
                fontWeight="bold"
                color="#1d273b"
                mb={3}
              >
                4. Damaged Items in Transport
              </Heading>
              <Text>
                If there is any damage to the packaging on delivery, contact us
                immediately at support@elbadrgroupeg.com.
              </Text>
            </Box>

            <Box>
              <Heading
                as="h2"
                fontSize="xl"
                fontWeight="bold"
                color="#1d273b"
                mb={3}
              >
                5. Contact Us
              </Heading>
              <Text>
                If you have any questions about the delivery and shipment or
                your order, please contact us at: support@elbadrgroupeg.com
              </Text>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Delivery;
