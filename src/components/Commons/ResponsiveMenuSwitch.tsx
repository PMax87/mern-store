import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  Portal,
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
import { CustomButton, CustomIconButton } from ".";
import { authButtons } from "../../utils/costants/Links";
import { navigationLinks } from "../../utils/costants/Links";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setUser, setUserAddress } from "../../redux/AuthReducer";

export const ResponsiveMenuSwitch = () => {
  const { onToggle, isOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.userAuth.user);

  const handleClick = (url: string, closeModal: () => void) => {
    closeModal();
    navigate(url);
  };

  const handleLogoutUser = (closeModal: () => void) => {
    Promise.all([
      dispatch(setUser(undefined)),
      dispatch(setUserAddress(undefined)),
      localStorage.removeItem("token"),
    ]).then(() => {
      navigate("/");
      closeModal();
    });
  };

  return (
    <>
      <Popover closeOnBlur={true}>
        {({ onClose }) => (
          <>
            <CustomIconButton onClick={onToggle} popoverTrigger={true}>
              <FaUserPlus className="md:text-3xl text-xl fill-white" />
            </CustomIconButton>
            <Show above="lg">
              <Portal>
                <PopoverContent className="p-5">
                  <PopoverArrow />
                  <PopoverBody className="flex flex-col gap-4">
                    {!user?.email ? (
                      authButtons.map((authButton, index) => {
                        return (
                          <CustomButton
                            bgColor={authButton.bgColor}
                            borderColor={authButton.borderColor}
                            hoverBgColor={authButton.hoverBgColor || ""}
                            hoverBorderColor={authButton.hoverBorderColor}
                            hoverTextColor={authButton.hoverTextColor || ""}
                            key={index}
                            label={authButton.label}
                            onClick={() => handleClick(authButton.url, onClose)}
                            textColor={authButton.textColor}
                          />
                        );
                      })
                    ) : (
                      <>
                        <p className="text-xl font-medium">
                          Hello {user.firstName}!
                        </p>
                        <CustomButton
                          bgColor="black"
                          hoverBgColor="white"
                          hoverBorderColor="black"
                          hoverTextColor="black"
                          label="Logout"
                          onClick={() => handleLogoutUser(onClose)}
                          textColor="white"
                        />
                      </>
                    )}
                  </PopoverBody>
                  <PopoverFooter>
                    <VStack spacing={4} align="left">
                      {user?.email &&
                        navigationLinks.map((link, index) => {
                          return (
                            <Link to={link.url} key={index} onClick={onClose}>
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
              {!user?.email ? (
                authButtons.map((authButton, index) => {
                  return (
                    <CustomButton
                      bgColor={authButton.bgColor}
                      borderColor={authButton.borderColor}
                      hoverBgColor={authButton.hoverBgColor || ""}
                      hoverBorderColor={authButton.hoverBorderColor}
                      hoverTextColor={authButton.hoverTextColor || ""}
                      key={index}
                      label={authButton.label}
                      onClick={() => handleClick(authButton.url, onClose)}
                      textColor={authButton.textColor}
                    />
                  );
                })
              ) : (
                <>
                  <p className="text-xl font-medium">Hello {user.firstName}!</p>
                  <CustomButton
                    bgColor="black"
                    hoverBgColor="white"
                    hoverBorderColor="black"
                    hoverTextColor="black"
                    label="Logout"
                    onClick={() => handleLogoutUser(onClose)}
                    textColor="white"
                  />
                </>
              )}
              {user?.email &&
                navigationLinks.map((link, index) => {
                  return (
                    <Link to={link.url} key={index} onClick={onClose}>
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
    </>
  );
};
