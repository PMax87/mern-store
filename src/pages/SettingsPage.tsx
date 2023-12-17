import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { Button } from "@chakra-ui/react";
import { CustomButton } from "../components/Commons";

const SettingsPage = () => {
  const user = useSelector((state: RootState) => state.userAuth.user);

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
            <div className="p-5 border border-gray-400 flex flex-col gap-5  rounded-lg">
              <h4 className="font-semibold">User info</h4>
              <p>
                {user?.firstName} {user?.lastName}
              </p>
              <p>{user?.number}</p>
              <p>{user?.email}</p>
              <div className="w-32">
                <CustomButton
                  label="Edit user info"
                  bgColor="black"
                  textColor="white"
                />
              </div>
            </div>
            <div className="p-2 border border-black">
              <h4 className="font-semibold">Shipping address</h4>
              <div className="w-auto">
                <CustomButton
                  label="Edit shipping address"
                  bgColor="black"
                  textColor="white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
