import { CustomFormField } from ".";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { updateUserInfoValidationSchema } from "../../utils/validation-schema/updateUserInfoValidationSchema";
import { useEffect } from "react";
import { useUpdateUserDetails } from "../../react-query-hooks/useUpdateUserDetails";
import { UpdateUserDetailModel } from "../../models/UpdateUserDetailModel";
import { User } from "../../models/UserModel";

interface PropsType {
  isUserInfoModalOpen: boolean;
  closeUserInfoModal: () => void;
  user: User;
}

const UserUpdateDetailModal: React.FC<PropsType> = ({
  user,
  isUserInfoModalOpen,
  closeUserInfoModal,
}) => {
  let initialValues: UpdateUserDetailModel = {
    firstName: "",
    lastName: "",
    email: "",
    number: Number("") || "",
  };

  if (isUserInfoModalOpen && user) {
    initialValues = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      number: user.number,
    };
  }

  const { updateUser, updateUserSuccess, isPendingUpdateUserInfo } =
    useUpdateUserDetails(user?._id as string);

  useEffect(() => {
    if (updateUserSuccess) {
      closeUserInfoModal();
    }
  }, [updateUserSuccess, closeUserInfoModal]);

  return (
    <Modal isOpen={isUserInfoModalOpen} onClose={closeUserInfoModal}>
      <ModalOverlay />
      <ModalContent paddingBottom="30px">
        <ModalHeader>Change user info</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={updateUserInfoValidationSchema}
            onSubmit={(values) => updateUser(values)}
          >
            {(formikProps) => {
              return (
                <>
                  <Form>
                    <CustomFormField
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      type="text"
                      label="Fisrt Name"
                    />
                    <CustomFormField
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      type="text"
                      label="Last Name"
                    />
                    <CustomFormField
                      name="email"
                      id="email"
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
                    <Button
                      isDisabled={
                        !formikProps.isValid || isPendingUpdateUserInfo
                      }
                      type="submit"
                      size={"lg"}
                      className="w-full mt-5"
                      color={"white"}
                      _hover={{
                        bg: "white",
                        border: "1px solid black",
                        textColor: "black",
                      }}
                      bg={"black"}
                    >
                      Change user info
                    </Button>
                  </Form>
                </>
              );
            }}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UserUpdateDetailModal;
