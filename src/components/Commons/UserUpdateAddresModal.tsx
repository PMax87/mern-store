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
import { AddressDeatils } from "../../models/UserAddressModel";
import { useUpdateUserAddress } from "../../react-query-hooks/useUpdateUserAddress";
import { User } from "../../models/UserModel";
import { useEffect } from "react";

interface PropsType {
  closeUserAddressModal: () => void;
  isUserAddressModalOpen: boolean;
  userAddress: AddressDeatils | undefined;
  user: User;
}

const UserUpdateAddresModal: React.FC<PropsType> = ({
  user,
  userAddress,
  isUserAddressModalOpen,
  closeUserAddressModal,
}) => {
  let initialValues = {
    userID: "",
    city: "",
    country: "",
    state: "",
    street: "",
    zip: "",
    mobile: Number("") || "",
  };

  if (isUserAddressModalOpen && userAddress && user) {
    initialValues = {
      userID: user._id,
      street: userAddress.street,
      city: userAddress.city,
      state: userAddress.state,
      zip: userAddress.zip,
      country: userAddress.country,
      mobile: user.number,
    };
  }

  const {
    updateUserAddress,
    isPendingUpdateUserAddress,
    updateUserAddressSuccess,
  } = useUpdateUserAddress();

  const onHandleSubmitUserAdressForm = (values: AddressDeatils) => {
    if (userAddress !== undefined) {
      updateUserAddress(values);
    }
  };

  useEffect(() => {
    if (updateUserAddressSuccess) {
      closeUserAddressModal();
    }
  }, [updateUserAddressSuccess, closeUserAddressModal]);

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
            onSubmit={(values) => onHandleSubmitUserAdressForm(values)}
          >
            {(formikProps) => {
              return (
                <>
                  <Form>
                    <CustomFormField
                      name="street"
                      id="street"
                      placeholder="Street"
                      type="text"
                      label="Street"
                    />
                    <CustomFormField
                      name="city"
                      id="city"
                      placeholder="City"
                      type="text"
                      label="City"
                    />
                    <CustomFormField
                      name="state"
                      id="state"
                      placeholder="State"
                      type="text"
                      label="State"
                    />
                    <CustomFormField
                      name="zip"
                      id="zip"
                      placeholder="Zip Code"
                      type="text"
                      label="Zip"
                    />
                    <CustomFormField
                      name="country"
                      id="country"
                      placeholder="Country"
                      type="text"
                      label="Country"
                    />
                    <CustomFormField
                      name="mobile"
                      id="mobile"
                      placeholder="Mobile Number"
                      type="number"
                      label="Mobile Number"
                    />

                    <Button
                      isDisabled={
                        !formikProps.isValid || isPendingUpdateUserAddress
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

export default UserUpdateAddresModal;
