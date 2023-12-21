import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthenticationRepository } from "../repositories/auth-repository";
import { LoginFormModel } from "../models/LoginFormModel";
import { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/AuthReducer";
import { UserModel } from "../models/UserModel";

interface CustomApiResponse {
  message: string;
}

export const useLogin = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutateAsync: doLogin, isPending: loginSubmitting } = useMutation({
    mutationFn: async (values: LoginFormModel) => {
      try {
        const response = await AuthenticationRepository.login(values);
        localStorage.setItem("token", response.data.accessToken);
        return response.data;
      } catch (error) {
        const axiosError = error as AxiosError<CustomApiResponse>;
        if (axiosError.response && axiosError.response.status === 401) {
          throw axiosError;
        }
        throw error;
      }
    },
    onSuccess: (data: UserModel) => {
      navigate("/");
      dispatch(setUser(data));
      queryClient.refetchQueries({ queryKey: ["getUserAddress"] });
      queryClient.refetchQueries({ queryKey: ["getUserInfo"] });
    },
  });

  const handleLogin = async (values: LoginFormModel) => {
    try {
      const result = await doLogin(values);
      toast({
        title: "Login successful",
        description: "Welcome!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      const axiosError = error as AxiosError<CustomApiResponse>;
      if (axiosError.response && axiosError.response.status === 401) {
        const message = axiosError.response.data.message;
        toast({
          title: "Login failed",
          description: `${message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Login failed",
          description: "An error occurred",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  return { handleLogin, loginSubmitting };
};
