import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ScLink = styled(NavLink)`
  align-items: center;
  display: flex;
  font-size: 1.1rem;
  font-style: italic;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100px;

  span:first-child {
    color: #E9506A;
  }

  span:last-child {
    color: #3A3648;
    left: -3px;
    position: relative;
    top: 6px;
  }
`;



