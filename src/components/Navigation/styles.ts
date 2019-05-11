import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  align-items: center;
  background-color: #F6F5F6;
  display: flex;
  font-size: 0.9rem;
  height: 40px;
  justify-content: space-between;
  padding: 0 40px;
`;

export const Links = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 300px;
`;

// @todo add props validation to the main component
export const ScLink = styled(NavLink)`
  color: inherit;
  cursor: pointer;
  padding: 0 20px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.palette.pink.dark50};
  }
`;
