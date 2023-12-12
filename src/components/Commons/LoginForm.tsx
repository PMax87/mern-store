import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import CustomFormField from "./CustomFormField";
import { LoginFormModel } from "../../models/LoginFormModel";
import { loginFormValidationSchema } from "../../utils/validation-schema/loginFormValidationSchema";
import { useLogin } from "../../react-query-hooks/useLogin";

const LoginForm = () => {
  const initialValues: LoginFormModel = {
    email: "",
    password: "",
  };

  const { doLogin, loginSubmitting } = useLogin();

  return (
    <div className="w-full flex flex-col items-center font-sans">
      <Formik
        initialValues={initialValues}
        validateOnChange={true}
        validationSchema={loginFormValidationSchema}
        onSubmit={(values) => doLogin(values)}
      >
        {(formikProps) => {
          return (
            <Form className="max-w-[500px] w-full md:p-10 p-5 bg-white shadow-xl mt-10">
              <h3 className="md:text-4xl text-3xl font-bold">
                Already register?
              </h3>
              <p className="mt-4 font-medium">
                Access Now. Otherwise,{" "}
                <Link to="/register" className="underline">
                  register here
                </Link>
                .
              </p>
              <CustomFormField
                id="email"
                name="email"
                placeholder="example@email.com"
                type="email"
                label="Email"
              />
              <CustomFormField
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                label="Password"
              />
              <Button
                isDisabled={!formikProps.isValid || loginSubmitting}
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
                Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
