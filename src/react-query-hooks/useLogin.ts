import { useMutation } from "@tanstack/react-query";
import { AuthenticationReposirory } from "../repositories/login-repository";
import { LoginFormModel } from "../models/LoginFormModel";

export const useLogin = () => {
  const { mutate: doLogin, isPending: loginSubmitting } = useMutation({
    mutationFn: async (values: LoginFormModel) => {
      try {
        const response = await AuthenticationReposirory.login(values);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return { doLogin, loginSubmitting };
};
