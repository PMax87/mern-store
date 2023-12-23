import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { UserRepository } from "../repositories/user-repository";
import { AddressDeatils } from "../models/UserAddressModel";

export const useCreatetUserAddress = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const {
    mutate: createUSerAddress,
    isSuccess: createUserAddressSuccess,
    isPending: isPendingCreateUserAddress,
  } = useMutation({
    mutationFn: async (newUserAddress: AddressDeatils) => {
      try {
        const response = await UserRepository.createNewUserAddress(
          newUserAddress
        );
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
          title: "Address create success",
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
    createUSerAddress,
    isPendingCreateUserAddress,
    createUserAddressSuccess,
  };
};
