<<<<<<< HEAD
import React, { useState } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import Input from "../Input";
import InputErrorMessage from "../ui/InputErrorMessage";
import { LOGIN_FORM } from "../../data";
import { useMutation } from "@tanstack/react-query";
import { loginHandelar } from "@/Utils";
import { toaster } from "../ui/toaster";
import { AxiosError } from "axios";
import type { IErrorResponse } from "../../Interfaces";
import { Link as RouterLink } from "react-router-dom";
import { setCookie } from "../../Api/cookies";
import { loginSchema } from "../../validation";
import * as yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { errorPopIn } from "@/Utils/animations";
=======
import React from "react";
import { Button } from "@chakra-ui/react";
import Input from "../Input";
import { LOGIN_FORM } from "../../data";
import { useMutation } from "@tanstack/react-query";
import { loginHandelar } from "@/Utils";
import type { SubmitEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import {
  setUserDataLogin,
  type LoginUserData,
} from "@/app/features/Login/loginSlice";
import { toaster } from "@/components/ui/toaster";
import { AxiosError } from "axios";
import type { IErrorResponse } from "../../Interfaces";
import { setCookie, getCookie } from "../../Api/cookies";
import { useNavigate, Link } from "react-router-dom";
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c

// Icon map for each field name
const FIELD_ICONS: Record<string, React.ReactNode> = {
  identifier: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
<<<<<<< HEAD
      width="16"
      height="16"
=======
      className="w-4 h-4"
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
      />
    </svg>
  ),
  email: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
<<<<<<< HEAD
      width="16"
      height="16"
=======
      className="w-4 h-4"
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
      />
    </svg>
  ),
  password: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
<<<<<<< HEAD
      width="16"
      height="16"
=======
      className="w-4 h-4"
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  ),
};

