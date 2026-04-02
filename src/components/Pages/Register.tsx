import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { setCookie } from "../../Api/cookies";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import Input from "../Input";
import InputErrorMessage from "../ui/InputErrorMessage";
import { REGISTER_FORM } from "../../data";
import { registerSchema } from "../../validation";
import { toaster } from "../ui/toaster";
import { AxiosError } from "axios";
import type { IErrorResponse } from "../../Interfaces";
import { useMutation } from "@tanstack/react-query";
import { registerHandelar } from "../../Utils";
import * as yup from "yup";
import { errorPopIn } from "@/Utils/animations";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiMail, FiLock, FiPhone } from "react-icons/fi";

const FIELD_ICONS: Record<string, React.ReactNode> = {
  username: <FiUser />,
  firstName: <FiUser />,
  lastName: <FiUser />,
  email: <FiMail />,
  phoneNumber: <FiPhone />,
  password: <FiLock />,
};

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { mutateAsync: registerUser, isPending } = useMutation({
    mutationFn: registerHandelar,
    onSuccess: (data) => {
      localStorage.setItem("jwt", data.jwt);
      setCookie("jwt", data.jwt, { path: "/" });

      toaster.create({
        title: "Account created. Redirecting to home…",
        type: "success",
      });
      setTimeout(() => (window.location.href = "/"), 1200);
    },
    onError: (err) => {
      const e = err as AxiosError<IErrorResponse>;
      const msg = e.response?.data?.error?.message ?? "Registration failed.";
      toaster.create({
        title: msg,
        type: "error",
      });
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await registerSchema.validate(formData, { abortEarly: false });
      setErrors({});
      await registerUser(formData);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        setErrors(validationErrors);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field onChange
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <Flex minH="80vh" align="center" justify="center" px={4} bg="#fdfcfb">
      <Box
        w="full"
        maxW="md"
        bg="white"
        borderRadius="3xl"
        boxShadow="2xl"
        border="1px solid"
        borderColor="blackAlpha.200"
        overflow="hidden"
        position="relative"
      >
        {/* Top Gradient Line */}
        <Box
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="6px"
          bgGradient="to-r"
          gradientFrom="#1d273b"
          gradientVia="#206bc4"
          gradientTo="#1d273b"
        ></Box>

        <Box pt={8} pb={6} textAlign="center">
          <Heading
            as="h1"
            size="lg"
            color="#1d273b"
            mb={2}
            letterSpacing="tight"
          >
            Create Account
          </Heading>
        </Box>

        {/* Tabs */}
        <Flex borderBottom="1px solid" borderColor="blackAlpha.200">
          <RouterLink to="/login" style={{ flex: 1 }}>
            <Box
              py={3}
              textAlign="center"
              fontWeight="bold"
              color="#1d273b"
              bg="white"
              _hover={{ bg: "blackAlpha.50" }}
              transition="colors 0.2s"
            >
              Login
            </Box>
          </RouterLink>
          <Box
            flex={1}
            py={3}
            textAlign="center"
            fontWeight="bold"
            color="white"
            bgGradient="to-r"
            gradientFrom="#1d273b"
            gradientTo="#206bc4"
            boxShadow="inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
          >
            Signup
          </Box>
        </Flex>

        <Box p={8}>
          <form onSubmit={onSubmit}>
            <Flex direction="column" gap={4}>
              {REGISTER_FORM.map(({ type, name, placeholder }) => (
                <Box key={name}>
                  <Box>
                    <Flex
                      position="relative"
                      align="center"
                      gap={3}
                      borderRadius="2xl"
                      border="1px solid"
                      borderColor="blackAlpha.200"
                      bg="white"
                      px={4}
                      py={3}
                      boxShadow="sm"
                      transition="all 0.2s"
                      _focusWithin={{
                        borderColor: "#206bc4",
                        ring: 2,
                        ringColor: "blue.100",
                      }}
                    >
                      {/* Icon */}
                      <Box color="blackAlpha.600" fontSize="lg">
                        {FIELD_ICONS[name] ?? <FiUser />}
                      </Box>

                      {/* Input */}
                      <Box flex="1">
                        <Input
                          name={name}
                          type={type}
                          placeholder={placeholder}
                          value={formData[name as keyof typeof formData]}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            border: "none",
                            backgroundColor: "transparent",
                            paddingTop: "0.25rem",
                            paddingBottom: "0.25rem",
                            fontSize: "0.875rem",
                            fontWeight: "500",
                            color: "#1d273b",
                            outline: "none",
                          }}
                        />
                      </Box>
                    </Flex>
                  </Box>
                  <AnimatePresence>
                    {errors[name] && (
                      <motion.div
                        variants={errorPopIn}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                      >
                        <InputErrorMessage msg={errors[name]} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              ))}

              <Button
                type="submit"
                width="full"
                loading={isPending}
                loadingText="Creating account…"
                mt={4}
                fontSize="lg"
                bgGradient="to-r"
                gradientFrom="#1d273b"
                gradientTo="#206bc4"
                _hover={{
                  gradientFrom: "#15202b",
                  gradientTo: "#206bc4",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 15px -3px rgba(32, 107, 196, 0.4)",
                }}
                color="white"
                fontWeight="bold"
                h="56px"
                borderRadius="xl"
                transition="all 0.2s"
                boxShadow="lg"
              >
                Register
              </Button>
            </Flex>
          </form>

          <Box
            mt={8}
            textAlign="center"
            fontSize="sm"
            fontWeight="medium"
            color="blackAlpha.700"
          >
            Already have an account?{" "}
            <RouterLink to="/login">
              <Box
                as="span"
                color="#206bc4"
                fontWeight="bold"
                _hover={{ color: "blue.700", textDecoration: "underline" }}
                transition="all 0.2s"
              >
                Login here
              </Box>
            </RouterLink>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default RegisterPage;
