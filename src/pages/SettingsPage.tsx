import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { CustomFormField } from "../components/Commons";
import { Button } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { Formik, Form, useFormikContext } from "formik";

const SettingsPage = () => {
  const user = useSelector((state: RootState) => state.userAuth.user);

  console.log(user?.number);

  console.log(user);

  const [isEditing, setIsEditing] = useState(false);

  let initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    number: Number("") || "",
  };

  if (isEditing && user) {
    initialValues = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      number: user.number,
    };
  }

  return (
    <div className="container mt-5">
      <h3 className="text-3xl font-bold"> Account settings</h3>
      <div className="flex mt-4 gap-4">
        <div className="flex flex-col w-1/5 gap-5">
          <p>Account details</p>
          <p>Shipping address</p>
        </div>
        <div className="w-4/5">
          <div className="grid grid-cols-3 gap-5">
            <div className="p-5 border border-gray-400 flex flex-col gap-3  rounded-lg">
              <h4 className="font-semibold">User info</h4>
              <p>
                {user?.firstName} {user?.lastName}
              </p>
              <p>{user?.number}</p>
              <p>{user?.email}</p>
              <div className="w-32">
                <Button
                  variant="outline"
                  colorScheme="black"
                  onClick={() => setIsEditing(true)}
                >
                  Edit user ingo
                </Button>
              </div>
            </div>
            <div className="p-2 border border-black">
              <h4 className="font-semibold">Shipping address</h4>
              <div className="w-">
                <Button variant="outline" colorScheme="black">
                  Edit address
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          {(formikProps) => {
            console.log(formikProps);
            return (
              <>
                <Form>
                  <CustomFormField
                    name="firstName"
                    id="firstName"
                    placeholder="Your Name"
                    type="text"
                    label="Your Name"
                  />
                  <CustomFormField
                    name="lastName"
                    id="lastName"
                    placeholder="Your Surname"
                    type="text"
                    label="Surname"
                  />
                  <CustomFormField
                    name="email"
                    id="email"
                    placeholder="Email"
                    type="email"
                    label="Email"
                  />
                  <CustomFormField
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Telephone number"
                    label="Telephone Number"
                  />
                  <Button type="submit">invia</Button>
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default SettingsPage;
