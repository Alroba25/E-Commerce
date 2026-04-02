import { Field, Stack, SimpleGrid, Input, Box, Text } from "@chakra-ui/react";
import Modal from "./ui/Modal";
import { UPDATE_PROFILE_FORM } from "@/data";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { setProfileData } from "@/app/features/Profile";
import { buttonInteraction } from "@/Utils/animations";
import { motion } from "framer-motion";
import { useState } from "react";
import InputErrorMessage from "./ui/InputErrorMessage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfileHandelar } from "@/Utils";
import toast from "react-hot-toast";
import { profileSchema } from "@/validation";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function EditProfileModal({
  openEdit,
  setOpenEdit,
  userId,
}: any) {
  const profileDataHandler = useSelector(
    (state: RootState) => state.profile.profileData,
  );
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<any>({});
  const queryClient = useQueryClient();

  const editProfileMutation = useMutation({
    mutationFn: (updatedData: any) =>
      updateUserProfileHandelar(userId, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", "me"] });
      setOpenEdit(false);
      toast.success("Profile updated successfully!");
    },
    onError: (error: any) => {
      const msg =
        error.response?.data?.error?.message || "Failed to update profile.";
      toast.error(msg);
    },
  });

  const getIcon = (name: string) => {
    switch (name) {
      case "firstName":
      case "lastName":
        return <FaUser color="#9ca3af" />;
      case "email":
        return <FaEnvelope color="#9ca3af" />;
      case "phoneNumber":
        return <FaPhone color="#9ca3af" />;
      default:
        return null;
    }
  };

  const renderField = (item: (typeof UPDATE_PROFILE_FORM)[0]) => (
    <Field.Root key={item.name} invalid={!!errors[item.name]}>
      <Field.Label fontSize="sm" fontWeight="bold" color="gray.700" mb={1}>
        {item.placeholder}
      </Field.Label>
      <Box position="relative">
        <Box
          position="absolute"
          left={3}
          top="50%"
          transform="translateY(-50%)"
          zIndex={1}
        >
          {getIcon(item.name)}
        </Box>
        <Input
          placeholder={item.placeholder}
          name={item.name}
          pl={10}
          bg="gray.50"
          border="1px solid"
          borderColor="gray.200"
          _focus={{
            borderColor: "#206bc4",
            bg: "white",
            boxShadow: "0 0 0 1px #206bc4",
          }}
          value={
            (profileDataHandler[
              item.name as keyof typeof profileDataHandler
            ] as string | number) || ""
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            dispatch(
              setProfileData({
                ...profileDataHandler,
                [name]: value,
              }),
            );
            if (errors[name]) {
              setErrors((prev: any) => ({ ...prev, [name]: "" }));
            }
          }}
        />
      </Box>
      <InputErrorMessage msg={errors[item.name]} />
    </Field.Root>
  );

  return (
      <Modal
        isOpen={openEdit}
        title="Edit Profile"
        closeModal={() => setOpenEdit(false)}
        description="Update your personal and contact information."
        children={
          <Stack gap={6} w="full" mt={4}>
            <Box
              p={4}
              bg="blue.50"
              borderRadius="lg"
              border="1px solid"
              borderColor="blue.100"
            >
              <Text fontSize="xs" color="blue.700" fontWeight="medium">
                Keep your profile up to date to ensure accurate delivery and
                communication.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
              {UPDATE_PROFILE_FORM.filter(
                (i) => i.name === "firstName" || i.name === "lastName",
              ).map(renderField)}
            </SimpleGrid>

            {UPDATE_PROFILE_FORM.filter(
              (i) => i.name !== "firstName" && i.name !== "lastName",
            ).map(renderField)}

            <Stack direction="row" gap={3} mt={2}>
              <motion.button
                variants={buttonInteraction}
                whileHover="hover"
                whileTap="tap"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.5rem",
                  color: "#4b5563",
                  backgroundColor: "white",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
                onClick={() => {
                  setOpenEdit(false);
                  setErrors({});
                }}
              >
                Cancel
              </motion.button>

              <motion.button
                variants={buttonInteraction}
                whileHover="hover"
                whileTap="tap"
                disabled={editProfileMutation.isPending}
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#206bc4",
                  color: "white",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  fontSize: "14px",
                  boxShadow: "0 4px 6px -1px rgba(32, 107, 196, 0.2)",
                  opacity: editProfileMutation.isPending ? 0.7 : 1,
                  cursor: editProfileMutation.isPending
                    ? "not-allowed"
                    : "pointer",
                }}
                onClick={async () => {
                  try {
                    await profileSchema.validate(profileDataHandler, {
                      abortEarly: false,
                    });
                    setErrors({});
                    await editProfileMutation.mutateAsync(profileDataHandler);
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
                      console.error("Profile update failed", error);
                    }
                  }
                }}
              >
                {editProfileMutation.isPending ? "Updating..." : "Save Changes"}
              </motion.button>
            </Stack>
          </Stack>
        }
      />
  );
}
