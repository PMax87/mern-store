import React from "react";
import { Button } from "@chakra-ui/react";

interface CustomButtonProps {
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <Button
      type="button"
      width={{ md: "230px", base: "100%" }}
      size={"lg"}
      color={"white"}
      _hover={{
        bg: "white",
        border: "1px solid black",
        textColor: "black",
      }}
      bg={"black"}
    >
      {props.label}
    </Button>
  );
};

export default CustomButton;
