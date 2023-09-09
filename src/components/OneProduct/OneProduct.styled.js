import styled from "@emotion/styled";
import { Button, CardContent, CardMedia, Typography } from "@mui/material";

export const ProductCardLink = styled.div`
  && {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    /* border: 1px solid #e0e0e0; */
    /* padding: 20px; */
    /* box-shadow: 2px 1px 20px 1px pink; */
    /* box-shadow: 8px 1px 50px 1px ${(props) =>
      props.randomColor || "white"}; */
    box-shadow: none;
    transition: transform 0.3s;
  }
`;

export const CardConteiner = styled(CardContent)`
  && {
    position: relative;
    /* width: 100%; */
    display: flex;
    flex-direction: column;
  }
`;

export const ProductImage = styled(CardMedia)`
  width: 300px;
  max-width: 300px;
`;

export const ProductTitle = styled(Typography)`
  /* width: 100%;  */
  font-size: 14px;
  color: black;
  margin-bottom: 10px;
`;

export const ProductCategory = styled(Typography)`
  margin-bottom: 25px;
  font-size: 14px;
  color: grey;
`;

export const ProductRating = styled(Typography)`
  margin-bottom: 10px;
  font-size: 14px;
  color: grey;
`;

export const ProductPrice = styled.div`
  display: flex;
  gap: 40px;
  font-size: 16px;
  color: black;
`;

export const BtnBuy = styled(Button)`
  && {
    width: 330px;
    height: 50px;
    background-color: black;
    color: white;
    opacity: 1;

    &:hover {
      background-color: grey;
    }
  }
`;
