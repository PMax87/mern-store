import React from "react";
import { Button } from "@chakra-ui/react";

interface CustomButtonProps {
  label: string;
  bgColor: string;
  textColor: string;
  borderColor?: string;
  hoverBgColor: string;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <Button
      type="button"
      width="100%"
      size={"lg"}
      border={`1px solid ${props.borderColor}`}
      color={`${props.textColor}`}
      _hover={{ bgColor: `${props.bgColor}` }}
      bg={props.bgColor}
    >
      {props.label}
    </Button>
  );
};

export default CustomButton;
