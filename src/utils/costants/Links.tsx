import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { FaCartShopping } from "react-icons/fa6";
import {
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  Portal,
  Button,
  PopoverFooter,
  Show,
  useDisclosure,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
} from "@chakra-ui/react";
import { FaUserPlus } from "react-icons/fa";
import { CustomButton } from "../../components/Commons";
import { AuthButtonsModel } from "../../models/AuthButtonsModel";
import { NavigationLinksModel } from "../../models/NavigationLinksModel";

const authButtons: AuthButtonsModel = [
  {
    url: "/login",
    label: "Login",
    bgColor: "black",
    textColor: "white",
  },
  {
    url: "/register",
    label: "Register",
    bgColor: "white",
    textColor: "black",
    borderColor: "black",
  },
];

const navigationLinks: NavigationLinksModel = [
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

export const UserMenu = () => {
  const { onToggle, isOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="flex lg:gap-5 gap-2 text-white">
        <Popover closeOnBlur={true}>
          {({ onClose }) => (
            <>
              <PopoverTrigger>
                <Button
                  bgColor={"transparent"}
                  _hover={{ bgColor: "transparent" }}
                  onClick={onToggle}
                >
                  <FaUserPlus className="md:text-3xl text-xl fill-white" />
                </Button>
              </PopoverTrigger>
              <Show above="lg">
                <Portal>
                  <PopoverContent className="p-5">
                    <PopoverArrow />
                    <PopoverBody className="flex flex-col gap-4 items-center">
                      {authButtons.map((authButton, index) => {
                        return (
                          <Link
                            to={authButton.url}
                            onClick={onClose}
                            className="w-full"
                            key={index}
                          >
                            <CustomButton
                              label={authButton.label}
                              bgColor={authButton.bgColor}
                              textColor={authButton.textColor}
                              hoverBgColor={authButton.bgColor}
                              borderColor={authButton.borderColor}
                            />
                          </Link>
                        );
                      })}
                    </PopoverBody>
                    <PopoverFooter>
                      <VStack spacing={4} align="left">
                        {navigationLinks.map((link, index) => {
                          return (
                            <Link to={link.url} key={index}>
                              <Stack
                                direction="row"
                                alignItems="center"
                                gap={4}
                              >
                                {link.icon}
                                <p className="text-xl font-medium">
                                  {link.label}
                                </p>
                              </Stack>
                            </Link>
                          );
                        })}
                      </VStack>
                    </PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Show>
            </>
          )}
        </Popover>
        <Link to="/cart" className="flex items-center gap-2">
          <h4 className="md:text-xl text-lg">Cart</h4>
          <IoCartSharp className="md:text-3xl text-xl fill-white lg:block hidden" />
          <p className="md:text-xl text-lg">(1)</p>
        </Link>
        <Show below="lg">
          <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="xs">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <VStack
                direction="column"
                spacing={4}
                alignItems="left"
                marginTop="60px"
                paddingX={"20px"}
              >
                {authButtons.map((authButton, index) => {
                  return (
                    <Link
                      to={authButton.url}
                      onClick={onClose}
                      className="w-full"
                      key={index}
                    >
                      <CustomButton
                        label={authButton.label}
                        bgColor={authButton.bgColor}
                        textColor={authButton.textColor}
                        hoverBgColor={authButton.bgColor}
                        borderColor={authButton.borderColor}
                      />
                    </Link>
                  );
                })}
                {navigationLinks.map((link, index) => {
                  return (
                    <Link to={link.url} key={index}>
                      <Stack direction="row" alignItems="center" gap={4}>
                        {link.icon}
                        <p className="text-xl font-medium">{link.label}</p>
                      </Stack>
                    </Link>
                  );
                })}
              </VStack>
            </DrawerContent>
          </Drawer>
        </Show>
      </div>
    </>
  );
};
