<<<<<<< HEAD
import { Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { errorPopIn } from "@/Utils/animations";

=======
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
interface IProps {
  msg?: string;
}

const InputErrorMessage = ({ msg }: IProps) => {
<<<<<<< HEAD
  return (
    <AnimatePresence>
      {msg && (
        <motion.div
          variants={errorPopIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Text
            mt={1.5}
            display="block"
            fontSize="sm"
            fontWeight="medium"
            color="red.600"
            role="alert"
          >
            {msg}
          </Text>
        </motion.div>
      )}
    </AnimatePresence>
=======
  if (!msg) return null;
  return (
    <span
      className="mt-1.5 block text-sm font-medium text-red-600"
      role="alert"
    >
      {msg}
    </span>
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
  );
};

export default InputErrorMessage;
