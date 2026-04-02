import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaUndoAlt, FaArrowLeft } from "react-icons/fa";

const ReturnRefund = () => {
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
            <FaUndoAlt />
          </Box>
          <Heading
            as="h1"
            fontSize="4xl"
            fontWeight="black"
            color="#1d273b"
            mb={4}
            letterSpacing="tight"
          >
            Returns & Refunds
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
                1. Return Policy
              </Heading>
              <Text mb={2}>
                We hope you are happy with your purchase. However, if you are
                not completely satisfied with your purchase for any reason, you
                may return it to us for a full refund or an exchange within 14
                days from the date of purchase.
              </Text>
              <Text>
                All returned items must be in new and unused condition, with all
                original tags and labels attached.
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
                2. Return Process
              </Heading>
              <Text mb={2}>
                To return an item, please email customer service at
                support@elbadrgroupeg.com to obtain a Return Merchandise
                Authorization (RMA) number. After receiving a RMA number, place
                the item securely in its original packaging and mail your return
                to the following address:
              </Text>
              <Box
                bg="gray.50"
                p={4}
                borderRadius="xl"
                mt={4}
                border="1px solid"
                borderColor="blackAlpha.100"
              >
                <Text fontWeight="bold" color="#1d273b">
                  Elbadr Group
                </Text>
                <Text>Attn: Returns</Text>
                <Text>123 Computer Market, El-Bustan Mall</Text>
                <Text>Cairo, Egypt</Text>
              </Box>
            </Box>

            <Box>
              <Heading
                as="h2"
                fontSize="xl"
                fontWeight="bold"
                color="#1d273b"
                mb={3}
              >
                3. Refunds
              </Heading>
              <Text>
                After receiving your return and inspecting the condition of your
                item, we will process your return or exchange. Please allow at
                least 5 days from the receipt of your item to process your
                return or exchange. Refunds may take 1-2 billing cycles to
                appear on your credit card statement, depending on your credit
                card company. We will notify you by email when your return has
                been processed.
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
                4. Exceptions
              </Heading>
              <Text mb={2}>
                For defective or damaged products, please contact us at the
                contact details below to arrange a refund or exchange.
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
                If you have any questions concerning our return policy, please
                contact us at: support@elbadrgroupeg.com
              </Text>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default ReturnRefund;
