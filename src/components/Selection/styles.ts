import styled from "styled-components";

interface FrameProps {
  isEditable: boolean;
}

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 80px;
  height: 20px;
  button {
    width: 40px;
    margin: 0;
    padding: 0;
  }
`;

export const Frame = styled.div<FrameProps>`
  box-sizing: border-box;
  border: 2px solid purple;
  opacity: .5;
  position: absolute;
  left: ${({ isEditable }) => isEditable ? "33%" : "0"};
  width: 50%;
  height: 100%;
  pointer-events: none;
  transition: left 0.5s;
`;
