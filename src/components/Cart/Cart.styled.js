import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const PaperCart = styled(Paper)`
  width: 90vw;
  height: 80vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  border-bottom: 1px solid black;
  height: 70px;
`;

export const ContainerMain = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

export const ContainerItems = styled.div`
  overflow: auto;
  height: 50%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  flex-direction: column;
`;

export const ContainerItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgItem = styled.img`
  width: 100px;
  height: 170px;
  margin-right: 20px;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 70px;
  width: 350px;
`;

export const SpanBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
`;


export const OrderBox = styled.div`
 width: 450px;
              height: 200px;
              background-color: #f0f0f0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;

`

export const OrderText = styled.div`
text-align: center; margin-top: 20px;

`
