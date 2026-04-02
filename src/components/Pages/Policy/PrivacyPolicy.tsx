import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaShieldAlt, FaArrowLeft } from "react-icons/fa";

const PrivacyPolicy = () => {
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
            <FaShieldAlt />
          </Box>
          <Heading
            as="h1"
            fontSize="4xl"
            fontWeight="black"
            color="#1d273b"
            mb={4}
            letterSpacing="tight"
          >
            Privacy Policy
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
                1. Introduction
              </Heading>
              <Text>
                Elbadr Group ("we", "our", or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website (elbadrgroupeg.com) or use our services.
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
                2. Information We Collect
              </Heading>
              <Text mb={2}>
                We may collect information about you in a variety of ways. The
                information we may collect on the Site includes:
              </Text>
              <Box as="ul" pl={6} css={{ "& li": { marginBottom: "8px" } }}>
                <li>
                  <strong>Personal Data:</strong> Personally identifiable
                  information, such as your name, shipping address, email
                  address, and telephone number that you voluntarily give to us.
                </li>
                <li>
                  <strong>Derivative Data:</strong> Information our servers
                  automatically collect when you access the Site, such as your
                  IP address, browser type, and operating system.
                </li>
                <li>
                  <strong>Financial Data:</strong> Financial information related
                  to your payment method when you purchase our products.
                </li>
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
                3. Use of Your Information
              </Heading>
              <Text mb={2}>
                Having accurate information about you permits us to provide you
                with a smooth, efficient, and customized experience.
                Specifically, we may use information collected about you via the
                Site to:
              </Text>
              <Box as="ul" pl={6} css={{ "& li": { marginBottom: "8px" } }}>
                <li>
                  Process and manage purchases, orders, payments, and other
                  transactions related to the Site.
                </li>
                <li>Create and manage your account.</li>
                <li>
                  Deliver targeted advertising, coupons, newsletters, and other
                  information regarding promotions.
                </li>
                <li>Email you regarding your account or order.</li>
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
                4. Contact Us
              </Heading>
              <Text>
                If you have questions or comments about this Privacy Policy,
                please contact us at: support@elbadrgroupeg.com
              </Text>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
