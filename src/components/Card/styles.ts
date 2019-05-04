import styled from "styled-components";

interface ContainerProps {
  isReversed: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  border-bottom: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  &:not(:first-child) {
    margin-top: 20px;
  }

  /*Tablet  */
  @media (min-width: 768px) {
    flex-direction: ${({ isReversed }) => isReversed ? "row-reverse" : "row"};
    flex-direction: row;
    justify-content: left;
    padding: 20px 0;

    &:not(:first-child) {
      margin-top: 0;
    }
  }

  /*Desktop  */
  @media (min-width: 1200px) {
    border-bottom: none;
    border-right: 2px solid white;
    flex-direction: column;
    height: 400px;
    padding: 20px;
    width: 25%;
  }
`;

export const Description = styled.p`
  padding: 0 30px;
  text-align: justify;
`;

export const Image = styled.img`
  height: auto;
  width: 65%;
  z-index: 0;

  /*Tablet  */
  @media (min-width: 768px) {
    width: 50%;
  }
`;
