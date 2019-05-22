import styled from "styled-components";

import Icon from "../Icon";

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.pink.default};
  border-radius: 40px;
  display: flex;
  height: 25px;
  justify-content: space-around;
  padding-right: 5px;
  position: relative;
  width: 185px;

  svg {
    cursor: pointer;
  }
`;

export const StyledIcon = styled(Icon)`
  fill: pink;
  position: absolute;
  right: 35px;
`;

export const StyledInput = styled.input`
  background-color:${({ theme }) => theme.palette.white.default};
  border-radius: 40px;
  font-size: 0.6rem;
  height: 75%;
  padding: 0 10px;
  width: 75%;
`;
