import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;

  input {
    border: none;
    border-bottom:  0.5px solid ${({ theme }) => theme.palette.peach.default};
     outline: none;
  }
`;
