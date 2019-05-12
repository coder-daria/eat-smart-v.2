import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 90px);
  justify-content: center;
  padding-top: 35px;
  width: 100vw;
  background-color: ${({ theme }) => theme.palette.peach.light50};
`;

export const FoodContainer = styled.div`
  height: calc(100vh - 140px);
  width: 50vw;
`;

export const Options = styled.div`
  display: flex;
  padding-bottom: 35px;
  /* @todo remove after adding Selection and Search */
  div {
    width: 50%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ImgWrapper = styled.div`
  height: auto;
  width: 50%;
`;

export const FormWrapper = styled.div`
  padding-left: 25px;
`;
