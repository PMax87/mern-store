import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserRepository } from "../repositories/user-repository";
import { UpdateUserDetailModel } from "../models/UpdateUserDetailModel";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";

export const useUpdateUserDetails = (id: string) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const {
    mutate: updateUser,
    isSuccess: updateUserSuccess,
    isPending: isPendingUpdateUserInfo,
  } = useMutation({
    mutationFn: async (newUserInfo: UpdateUserDetailModel) => {
      try {
        const response = await UserRepository.updateUserInfo(id, newUserInfo);
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
        queryClient.invalidateQueries({ queryKey: ["getUserInfo"] });
        toast({
          title: "User update Success",
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
  return { updateUser, updateUserSuccess, isPendingUpdateUserInfo };
};
