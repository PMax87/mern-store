import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import UserDetailModal from "../components/Commons/UserDetailModal";

const SettingsPage = () => {
  const user = useSelector((state: RootState) => state.userAuth.user);
  const { isOpen, onClose, onOpen } = useDisclosure();

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
                <div className="w-32">
                  <Button
                    variant="outline"
                    colorScheme="black"
                    onClick={onOpen}
                  >
                    Edit user information
                  </Button>
                </div>
              </div>
              <div className="p-5 border border-gray-400 flex flex-col gap-3 rounded-lg">
                <h4 className="font-semibold">Shipping address</h4>
                <div className="w-32">
                  <Button variant="outline" colorScheme="black">
                    Edit address
                  </Button>
                </div>
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
    ""
  );

  return pageContent;
};

export default SettingsPage;
