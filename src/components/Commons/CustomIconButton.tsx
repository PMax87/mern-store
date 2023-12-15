import React from "react";
import { Button, PopoverTrigger } from "@chakra-ui/react";

interface CutomIconButtonProps {
  children: JSX.Element;
  popoverTrigger: boolean;
  onClick: () => void;
}

const CustomIconButton: React.FC<CutomIconButtonProps> = (props) => {
  if (props.popoverTrigger) {
    return (
      <PopoverTrigger>
        <Button
          padding={0}
          bgColor="transparent"
          _hover={{ bgColor: "transparent" }}
          onClick={props.onClick}
        >
          {props.children}
        </Button>
      </PopoverTrigger>
    );
  }

  return (
    <Button
      padding={0}
      bgColor="transparent"
      _hover={{ bgColor: "transparent" }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default CustomIconButton;
