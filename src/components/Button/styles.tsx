import styled from "styled-components";

import { SVG } from "../Icon/styles";

interface ButtonProps {
  iconPosition?: string;
}

export const ButtonContainer = styled.button <ButtonProps>`
  align-items: center;
  background-color: ${({ color, theme }) => theme.palette[color].default};
  border-radius: 2px;
  border-style: solid;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: ${({ iconPosition }) => iconPosition === "left" && "row-reverse"};
  font-size: .8rem;
  justify-content: space-around;
  outline: none;
  padding: .3rem;
  text-decoration: none;
  user-select: none;

  ${SVG} {
    margin-left: 5px;
  }

  &:hover {
    background-color: ${({ color, theme }) => theme.palette[color].dark25};
  }

  &:active {
    background-color: ${({ color, theme }) => theme.palette[color].dark50};
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.palette.white.default};;
  display: inline-block;
`;
