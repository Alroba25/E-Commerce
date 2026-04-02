import {
  Box,
  Container,
  Grid,
  GridItem,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPaperPlane,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";
import { contactUsSchema } from "@/validation";
import InputErrorMessage from "../ui/InputErrorMessage";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await contactUsSchema.validate(formData, { abortEarly: false });
      setErrors({});
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      }, 1500);
    } catch (err: any) {
      if (err.name === "ValidationError") {
        const validationErrors: { [key: string]: string } = {};
        err.inner.forEach((error: any) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        setErrors(validationErrors);
      }
    }
  };

  return (
    <Box bg="#fdfcfb" minH="100vh" py={12} fontFamily="system-ui, sans-serif">
      <Container maxW="container.xl" px={4}>
        <Heading
          as="h1"
          fontSize="4xl"
          fontWeight="black"
          color="#1d273b"
          mb={2}
          letterSpacing="tight"
          textAlign="center"
        >
          Contact{" "}
          <Text as="span" color="#206bc4">
            Us
          </Text>
        </Heading>
        <Text
          color="blackAlpha.600"
          textAlign="center"
          mb={12}
          fontSize="lg"
          maxW="2xl"
          mx="auto"
        >
          Have a question or need help with your order? Our support team is here
          for you. We aim to respond to all inquiries within 24 hours.
        </Text>

        <Grid templateColumns={{ base: "1fr", lg: "1fr 2fr" }} gap={12}>
          {/* Contact Information */}
          <GridItem>
            <Box
              bg="#1d273b"
              color="white"
              p={8}
              borderRadius="2xl"
              mb={8}
              boxShadow="xl"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="-10%"
                right="-10%"
                w="60%"
                h="60%"
                bg="whiteAlpha.100"
                borderRadius="full"
                mr="-40px"
              />
              <Box
                position="absolute"
                bottom="-10%"
                left="-10%"
                w="40%"
                h="40%"
                bg="#206bc4"
                opacity={0.5}
                borderRadius="full"
              />

              <Heading
                as="h3"
                fontSize="2xl"
                fontWeight="bold"
                mb={8}
                position="relative"
                zIndex={1}
              >
                Reach Out Directly
              </Heading>

              <Flex direction="column" gap={8} position="relative" zIndex={1}>
                <Flex gap={4} align="flex-start">
                  <Box
                    p={3}
                    bg="whiteAlpha.200"
                    borderRadius="xl"
                    color="#206bc4"
                  >
                    <FaPhone fontSize="24px" />
                  </Box>
                  <Box>
                    <Text fontWeight="bold" fontSize="lg" mb={1}>
                      Phone Number
                    </Text>
                    <Text color="whiteAlpha.800">+20 10 9666 3742</Text>
                    <Text color="whiteAlpha.800">+20 11 2233 4455</Text>
                  </Box>
                </Flex>

                <Flex gap={4} align="flex-start">
                  <Box
                    p={3}
                    bg="whiteAlpha.200"
                    borderRadius="xl"
                    color="#206bc4"
                  >
                    <FaEnvelope fontSize="24px" />
                  </Box>
                  <Box>
                    <Text fontWeight="bold" fontSize="lg" mb={1}>
                      Email Support
                    </Text>
                    <Text color="whiteAlpha.800">
                      support@elbadrgroupeg.com
                    </Text>
                    <Text color="whiteAlpha.800">sales@elbadrgroupeg.com</Text>
                  </Box>
                </Flex>

                <Flex gap={4} align="flex-start">
                  <Box
                    p={3}
                    bg="whiteAlpha.200"
                    borderRadius="xl"
                    color="#206bc4"
                  >
                    <FaMapMarkerAlt fontSize="24px" />
                  </Box>
                  <Box>
                    <Text fontWeight="bold" fontSize="lg" mb={1}>
                      Store Address
                    </Text>
                    <Text color="whiteAlpha.800">
                      123 Computer Market, El-Bustan Mall
                    </Text>
                    <Text color="whiteAlpha.800">Cairo, Egypt</Text>
                  </Box>
                </Flex>
              </Flex>

              {/* Social Media */}
              <Flex gap={4} mt={10} position="relative" zIndex={1}>
                <Box
                  as="span"
                  p={3}
                  bg="whiteAlpha.200"
                  borderRadius="full"
                  cursor="pointer"
                  _hover={{ bg: "#206bc4", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <FaFacebook fontSize="20px" />
                </Box>
                <Box
                  as="span"
                  p={3}
                  bg="whiteAlpha.200"
                  borderRadius="full"
                  cursor="pointer"
                  _hover={{ bg: "#206bc4", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <FaInstagram fontSize="20px" />
                </Box>
                <Box
                  as="span"
                  p={3}
                  bg="whiteAlpha.200"
                  borderRadius="full"
                  cursor="pointer"
                  _hover={{ bg: "#206bc4", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <FaTwitter fontSize="20px" />
                </Box>
              </Flex>
            </Box>
          </GridItem>

          {/* Contact Form */}
          <GridItem>
            <Box
              bg="white"
              p={10}
              borderRadius="2xl"
              border="1px solid"
              borderColor="blackAlpha.100"
              boxShadow="lg"
            >
              <Heading
                as="h2"
                fontSize="2xl"
                fontWeight="bold"
                color="#1d273b"
                mb={6}
              >
                Send Us a Message
              </Heading>

              <Box as="form" onSubmit={handleSubmit}>
                <Grid
                  templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                  gap={6}
                  mb={6}
                >
                  <Box>
                    <Text
                      fontWeight="bold"
                      color="blackAlpha.700"
                      fontSize="sm"
                      mb={2}
                    >
                      First Name
                    </Text>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      bg="gray.50"
                      border="1px solid"
                      borderColor="blackAlpha.200"
                      _focus={{
                        borderColor: "#206bc4",
                        ring: 1,
                        ringColor: "#206bc4",
                      }}
                      h={12}
                      borderRadius="xl"
                    />
                    <InputErrorMessage msg={errors.firstName} />
                  </Box>
                  <Box>
                    <Text
                      fontWeight="bold"
                      color="blackAlpha.700"
                      fontSize="sm"
                      mb={2}
                    >
                      Last Name
                    </Text>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      bg="gray.50"
                      border="1px solid"
                      borderColor="blackAlpha.200"
                      _focus={{
                        borderColor: "#206bc4",
                        ring: 1,
                        ringColor: "#206bc4",
                      }}
                      h={12}
                      borderRadius="xl"
                    />
                    <InputErrorMessage msg={errors.lastName} />
                  </Box>
                </Grid>

                <Grid
                  templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                  gap={6}
                  mb={6}
                >
                  <Box>
                    <Text
                      fontWeight="bold"
                      color="blackAlpha.700"
                      fontSize="sm"
                      mb={2}
                    >
                      Email Address
                    </Text>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="john@example.com"
                      bg="gray.50"
                      border="1px solid"
                      borderColor="blackAlpha.200"
                      _focus={{
                        borderColor: "#206bc4",
                        ring: 1,
                        ringColor: "#206bc4",
                      }}
                      h={12}
                      borderRadius="xl"
                    />
                    <InputErrorMessage msg={errors.email} />
                  </Box>
                  <Box>
                    <Text
                      fontWeight="bold"
                      color="blackAlpha.700"
                      fontSize="sm"
                      mb={2}
                    >
                      Phone Number
                    </Text>
                    <Input
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      type="tel"
                      placeholder="+20 10 0000 0000"
                      bg="gray.50"
                      border="1px solid"
                      borderColor="blackAlpha.200"
                      _focus={{
                        borderColor: "#206bc4",
                        ring: 1,
                        ringColor: "#206bc4",
                      }}
                      h={12}
                      borderRadius="xl"
                    />
                    <InputErrorMessage msg={errors.phoneNumber} />
                  </Box>
                </Grid>

                <Box mb={8}>
                  <Text
                    fontWeight="bold"
                    color="blackAlpha.700"
                    fontSize="sm"
                    mb={2}
                  >
                    Your Message
                  </Text>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    bg="gray.50"
                    border="1px solid"
                    borderColor="blackAlpha.200"
                    _focus={{
                      borderColor: "#206bc4",
                      ring: 1,
                      ringColor: "#206bc4",
                    }}
                    minH="150px"
                    borderRadius="xl"
                    p={4}
                    css={{ resize: "vertical" }}
                  />
                  <InputErrorMessage msg={errors.message} />
                </Box>

                <Button
                  type="submit"
                  loading={isSubmitting}
                  loadingText="Sending..."
                  bg="#206bc4"
                  color="white"
                  size="lg"
                  px={8}
                  height={14}
                  borderRadius="xl"
                  fontWeight="bold"
                  fontSize="md"
                  display="flex"
                  alignItems="center"
                  gap={3}
                  _hover={{
                    bg: "blue.700",
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                  }}
                  transition="all 0.3s"
                >
                  Send Message <FaPaperPlane />
                </Button>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
