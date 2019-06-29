import styled from "styled-components";
import { Field } from "formik";

interface InputWrapperProps {
  isDisabled: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  cursor: ${({ isDisabled }) => isDisabled && "not-allowed"};
  display: flex;
  flex-direction: column;
  height: 45px;
`;

export const StyledInput = styled(Field)`
  border: none;
  border-bottom:  0.5px solid ${({ error, theme }) => error ? "red" : theme.palette.peach.default};
  font-size: .65rem;
  outline: none;
  padding: 5px;
  pointer-events: ${({ isDisabled }) => isDisabled && "none"};
`;
