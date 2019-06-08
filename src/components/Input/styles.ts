import styled from "styled-components";
import { Field } from "formik";

export const InputWrapper = styled.div`
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
`;
