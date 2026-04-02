import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaFileContract, FaArrowLeft } from "react-icons/fa";

const TermsConditions = () => {
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
            <FaFileContract />
          </Box>
          <Heading
            as="h1"
            fontSize="4xl"
            fontWeight="black"
            color="#1d273b"
            mb={4}
            letterSpacing="tight"
          >
            Terms & Conditions
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
                1. Agreement to Terms
              </Heading>
              <Text>
                These Terms of Use constitute a legally binding agreement made
                between you, whether personally or on behalf of an entity
                ("you") and Elbadr Group ("Company", "we", "us", or "our"),
                concerning your access to and use of the elbadrgroupeg.com
                website as well as any other media form related, linked, or
                otherwise connected thereto.
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
                2. Products and Pricing
              </Heading>
              <Text mb={2}>
                We make every effort to display as accurately as possible the
                colors, features, specifications, and details of the products
                available on the Site. However, we do not guarantee that the
                colors, features, specifications, and details of the products
                will be accurate, complete, reliable, current, or free of other
                errors.
              </Text>
              <Text>
                All products are subject to availability, and we cannot
                guarantee that items will be in stock. We reserve the right to
                discontinue any products at any time for any reason. Prices for
                all products are subject to change.
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
                3. User Registration
              </Heading>
              <Text>
                You may be required to register with the Site. You agree to keep
                your password confidential and will be responsible for all use
                of your account and password. We reserve the right to remove,
                reclaim, or change a username you select if we determine, in our
                sole discretion, that such username is inappropriate.
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
                4. Contact Us
              </Heading>
              <Text>
                In order to resolve a complaint regarding the Site or to receive
                further information regarding use of the Site, please contact us
                at: support@elbadrgroupeg.com
              </Text>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsConditions;
