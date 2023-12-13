import React from "react";
import { FormControl, Input } from "@chakra-ui/react";
import {
  FormLabel,
  NumberInput,
  NumberInputField,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useField, useFormikContext } from "formik";

interface CustomFormFieldProps {
  id: string;
  name: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  label: string;
}

const CustomFormField: React.FC<CustomFormFieldProps> = (props) => {
  const [field, meta] = useField(props);
  const { handleBlur } = useFormikContext();

  if (props.type === "number") {
    return (
      <FormControl
        className="mt-4"
        isInvalid={meta.touched && Boolean(meta.error)}
        id={props.label}
      >
        <FormLabel>{props.label}</FormLabel>
        <NumberInput size={"lg"} _hover={{ borderColor: "black" }}>
          <NumberInputField
            _hover={{ borderColor: "black" }}
            borderColor="gray.600"
            borderWidth={2}
            id={props.id}
            name={props.name}
            onBlur={handleBlur}
            onChange={field.onChange}
            placeholder={props.placeholder}
            value={field.value}
          />
          <FormErrorMessage fontSize={"md"} className="font-medium">
            {meta.error}
          </FormErrorMessage>
        </NumberInput>
      </FormControl>
    );
  }

  return (
    <FormControl
      className="mt-4 capitalize"
      isInvalid={meta.touched && Boolean(meta.error)}
    >
      <FormLabel className="font-sans font-normal">{props.label}</FormLabel>
      <Input
        _hover={{ borderColor: "black" }}
        borderColor="gray.600"
        borderWidth={2}
        id={props.id}
        name={props.name}
        onBlur={handleBlur}
        onChange={field.onChange}
        placeholder={props.placeholder}
        size="lg"
        type={props.type}
        value={field.value}
      />
      <FormErrorMessage fontSize={"md"} className="font-medium">
        {meta.error}
      </FormErrorMessage>
    </FormControl>
  );
};

export default CustomFormField;
