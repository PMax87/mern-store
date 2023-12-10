import React from "react";
import { FormikProps } from "formik";
import { LoginFormModel } from "../../models/LoginFormModel";
import { Input, ResponsiveValue, SystemStyleObject } from "@chakra-ui/react";

interface InputFieldProps {
  _hover: SystemStyleObject;
  borderColor: ResponsiveValue<string>;
  borderWith: ResponsiveValue<number>;
  formik: FormikProps<LoginFormModel>;
  id: string;
  name: string;
  placeholder: string;
  size: ResponsiveValue<string>;
  type: React.HTMLInputTypeAttribute;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <Input
      _hover={props._hover}
      borderColor={props.borderColor}
      borderWidth={props.borderWith}
      id={props.id}
      name={props.name}
      onChange={props.formik.handleChange}
      placeholder={props.placeholder}
      size={props.size}
      type={props.type}
    />
  );
};

export default InputField;
