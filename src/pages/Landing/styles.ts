import styled from "styled-components";

const mobileHeight = "40vh";

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

export const BackgroundImageWrapper = styled.div`
  height: 100%;
  z-index: 0;
`;

export const Description = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  padding: 30px;

  /*Desktop  */
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const Hero = styled.div`
  height: ${mobileHeight};
  position: relative;

  /*Desktop  */
  @media (min-width: 1200px) {
    height: calc(100vh - 40px);
  }
`;

export const Text = styled.p`
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: bold;
  left: 10vw;
  position: absolute;
  top: 10vh;
  z-index: 3;

  /*Tablet  */
  @media (min-width: 768px) {
    font-size: 3rem;
  }

  /*Desktop  */
  @media (min-width: 1200px) {
    top: 30vh;
  }
`;
