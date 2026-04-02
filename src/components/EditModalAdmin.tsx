import Modal from "./ui/Modal";
import { ADD_PRODUCT_FORM } from "@/data";
import {
  Box,
  Button,
  Field,
  FileUpload,
  Flex,
  Input,
  NumberInput,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { buttonInteraction } from "@/Utils/animations";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { setEditProductData } from "@/app/features/Product/productSlice";
import { memo, useEffect, useState } from "react";
import { HiUpload } from "react-icons/hi";
import toast from "react-hot-toast";
import {
  editProductHandelar,
  getOneProduct,
  uploadImageHandelar,
} from "@/Utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { productSchema } from "@/validation";
import InputErrorMessage from "./ui/InputErrorMessage";
interface IProps {
  openEdit: boolean;
  setOpenEdit: (openEdit: boolean) => void;
  documentId: string;
}
const EditProductModal = ({ openEdit, setOpenEdit, documentId }: IProps) => {
  const productToEdit = useSelector(
    (state: RootState) => state.product.productToEdit,
  );
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: ["product", documentId],
    queryFn: () => getOneProduct(documentId),
    enabled: !!documentId && openEdit,
  });

  useEffect(() => {
    if (data?.data) {
      const product = data?.data;

      dispatch(
        setEditProductData({
          title: product.title,
          description: product.description,
          price: product.price,
          stock: product.stock,
          thumbnail: product.thumbnail || { url: "" },
        }),
      );
    }
  }, [data, dispatch]);
  const queryClient = useQueryClient();
  const editMutation = useMutation({
    mutationFn: (updatedData: any) =>
      editProductHandelar(documentId, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminProducts"] });
      setOpenEdit(false);
    },
    onError: (error: any) => {
      const msg =
        error.response?.data?.error?.message || "Failed to edit product.";
      if (error.response?.status === 403) {
        toast.error(
          "Strapi Permission Denied: Enable 'update' for Products in Authenticated Role.",
        );
      } else {
        toast.error(msg);
      }
    },
  });
  return (
    <Modal
      isOpen={openEdit}
      title="Edit Product"
      closeModal={() => setOpenEdit(false)}
      description="Edit a product in the database."
      children={
        <Stack gap={4} w="full" mt={4}>
          {ADD_PRODUCT_FORM.map((item) => (
            <Field.Root key={item.name}>
              <Field.Label>{item.placeholder}</Field.Label>
              {item.name === "price" ? (
                <NumberInput.Root
                  maxW="200px"
                  value={productToEdit.price.toString()}
                  onValueChange={(e) => {
                    dispatch(
                      setEditProductData({
                        ...productToEdit,
                        price: Number(e.value),
                      }),
                    );
                    if (errors.price) {
                      setErrors((prev) => ({ ...prev, price: "" }));
                    }
                  }}
                >
                  <NumberInput.Control />
                  <NumberInput.Input />
                </NumberInput.Root>
              ) : item.name === "stock" ? (
                <NumberInput.Root
                  maxW="200px"
                  value={productToEdit.stock.toString()}
                  onValueChange={(e) => {
                    dispatch(
                      setEditProductData({
                        ...productToEdit,
                        stock: Number(e.value),
                      }),
                    );
                    if (errors.stock) {
                      setErrors((prev) => ({ ...prev, stock: "" }));
                    }
                  }}
                >
                  <NumberInput.Control />
                  <NumberInput.Input />
                </NumberInput.Root>
              ) : item.name === "thumbnail" ? (
                <Stack gap={3}>
                  <Box
                    p={2}
                    borderRadius="lg"
                    border="1px dashed"
                    borderColor="gray.200"
                    bg="gray.50"
                    w="fit-content"
                  >
                    <Flex align="center" gap={4}>
                      <Box
                        w="80px"
                        h="80px"
                        borderRadius="md"
                        overflow="hidden"
                        bg="white"
                        border="1px solid"
                        borderColor="gray.100"
                      >
                        {selectedImage ? (
                          <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="preview"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : productToEdit.thumbnail?.url ? (
                          <img
                            src={`${import.meta.env.VITE_SERVER_BASE}${productToEdit.thumbnail.url}`}
                            alt="current"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <Flex
                            align="center"
                            justify="center"
                            h="full"
                            color="gray.400"
                          >
                            <HiUpload size={24} />
                          </Flex>
                        )}
                      </Box>
                      <Box>
                        <Text fontSize="xs" fontWeight="bold" color="gray.600">
                          {selectedImage ? "New Image Selected" : "Current Thumbnail"}
                        </Text>
                        <Text fontSize="10px" color="gray.400">
                          {selectedImage
                            ? `${(selectedImage.size / 1024).toFixed(1)} KB`
                            : "Recommended: 800x800px"}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>

                  <FileUpload.Root
                    maxFiles={1}
                    accept="image/*"
                    onFileChange={(e: any) => {
                      const file =
                        e.acceptedFiles?.[0] ||
                        (Array.isArray(e) ? e[0] : null) ||
                        e.value?.[0];
                      if (file) {
                        setSelectedImage(file);
                        dispatch(
                          setEditProductData({
                            ...productToEdit,
                            thumbnail: { url: URL.createObjectURL(file) },
                          }),
                        );
                        if (errors.thumbnail) {
                          setErrors((prev) => ({ ...prev, thumbnail: "" }));
                        }
                      }
                    }}
                  >
                    <FileUpload.HiddenInput />
                    <FileUpload.Trigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        borderColor="#206bc4"
                        color="#206bc4"
                        _hover={{ bg: "blue.50" }}
                        fontWeight="bold"
                      >
                        <HiUpload /> {productToEdit.thumbnail?.url ? "Change Image" : "Upload Image"}
                      </Button>
                    </FileUpload.Trigger>
                  </FileUpload.Root>
                </Stack>
              ) : (
                <Input
                  placeholder={item.placeholder}
                  name={item.name}
                  value={
                    (productToEdit[item.name as keyof typeof productToEdit] as
                      | string
                      | number) || ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const { name, value } = e.target;
                    dispatch(
                      setEditProductData({
                        ...productToEdit,
                        [name]: value,
                      }),
                    );
                    if (errors[name]) {
                      setErrors((prev) => ({ ...prev, [name]: "" }));
                    }
                  }}
                />
              )}
              <InputErrorMessage msg={errors[item.name]} />
            </Field.Root>
          ))}
          <Stack direction="row" gap={3} mt={4}>
            <motion.button
              variants={buttonInteraction}
              whileHover="hover"
              whileTap="tap"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "0.375rem",
                color: "#111827",
                backgroundColor: "transparent",
                fontWeight: 600,
              }}
              onClick={() => {
                setOpenEdit(false);
                dispatch(
                  setEditProductData({
                    title: "",
                    description: "",
                    price: 0,
                    stock: 0,
                    thumbnail: { url: "" },
                  }),
                );
              }}
            >
              Cancel
            </motion.button>

            <motion.button
              variants={buttonInteraction}
              whileHover="hover"
              whileTap="tap"
              disabled={isUploading || editMutation.isPending}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#206bc4",
                color: "white",
                borderRadius: "0.375rem",
                fontWeight: 600,
                opacity: isUploading || editMutation.isPending ? 0.7 : 1,
                cursor:
                  isUploading || editMutation.isPending
                    ? "not-allowed"
                    : "pointer",
              }}
              onClick={async () => {
                setIsUploading(true);
                try {
                  await productSchema.validate(productToEdit, {
                    abortEarly: false,
                  });
                  setErrors({});
                  let finalData: any = { ...productToEdit };
                  if (selectedImage) {
                    const uploadedImages =
                      await uploadImageHandelar(selectedImage);
                    if (uploadedImages && uploadedImages.length > 0) {
                      finalData.thumbnail = uploadedImages[0].id;
                    }
                  } else {
                    delete finalData.thumbnail;
                  }

                  await editMutation.mutateAsync(finalData);
                  setSelectedImage(null);
                } catch (error: any) {
                  if (error.name === "ValidationError") {
                    const validationErrors: { [key: string]: string } = {};
                    error.inner.forEach((err: any) => {
                      if (err.path) {
                        validationErrors[err.path] = err.message;
                      }
                    });
                    setErrors(validationErrors);
                  } else {
                    console.error("Product update failed", error);
                    // uploadImageHandelar errors will be caught here.
                    // editMutation errors will also fall through, but their toasts are handled by the hook's onError.
                    if (
                      error.response?.status === 403 &&
                      !error.config?.url?.includes("products")
                    ) {
                      toast.error(
                        "Strapi Permission Denied: Enable 'upload' in Upload Plugin settings.",
                      );
                    } else if (!error.config?.url?.includes("products")) {
                      const msg =
                        error.response?.data?.error?.message ||
                        error.message ||
                        "Failed to upload image.";
                      toast.error(msg);
                    }
                  }
                } finally {
                  setIsUploading(false);
                }
              }}
            >
              {isUploading || editMutation.isPending ? "Submitting..." : "Edit"}
            </motion.button>
          </Stack>
        </Stack>
      }
    />
  );
};
export default memo(EditProductModal);
