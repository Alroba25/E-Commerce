import { motion, AnimatePresence } from "framer-motion";
import { modalAnimation, backdropFade } from "@/Utils/animations";
import type { ReactNode } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string; // Optional custom max-width if needed
  icon?: ReactNode; // Optional icon component
}

export default function Modal({
  isOpen,
  closeModal,
  children,
  title,
  description,
  className,
  icon,
}: IProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Box position="relative" zIndex={1400}>
          {/* Backdrop */}
          <motion.div
            variants={backdropFade}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              position="fixed"
              inset={0}
              bg="rgba(0, 0, 0, 0.4)"
              backdropFilter="blur(4px)"
              onClick={closeModal} // Click outside to close
            />
          </motion.div>

          {/* Modal Container to center the panel */}
          <Box position="fixed" inset={0} overflowY="auto" pointerEvents="none">
            <Flex
              minH="full"
              alignItems="center"
              justifyContent="center"
              p={{ base: 4, sm: 0 }}
              textAlign="center"
            >
              {/* Modal Panel */}
              <motion.div
                variants={modalAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  pointerEvents: "auto",
                }}
              >
                <Box
                  overflow="hidden"
                  borderRadius="2xl"
                  bg="white"
                  textAlign="center"
                  verticalAlign="middle"
                  boxShadow="2xl"
                  my={{ sm: 8 }}
                  px={6}
                  pt={8}
                  pb={6}
                  border="1px solid"
                  borderColor="gray.100"
                  w="full"
                  maxW="400px" // the equivalent of max-w-[400px]
                  className={className || ""}
                  onClick={(e) => e.stopPropagation()} // Prevent clicking inside modal from closing it
                >
                  {icon && (
                    <Flex
                      mx="auto"
                      mb={5}
                      h="56px"
                      w="56px"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="full"
                      bg="red.50"
                      color="red.600"
                    >
                      {icon}
                    </Flex>
                  )}

                  {(title || description) && (
                    <Box mb={6}>
                      {title && (
                        <Heading
                          as="h3"
                          fontSize="22px"
                          fontWeight="bold"
                          color="gray.900"
                          letterSpacing="tight"
                        >
                          {title}
                        </Heading>
                      )}
                      {description && (
                        <Text
                          mt={3}
                          fontSize="15px"
                          lineHeight="relaxed"
                          color="gray.500"
                          fontWeight="medium"
                          px={2}
                        >
                          {description}
                        </Text>
                      )}
                    </Box>
                  )}

                  <Flex mt={2} direction="column" gap={3}>
                    {children}
                  </Flex>
                </Box>
              </motion.div>
            </Flex>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
}
