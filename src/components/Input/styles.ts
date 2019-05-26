import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom:  0.5px solid ${({ theme }) => theme.palette.peach.default};
  outline: none;
`;
