import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { Spinner, useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import UserDetailModal from "../components/Commons/UserDetailModal";

interface Propstype {
  isLoadingUserInfo: boolean;
}

const SettingsPage: React.FC<Propstype> = ({ isLoadingUserInfo }) => {
  const user = useSelector((state: RootState) => state.userAuth.user);
  const userAddress = useSelector(
    (state: RootState) => state.userAuth.userAddress?.address
  );

  const { isOpen, onClose, onOpen } = useDisclosure();

  if (isLoadingUserInfo) {
    return (
      <div className="container mt-5 flex justify-center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="black.500"
          size="xl"
        />
      </div>
    );
  }

  const pageContent = user ? (
    <>
      <div className="container mt-5">
        <h3 className="text-3xl font-bold"> Account settings</h3>
        <div className="flex mt-4 gap-4">
          <div className="flex flex-col w-1/5 gap-5">
            <p>Account details</p>
          </div>
          <div className="w-4/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="p-5 border border-gray-400 flex flex-col gap-3 rounded-lg">
                <h4 className="font-semibold">User info</h4>
                <p>
                  {user.firstName} {user.lastName}
                </p>
                <p>{user.number}</p>
                <p>{user.email}</p>
                <Button variant="outline" colorScheme="black" onClick={onOpen}>
                  Edit user information
                </Button>
              </div>
              <div className="p-5 border border-gray-400 flex flex-col gap-3 rounded-lg">
                <h4 className="font-semibold">Shipping address</h4>
                {userAddress?.city ? (
                  <>
                    <p>{userAddress.street}</p>
                    <p>{userAddress.city}</p>
                    <p>{userAddress.zip}</p>
                    <p>{userAddress.state}</p>
                    <p>{userAddress.country}</p>
                  </>
                ) : (
                  <p>No address found</p>
                )}

                <Button variant="outline" colorScheme="black">
                  {userAddress?.city ? "Edit address" : "Insert Address"}
                </Button>
              </div>
              <div className="p-5 border border-gray-400 flex flex-col gap-3 rounded-lg">
                <h4 className="font-semibold">Change password</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserDetailModal user={user} isOpen={isOpen} onClose={onClose} />
    </>
  ) : (
    <div className="container mt-5">
      <h4 className="text-2xl">Something goes wrong</h4>
    </div>
  );

  return pageContent;
};

export default SettingsPage;
