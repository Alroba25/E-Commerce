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
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { setAddProductData } from "@/app/features/Product/productSlice";
import { memo, useState } from "react";
import { motion } from "framer-motion";
import { buttonInteraction } from "@/Utils/animations";
import { HiUpload } from "react-icons/hi";
import toast from "react-hot-toast";
import { addProductHandelar, uploadImageHandelar } from "@/Utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productSchema } from "@/validation";
import InputErrorMessage from "./ui/InputErrorMessage";
interface IProps {
  openAdd: boolean;
  setOpenAdd: (openAdd: boolean) => void;
  documentId?: string;
}
const AddProductModal = ({ openAdd, setOpenAdd }: IProps) => {
  const addProductData = useSelector(
    (state: RootState) => state.product.addProductData,
  );
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: addProductHandelar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminProducts"] });
      setOpenAdd(false);
      dispatch(
        setAddProductData({
          title: "",
          description: "",
          price: 0,
          stock: 0,
          thumbnail: { url: "" },
        }),
      );
    },
    onError: (error: any) => {
      const msg =
        error.response?.data?.error?.message || "Failed to add product.";
      if (error.response?.status === 403) {
        toast.error(
          "Strapi Permission Denied: Enable 'create' for Products in Authenticated Role.",
        );
      } else {
        toast.error(msg);
      }
    },
  });

  console.log("AddProductAdmin render:", errors);

  return (
    <Modal
      isOpen={openAdd}
      title="Add Product"
      closeModal={() => setOpenAdd(false)}
      description="Add a new product to the database."
      children={
        <Stack gap={4} w="full" mt={4}>
          {ADD_PRODUCT_FORM.map((item) => (
            <Field.Root key={item.name}>
              <Field.Label>{item.placeholder}</Field.Label>
              {item.name === "price" ? (
                <NumberInput.Root
                  maxW="200px"
                  value={addProductData.price.toString()}
                  onValueChange={(e) => {
                    dispatch(
                      setAddProductData({
                        ...addProductData,
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
                  value={addProductData.stock.toString()}
                  onValueChange={(e) => {
                    dispatch(
                      setAddProductData({
                        ...addProductData,
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
                        ) : addProductData.thumbnail?.url ? (
                          <img
                            src={`${import.meta.env.VITE_SERVER_BASE}${addProductData.thumbnail.url}`}
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
                          {selectedImage
                            ? "New Image Selected"
                            : "Current Thumbnail"}
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
                          setAddProductData({
                            ...addProductData,
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
                        <HiUpload />{" "}
                        {addProductData.thumbnail?.url
                          ? "Change Image"
                          : "Upload Image"}
                      </Button>
                    </FileUpload.Trigger>
                  </FileUpload.Root>
                </Stack>
              ) : (
                <Input
                  placeholder={item.placeholder}
                  name={item.name}
                  value={
                    (addProductData[
                      item.name as keyof typeof addProductData
                    ] as string | number) || ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const { name, value } = e.target;
                    dispatch(
                      setAddProductData({
                        ...addProductData,
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
                setOpenAdd(false);
                dispatch(
                  setAddProductData({
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
              disabled={isUploading || addMutation.isPending}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#206bc4",
                color: "white",
                borderRadius: "0.375rem",
                fontWeight: 600,
                opacity: isUploading || addMutation.isPending ? 0.7 : 1,
                cursor:
                  isUploading || addMutation.isPending
                    ? "not-allowed"
                    : "pointer",
              }}
              onClick={async () => {
                setIsUploading(true);
                try {
                  await productSchema.validate(addProductData, {
                    abortEarly: false,
                  });
                  setErrors({});
                  let finalData: any = { ...addProductData };
                  if (selectedImage) {
                    const uploadedImages =
                      await uploadImageHandelar(selectedImage);
                    if (uploadedImages && uploadedImages.length > 0) {
                      finalData.thumbnail = uploadedImages[0].id;
                    }
                  } else {
                    delete finalData.thumbnail;
                  }

                  await addMutation.mutateAsync(finalData);
                  setSelectedImage(null);
                } catch (error: any) {
                  if (error.name === "ValidationError") {
                    const validationErrors: { [key: string]: string } = {};
                    error.inner.forEach((err: any) => {
                      if (err.path) {
                        const path =
                          err.path === "thumbnail.url" ? "thumbnail" : err.path;
                        validationErrors[path] = err.message;
                      }
                    });
                    setErrors(validationErrors);
                  } else {
                    console.error("Product creation failed", error);
                    // uploadImageHandelar errors will be caught here.
                    // addMutation errors will also fall through, but their toasts are handled by the hook's onError.
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
              {isUploading || addMutation.isPending ? "Submitting..." : "Save"}
            </motion.button>
          </Stack>
        </Stack>
      }
    />
  );
};
export default memo(AddProductModal);
