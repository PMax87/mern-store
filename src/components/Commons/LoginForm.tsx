import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import CustomFormField from "./CustomFormField";
import { LoginFormModel } from "../../models/LoginFormModel";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues: LoginFormModel = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email required"),
    password: Yup.string().required("Password required"),
  });

  return (
    <div className="w-full h-screen flex justify-center flex-col items-center font-sans">
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {() => {
          return (
            <Form className="w-[500px] py-10 px-10">
              <h3 className="text-4xl font-bold">Already register?</h3>
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
              <Button type="submit" className="w-full mt-5" colorScheme={"red"}>
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
