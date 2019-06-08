import React from "react";

import ErrorMessage from "../ErrorMessage";

import { InputWrapper, StyledInput } from "./styles";

interface InputProps {
  //@todo Add proper types
  error: boolean | any;
  errorMessage: string | any;
  name: string;
  onBlur: (e:any) => void;
  onChange: (e: any) => void;
  placeholder?: string | number;
  type: string | number;
  value: string;
}

const Input: React.FC<InputProps> = ({
  error,
  errorMessage,
  name,
  onBlur,
  onChange,
  placeholder,
  type,
  value,
}) => (
  <InputWrapper>
    <StyledInput
      as="input"
      autoComplete="off"
      error={error}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
    <ErrorMessage error={error}>
      {errorMessage}
    </ErrorMessage>
  </InputWrapper>
);

export default Input;
