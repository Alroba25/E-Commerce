import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "../Utils/animations";

const ApplicationLayout = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default ApplicationLayout;
