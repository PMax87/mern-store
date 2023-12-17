import { IoIosSettings } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { NavigationLinksModel } from "../../models/NavigationLinksModel";

export const authButtons = [
  {
    bgColor: "black",
    hoverBgColor: "white",
    label: "Login",
    textColor: "white",
    hoverTextColor: "black",
    hoverBorderColor: "black",
    url: "/login",
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
    url: "/settings",
    label: "Settings",
    icon: <IoIosSettings className="text-2xl block" />,
  },
  {
    url: "/order",
    label: "Orders",
    icon: <FaCartShopping className="text-2xl block" />,
  },
];
