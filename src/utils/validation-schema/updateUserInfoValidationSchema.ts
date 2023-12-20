import * as Yup from "yup";

export const updateUserInfoValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name Required")
    .min(2, "First name minimum length should be 2 char")
    .max(10, "First name maximum length should be 10 char"),
  lastName: Yup.string()
    .required("Last Name Required")
    .min(2, "Last name minimum length should be 2 char")
    .max(10, "Last name maximum length should be 10 char"),
  email: Yup.string().required("Mail required").email("Is not a valid mail"),
  number: Yup.number()
    .required("Telephone number Required")
    .moreThan(0, "Telephone number Required"),
});
