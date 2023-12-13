import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Form, Formik, FormikProps } from "formik";
import { RegisterFormModel } from "../../models/RegisterFormModel";
import CustomFormField from "./CustomFormField";
import { registerFormValidationSchema } from "../../utils/validation-schema/registerFormValidationSchema";

const RegisterForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    number: 0,
    password: "",
  };

  return (
    <div className="w-full flex flex-col items-center font-sans">
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validationSchema={registerFormValidationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {(formikProps: FormikProps<RegisterFormModel>) => {
          return (
            <Form className="max-w-[500px] w-full md:p-10 p-5 bg-white shadow-xl mt-10">
              <h3 className="md:text-4xl text-3xl font-bold">
                Create your account
              </h3>
              <p className="mt-4 font-medium">
                Do you already have an account?{" "}
                <Link to="/login" className="underline">
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
                type="number"
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
                className="w-full mt-10"
                color={"white"}
                _hover={{
                  bg: "white",
                  border: "1px solid black",
                  textColor: "black",
                }}
                bg={"black"}
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
