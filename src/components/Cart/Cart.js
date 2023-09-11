import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import img from '../../images/product.jpg';
import cardsData from '../../products/products.json';
import {
  Container,
  PaperCart,
  Title,
  ContainerMain,
  ContainerItems,
  ContainerItem,
  ImgItem,
  TextBox,
  SpanBox,
  OrderBox,
  OrderText,
} from './Cart.styled';
import { Backdrop } from '@mui/material';

export const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Backdrop
      open={true}
      style={{ zIndex: '1', background: 'rgba(0, 0, 0, 0.6)' }}
      // onClick={closeFormBackdrop}
    >
    <Container>
      <PaperCart elevation={3}>
        <Title>
          <Typography variant="h5">Корзина</Typography>
        </Title>
        <ContainerMain>
          <ContainerItems>
            {cardsData.map(({ title, price, category }) => (
              <ContainerItem>
                <ImgItem src={img} alt="Фотография" />
                <TextBox>
                  <Typography variant="subtitle1">{title}</Typography>
                  <Typography variant="subtitle2">{category} </Typography>
                  <Typography variant="body2">
                    Описание, ну такое себе оно
                  </Typography>
                </TextBox>
                <SpanBox>
                  <IconButton onClick={handleDecrement}>
                    <span>-</span>
                  </IconButton>
                  <Typography variant="body1">{quantity}</Typography>
                  <IconButton onClick={handleIncrement}>
                    <span>+</span>
                  </IconButton>
                </SpanBox>
                <Typography variant="body1">Цена: {price}</Typography>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </ContainerItem>
            ))}
          </ContainerItems>
          <OrderBox>
            <OrderText>
              <Typography variant="h6">Сума замовления</Typography>
            </OrderText>
            <OrderText>
              <Typography variant="body1">Общая сумма</Typography>
            </OrderText>
            <OrderText>
              <Button variant="contained" color="primary">
                Купить
              </Button>
            </OrderText>
          </OrderBox>
        </ContainerMain>
      </PaperCart>
    </Container>
    </Backdrop>
  );
};
