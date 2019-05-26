import React from "react";

import ErrorMessage from "../ErrorMessage";

import { InputWrapper, StyledInput } from "./styles";

interface InputProps {
  error: boolean;
  name: string;
  onBlur: (e:any) => void;
  onChange: (e: any) => void;
  type: string;
  value: string;
}

const Input: React.FC<InputProps> = ({
  error,
  name,
  onBlur,
  onChange,
  type,
  value,
}) => (
  <InputWrapper>
    <StyledInput
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      type={type}
      value={value}
    />
    <ErrorMessage error={error}>
      This field is required.
    </ErrorMessage>
  </InputWrapper>
);

export default Input;
