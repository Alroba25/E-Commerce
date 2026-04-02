<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
import { modalAnimation, backdropFade } from "@/Utils/animations";
import type { ReactNode } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
=======
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import type { ReactNode } from "react";
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
<<<<<<< HEAD
  className?: string; // Optional custom max-width if needed
  icon?: ReactNode; // Optional icon component
=======
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
}

export default function Modal({
  isOpen,
  closeModal,
  children,
  title,
  description,
<<<<<<< HEAD
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
=======
}: IProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="card w-full max-w-md transform p-6 shadow-soft transition-all">
                {title && (
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                )}
                {description && (
                  <p className="mt-1.5 text-sm text-gray-500">{description}</p>
                )}
                <div className={title || description ? "mt-4" : undefined}>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
  );
}