const LoginPage = () => {
<<<<<<< HEAD
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { mutate, isPending } = useMutation({
    mutationFn: () => loginHandelar(formData.identifier, formData.password),

    onSuccess: (data) => {
      localStorage.setItem("jwt", data.jwt);
      setCookie("jwt", data.jwt, { path: "/" });

      toaster.create({
        title: "Login successful. Redirecting...",
        type: "success",
      });
      setTimeout(() => (window.location.href = "/"), 1200);
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      const msg = error.response?.data?.error?.message || error.message;
      toaster.create({
        title: msg,
=======
  const loginUserData = useSelector(
    (state: RootState) => state.login.loginUserData,
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      loginHandelar(loginUserData.identifier, loginUserData.password),

    onSuccess: (data) => {
      const date = new Date();
      date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * 3);

      setCookie("jwt", data.jwt, { path: "/", expires: date });

      if (getCookie("jwt") !== "") {
        navigate("/", { replace: true });
      }

      toaster.create({
        title: "Login successful",
        type: "success",
      });
    },

    onError: (error: AxiosError<IErrorResponse>) => {
      toaster.create({
        title: error.response?.data?.error?.message || error.message,
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
        type: "error",
      });
    },
  });

<<<<<<< HEAD
  const onSubmitHandelar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await loginSchema.validate(formData, { abortEarly: false });
      setErrors({});
      mutate();
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
    <Flex minH="100vh" align="center" justify="center" bg="#fdfcfb" px={4}>
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

        {/* Header */}
        <Box pt={8} pb={6} textAlign="center">
          <Heading
            as="h1"
            size="lg"
            color="#1d273b"
            mb={2}
            letterSpacing="tight"
          >
            Welcome Back
          </Heading>
        </Box>

        {/* Tabs */}
        <Flex borderBottom="1px solid" borderColor="blackAlpha.200">
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
            Login
          </Box>
          <RouterLink to="/register" style={{ flex: 1 }}>
            <Box
              py={3}
              textAlign="center"
              fontWeight="bold"
              color="#1d273b"
              bg="white"
              _hover={{ bg: "blackAlpha.50" }}
              transition="colors 0.2s"
            >
              Signup
            </Box>
          </RouterLink>
        </Flex>

        {/* Form */}
        <Box px={8} pb={8} pt={6}>
          <form onSubmit={onSubmitHandelar}>
            <Flex direction="column" gap={5}>
              {LOGIN_FORM.map(({ type, name, placeholder }) => (
                <Box key={name}>
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
                      {FIELD_ICONS[name] ?? FIELD_ICONS["identifier"]}
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

              {/* Forgot */}
              <Flex justify="flex-end" mt="-1">
                <Box
                  as="a"
                  fontSize="sm"
                  fontWeight="semibold"
                  color="#206bc4"
                  _hover={{ color: "blue.700" }}
                  transition="colors 0.2s"
                >
                  Forgot password?
                </Box>
              </Flex>

              {/* Button */}
              <Button
                type="submit"
                width="full"
                loading={isPending}
                loadingText="Logging in…"
                mt={2}
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
                Login
              </Button>
            </Flex>
          </form>

          {/* Footer */}
          <Box
            mt={8}
            textAlign="center"
            fontSize="sm"
            fontWeight="medium"
            color="blackAlpha.700"
          >
            Not a member?{" "}
            <RouterLink to="/register">
              <Box
                as="span"
                color="#206bc4"
                fontWeight="bold"
                _hover={{ color: "blue.700", textDecoration: "underline" }}
                transition="all 0.2s"
              >
                Signup now
              </Box>
            </RouterLink>
          </Box>
        </Box>
      </Box>
    </Flex>
=======
  const onSubmitHandelar = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-imperial-bg px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-imperial-dark/10 overflow-hidden">
        {/* Header */}
        <div className="pt-8 pb-4 text-center">
          <h1 className="text-3xl font-bold text-imperial-dark">Login Form</h1>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 mx-6 mb-2">
          <button className="flex-1 py-3 font-semibold text-white bg-gradient-to-r from-imperial-dark to-imperial-primary rounded-t-xl text-sm shadow-sm">
            Login
          </button>
          <Link
            to="/register"
            className="flex-1 py-3 text-center font-semibold text-imperial-dark/60 hover:text-imperial-dark transition-colors text-sm"
          >
            Signup
          </Link>
        </div>

        {/* Form */}
        <div className="px-8 pb-8 pt-6">
          <form className="space-y-5" onSubmit={onSubmitHandelar}>
            {LOGIN_FORM.map(({ type, name, placeholder }) => (
              <div
                key={name}
                className="relative flex items-center gap-3 rounded-2xl border border-imperial-dark/15 bg-white px-4 py-3 shadow-sm transition-all duration-200
        focus-within:border-imperial-primary focus-within:ring-2 focus-within:ring-imperial-primary/30"
              >
                {/* Icon */}
                <span className="text-imperial-dark/60 text-lg">
                  {FIELD_ICONS[name] ?? FIELD_ICONS["identifier"]}
                </span>

                {/* Input */}
                <Input
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={loginUserData[name as keyof LoginUserData]}
                  onChange={(e) =>
                    dispatch(
                      setUserDataLogin({
                        [name]: e.target.value,
                      } as Partial<LoginUserData>),
                    )
                  }
                  className="w-full border-0 bg-transparent py-10 text-sm font-medium text-imperial-dark placeholder:text-imperial-dark/40 focus:outline-none focus:ring-0"
                />
              </div>
            ))}

            {/* Forgot */}
            <div className="flex justify-end -mt-1">
              <a
                href="#"
                className="text-sm font-semibold text-imperial-primary hover:text-imperial-hover transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <Button
              type="submit"
              width="full"
              isLoading={isPending}
              bg="#E6A520"
              color="white"
              _hover={{ bg: "#D4941C" }}
              borderRadius="xl"
              height="50px"
              fontWeight="bold"
              fontSize="md"
              boxShadow="0 10px 25px rgba(230,165,32,0.35)"
              transition="all 0.2s ease"
            >
              Login
            </Button>
          </form>

          {/* Footer */}
          <p className="mt-7 text-center text-sm text-gray-600">
            Not a member?{" "}
            <Link
              to="/register"
              className="text-imperial-primary font-bold hover:text-imperial-hover hover:underline transition-all"
            >
              Signup now
            </Link>
          </p>
        </div>
      </div>
    </div>
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
  );
};

export default LoginPage;
