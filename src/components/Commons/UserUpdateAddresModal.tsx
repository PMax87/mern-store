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
import { AddressDeatils } from "../../models/UserAddressModel";

interface PropsType {
  isUserAddressModalOpen: boolean;
  closeUserAddressModal: () => void;
  userAddress: AddressDeatils;
}

const UserUpdateAddresModal: React.FC<PropsType> = ({
  userAddress,
  isUserAddressModalOpen,
  closeUserAddressModal,
}) => {
  let initialValues = {
    city: "",
    country: "",
    state: "",
    street: "",
    zip: "",
  };

  if (isUserAddressModalOpen && userAddress) {
    initialValues = {
      city: userAddress.city,
      country: userAddress.country,
      state: userAddress.state,
      street: userAddress.street,
      zip: userAddress.zip,
    };
  }

  //   const { updateUser, updateUserSuccess, isPendingUpdateUserInfo } =
  //     useUpdateUserDetails(user?._id as string);

  //   useEffect(() => {
  //     if (updateUserSuccess) {
  //       closeUserAddressModal();
  //     }
  //   }, [updateUserSuccess, closeUserAddressModal]);

  return (
    <Modal isOpen={isUserAddressModalOpen} onClose={closeUserAddressModal}>
      <ModalOverlay />
      <ModalContent paddingBottom="30px">
        <ModalHeader>Change user info</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={updateUserInfoValidationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {(formikProps) => {
              return (
                <>
                  <Form>
                    <CustomFormField
                      name="city"
                      id="city"
                      placeholder="City"
                      type="text"
                      label="City"
                    />
                    <CustomFormField
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      type="text"
                      label="Last Name"
                    />

                    <Button
                      isDisabled={!formikProps.isValid}
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

export default UserUpdateAddresModal;
