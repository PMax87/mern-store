import * as Yup from "yup";

export const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email required"),
  password: Yup.string().required("Password required"),
});
