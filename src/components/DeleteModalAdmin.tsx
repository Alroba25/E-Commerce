import Modal from "./ui/Modal";
import { Stack } from "@chakra-ui/react";
import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteProduct } from "@/Utils";
import { motion } from "framer-motion";
import { buttonInteraction } from "@/Utils/animations";

interface IProps {
  openDelete: boolean;
  setOpenDelete: (openDelete: boolean) => void;
}

const DeleteModalAdmin = ({ openDelete, setOpenDelete }: IProps) => {
  const deleteProductData = useSelector(
    (state: RootState) => state.product.deleteProductData,
  );
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (_, documentId) => {
      queryClient.setQueryData(["adminProducts"], (old: any) =>
        old?.filter((p: any) => p.documentId !== documentId),
      );
      queryClient.invalidateQueries({ queryKey: ["adminProducts"] });
    },
    onError: (error: any) => {
      const msg =
        error.response?.data?.error?.message || "Failed to delete product.";
      if (error.response?.status === 403) {
        toast.error(
          "Strapi Permission Denied: Enable 'destroy' for Products in Authenticated Role.",
        );
      } else {
        toast.error(msg);
      }
    },
  });

  return (
    <Modal
      isOpen={openDelete}
      title="Are you sure?"
      closeModal={() => setOpenDelete(false)}
      description="You are about to delete a product. This action cannot be undone."
      icon={
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      }
      children={
        <Stack gap={3} w="full" mt={4}>
          <motion.button
            variants={buttonInteraction}
            whileHover="hover"
            whileTap="tap"
            onClick={() => {
              deleteMutation.mutate(deleteProductData?.documentId);
              setOpenDelete(false);
            }}
            disabled={deleteMutation.isPending}
            style={{
              backgroundColor: "#dc2626",
              color: "white",
              width: "100%",
              padding: "12px",
              borderRadius: "0.75rem",
              fontWeight: 600,
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {deleteMutation.isPending ? "Deleting..." : "Delete Product"}
          </motion.button>
          <motion.button
            variants={buttonInteraction}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setOpenDelete(false)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "0.75rem",
              fontWeight: 600,
              fontSize: "15px",
              border: "1px solid #d1d5db",
              color: "#111827",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Cancel
          </motion.button>
        </Stack>
      }
    />
  );
};
export default memo(DeleteModalAdmin);
