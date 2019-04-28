import styled from "styled-components";

export const BackgroundLayer = styled.div`
  background-color: black;
  height: 100%;
  left: 0;
  opacity: 0.3;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const Introduction = styled.div`
  height: calc(100vh - 40px);
  position: relative;
`;

export const Content = styled.div`
  background-color: lightpink;
`;

export const Description = styled.div`
  display: flex;
  padding: 30px 20px;
`;

export const BackgroundImageWrapper = styled.div`
  height: calc(100vh - 40px);
  z-index: 0;
`;

export const Text = styled.p`
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  font-weight: bold;
  left: 10vw;
  position: absolute;
  top: 30vh;
  z-index: 3;
`;
