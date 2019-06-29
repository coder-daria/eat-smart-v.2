import styled from "styled-components";

interface ContainerProps {
  color?: "info" | "warning" | "error" | "success";
  shade?: "dark25" | "default" | "light25";
  // @todo Create type for theme
  theme: any;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: ${({ color, shade, theme }) => theme.palette[color][shade]};
  bottom: 0;
  box-shadow: 
    0px 3px 5px -1px rgba(0,0,0,0.2), 
    0px 6px 10px 0px rgba(0,0,0,0.14), 
    0px 1px 18px 0px rgba(0,0,0,0.12);
  border-radius: 3px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  letter-spacing: 0.01rem;
  line-height: 1.5;
  margin: 6px;
  min-width: 300px;
  padding: 6px 16px;
  position: fixed;
`;

export const Text = styled.span`
  display: inline-block;
  font-size: 1.2rem;
`;
