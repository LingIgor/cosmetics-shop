import styled from "@emotion/styled";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCardLink = styled(Link)`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  padding: 20px;
  box-shadow: 2px 1px 20px 1px pink;
  /* box-shadow: 8px 1px 50px 1px ${(props) => props.randomColor || "white"}; */
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }

  &:hover .buy-button {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardConteiner = styled(CardContent)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled(CardMedia)`
  max-width: 200px;
`;

export const ProductTitle = styled(Typography)`
  width: 100%;
  /* height: 40px; */
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
    width: 100%;
    background-color: black;
    color: white;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.3s, transform 0.3s;

    &:hover {
      background-color: grey;
    }
  }
`;
