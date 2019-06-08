import styled from "styled-components";

interface MessageProps {
  error: boolean;
}

export const Message = styled.span<MessageProps>`
  color: red;
  display: inline-block;
  font-size: 0.5rem;
  padding: 5px;
  visibility: ${({ error }) => error ? "visible" : "hidden"};
`;
