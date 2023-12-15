import { useMutation } from "@tanstack/react-query";
import { RegisterFormModel } from "../models/RegisterFormModel";
import { AuthenticationRepository } from "../repositories/auth-repository";
import { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { mutate: registerUser, isPending: registerSubmitting } = useMutation({
    mutationFn: async (registerFormValues: RegisterFormModel) => {
      try {
        const response = await AuthenticationRepository.register(
          registerFormValues
        );
        return response.data;
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          throw axiosError;
        }
        throw error;
      }
    },
    onSuccess: () => {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/");
    },
  });

  return { registerUser, registerSubmitting };
};
