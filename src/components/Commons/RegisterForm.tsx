import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Form, Formik, FormikProps } from "formik";
import { RegisterFormModel } from "../../models/RegisterFormModel";
import CustomFormField from "./CustomFormField";
import * as Yup from "yup";

const RegisterForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    number: 0,
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name Required")
      .min(2, "First name minimum length should be 2 char")
      .max(10, "First name maximum length should be 10 char"),
    lastName: Yup.string()
      .required("Last Name Required")
      .min(2, "Last name minimum length should be 2 char")
      .max(10, "Last name maximum length should be 10 char"),
    email: Yup.string().required("Mail required").email("Is not a valid mail"),
    number: Yup.number().required("Telephone number Required").positive("Telephone number required"),
    password: Yup.string().required("Password Require"),
  });

  return (
    <div className="w-full h-screen flex justify-center flex-col items-center font-sans">
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {(formikProps: FormikProps<RegisterFormModel>) => {
          return (
            <Form className="w-[500px] py-10 px-10">
              <h3 className="text-4xl font-bold">Create your account</h3>
              <p className="mt-4 font-medium">
                Do you already have an account?{" "}
                <Link to="/" className="underline">
                  Log in.
                </Link>
              </p>
              <CustomFormField
                id="firstName"
                name="firstName"
                placeholder="Fisrt Name"
                type="text"
                label="First Name"
              />
              <CustomFormField
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                type="text"
                label="Last Name"
              />
              <CustomFormField
                id="email"
                name="email"
                placeholder="example@example.com"
                type="email"
                label="Email"
              />
              <CustomFormField
                name="number"
                id="number"
                placeholder="Your Telephone Number"
                label="Telephone Number"
              />
              <CustomFormField
                id="password"
                name="password"
                placeholder="Choose your password"
                type="password"
                label="Password"
              />
              <Button
                isDisabled={!formikProps.isValid}
                type="submit"
                size={"lg"}
                className="w-full mt-5"
                colorScheme={"red"}
              >
                Register now
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
