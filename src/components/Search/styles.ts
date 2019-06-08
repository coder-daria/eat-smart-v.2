import styled from "styled-components";

import Icon from "../Icon";

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.pink.default};
  border-radius: 40px;
  display: flex;
  height: 25px;
  padding: 0 4px;
  position: relative;
  width: 150px;

  svg {
    cursor: pointer;
  }
`;

export const SearchIcon = styled(Icon)`
  fill: ${({ theme }) => theme.palette.white.default};
  opacity: 0.8;
  position: absolute;
  right: 13px;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:active {
    opacity: 1;
  }
`;

export const CancelIcon = styled(Icon)`
  fill: pink;
  position: absolute;
  right: 42px;

  &:hover {
    fill: ${({ theme }) => theme.palette.pink.default};
  }

  &:active {
    fill: ${({ theme }) => theme.palette.pink.dark25};
  }
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.palette.white.default};
  border-radius: 40px;
  font-size: 0.6rem;
  height: 75%;
  padding: 0 10px;
  width: 65%;
`;
