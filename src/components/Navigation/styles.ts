import styled from "styled-components";

interface LinkProps {
  active: boolean;
}

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
export const Link = styled.a<LinkProps>`
  color: ${({ active }) => active ? "#FF7883"  : "inherit" };
  cursor: pointer;
  padding: 0 20px;
  text-decoration: none;

  &:hover {
    color: #E87C6D;
  }
`;
