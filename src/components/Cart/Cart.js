import { Backdrop, Container } from '@mui/material';
// import { Field, Form, Formik } from 'formik';
import React from 'react';
// import { Link } from 'react-router-dom';

export const Cart = () => {
  return (
    <Backdrop
      open={true}
      style={{ zIndex: '1', background: 'rgba(255, 255, 255, 0.4)' }}
    >
      <Container component="main" style={{ width: '500px' }}></Container>
    </Backdrop>
  );
};
