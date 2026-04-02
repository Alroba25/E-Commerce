import { Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { errorPopIn } from "@/Utils/animations";

interface IProps {
  msg?: string;
}

const InputErrorMessage = ({ msg }: IProps) => {
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
  );
};

export default InputErrorMessage;
