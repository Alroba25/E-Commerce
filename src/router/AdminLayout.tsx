import AdminPage from "@/components/Pages/AdminPage";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "@/Utils/animations";
import { useLocation } from "react-router-dom";

const AdminLayout = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <AdminPage />
      </motion.div>
    </AnimatePresence>
  );
};

export default AdminLayout;
