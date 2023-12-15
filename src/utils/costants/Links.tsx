import { IoIosSettings } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { FaCartShopping } from "react-icons/fa6";
import { AuthButtonsModel } from "../../models/AuthButtonsModel";
import { NavigationLinksModel } from "../../models/NavigationLinksModel";

export const authButtons: AuthButtonsModel = [
  {
    url: "/login",
    label: "Login",
    bgColor: "black",
    textColor: "white",
    borderColor: "black",
  },
  {
    url: "/register",
    label: "Register",
    bgColor: "white",
    textColor: "black",
    borderColor: "black",
  },
];

export const navigationLinks: NavigationLinksModel = [
  {
    url: "/setting",
    label: "Settings",
    icon: <IoIosSettings className="text-2xl block" />,
  },
  {
    url: "/order",
    label: "Orders",
    icon: <FaCartShopping className="text-2xl block" />,
  },
  {
    url: "/",
    label: "Logout",
    icon: <SlLogout className="text-2xl block" />,
  },
];
