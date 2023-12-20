import React from "react";
import { Button } from "@chakra-ui/react";

export interface CustomButtonProps {
  bgColor: string;
  borderColor?: string;
  hoverBgColor: string;
  hoverBorderColor?: string;
  hoverTextColor?: string;
  label: string;
  onClick: () => void;
  textColor: string;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <Button
      type="button"
      width={"100%"}
      size={"lg"}
      border={`1px solid ${props.borderColor}`}
      color={props.textColor}
      _hover={{
        bgColor: props.hoverBgColor,
        color: props.hoverTextColor,
        border: `1px solid ${props.hoverBorderColor}`,
      }}
      bg={props.bgColor}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

export default CustomButton;
