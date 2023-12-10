import React from "react";
import { Formik, Form, FormikProps } from "formik";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import InputField from "./InputField";

interface InitialValues {
  email: string;
  password: string;
}

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="w-full h-screen flex justify-center flex-col items-center">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {(formikProps: FormikProps<InitialValues>) => {
          return (
            <Form className="w-[500px] py-10 px-10">
              <h3 className="text-3xl font-bold">Already register?</h3>
              <p className="mt-5">Access Now. Otherwise, register.</p>
              <FormControl className="mt-7">
                <FormLabel>Email</FormLabel>
                <InputField
                  _hover={{ borderColor: "black" }}
                  borderColor="gray.600"
                  borderWith={2}
                  id="email"
                  name="email"
                  formik={formikProps}
                  placeholder="example@email.com"
                  type="email"
                  size="lg"
                />
              </FormControl>
              <FormControl className="mt-5">
                <FormLabel>Password</FormLabel>
                <Input
                  _hover={{ borderColor: "black" }}
                  borderColor={"gray.600"}
                  borderWidth={2}
                  onChange={formikProps.handleChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  size={"lg"}
                />
              </FormControl>
              <Button
                type="submit"
                className="w-full mt-5"
                colorScheme={"red"}
                size={"lg"}
              >
                Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
