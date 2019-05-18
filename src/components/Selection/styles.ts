import styled from "styled-components";

interface FrameProps {
  isEditable: boolean;
}

const borderRadius = "5px";

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.pink.light50};
  border-radius: ${borderRadius};
  color: ${({ theme }) => theme.palette.white.default};
  display: flex;
  font-size: 1.2rem;
  height: 30px;
  position: relative;
  width: 200px;
`;

export const Frame = styled.div<FrameProps>`
  background-color: ${({ theme }) => theme.palette.pink.dark50};
  border-radius: ${borderRadius};
  box-sizing: border-box;
  height: 100%;
  left: ${({ isEditable }) => isEditable ? "50%" : "0"};
  opacity: 0.5;
  pointer-events: none;
  position: absolute;
  transition: left 0.5s;
  width: 50%;
`;

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  height: 100%;
  position: relative;
  text-align: center;
  width: 50%;
`;

export const Input = styled.input`
  height: 100%;
  margin: 0;
  visibility: hidden;
  width: 100%;
`;

export const Span = styled.span`
  align-self: center;
  display: inline-block;
  left: 0;
  position: absolute;
  width: 100%;
`;
