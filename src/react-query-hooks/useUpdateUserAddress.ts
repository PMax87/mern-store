import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { UserRepository } from "../repositories/user-repository";
import { AddressDeatils } from "../models/UserAddressModel";

export const useUpdateUserAddress = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const {
    mutate: updateUserAddress,
    isSuccess: updateUserAddressSuccess,
    isPending: isPendingUpdateUserAddress,
  } = useMutation({
    mutationFn: async (newUserAddress: AddressDeatils) => {
      console.log(newUserAddress);
      try {
        const response = await UserRepository.updateUserAddress(newUserAddress);
        return response;
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          throw axiosError;
        }
        throw error;
      }
    },
    onSuccess: (data) => {
      if (data?.status === 200) {
        queryClient.invalidateQueries({ queryKey: ["getUserAddress"] });
        toast({
          title: "Address update success",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Something not work",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    },
  });
  return {
    updateUserAddress,
    updateUserAddressSuccess,
    isPendingUpdateUserAddress,
  };
};
