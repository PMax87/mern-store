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

export const ResponsiveMenuSwitch = () => {
  const { onToggle, isOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleClick = (url: string, closeModal: () => void) => {
    closeModal();
    navigate(url);
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
                  <PopoverBody className="flex flex-col gap-4 items-center">
                    {authButtons.map((authButton, index) => {
                      return (
                        <CustomButton
                          key={index}
                          label={authButton.label}
                          bgColor={authButton.bgColor}
                          textColor={authButton.textColor}
                          hoverBgColor={authButton.bgColor}
                          borderColor={authButton.borderColor}
                          onClick={() => handleClick(authButton.url, onClose)}
                        />
                      );
                    })}
                  </PopoverBody>
                  <PopoverFooter>
                    <VStack spacing={4} align="left">
                      {navigationLinks.map((link, index) => {
                        return (
                          <Link to={link.url} key={index}>
                            <Stack direction="row" alignItems="center" gap={4}>
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
              {authButtons.map((authButton, index) => {
                return (
                  <CustomButton
                    key={index}
                    label={authButton.label}
                    bgColor={authButton.bgColor}
                    textColor={authButton.textColor}
                    hoverBgColor={authButton.bgColor}
                    borderColor={authButton.borderColor}
                    onClick={() => handleClick(authButton.url, onClose)}
                  />
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
    </>
  );
};
